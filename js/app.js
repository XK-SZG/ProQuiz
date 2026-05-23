// 基类接口参考 (仅作文档说明)
var BaseTheme = class {
    constructor(ctx, w, h, isDark, config) {
        this.ctx = ctx; this.w = w; this.h = h; this.isDark = isDark;
        this.overlayOpacity = 0.8; // 默认遮罩浓度
    }
    resize(w, h) { this.w = w; this.h = h; }
    draw() {} // 每一帧调用
    onMouseMove(mouse) {} // {x,y,px,py}
    onThemeChange(isDark) {}
    onIntensityChange(val) {} // 0.0 - 1.0
    destroy() {}
}

// v1.4 背景管理器实例
        var bgManager = null; 
        var securityAnimId = null;

        // --- 2. INIT ---
        window.onload = () => {
            // 1. 基础初始化
            initTheme(); 
            lucide.createIcons();
            initUserName();

            // 2. 初始化动态背景
            // 【重要】这里直接写 bgManager = ...，前面不要加 let/const/var
            // 确保我们修改的是上面定义的全局变量
            if (typeof window.BackgroundManager !== 'undefined') {
                bgManager = new window.BackgroundManager();
                const savedBg = localStorage.getItem('quiz_bg_theme') || 'none';
                
                // 延迟一帧加载主题，确保Canvas已准备好
                requestAnimationFrame(() => {
                    if (bgManager) bgManager.loadTheme(savedBg);
                });
            } else {
                console.error("BackgroundManager class not found. Check core.js");
            }
            
            // 检测是否有扫码验证请求
            const urlParams = new URLSearchParams(window.location.search);
            const msspCode = urlParams.get('mssp');
            if (msspCode) {
                // 延迟一点等页面和 Lucide 图标加载完
                setTimeout(() => runMSSPVerification(msspCode), 800);
            }

            // 3. 检测新用户
            if (!localStorage.getItem('user_name')) {
                setTimeout(() => {
                    showAlert('欢迎来到 ProQuiz！\n为了记录您的学习历程，请先在左上角设置一个昵称。', '新用户向导');
                    // document.getElementById('nav-username').focus();
                }, 500);
            }
            
            // 4. 检查外部数据
            if (typeof questionSets === 'undefined') {
                showAlert('未检测到题目数据！请确保 questions.js 文件存在并正确引入。', '严重错误');
            } else {
                // 构建全局 questionPool 以兼容旧代码
                window.questionPool = [];
                questionSets.forEach(set => {
                    window.questionPool = window.questionPool.concat(set.items);
                });
                updateDashboard();
                loadSettingsToUI();
            }
        };

        function initUserName() {
            const name = localStorage.getItem('user_name');
            const btn = document.getElementById('nav-user-btn');
            if (name) {
                btn.innerText = name;
            } else {
                btn.innerText = "点击设置名称";
            }
        }

        function openNameModal() {
            const lastUpdate = parseInt(localStorage.getItem('user_name_ts') || '0');
            const currentName = localStorage.getItem('user_name');
            const timeDiff = Date.now() - lastUpdate;
            const oneDay = 86400000;

            // 如果已经设置过且未满24小时
            if (currentName && timeDiff < oneDay) {
                const hoursLeft = Math.ceil((oneDay - timeDiff) / (1000 * 60 * 60));
                showAlert(`昵称已锁定。\n为了保持记录一致性，您在 ${hoursLeft} 小时内无法修改昵称。`, '无法修改');
                return;
            }

            // 构造输入型弹窗
            const m = document.getElementById('custom-modal');
            document.getElementById('modal-title').innerText = "设置你的昵称";
            // 插入输入框到 msg 区域
            document.getElementById('modal-msg').innerHTML = `
                <p class="mb-4 text-sm">请设置一个昵称用于记录成绩。<br><span class="text-rose-500 font-bold">注意：设置后24小时内不可修改。</span></p>
                <input type="text" id="modal-input-name" class="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg outline-none focus:border-indigo-500 text-center font-bold text-lg" placeholder="输入昵称" value="${currentName || ''}">
            `;
            
            const acts = document.getElementById('modal-actions');
            acts.innerHTML = `
                <button onclick="closeModal()" class="px-6 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 flex-1">取消</button>
                <button onclick="saveNameFromModal()" class="px-6 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 flex-1">确认</button>
            `;
            m.classList.remove('hidden');
            setTimeout(() => document.getElementById('modal-input-name').focus(), 100);
        }

        function saveNameFromModal() {
            const input = document.getElementById('modal-input-name');
            const val = input.value.trim();
            if (!val) {
                input.classList.add('ring-2', 'ring-rose-500');
                return;
            }
            localStorage.setItem('user_name', val);
            localStorage.setItem('user_name_ts', Date.now().toString());
            document.getElementById('nav-user-btn').innerText = val;
            closeModal();
            showAlert('昵称设置成功！', '系统提示');
        }

        function highlightNameBtn() {
            const container = document.getElementById('nav-user-container');
            container.classList.remove('name-highlight'); // 重置
            void container.offsetWidth; // 触发重绘
            container.classList.add('name-highlight');
        }

        function updateUserName() {
            const input = document.getElementById('nav-username');
            if (input.value.trim()) { localStorage.setItem('user_name', input.value.trim()); localStorage.setItem('user_name_ts', Date.now().toString()); input.disabled = true; showAlert('昵称已保存，24小时内不可修改。'); }
        }

        function switchView(viewId) {
            // 1. 停止计时器等逻辑 (保持原有代码)
            clearInterval(state.timer); 
            stopIntensityLoop();
            state.timerVal = 0;
            document.getElementById('timer-box').classList.add('hidden');

            // 2. 隐藏所有视图
            document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
            
            // 3. 显示目标视图
            const target = document.getElementById(`view-${viewId}`);
            if (target) target.classList.remove('hidden');

            // 4. 【关键】侧边索引栏显示逻辑
            const sidebar = document.getElementById('scroll-marker-sidebar');
            if (sidebar) {
                // 只有在 quiz 视图且模式包含 2way 时显示
                if (viewId === 'quiz' && state.mode && state.mode.includes('2way')) {
                    sidebar.classList.remove('hidden');
                } else {
                    sidebar.classList.add('hidden');
                }
            }

            // 5. 底部栏和其他逻辑 (保持原有代码)
            const footer = document.getElementById('main-footer');
            if (footer) {
                if (viewId === 'quiz' || viewId === 'verify-result') footer.classList.add('footer-hidden');
                else footer.classList.remove('footer-hidden');
            }

            // 进度条处理
            const progressBar = document.getElementById('global-progress-bar');
            if (progressBar && viewId !== 'quiz') {
                progressBar.style.width = '0%';
            }

            window.scrollTo(0, 0);
            lucide.createIcons();
        }

        
