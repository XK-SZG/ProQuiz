// --- 4. ENGINE ---
        function startQuiz(mode) {
            // 1. 强制检查昵称
            const currentUser = localStorage.getItem('user_name');
            if (!currentUser || currentUser.trim() === '') {
                showAlert('请先在左上角设置您的昵称，才能开始刷题哦！', '未设置昵称');
                const oldClose = closeModal;
                closeModal = function() {
                    document.getElementById('custom-modal').classList.add('hidden');
                    highlightNameBtn();
                    closeModal = oldClose;
                };
                return;
            }

            // 2. 弹出题集选择框
            showSetSelectionModal(mode);
        }

        function showSetSelectionModal(mode) {
            const m = document.getElementById('custom-modal');
            const mContent = document.getElementById('custom-modal-content');
            
            // 动态调整弹窗宽度和高度
            mContent.classList.remove('max-w-sm');
            mContent.classList.add('max-w-4xl'); // 宽度约为原来的3倍
            
            document.getElementById('modal-title').innerText = "选择题集";
            
            // 顶部快捷操作
            let html = `
                <div class="flex justify-between items-center mb-3">
                    <span class="text-xs font-bold text-slate-500 uppercase">可用题集</span>
                    <div class="flex gap-2">
                        <button onclick="selectAllSets(true)" class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">全选</button>
                        <button onclick="selectAllSets(false)" class="text-xs text-slate-500 hover:underline">清空</button>
                    </div>
                </div>
            `;

            // 卡片式列表，每行3个，高度增加
            html += '<div class="max-h-[400px] overflow-y-auto mb-4 text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pr-1 nav-scroll">';
            questionSets.forEach((set, idx) => {
                html += `
                    <label class="flex items-start gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 transition-all group has-[:checked]:border-indigo-500 has-[:checked]:bg-indigo-50 dark:has-[:checked]:bg-indigo-900/30">
                        <input type="checkbox" class="set-checkbox w-4 h-4 mt-0.5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500" value="${idx}" data-count="${set.items.length}" onchange="updateSetSelectionCount()">
                        <div class="flex-1 min-w-0">
                            <div class="text-sm font-bold text-slate-700 dark:text-slate-200 truncate group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors" title="${set.set_name}">${set.set_name}</div>
                            <div class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">${set.items.length} 题</div>
                        </div>
                    </label>
                `;
            });
            html += '</div>';

            // 动态统计信息
            html += `
                <div class="mb-4 p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800 text-center">
                    <span class="text-sm text-slate-600 dark:text-slate-300">已选 <span id="set-sel-count" class="font-bold text-indigo-600 dark:text-indigo-400">0</span> 个题集，共 <span id="set-sel-total" class="font-bold text-indigo-600 dark:text-indigo-400">0</span> 题</span>
                </div>
            `;

            // 如果是随机抽选模式，增加抽题数量输入框
            if (mode === 'random-2way-draw' || mode === 'random-1way-draw') {
                html += `
                    <div class="mb-4 text-left p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-100 dark:border-amber-900/30">
                        <label class="block text-sm font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-1"><i data-lucide="dices" class="w-4 h-4"></i> 随机抽取数量：</label>
                        <input type="number" id="random-draw-count" class="w-full p-2 border border-amber-200 dark:border-amber-800/50 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-amber-500 outline-none" value="20" min="1">
                    </div>
                `;
            }

            document.getElementById('modal-msg').innerHTML = html;
            
            const acts = document.getElementById('modal-actions');
            acts.innerHTML = `
                <button onclick="closeModal()" class="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 flex-1">取消</button>
                <button onclick="confirmSetSelection('${mode}')" class="px-4 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 flex-1 shadow-lg shadow-indigo-200 dark:shadow-none">开始练习</button>
            `;
            
            // 重新渲染图标
            if (window.lucide) lucide.createIcons();
            
            m.classList.remove('hidden');
            
            // 默认选中第一个题集并更新统计
            setTimeout(() => {
                const firstCb = document.querySelector('.set-checkbox');
                if (firstCb && !document.querySelector('.set-checkbox:checked')) {
                    firstCb.checked = true;
                }
                updateSetSelectionCount();
            }, 10);
        }

        function selectAllSets(isSelectAll) {
            document.querySelectorAll('.set-checkbox').forEach(cb => {
                cb.checked = isSelectAll;
            });
            updateSetSelectionCount();
        }

        function updateSetSelectionCount() {
            const checkboxes = document.querySelectorAll('.set-checkbox:checked');
            let totalQuestions = 0;
            checkboxes.forEach(cb => {
                totalQuestions += parseInt(cb.dataset.count || 0);
            });
            
            const countEl = document.getElementById('set-sel-count');
            const totalEl = document.getElementById('set-sel-total');
            
            if (countEl) countEl.innerText = checkboxes.length;
            if (totalEl) totalEl.innerText = totalQuestions;
        }

        function confirmSetSelection(mode) {
            const checkboxes = document.querySelectorAll('.set-checkbox:checked');
            if (checkboxes.length === 0) {
                alert('请至少选择一个题集！');
                return;
            }

            const selectedIndices = Array.from(checkboxes).map(cb => parseInt(cb.value));
            state.selectedSets = selectedIndices; // 记录选择的题集索引，用于 MSSP

            let qs = [];
            selectedIndices.forEach(idx => {
                qs = qs.concat(questionSets[idx].items);
            });

            if (mode === 'memorize') qs = qs.filter(q => q.type === 'short');

            if (qs.length === 0) {
                alert('所选题集中没有符合当前模式的题目！');
                return;
            }

            // 处理随机抽选数量
            if (mode === 'random-2way-draw' || mode === 'random-1way-draw') {
                const countInput = document.getElementById('random-draw-count');
                let count = parseInt(countInput.value);
                if (isNaN(count) || count <= 0) count = 20;
                
                qs.sort(() => Math.random() - 0.5);
                qs = qs.slice(0, count);
            }

            closeModal();
            initQuizWithQuestions(mode, qs);
        }

        function initQuizWithQuestions(mode, qs) {
            state.mode = mode; state.currentIdx = 0; state.answers = {}; state.answersScore = {}; state.answeredCount = 0; state.timerVal = 0;
            state.mistakesSession = []; state.startTime = Date.now(); state.singleStage = 'answering'; state.memoStep = 1; state.scrollSubmitted = false;

            // 判定是否需要打乱选项和题目顺序
            const isRandomSession = mode.includes('random') || mode === 'speed' || mode === 'exam';
            
            if (isRandomSession) {
                // 题目顺序随机 (如果不是 draw 模式，因为 draw 模式已经在上面随机过了)
                if (!mode.includes('draw')) {
                    qs.sort(() => Math.random() - 0.5);
                }
                
                // --- 新增：选项顺序随机 ---
                if (state.settings.randomizeOptions) {
                    // 注意：必须使用深拷贝 {} ，防止修改原始的 questionPool
                    qs = qs.map(q => shuffleQuestionOptions(JSON.parse(JSON.stringify(q))));
                }
            }
            
            state.questions = qs;
            
            // --- v1.4 计算正计时模式的“基准上限时间” ---
            // 规则：单选10s，多选20s，简答60s (参考 Exam 模式)
            state.referenceMaxTime = 0;
            qs.forEach(q => {
                if (q.type === 'single' || q.type === 'judge') state.referenceMaxTime += 10;
                else if (q.type === 'multiple') state.referenceMaxTime += 20;
                else state.referenceMaxTime += 60;
            });
            // ----------------------------------------

            switchView('quiz');
            
            // 映射显示名称
            let modeName = mode.toUpperCase();
            if (mode === 'random-2way-draw') modeName = '双向随机抽选';
            if (mode === 'random-1way-draw') modeName = '单向随机抽选';
            
            document.getElementById('quiz-mode-label').innerText = modeName;
            document.getElementById('quiz-progress').innerText = `共 ${qs.length} 题`;
            
            if (mode.includes('2way')) renderScrollMode(); else renderSingleMode();
            
            if (mode === 'exam') {
                startTimer();
            } else if (mode === 'speed') {
                // speed 模式由 renderSingleMode 触发单题计时
            } else {
                startElapsedTimer();
            }

            updateGlobalProgress();
        }

        function startElapsedTimer() {
            clearInterval(state.timer);
            stopIntensityLoop();

            const box = document.getElementById('timer-box');
            box.classList.remove('hidden');
            box.className = "px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full font-mono font-bold border border-slate-200 dark:border-slate-700";
            
            state.timerVal = 0;
            
            // 【核心】记录起点
            state.startTime = Date.now();
            
            // 启动平滑循环
            startIntensityLoop();

            updateTimerDisplay(); 
            
            state.timer = setInterval(() => {
                state.timerVal++;
                updateTimerDisplay(); 
            }, 1000);
        }

        
