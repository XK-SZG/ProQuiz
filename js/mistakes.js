function renderMistakes() { 
            const list = document.getElementById('mistakes-list'); 
            const mistakes = JSON.parse(localStorage.getItem('quiz_mistakes')) || []; 
            if (mistakes.length === 0) { list.innerHTML = '<div class="text-center py-10 text-slate-400 dark:text-slate-600">目前没有错题！</div>'; 
            return; 
        } 
        list.innerHTML = mistakes.map(m => `
            <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <span class="text-xs font-bold text-rose-500 bg-rose-50 dark:bg-rose-900/30 px-2 py-1 rounded uppercase">
                    ${m.type}
                </span>
                <h4 class="font-bold text-slate-800 dark:text-slate-100 mt-2 mb-2">
                    ${m.question}
                </h4>
                <div class="text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 p-3 rounded space-y-2">
                    <p>
                        <span class="font-bold">解析：</span> 
                        ${m.analysis}
                    </p>
                    <p class="text-slate-500 dark:text-slate-500">
                        <span class="font-bold">答案：</span> 
                        ${m.type === 'short' ? m.answer : formatAnswer(m)}
                    </p>
                </div>
            </div>
            `).join(''); 
        }
        
        function clearMistakes() { 
            showConfirm('确定清空错题吗？', () => {
                localStorage.setItem('quiz_mistakes','[]'); 
                renderMistakes(); 
                updateDashboard();
            });
        }
        
        function loadSettingsToUI() {
            // 确保从本地读取最新的配置
            const savedCfg = JSON.parse(localStorage.getItem('quiz_cfg'));
            if (savedCfg) state.settings = savedCfg;

            document.getElementById('cfg-single').value = state.settings.single;
            document.getElementById('cfg-multiple').value = state.settings.multiple;
            document.getElementById('cfg-short').value = state.settings.short;
            document.getElementById('cfg-random-opts').checked = !!state.settings.randomizeOptions;
            
            // 给口令输入框赋值
            const pwdInput = document.getElementById('cfg-verify-pwd');
            if (pwdInput) {
                pwdInput.value = state.settings.verifyPassword || "";
            }

            renderThemeSelection();
        }

        // --- THEME UI LOGIC (AUTO PREVIEW) ---

        function renderThemeSelection() {
            const grid = document.getElementById('theme-grid');
            if (!grid) return;
            
            const current = localStorage.getItem('quiz_bg_theme') || 'none';
            const themes = window.ProQuiz.themes;
            
            // 1. 无背景卡片
            let html = `
                <div onclick="selectBgTheme('none')" class="cursor-pointer p-3 rounded-xl border-2 transition-all group ${current==='none' ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'}">
                    <div class="h-12 bg-slate-100 dark:bg-slate-800 rounded-lg mb-2 flex items-center justify-center text-slate-400 group-hover:text-slate-500 transition-colors">
                        <i data-lucide="ban" class="w-6 h-6"></i>
                    </div>
                    <p class="text-xs font-bold text-center text-slate-600 dark:text-slate-300">无背景</p>
                </div>
            `;

            // 2. 动态生成主题卡片
            for (let id in themes) {
                const t = themes[id];
                const isActive = current === id;
                
                // 核心修改：从类定义中读取静态属性
                // 如果没有定义 preview，则使用默认图标
                const previewHtml = t.classRef.preview || 
                    `<div class="w-full h-full flex items-center justify-center text-indigo-300"><i data-lucide="image" class="w-5 h-5"></i></div>`;

                html += `
                <div onclick="selectBgTheme('${id}')" class="cursor-pointer p-3 rounded-xl border-2 transition-all group ${isActive ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'}">
                    <div class="h-12 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-100 dark:border-slate-700 rounded-lg mb-2 overflow-hidden relative shadow-sm group-hover:shadow-md transition-all">
                         ${previewHtml}
                    </div>
                    <p class="text-xs font-bold text-center text-slate-600 dark:text-slate-300">${t.name}</p>
                </div>
                `;
            }
            grid.innerHTML = html;
            lucide.createIcons();

            renderThemeConfigPanel(current);
        }

       function selectBgTheme(id) {
            localStorage.setItem('quiz_bg_theme', id);
            if (bgManager) bgManager.loadTheme(id);
            
            // 刷新 UI
            renderThemeSelection(); 
        }

        // 动态生成配置控件的核心函数 (支持分节)
        function renderThemeConfigPanel(themeId) {
            const container = document.getElementById('theme-config-area');
            const controlsDiv = document.getElementById('config-controls');
            
            // 1. 检查主题是否有 Schema
            const themeDef = window.ProQuiz.themes[themeId];
            if (!themeDef || !themeDef.classRef.schema) {
                container.classList.add('hidden');
                return;
            }

            // 2. 获取当前配置
            const config = bgManager ? bgManager.getEffectiveConfig(themeId) : {};
            const schema = themeDef.classRef.schema;

            // 3. 生成 HTML
            let html = '';
            for (const [key, field] of Object.entries(schema)) {
                // --- 新增：处理分节标题 ---
                if (field.type === 'section') {
                    html += `
                    <div class="col-span-full mt-4 mb-2 first:mt-0">
                        <h4 class="text-xs font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 pb-1">
                            ${field.label}
                        </h4>
                    </div>`;
                    continue; // 跳过后续输入框生成逻辑
                }
                // ------------------------

                const value = config[key] !== undefined ? config[key] : field.default;
                
                if (field.type === 'range') {
                    html += `
                    <div class="flex flex-col gap-1">
                        <div class="flex justify-between">
                            <label class="text-xs text-slate-500 dark:text-slate-400 font-medium">${field.label}</label>
                            <span class="text-xs font-mono text-slate-400" id="val-${key}">${value}</span>
                        </div>
                        <input type="range" min="${field.min}" max="${field.max}" step="${field.step||1}" value="${value}" 
                            oninput="updateBgConfig('${key}', this.value)" 
                            class="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600">
                    </div>`;
                } 
                else if (field.type === 'color') {
                    html += `
                    <div class="flex items-center justify-between border border-slate-200 dark:border-slate-700 p-2 rounded-lg bg-white dark:bg-slate-800/50">
                        <label class="text-xs text-slate-500 dark:text-slate-400 font-medium">${field.label}</label>
                        <div class="flex items-center gap-2">
                            <div class="w-4 h-4 rounded-full border border-slate-200 dark:border-slate-600 shadow-sm" style="background-color:${value}"></div>
                            <input type="color" value="${value}" 
                                oninput="updateBgConfig('${key}', this.value)" 
                                class="absolute opacity-0 w-8 h-8 cursor-pointer">
                        </div>
                    </div>`;
                }
                else if (field.type === 'select') {
                    const opts = field.options.map(o => `<option value="${o.val}" ${o.val===value?'selected':''}>${o.txt}</option>`).join('');
                    html += `
                    <div class="flex flex-col gap-1">
                        <label class="text-xs text-slate-500 dark:text-slate-400 font-medium">${field.label}</label>
                        <select onchange="updateBgConfig('${key}', this.value)" class="w-full p-1.5 text-xs bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:ring-1 focus:ring-indigo-500 text-slate-700 dark:text-slate-300">
                            ${opts}
                        </select>
                    </div>`;
                }
                else if (field.type === 'multiselect') {
                    const currentVals = Array.isArray(value) ? value : [field.default];
                    const optionsHtml = field.options.map(o => {
                        const isChecked = currentVals.includes(o.val) ? 'checked' : '';
                        return `
                        <label class="flex items-center gap-2 cursor-pointer bg-slate-50 dark:bg-slate-800 p-1.5 rounded border border-slate-200 dark:border-slate-700 hover:border-indigo-300 transition-colors">
                            <input type="checkbox" value="${o.val}" ${isChecked} 
                                onchange="updateMultiSelect('${key}', this)"
                                class="w-3.5 h-3.5 rounded text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600">
                            <span class="text-[10px] sm:text-xs text-slate-600 dark:text-slate-300 select-none">${o.txt}</span>
                        </label>
                        `;
                    }).join('');

                    html += `
                    <div class="flex flex-col gap-1 sm:col-span-2">
                        <label class="text-xs text-slate-500 dark:text-slate-400 font-medium">${field.label}</label>
                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            ${optionsHtml}
                        </div>
                    </div>`;
                }
                else if (field.type === 'text') {
                    html += `
                    <div class="flex flex-col gap-1 sm:col-span-2">
                        <label class="text-xs text-slate-500 dark:text-slate-400 font-medium">${field.label}</label>
                        <input type="text" value="${value}" 
                            onchange="updateBgConfig('${key}', this.value)" 
                            class="w-full p-2 text-xs bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:ring-1 focus:ring-indigo-500 text-slate-700 dark:text-slate-200">
                    </div>`;
                }
            }

            controlsDiv.innerHTML = html;
            container.classList.remove('hidden');
        }

        // 处理多选框变更的辅助函数
        function updateMultiSelect(key, checkbox) {
            // 1. 获取当前配置
            const currentConfig = bgManager ? bgManager.getEffectiveConfig(localStorage.getItem('quiz_bg_theme')) : {};
            let vals = Array.isArray(currentConfig[key]) ? currentConfig[key] : [];
            
            // 2. 更新数组
            if (checkbox.checked) {
                if (!vals.includes(checkbox.value)) vals.push(checkbox.value);
            } else {
                vals = vals.filter(v => v !== checkbox.value);
            }
            
            // 至少保留一个选项，防止为空导致逻辑错误
            if (vals.length === 0) {
                vals.push(checkbox.value); 
                checkbox.checked = true; // 强制回显
                return; // 不触发更新
            }

            // 3. 保存
            updateBgConfig(key, vals);
        }

        // 前端控件回调
        function updateBgConfig(key, value) {
            // 更新显示数值 (如果是滑块)
            const label = document.getElementById(`val-${key}`);
            if (label) label.innerText = value;

            // 通知 Manager
            if (bgManager) bgManager.updateConfig(key, value);
        }

        function resetThemeConfig() {
            const current = localStorage.getItem('quiz_bg_theme');
            if(current && current !== 'none') {
                localStorage.removeItem(`quiz_theme_cfg_${current}`);
                // 重新加载
                bgManager.loadTheme(current);
                renderThemeSelection(); // 刷新滑块位置
            }
        }