// --- 3. ALGORITHMS (V2) ---
        function calculateFuzzyScore(standard, user) {
            if (!user || !user.trim()) return 0;
            if (!standard) return 100;
            const strStd = standard.toLowerCase().trim();
            const strUser = user.toLowerCase().trim();
            if (strStd.length > 10 && strUser.length / strStd.length < 0.2) return 0; 
            if (strStd.length < 5) return strUser.includes(strStd) || strStd.includes(strUser) ? 100 : 0;
            const getFeatures = (text) => {
                const features = new Set();
                const enWords = text.match(/[a-z0-9]+/g) || [];
                enWords.forEach(w => features.add(w));
                const cnText = text.replace(/[^\u4e00-\u9fa5]/g, '');
                for (let i = 0; i < cnText.length - 1; i++) features.add(cnText.substring(i, i + 2));
                return features;
            };
            const featStd = getFeatures(strStd);
            const featUser = getFeatures(strUser);
            if (featStd.size === 0) return strUser.includes(strStd) ? 100 : 0;
            let hits = 0;
            featStd.forEach(token => { if (featUser.has(token)) hits++; });
            let scoreRatio = hits / featStd.size;
            if (scoreRatio < 0.15) return 0;
            let finalScore = scoreRatio >= 0.9 ? 100 : ((scoreRatio - 0.15) / 0.85) * 100;
            return Math.round(Math.max(0, Math.min(100, finalScore)));
        }

        function shuffleQuestionOptions(q) {
            if (q.type === 'short' || q.type === 'judge' || !q.options) return q;

            // 1. 创建带索引的选项备份
            let indexedOptions = q.options.map((text, index) => ({ text, originalIndex: index }));
            
            // 2. 打乱顺序
            for (let i = indexedOptions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [indexedOptions[i], indexedOptions[j]] = [indexedOptions[j], indexedOptions[i]];
            }

            // 3. 映射新选项文本
            const newOptions = indexedOptions.map(item => item.text);
            
            // 4. 计算并更新正确答案的新索引
            let newAnswer;
            if (q.type === 'single') {
                newAnswer = indexedOptions.findIndex(item => item.originalIndex === q.answer);
            } else if (q.type === 'multiple') {
                newAnswer = q.answer.map(oldIdx => 
                    indexedOptions.findIndex(item => item.originalIndex === oldIdx)
                ).sort((a, b) => a - b);
            }

            return { ...q, options: newOptions, answer: newAnswer };
        }

        function checkCorrect(q, ans) {
            if (q.type === 'short' || ans === undefined) return false;
            if (q.type === 'single' || q.type === 'judge') return ans === q.answer;
            if (q.type === 'multiple') return JSON.stringify(ans) === JSON.stringify(q.answer.sort());
            return false;
        }
        function formatAnswer(q) {
            if (q.type === 'single') return String.fromCharCode(65+q.answer);
            if (q.type === 'judge') return q.answer === 0 ? '正确' : '错误';
            if (q.type === 'multiple') {
                if (Array.isArray(q.answer)) {
                    return q.answer.map(i=>String.fromCharCode(65+i)).join('');
                }
                return '';
            }
            return q.answer;
        }
        function getPoints(type) { return SCORE_RULES[type] || 0; }
