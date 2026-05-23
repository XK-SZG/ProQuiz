// --- 0. THEME & CUSTOM MODAL LOGIC ---
        function initTheme() {
            const savedTheme = localStorage.getItem('theme');
            const isDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
            applyTheme(isDark);
        }

        function applyTheme(isDark) {
            if (isDark) { document.documentElement.classList.add('dark'); localStorage.setItem('theme', 'dark'); } 
            else { document.documentElement.classList.remove('dark'); localStorage.setItem('theme', 'light'); }
            updateThemeIcon(isDark);
            if (window.myChart) updateChartTheme(isDark);
            
            // v1.4 通知背景管理器
            if (bgManager) bgManager.updateThemeMode(isDark);
        }

        function toggleTheme() {
            const isDark = document.documentElement.classList.contains('dark');
            applyTheme(!isDark);
        }

        function updateThemeIcon(isDark) {
            const iconBtn = document.getElementById('theme-toggle-btn');
            if (iconBtn) {
                iconBtn.innerHTML = isDark ? '<i data-lucide="sun" class="w-5 h-5"></i>' : '<i data-lucide="moon" class="w-5 h-5"></i>';
                lucide.createIcons();
            }
        }

        function updateChartTheme(isDark) {
            const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
            const textColor = isDark ? '#94A3B8' : '#64748B';
            if (window.myChart && window.myChart.options) {
                window.myChart.options.scales.y.grid.color = gridColor;
                window.myChart.options.scales.y.ticks.color = textColor;
                window.myChart.options.scales.x.grid.color = gridColor;
                window.myChart.options.scales.x.ticks.color = textColor;
                window.myChart.update();
            }
        }

        function closeModal() {
            document.getElementById('custom-modal').classList.add('hidden');
            // 恢复默认宽度，防止影响其他弹窗
            const mContent = document.getElementById('custom-modal-content');
            if (mContent) {
                mContent.classList.remove('max-w-4xl');
                mContent.classList.add('max-w-sm');
            }
        }
        function showAlert(msg, title = "提示") {
            const m = document.getElementById('custom-modal');
            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-msg').innerText = msg;
            const acts = document.getElementById('modal-actions');
            acts.innerHTML = `<button onclick="closeModal()" class="px-6 py-2 bg-slate-800 dark:bg-slate-700 text-white font-bold rounded-lg hover:bg-slate-900 dark:hover:bg-slate-600 w-full">知道了</button>`;
            m.classList.remove('hidden');
        }
        function showConfirm(msg, onConfirm, title = "请确认") {
            const m = document.getElementById('custom-modal');
            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-msg').innerText = msg;
            const acts = document.getElementById('modal-actions');
            const confirmBtnId = `btn-conf-${Date.now()}`;
            acts.innerHTML = `<button onclick="closeModal()" class="px-6 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 flex-1">取消</button><button id="${confirmBtnId}" class="px-6 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 flex-1">确定</button>`;
            m.classList.remove('hidden');
            document.getElementById(confirmBtnId).onclick = () => { closeModal(); onConfirm(); };
        }
        function handleExitQuiz() { showConfirm("确定退出当前练习吗？进度将丢失。", () => switchView('practice')); }