// --- 6. SINGLE MODE (UI UPDATED) ---
        function renderSingleMode() {
            document.getElementById('scroll-container').classList.add('hidden'); document.getElementById('scroll-footer').classList.add('hidden'); document.getElementById('single-container').classList.remove('hidden');
            const q = state.questions[state.currentIdx];
            document.getElementById('quiz-progress').innerText = `题目 ${state.currentIdx + 1} / ${state.questions.length}`;
            const typeLabel = document.getElementById('single-q-type');
            const hintText = document.getElementById('single-q-hint');
            
            // 题型视觉区分
            if (q.type === 'multiple') {
                typeLabel.innerText = "多选题";
                typeLabel.className = "inline-flex items-center gap-1 px-3 py-1 text-sm font-bold rounded-lg bg-purple-100 text-purple-700 border border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800";
                hintText.classList.remove('hidden');
            } else if (q.type === 'judge') {
                typeLabel.innerText = "判断题";
                typeLabel.className = "inline-flex items-center gap-1 px-3 py-1 text-sm font-bold rounded-lg bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800";
                hintText.classList.add('hidden');
            } else if (q.type === 'single') {
                typeLabel.innerText = "单选题";
                typeLabel.className = "inline-flex items-center gap-1 px-3 py-1 text-sm font-bold rounded-lg bg-indigo-100 text-indigo-700 border border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800";
                hintText.classList.add('hidden');
            } else {
                typeLabel.innerText = "简答题";
                typeLabel.className = "inline-flex items-center gap-1 px-3 py-1 text-sm font-bold rounded-lg bg-amber-100 text-amber-700 border border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800";
                hintText.classList.add('hidden');
            }
            
            document.getElementById('single-q-score').innerText = `${getPoints(q.type)}分`;
            document.getElementById('single-q-text').innerText = q.question;
            const optDiv = document.getElementById('single-options'); const shortDiv = document.getElementById('short-answer-area'); const memoDiv = document.getElementById('memo-area');
            const btn = document.getElementById('btn-action'); const feedDiv = document.getElementById('single-feedback');
            optDiv.innerHTML = ''; optDiv.classList.add('hidden'); shortDiv.classList.add('hidden'); memoDiv.classList.add('hidden'); feedDiv.classList.add('hidden');
            state.singleStage = 'answering'; btn.innerText = '提交';
            
            if (state.mode === 'memorize') { renderMemoStep(); btn.innerText = state.memoStep === 4 ? '完成本题' : '下一步'; } 
            else if (q.type === 'short') { shortDiv.classList.remove('hidden'); document.getElementById('single-short-input').value = state.answers[state.currentIdx] || ''; } 
            else { 
                optDiv.classList.remove('hidden'); 
                q.options.forEach((opt, i) => { 
                    const b = document.createElement('button'); 
                    const icon = (q.type === 'single' || q.type === 'judge') ? '<i data-lucide="circle" class="w-5 h-5 flex-shrink-0"></i>' : '<i data-lucide="square" class="w-5 h-5 flex-shrink-0"></i>';
                    b.className = 'option-btn w-full p-4 text-left border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-300 flex items-center gap-3 group'; 
                    b.innerHTML = `<span class="text-slate-300 dark:text-slate-600 group-hover:text-indigo-400 transition-300">${icon}</span><span class="flex-1">${opt}</span>`; 
                    b.onclick = () => { if(state.singleStage==='answering') selectSingleOption(i, b); }; 
                    b.dataset.idx = i; 
                    optDiv.appendChild(b); 
                }); 
                lucide.createIcons(); 
            }
            if (state.mode === 'speed') resetSpeedTimer(q);
            
            updateGlobalProgress();
        }

        function selectSingleOption(idx, btnElem) {
            const q = state.questions[state.currentIdx];
            if (q.type === 'single' || q.type === 'judge') {
                document.querySelectorAll('.option-btn').forEach(b => { 
                    b.classList.remove('selected'); 
                    b.querySelector('span:first-child').innerHTML = '<i data-lucide="circle" class="w-5 h-5 flex-shrink-0"></i>'; 
                }); 
                btnElem.classList.add('selected'); 
                btnElem.querySelector('span:first-child').innerHTML = '<i data-lucide="circle-dot" class="w-5 h-5 flex-shrink-0"></i>'; 
                state.answers[state.currentIdx] = idx; 
            } else { 
                btnElem.classList.toggle('selected'); 
                const isSel = btnElem.classList.contains('selected'); 
                btnElem.querySelector('span:first-child').innerHTML = isSel ? '<i data-lucide="check-square" class="w-5 h-5 flex-shrink-0"></i>' : '<i data-lucide="square" class="w-5 h-5 flex-shrink-0"></i>'; 
                const s = []; 
                document.querySelectorAll('.option-btn.selected').forEach(b => s.push(parseInt(b.dataset.idx))); 
                state.answers[state.currentIdx] = s.sort(); 
            }
            lucide.createIcons();
        }

        function handleSingleAction(force = false) {
            if (state.mode === 'memorize') { 
                if (state.memoStep < 4) { 
                    state.memoStep++; 
                    renderMemoStep(); 
                    document.getElementById('btn-action').innerText = state.memoStep === 4 ? '完成本题' : '下一步'; 
                } else { 
                    state.memoStep = 1; 
                    nextSingleQuestion(); 
                } 
                return; 
            }

            if (state.singleStage === 'reviewing') { 
                nextSingleQuestion(); 
                return; 
            }

            const q = state.questions[state.currentIdx];
            if (q.type === 'short') state.answers[state.currentIdx] = document.getElementById('single-short-input').value;

            const userAns = state.answers[state.currentIdx];
            if (!force && q.type !== 'short' && (userAns === undefined || (Array.isArray(userAns) && userAns.length === 0))) { 
                showAlert('请先选择答案'); 
                return; 
            }

            state.singleStage = 'reviewing'; 
            document.getElementById('btn-action').innerText = '下一题';

            document.querySelectorAll('.option-btn').forEach(btn => {
                btn.classList.add('pointer-events-none'); // 彻底禁止点击
            });

            const shortInput = document.getElementById('single-short-input');
            if (shortInput) shortInput.disabled = true;

            const feedDiv = document.getElementById('single-feedback'); 
            feedDiv.classList.remove('hidden');

            const contentDiv = document.getElementById('single-feedback-content');
            if (q.type !== 'short') { 
                const isCorrect = checkCorrect(q, userAns); 
                if (!isCorrect) state.mistakesSession.push(q); 
                contentDiv.innerHTML = `<span class="font-bold">解析:</span> ${q.analysis}<br><span class="font-bold mt-2 block">正确答案: ${formatAnswer(q)}</span>`; 
                document.querySelectorAll('.option-btn').forEach(b => { 
                    const idx = parseInt(b.dataset.idx); 
                    if (((q.type === 'single' || q.type === 'judge') && idx === q.answer) || (q.type === 'multiple' && q.answer.includes(idx))) { b.classList.add('correct'); b.classList.remove('selected'); }
                    else if (b.classList.contains('selected')) { b.classList.add('wrong'); b.classList.remove('selected'); } 
                }); 
                // --- v1.4 触发背景特效 ---
                if (bgManager) {
                    // 获取显示的选项文本 (例如 A, B 或者 多选的 AB)
                    let label = formatAnswer({type: q.type, answer: userAns});
                    // 如果多选太长，就简化一下，避免屏幕太乱
                    if (label.length > 3) label = "Good!";
                    
                    bgManager.triggerEvent('answer', {
                        correct: isCorrect,
                        text: label,
                        score: isCorrect ? getPoints(q.type) : 0
                    });
                }
            } else { 
                const percent = calculateFuzzyScore(q.answer, userAns); 
                const score = Math.round((percent / 100) * getPoints('short')); 
                state.answersScore[state.currentIdx] = score; 
                const colorClass = score === getPoints('short') ? 'emerald' : (score > 0 ? 'amber' : 'rose'); 
                contentDiv.innerHTML = `<div class="mb-4 p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm"><div class="flex justify-between items-end mb-2"><span class="text-sm font-bold text-slate-500 dark:text-slate-400">机器评分</span><span class="text-2xl font-bold text-${colorClass}-600 dark:text-${colorClass}-400">${score}</span></div><div class="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-3"><div class="score-bar bg-${colorClass}-500 h-3 rounded-full" style="width: 0%"></div></div></div><span class="font-bold">参考答案:</span> ${q.answer}<br><br><span class="font-bold">解析:</span> ${q.analysis}`; 
                setTimeout(() => document.querySelector('.score-bar').style.width = `${percent}%`, 100); 
                // --- v1.4 触发背景特效 (简答题) ---
                if (bgManager) {
                    bgManager.triggerEvent('answer', {
                        correct: score > 0, // 有分就算对
                        text: score > 0 ? "Got it!" : "Oh no",
                        score: score
                    });
                }
            }
            state.singleStage = 'reviewing'; document.getElementById('btn-action').innerText = '下一题';
            if (state.mode !== 'exam') {
                clearInterval(state.timer);
                stopIntensityLoop(); // <--- 添加这行：提交单题后停止加速
                // 并重置强度，防止背景卡在高速状态
                if (bgManager) bgManager.setIntensity(0); 
            }

            updateGlobalProgress();
        }

        function nextSingleQuestion() { state.currentIdx < state.questions.length - 1 ? (state.currentIdx++, renderSingleMode()) : finishSession(); }