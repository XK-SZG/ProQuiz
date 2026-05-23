var MSSPEncoder = {
            encodeOption(ans) {
                if (ans === undefined || ans === null || ans === '') return 7;
                if (typeof ans === 'number') return ans & 0x7; 
                if (Array.isArray(ans)) return ans.length > 0 ? (ans[0] & 0x7) : 7;
                if (typeof ans === 'string') return 7; // 简答题统一为 7
                return 7;
            },
            
            async pack(data, teacherPassword) {
                console.group("--- MSSP 打包调试 ---");
                const { name, score, duration, startTime, answers, mistakes, mode, selectedSets, questionIds } = data;
                const modeIdx = MSSP_MODE_INDEX[mode] || 0; // 获取索引
                const nonce = Math.floor(Math.random() * 0xFFFF);
                const nonceHex = nonce.toString(16).padStart(4, '0');

                const fullHash = await MSSPCrypto.generateFullHash(answers);
                const timestamp = Math.floor((startTime - MSSP_CONFIG.BASE_DATE) / 60000);

                const payloadBit = new MSSPBitBuffer();
                payloadBit.write(timestamp & 0xFFFFF, 20);
                payloadBit.write(Math.min(data.duration, 8191), 13); // 最大 8191 秒
                payloadBit.write(Math.min(score, 127), 7);
                payloadBit.write(modeIdx & 0xF, 4);
                payloadBit.write(fullHash >>> 0, 32);

                const nameBytes = new TextEncoder().encode(name).slice(0, 15);
                payloadBit.write(nameBytes.length, 4);
                nameBytes.forEach(b => payloadBit.write(b, 8));

                // 写入选择的题集信息
                const sets = selectedSets || [];
                payloadBit.write(Math.min(sets.length, 31), 5); // 最多记录 31 个题集
                sets.slice(0, 31).forEach(idx => {
                    payloadBit.write(idx & 0x3F, 6); // 假设题集索引不超过 63
                });

                // 仅过滤出属于当前 session 的错题进行打包
                const sessionMistakes = mistakes.filter(m => m.sessionIdx !== undefined);
                const errorCount = Math.min(sessionMistakes.length, 1300);
                payloadBit.write(errorCount, 11);
                
                console.log(`准备打包错题数量: ${errorCount}`);

                sessionMistakes.slice(0, errorCount).forEach((m, i) => {
                    const userAns = answers[m.sessionIdx];
                    const optCode = this.encodeOption(userAns);
                    console.log(`错题[${i}] ID:${m.id} | SessionIdx:${m.sessionIdx} | 原始值:${JSON.stringify(userAns)} | 编码Code:${optCode}`);
                    
                    payloadBit.write(m.id & 0x3FF, 10);
                    payloadBit.write(optCode, 3);
                });

                // V2: 写入实际参与答题的正确题目 ID 列表 (仅在随机抽选模式下，错题 ID 已在上方写入)
                const isDrawMode = mode === 'random-2way-draw' || mode === 'random-1way-draw';
                let qIdCount = 0;
                if (isDrawMode) {
                    const mistakeIds = new Set(sessionMistakes.map(m => m.id));
                    const correctIds = (questionIds || []).filter(id => !mistakeIds.has(id));
                    qIdCount = Math.min(correctIds.length, 2000);
                    payloadBit.write(qIdCount, 11); // 最多 2047 题
                    correctIds.slice(0, qIdCount).forEach(id => {
                        payloadBit.write(id & 0x3FF, 10);
                    });
                } else {
                    payloadBit.write(0, 11); // 非抽选模式，写入 0 表示没有携带题目 ID 列表
                }
                console.log(`打包正确题目 ID 数量: ${qIdCount}`);

                const payloadBytes = payloadBit.finish();
                let checksum = 0;
                payloadBytes.forEach(b => checksum ^= b);
                const keyStream = await MSSPCrypto.deriveStreamKey(teacherPassword, nonceHex, payloadBytes.length);
                const encryptedPayload = MSSPCrypto.applyXOR(payloadBytes, keyStream);

                const finalBit = new MSSPBitBuffer();
                finalBit.write(MSSP_CONFIG.VERSION, 8);
                finalBit.write(nonce, 16);
                encryptedPayload.forEach(b => finalBit.write(b, 8));
                finalBit.write(checksum, 8);

                console.groupEnd();
                return MSSPCodec.encode(finalBit.finish());
            }
        };

        var MSSPDecoder = {
            async unpack(code, teacherPassword, currentAnswers) {
                console.group("--- MSSP 解码流程 ---");
                try {
                    const rawBytes = MSSPCodec.decode(code);
                    const bit = MSSPBitBuffer.fromUint8Array(rawBytes);
                    const version = bit.read(8);
                    const nonce = bit.read(16);
                    const nonceHex = nonce.toString(16).padStart(4, '0');

                    const encryptedPayload = rawBytes.slice(3, -1);
                    const originalChecksum = rawBytes[rawBytes.length - 1];

                    const keyStream = await MSSPCrypto.deriveStreamKey(teacherPassword, nonceHex, encryptedPayload.length);
                    const decryptedPayload = MSSPCrypto.applyXOR(encryptedPayload, keyStream);

                    let calculatedChecksum = 0;
                    decryptedPayload.forEach(b => calculatedChecksum ^= b);

                    if (calculatedChecksum !== originalChecksum) {
                        console.groupEnd();
                        return { success: false, msg: "口令错误或数据损坏" };
                    }

                    const pBit = MSSPBitBuffer.fromUint8Array(decryptedPayload);
                    const result = {
                        timestamp: pBit.read(20),
                        duration: pBit.read(13), 
                        score: pBit.read(7),
                        modeIdx: pBit.read(4),
                        storedFullHash: pBit.read(32) >>> 0
                    };
                    result.startTime = new Date(MSSP_CONFIG.BASE_DATE + result.timestamp * 60000);

                    const nameLen = pBit.read(4);
                    const nBytes = new Uint8Array(nameLen);
                    for(let i=0; i<nameLen; i++) nBytes[i] = pBit.read(8);
                    result.name = new TextDecoder().decode(nBytes);

                    // 读取题集信息
                    const setsCount = pBit.read(5);
                    result.selectedSets = [];
                    for (let i = 0; i < setsCount; i++) {
                        result.selectedSets.push(pBit.read(6));
                    }

                    // --- 关键：读取错题 ---
                    const errorCount = pBit.read(11);
                    console.log(`[Unpack] 读取到错题总数: ${errorCount}`);
                    result.errors = [];
                    for (let i = 0; i < errorCount; i++) {
                        const id = pBit.read(10);
                        const optCode = pBit.read(3);
                        result.errors.push({ id, optCode });
                    }

                    // V2: 读取实际参与答题的正确题目 ID 列表
                    result.questionIds = [];
                    if (version >= 2) {
                        try {
                            const qIdCount = pBit.read(11);
                            for (let i = 0; i < qIdCount; i++) {
                                result.questionIds.push(pBit.read(10));
                            }
                            // 加上错题的 ID，还原出完整的答题题目 ID 列表
                            if (qIdCount > 0 || result.modeIdx === 8 || result.modeIdx === 9) { // 8: random-2way-draw, 9: random-1way-draw
                                result.errors.forEach(err => {
                                    result.questionIds.push(err.id);
                                });
                            }
                            console.log(`[Unpack] 读取到正确题目 ID 数量: ${qIdCount}, 总题目数量: ${result.questionIds.length}`);
                        } catch(e2) {
                            console.warn("读取题目 ID 列表时出错（可能是 V1 数据）:", e2);
                        }
                    }

                    console.groupEnd();
                    return { success: true, data: result };
                } catch (e) {
                    console.error("解码崩溃:", e);
                    console.groupEnd();
                    return { success: false, msg: "数据格式严重错误" };
                }
            }
        };

    /**
     * 视觉指纹绘制引擎 - 增强版
     * 绘制随机颜色、种类、大小的图形，且保持确定性（基于 Hash）
     */
    function drawVisualFingerprintIncremental(canvas, fullHash, nonce) {
        const ctx = canvas.getContext('2d');
        const w = canvas.width;
        const h = canvas.height;
        
        // 1. 初始化种子：使用 >>> 0 确保 32 位无符号整数，避免负数坐标
        let seed = (nonce ^ fullHash) >>> 0; 
        
        // 2. 确定性随机数生成器 (LCG)
        const lcg = () => {
            seed = (seed * 1664525 + 1013904223) >>> 0;
            return seed / 4294967296;
        };

        const renderFrame = () => {
            const viewResult = document.getElementById('view-result');
            // 只有当结算页面显示时才绘制
            if (viewResult && !viewResult.classList.contains('hidden')) {
                
                // 每帧绘制 10 个随机图形
                for(let i = 0; i < 10; i++) {
                    const shapeType = Math.floor(lcg() * 6); // 增加到 6 种图形
                    const x = lcg() * w;
                    const y = lcg() * h;
                    const size = 10 + lcg() * 60; // 随机大小
                    
                    // --- 随机颜色生成 ---
                    // 使用 HSL 颜色空间，保证颜色鲜艳度适中且透明
                    const hue = Math.floor(lcg() * 360);      // 全色相随机
                    const sat = 30 + Math.floor(lcg() * 50); // 饱和度 30%-80%
                    const light = 70 + Math.floor(lcg() * 30); // 亮度偏高，确保背景清爽
                    const alpha = 0.05 + (lcg() * 0.25);     // 透明度 0.05-0.25
                    
                    const color = `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`;
                    ctx.fillStyle = color;
                    ctx.strokeStyle = color;
                    ctx.lineWidth = 1 + lcg() * 3;

                    ctx.beginPath();
                    
                    switch(shapeType) {
                        case 0: // 填充圆
                            ctx.arc(x, y, size / 2, 0, Math.PI * 2);
                            ctx.fill();
                            break;
                        case 1: // 实心矩形
                            ctx.fillRect(x, y, size, size * 0.8);
                            break;
                        case 2: // 描边矩形
                            ctx.strokeRect(x, y, size, size);
                            break;
                        case 3: // 随机字符 (数字或字母)
                            const char = String.fromCharCode(Math.floor(lcg() * 26) + 65); // A-Z
                            ctx.font = `bold ${Math.floor(size)}px monospace`;
                            ctx.fillText(char, x, y);
                            break;
                        case 4: // 随机线条
                            ctx.moveTo(x, y);
                            ctx.lineTo(x + (lcg() - 0.5) * 150, y + (lcg() - 0.5) * 150);
                            ctx.stroke();
                            break;
                        case 5: // 三角形
                            const side = size;
                            ctx.moveTo(x, y);
                            ctx.lineTo(x + side, y);
                            ctx.lineTo(x + side/2, y - side * 0.8);
                            ctx.closePath();
                            ctx.fill();
                            break;
                    }
                }
            }
            // 持续请求下一帧，实现动态增长的视觉指纹
            securityAnimId = requestAnimationFrame(renderFrame);
        };

        if (securityAnimId) cancelAnimationFrame(securityAnimId);
        
        // 启动前先清空画布
        ctx.clearRect(0, 0, w, h);
        renderFrame();
    }

    function formatDuration(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return m > 0 ? `${m}分${s}秒` : `${s}秒`;
    }

    /**
     * 启动验证流程
     * 通常在 URL 中检测到 ?mssp=... 时触发
     */
    async function runMSSPVerification(code) {
        // 1. 获取本地设置的口令（如果没有设，默认为空字符串）
        let pwd = state.settings.verifyPassword || "";
        
        // 切换到验证视图
        switchView('verify-result');
        const currentAnswers = state.answers || {}; 
        const isLocalEmpty = Object.keys(currentAnswers).length === 0;

        // 2. 第一次尝试解码
        let result = await MSSPDecoder.unpack(code, pwd, currentAnswers);

        // 3. 如果第一次失败，尝试手动输入
        if (!result.success) {
            // 弹出输入框
            const manualPwd = prompt("本地校验口令不匹配，请输入正确的核验口令：");
            if (manualPwd !== null) { // 用户没有点取消
                pwd = manualPwd;
                // 第二次尝试解码
                result = await MSSPDecoder.unpack(code, pwd, currentAnswers);
            }
        }

        // 4. 处理最终结果显示
        const header = document.getElementById('verify-status-header');
        const iconDiv = document.getElementById('verify-status-icon');
        const title = document.getElementById('verify-status-title');
        const msg = document.getElementById('verify-status-msg');
        const tamperWarn = document.getElementById('v-tamper-warn');

        if (result.success) {
            // --- 验证成功逻辑 ---
            
            // 渲染错题清单（非常重要，必须传入正确的解密数据）
            renderVerifiedQuestions(result.data.errors, result.data.score, result.data.selectedSets, result.data.questionIds, result.data.modeIdx);

            const currentFullHash = await MSSPCrypto.generateFullHash(currentAnswers);
            const isTampered = !isLocalEmpty && (currentFullHash !== result.data.storedFullHash);
            const isRemote = isLocalEmpty;

            if (isTampered) {
                header.className = "p-6 text-center bg-rose-600 text-white";
                iconDiv.innerHTML = '<i data-lucide="shield-alert" class="w-10 h-10"></i>';
                title.innerText = "检测到篡改！";
                msg.innerText = "数据解密成功，但与本地题目指纹不符";
                tamperWarn.classList.remove('hidden');
                tamperWarn.innerHTML = `<i data-lucide="alert-triangle" class="w-4 h-4 shrink-0"></i> <span><b>篡改警告：</b>检测到本地题目已被修改。请以解密显示的 <b class='underline'>${result.data.score}</b> 分为准。</span>`;
            } else {
                header.className = isRemote ? "p-6 text-center bg-indigo-500 text-white" : "p-6 text-center bg-emerald-500 text-white";
                iconDiv.innerHTML = '<i data-lucide="shield-check" class="w-10 h-10"></i>';
                title.innerText = isRemote ? "认证有效 (远程)" : "官方认证有效";
                msg.innerText = "数据解密成功，成绩记录完整。";
                tamperWarn.classList.add('hidden');
            }

            // 填充详细字段
            document.getElementById('v-name').innerText = result.data.name;
            document.getElementById('v-score').innerText = result.data.score;
            
            let modeName = MSSP_MODE_NAME[result.data.modeIdx] || '未知';
            if (result.data.selectedSets && result.data.selectedSets.length > 0) {
                const setNames = result.data.selectedSets.map(idx => questionSets[idx] ? questionSets[idx].set_name : `题集${idx}`).join('<br>');
                modeName += `<br><span class="text-xs text-slate-500 font-normal mt-1 block">${setNames}</span>`;
            }
            document.getElementById('v-mode').innerHTML = modeName;
            
            document.getElementById('v-time').innerText = formatDuration(result.data.duration);
            document.getElementById('v-date').innerText = result.data.startTime.toLocaleString();
            
        } else {
            // --- 验证失败逻辑 ---
            header.className = "p-6 text-center bg-slate-800 text-white";
            iconDiv.innerHTML = '<i data-lucide="shield-x" class="w-10 h-10"></i>';
            title.innerText = "验证失败";
            msg.innerText = result.msg || "口令错误，无法解密成绩数据。";
            tamperWarn.classList.add('hidden');
            
            // 清空列表和字段
            document.getElementById('v-question-list').innerHTML = '';
            ['v-name', 'v-score', 'v-time', 'v-date', 'v-mode'].forEach(id => document.getElementById(id).innerText = "---");
        }

        // 清理 URL 参数并重绘图标
        window.history.replaceState({}, '', window.location.pathname);
        lucide.createIcons();
    }

    /**
     * 渲染加密成绩单卡片
     */
    async function renderMSSPReport(name, score, timeSpent) {
        const reportName = document.getElementById('report-name');
        const reportScore = document.getElementById('report-score');
        const reportMode = document.getElementById('report-mode');
        const reportTime = document.getElementById('report-time');
        const qrContainer = document.getElementById('qrcode-container');
        const canvas = document.getElementById('security-canvas');
        const fingerprintLabel = document.getElementById('report-fingerprint');

        const now = new Date();
        const pad = (n) => n.toString().padStart(2, '0');
        const timeStr = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
        
        const teacherPwd = MSSP_INTERNAL_SECRET;  // 口令
        const packData = {
            name, score, duration: timeSpent,
            startTime: state.startTime,
            answers: state.answers,
            mistakes: state.mistakesSession,
            mode: state.mode,
            selectedSets: state.selectedSets,
            questionIds: (state.questions || []).map(q => q.id)
        };

        try {
            // 生成二维码
            const msspCode = await MSSPEncoder.pack(packData, teacherPwd);
            const verifyUrl = window.location.origin + window.location.pathname + "?mssp=" + msspCode;

            console.log("--- MSSP 调试信息 ---");
            console.log("验证链接:", verifyUrl);
            console.log("--------------------");

            reportName.innerText = name;
            reportScore.innerText = score;
            reportTime.innerText = timeStr;

            const modeIdx = MSSP_MODE_INDEX[state.mode] || 0;
            reportMode.innerText = MSSP_MODE_NAME[modeIdx] || '未知模式';

            qrContainer.innerHTML = '';
            new QRCode(qrContainer, {
                text: verifyUrl,
                width: 700,
                height: 700,
                colorDark: "#1e1b4b",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.L 
            });

            // 关键：等待一帧，确保 switchView('result') 导致的 DOM 渲染已完成
            requestAnimationFrame(async () => {
                const fullHash = await MSSPCrypto.generateFullHash(state.answers);
                const nonce = Math.floor(Math.random() * 0xFFFF);
                fingerprintLabel.innerText = fullHash.toString(16).toUpperCase();

                // 设置画布逻辑尺寸为物理显示的尺寸
                canvas.width = canvas.offsetWidth || 350;
                canvas.height = canvas.offsetHeight || 500;

                const ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height); 

                drawVisualFingerprintIncremental(canvas, fullHash, nonce);
            });

        } catch (e) {
            console.error("MSSP Report Error:", e);
        }
    }

    /**
     * 渲染验证后的题目清单
     * @param {Array} errors 解码出的错题数组 [{id, optCode}]
     * @param {number} totalScore 本次总分
     */
    /**
     * v2: 存储认证数据，供全页面双栏界面使用
     */
    var _verifyData = null;
    var _verifyCurrentFilter = 'all';
    var _verifySelectedIdx = -1;
    var _verifySearchTerm = '';

    /**
     * v2: 渲染认证结果 —— 全页面双栏界面
     * @param {Array} allResults 所有题目结果数组 [{qData, isCorrect, userOptCode, userDisplay, correctDisplay}]
     * @param {Object} stats {total, correct, wrong, score, accuracy}
     */
    function renderVerifyResults(allResults, stats) {
        _verifyData = allResults;
        _verifyCurrentFilter = 'all';
        _verifySelectedIdx = -1;
        _verifySearchTerm = '';

        document.getElementById('v-score').innerText = stats.score;
        document.getElementById('v-accuracy').innerText = stats.accuracy + '%';
        document.getElementById('vf-count-all').innerText = stats.total;
        document.getElementById('vf-count-correct').innerText = stats.correct;
        document.getElementById('vf-count-wrong').innerText = stats.wrong;
        document.getElementById('verify-search').value = '';
        
        document.querySelectorAll('#verify-filter-tabs .verify-filter-btn').forEach(function(btn) {
            btn.onclick = function() {
                _verifyCurrentFilter = this.dataset.filter;
                _verifySearchTerm = document.getElementById('verify-search').value;
                renderVerifyQuestionList();
                updateVerifyFilterStyles();
            };
        });

        var searchInput = document.getElementById('verify-search');
        searchInput.oninput = function() {
            _verifySearchTerm = this.value.toLowerCase();
            renderVerifyQuestionList();
        };

        document.addEventListener('keydown', handleVerifyKeyNav);

        updateVerifyFilterStyles();
        renderVerifyQuestionList();
        lucide.createIcons();
    }

    function updateVerifyFilterStyles() {
        document.querySelectorAll('#verify-filter-tabs .verify-filter-btn').forEach(function(btn) {
            btn.classList.remove('active-all', 'active-correct', 'active-wrong');
        });
        var activeBtn = document.querySelector('#verify-filter-tabs .verify-filter-btn[data-filter="' + _verifyCurrentFilter + '"]');
        if (activeBtn) activeBtn.classList.add('active-' + _verifyCurrentFilter);
    }

    function getFilteredVerifyResults() {
        var results = _verifyData || [];
        if (_verifyCurrentFilter === 'correct') {
            results = results.filter(function(r) { return r.isCorrect; });
        } else if (_verifyCurrentFilter === 'wrong') {
            results = results.filter(function(r) { return !r.isCorrect; });
        }
        if (_verifySearchTerm) {
            results = results.filter(function(r) {
                return r.qData.question.toLowerCase().indexOf(_verifySearchTerm) !== -1;
            });
        }
        return results;
    }

    function renderVerifyQuestionList() {
        var listContainer = document.getElementById('v-question-list');
        var emptyHint = document.getElementById('verify-list-empty');
        var results = getFilteredVerifyResults();

        if (results.length === 0) {
            listContainer.innerHTML = '';
            emptyHint.classList.remove('hidden');
            return;
        }
        emptyHint.classList.add('hidden');
        listContainer.innerHTML = '';

        results.forEach(function(item, idx) {
            var q = item.qData;
            var isCorrect = item.isCorrect;
            var icon = isCorrect ? 'circle-check' : 'circle-x';
            var iconColor = isCorrect ? 'text-emerald-500' : 'text-rose-500';
            var typeBadge = '';
            if (q.type === 'single') typeBadge = '单选';
            else if (q.type === 'multiple') typeBadge = '多选';
            else if (q.type === 'judge') typeBadge = '判断';
            else if (q.type === 'short') typeBadge = '简答';

            var statusClass = isCorrect ? 'v-q-correct' : 'v-q-wrong';
            var card = document.createElement('div');
            card.className = 'v-q-item p-2.5 rounded-lg cursor-pointer bg-white/60 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 ' + statusClass;
            card.setAttribute('data-vidx', String(idx));
            card.onclick = function() { openVerifyDetail(parseInt(this.getAttribute('data-vidx'))); };

            card.innerHTML = 
                '<div class="flex items-center gap-2">' +
                    '<i data-lucide="' + icon + '" class="w-4 h-4 shrink-0 ' + iconColor + '"></i>' +
                    '<span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 shrink-0">' + typeBadge + '</span>' +
                    '<span class="text-xs text-slate-400 shrink-0">#' + q.id + '</span>' +
                    '<span class="text-xs font-medium text-slate-700 dark:text-slate-200 truncate">' + escapeVerifyHtml(q.question) + '</span>' +
                '</div>';
            listContainer.appendChild(card);
        });

        lucide.createIcons();
    }

    function openVerifyDetail(idx) {
        var results = getFilteredVerifyResults();
        if (idx < 0 || idx >= results.length) return;

        _verifySelectedIdx = idx;
        var item = results[idx];
        var q = item.qData;

        document.querySelectorAll('.v-q-item').forEach(function(el) { el.classList.remove('v-q-selected'); });
        var selectedEl = document.querySelector('[data-vidx="' + idx + '"]');
        if (selectedEl) selectedEl.classList.add('v-q-selected');

        var detailPanel = document.getElementById('verify-detail-panel');
        var detailContent = document.getElementById('verify-detail-content');
        detailPanel.classList.remove('hidden');
        detailPanel.classList.add('flex');

        var navHtml = '<div class="flex items-center justify-between mb-3">' +
            '<button onclick="navigateVerifyDetail(-1)" class="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500" title="上一题"><i data-lucide="chevron-left" class="w-4 h-4"></i></button>' +
            '<span class="text-xs text-slate-400">' + (idx + 1) + ' / ' + results.length + '</span>' +
            '<button onclick="navigateVerifyDetail(1)" class="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500" title="下一题"><i data-lucide="chevron-right" class="w-4 h-4"></i></button>' +
        '</div>';

        var statusBadge = item.isCorrect 
            ? '<span class="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold">✓ 正确</span>'
            : '<span class="px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 text-xs font-bold">✗ 错误</span>';

        var typeLabel = {single:'单选题',multiple:'多选题',judge:'判断题',short:'简答题'}[q.type] || '';

        var questionHtml = navHtml +
            '<div class="flex items-center gap-2 mb-3">' +
                '<span class="text-[10px] font-bold text-slate-400">#' + q.id + '</span>' +
                '<span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">' + typeLabel + '</span>' +
                statusBadge +
            '</div>' +
            '<p class="v-detail-question font-bold text-slate-800 dark:text-slate-100 mb-4">' + escapeVerifyHtml(q.question) + '</p>';

        // 选项
        if (q.type !== 'short' && q.options) {
            questionHtml += '<div class="space-y-2 mb-4">';
            q.options.forEach(function(optText, optIdx) {
                var optLetter = String.fromCharCode(65 + optIdx);
                var isUserAnswer = false;
                var isCorrectAnswer = false;
                
                if (q.type === 'single' || q.type === 'judge') {
                    if (item.userOptCode !== undefined && item.userOptCode !== 7 && item.userOptCode === optIdx) isUserAnswer = true;
                    if (q.answer === optIdx) isCorrectAnswer = true;
                } else if (q.type === 'multiple') {
                    if (item.userOptCode !== undefined && item.userOptCode !== 7 && item.userOptCode === optIdx) isUserAnswer = true;
                    if (Array.isArray(q.answer) && q.answer.includes(optIdx)) isCorrectAnswer = true;
                }

                var optClass = 'v-detail-option p-3 rounded-lg border text-sm ';
                if (isCorrectAnswer && item.isCorrect) optClass += 'is-correct';
                else if (isUserAnswer && item.isCorrect) optClass += 'is-correct';
                else if (isUserAnswer && !item.isCorrect) optClass += 'is-wrong';
                else if (isCorrectAnswer && !item.isCorrect) optClass += 'is-correct-answer';

                var marks = '';
                if (isUserAnswer && !item.isCorrect) marks += ' <span class="text-[10px] font-bold ml-1 opacity-70">← 你的答案</span>';
                if (isCorrectAnswer && item.isCorrect) marks += ' <span class="text-[10px] font-bold text-emerald-600 ml-1">← 正确答案</span>';
                if (isCorrectAnswer && !isUserAnswer && !item.isCorrect) marks += ' <span class="text-[10px] font-bold text-emerald-600 ml-1">← 正确答案</span>';

                questionHtml += '<div class="' + optClass + '"><span class="font-bold mr-2">' + optLetter + '.</span>' + escapeVerifyHtml(optText) + marks + '</div>';
            });
            questionHtml += '</div>';
        } else if (q.type === 'short') {
            questionHtml += '<div class="mb-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">' +
                '<p class="text-xs font-bold text-amber-700 dark:text-amber-400 mb-1">📝 参考答案</p>' +
                '<p class="text-sm text-slate-700 dark:text-slate-200">' + escapeVerifyHtml(String(q.answer || '')) + '</p>' +
            '</div>';
        }

        if (q.analysis) {
            questionHtml += '<div class="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800">' +
                '<p class="text-xs font-bold text-slate-500 mb-1">💡 解析</p>' +
                '<p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">' + escapeVerifyHtml(q.analysis) + '</p>' +
            '</div>';
        }

        detailContent.innerHTML = questionHtml;
        lucide.createIcons();

        if (window.innerWidth < 1024) {
            detailPanel.classList.add('mobile-open');
            document.getElementById('verify-mobile-overlay').classList.add('show');
        }
    }

    function navigateVerifyDetail(delta) {
        var results = getFilteredVerifyResults();
        var newIdx = _verifySelectedIdx + delta;
        if (newIdx >= 0 && newIdx < results.length) {
            openVerifyDetail(newIdx);
        }
    }

    function closeVerifyDetail() {
        var detailPanel = document.getElementById('verify-detail-panel');
        detailPanel.classList.remove('mobile-open');
        document.getElementById('verify-mobile-overlay').classList.remove('show');
    }

    function handleVerifyKeyNav(e) {
        var verifyView = document.getElementById('view-verify-result');
        if (!verifyView || verifyView.classList.contains('hidden')) return;
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
            navigateVerifyDetail(e.key === 'ArrowDown' ? 1 : -1);
        }
        if (e.key === 'Escape') closeVerifyDetail();
    }

    function escapeVerifyHtml(text) {
        if (!text) return '';
        return String(text).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
    }

    /**
     * v2 兼容桥：旧 renderVerifiedQuestions → 新 renderVerifyResults
     * selectedSets: 解码出的题集索引数组，用于精确还原实际答题范围
     * questionIds: 解码出的实际答题题目 ID 列表（V2 新增，用于随机抽选模式）
     * modeIdx: 模式索引，用于特殊模式（如背简答题）的题目过滤
     */
    function renderVerifiedQuestions(errors, totalScore, selectedSets, questionIds, modeIdx) {
        var errorMap = {};
        if (errors && errors.length) {
            errors.forEach(function(e) { errorMap[e.id] = e.optCode; });
        }
        var allResults = [];

        // 根据 selectedSets 精确还原实际答题题集，而非使用全局 questionPool
        var qp = [];
        if (selectedSets && selectedSets.length > 0 && typeof questionSets !== 'undefined') {
            selectedSets.forEach(function(idx) {
                if (questionSets[idx] && questionSets[idx].items) {
                    qp = qp.concat(questionSets[idx].items);
                }
            });
        } else {
            // 兜底：无题集信息时使用全局 questionPool
            qp = window.questionPool || [];
        }

        // 如果是背简答题模式 (modeIdx === 5)，只保留简答题
        if (modeIdx === 5) {
            qp = qp.filter(function(q) { return q.type === 'short'; });
        }

        // 如果有具体的题目 ID 列表（如随机抽选模式），则进一步过滤
        if (questionIds && questionIds.length > 0) {
            var idSet = new Set(questionIds);
            qp = qp.filter(function(q) { return idSet.has(q.id); });
        }

        qp.forEach(function(q) {
            allResults.push({
                qData: q,
                isCorrect: (errorMap[q.id] === undefined),
                userOptCode: errorMap[q.id]
            });
        });
        var total = allResults.length;
        var wrong = errors ? errors.length : 0;
        var correct = total - wrong;
        renderVerifyResults(allResults, {
            total: total, correct: correct, wrong: wrong,
            score: totalScore || 0,
            accuracy: total > 0 ? Math.round((correct / total) * 100) : 0
        });
    }
