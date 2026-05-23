function renderMemoStep() { document.getElementById('memo-area').classList.remove('hidden'); document.getElementById('memo-input').value = ''; [1,2,3,4].forEach(s => document.getElementById(`step-${s}`).className = `text-xs font-bold px-3 py-1 rounded-full ${s === state.memoStep ? 'step-active' : 'step-inactive'}`); let txt = state.questions[state.currentIdx].answer; if (state.memoStep === 1) txt = txt.split('').map((c, i) => (i%2===0 || "，。：；\n".includes(c) ? c : "_")).join(''); else if (state.memoStep === 2) txt = txt.split(/([，。：；\n])/).map((s, i) => ("，。：；\n".includes(s)) ? s : (Math.floor(i/2)%2 === 0 ? s : "___")).join(''); else if (state.memoStep === 3) txt = txt.split(/([，。：；\n])/).map((s, i) => ("，。：；\n".includes(s)) ? s : (Math.floor(i/2)%2 !== 0 ? s : "___")).join(''); else txt = "请默写完整答案..."; document.getElementById('memo-display').innerText = txt; }

        function resetSpeedTimer(q) { 
            clearInterval(state.timer); 
            stopIntensityLoop(); // 先停止旧循环

            const box = document.getElementById('timer-box'); 
            box.classList.remove('hidden'); 
            
            // 逻辑倒计时 (秒)
            state.timerVal = (q.type==='single'||q.type==='judge')?state.settings.single : q.type==='multiple'?state.settings.multiple : Math.ceil(q.answer.length * state.settings.short);
            
            // 记录总时长 (秒)
            state.currentTotalTime = state.timerVal;
            
            // 【核心】重置毫秒级起点，用于平滑动画
            state.startTime = Date.now();
            
            // 启动平滑循环
            startIntensityLoop();

            updateTimerDisplay(); 
            state.timer = setInterval(() => { 
                state.timerVal--; 
                updateTimerDisplay(); 
                if (state.timerVal <= 0) { 
                    clearInterval(state.timer); 
                    stopIntensityLoop(); // 停止平滑循环
                    handleSingleAction(true); 
                } 
            }, 1000); 
        }

        function startTimer() { 
            clearInterval(state.timer); 
            stopIntensityLoop();

            const box = document.getElementById('timer-box'); 
            box.classList.remove('hidden'); 
            
            let totalExamTime = 0;
            state.questions.forEach(q => {
                if (q.type === 'single' || q.type === 'judge') totalExamTime += 10;
                else if (q.type === 'multiple') totalExamTime += 20;
                else totalExamTime += 60;
            });
            state.timerVal = totalExamTime; 
            
            state.currentTotalTime = state.timerVal;
            
            // 【核心】记录起点
            state.startTime = Date.now();
            
            // 启动平滑循环
            startIntensityLoop();

            updateTimerDisplay(); 
            state.timer = setInterval(() => { 
                state.timerVal--; 
                updateTimerDisplay(); 
                if (state.timerVal <= 0) { 
                    clearInterval(state.timer); 
                    stopIntensityLoop();
                    finishSession(); 
                } 
            }, 1000); 
        }

        function updateTimerDisplay() {
            // 只负责更新文字，不再处理背景动画
            document.getElementById('timer-box').innerText = `${Math.floor(state.timerVal/60).toString().padStart(2,'0')}:${(state.timerVal%60).toString().padStart(2,'0')}`; 
        }

        // 1. 显示全部答案
        function showFullMemoAnswer() {
            const q = state.questions[state.currentIdx];
            if (q) document.getElementById('memo-display').innerText = q.answer;
        }

        // 2. 仅显示提示答案 (逻辑同步骤1)
        function showHintMemoAnswer() {
            const q = state.questions[state.currentIdx];
            if (q) {
                const txt = q.answer;
                const hintTxt = txt.split('').map((c, i) => (i % 2 === 0 || "，。：；\n".includes(c) ? c : "_")).join('');
                document.getElementById('memo-display').innerText = hintTxt;
            }
        }

        // 3. 隐藏全部答案 (逻辑同步骤4)
        function hideFullMemoAnswer() {
            document.getElementById('memo-display').innerText = "请默写完整答案...";
        }

        // 更新顶部全局进度条
        function updateGlobalProgress() {
            const bar = document.getElementById('global-progress-bar');
            if (!state.questions || state.questions.length === 0) {
                bar.style.width = '0%';
                return;
            }

            let percent = 0;
            if (state.mode.includes('2way')) {
                // 滚动模式：使用缓存的 answeredCount，O(1) 替代 O(n)
                const answeredCount = state.answeredCount || 0;
                percent = (answeredCount / state.questions.length) * 100;
            } else {
                // 单题模式：根据当前索引计算 (显示已完成的部分)
                // 如果是在 review 阶段，视为该题已完成
                const offset = state.singleStage === 'reviewing' ? 1 : 0;
                percent = ((state.currentIdx + offset) / state.questions.length) * 100;
            }
            
            bar.style.width = `${percent}%`;
        }

        // --- v1.4 平滑背景控制逻辑 ---
        
        var intensityRafId = null; // 用于存储平滑更新的动画帧ID

        function startIntensityLoop() {
            if (intensityRafId) cancelAnimationFrame(intensityRafId);
            
            const loop = () => {
                updateSmoothIntensity();
                intensityRafId = requestAnimationFrame(loop);
            };
            loop();
        }

        function stopIntensityLoop() {
            if (intensityRafId) {
                cancelAnimationFrame(intensityRafId);
                intensityRafId = null;
            }
        }

        function updateSmoothIntensity() {
            if (!bgManager || !state.startTime) return;

            const now = Date.now();
            // 计算已经经过的毫秒数
            const elapsedMs = now - state.startTime; 
            let intensity = 0;

            const isCountdown = (state.mode === 'speed' || state.mode === 'exam');

            if (isCountdown) {
                // --- 倒计时模式 ---
                // 总时长 (毫秒)
                const totalMs = state.currentTotalTime * 1000;
                
                if (totalMs > 0) {
                    // 随着时间流逝(elapsedMs变大)，剩余时间变少，紧张感(intensity)变大
                    // 0ms -> 0%
                    // totalMs -> 100%
                    intensity = elapsedMs / totalMs;
                }
            } else {
                // --- 正计时模式 ---
                // 参考上限 (毫秒)
                const refMs = state.referenceMaxTime * 1000;
                
                if (refMs > 0) {
                    intensity = elapsedMs / refMs;
                }
            }

            // 限制范围在 0.0 ~ 1.0 之间
            intensity = Math.max(0, Math.min(1, intensity));
            
            // 实时设置给背景管理器 (每秒60次调用，极为平滑)
            bgManager.setIntensity(intensity);
        }

        async function finishSession() {
            clearInterval(state.timer);
            stopIntensityLoop();

            let earned = 0, total = 0;
            // 1. 计算分数
            state.questions.forEach((q, idx) => { 
                total += getPoints(q.type); 
                const userAns = state.answers[idx];
                if (q.type !== 'short') { 
                    if (checkCorrect(q, userAns)) earned += getPoints(q.type);
                    else state.mistakesSession.push({ ...q, sessionIdx: idx });
                } else { 
                    const s = (state.answersScore[idx] !== undefined ? state.answersScore[idx] : Math.round((calculateFuzzyScore(q.answer, userAns||'')/100)*getPoints('short')));
                    earned += s;
                    if (s < getPoints('short')) state.mistakesSession.push({ ...q, sessionIdx: idx });
                } 
            });

            const timeSpent = Math.round((Date.now() - state.startTime) / 1000);
            const nowStr = new Date().toLocaleString('zh-CN', { month:'numeric', day:'numeric', hour:'numeric', minute:'numeric' });
            const name = localStorage.getItem('user_name') || '同学';

            // 2. 写入 UI
            document.getElementById('res-score').innerText = earned; 
            document.getElementById('res-total').innerText = total; 
            document.getElementById('res-time').innerText = `${timeSpent}s`;
            document.getElementById('res-greeting').innerText = `${name}，你的本次练习成绩如下`; 
            document.getElementById('res-timestamp').innerText = `练习结束时间：${nowStr}`;

            // 3. 切换视图（必须先切换，Card 才有物理尺寸）
            switchView('result');

            // 4. 渲染报表（单次调用，放入下一帧确保 DOM 就绪）
            requestAnimationFrame(() => {
                renderMSSPReport(name, earned, timeSpent);
            });

            // 5. 存储数据
            const h = JSON.parse(localStorage.getItem('quiz_history')) || []; 
            h.push({ dateStr: nowStr, timestamp: Date.now(), score: earned, total, scoreRatio: total>0?Math.round((earned/total)*100):0, time: timeSpent, qCount: state.questions.length, mCount: state.mistakesSession.length }); 
            localStorage.setItem('quiz_history', JSON.stringify(h));
            
            const m = JSON.parse(localStorage.getItem('quiz_mistakes')) || []; 
            state.mistakesSession.forEach(nm => { if(!m.find(x=>x.id===nm.id)) m.push(nm); }); 
            localStorage.setItem('quiz_mistakes', JSON.stringify(m));
        }