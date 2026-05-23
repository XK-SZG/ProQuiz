// --- SETTINGS & AUTO-SAVE LOGIC (UPDATED) ---

        function renderFilters() { 
            const list = document.getElementById('filter-list'); 
            list.innerHTML = ''; 
            const filters = state.settings.filters || [];
            const total = filters.length;

            filters.forEach((f, idx) => { 
                const div = document.createElement('div'); 
                // 布局核心：手机端 flex-col (垂直排列)，桌面端 sm:flex-row (水平排列)
                div.className = "filter-item bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-3 sm:p-4 rounded-xl flex flex-col sm:flex-row sm:items-center gap-3 fade-in group transition-all hover:border-indigo-300 dark:hover:border-indigo-700"; 
                
                div.innerHTML = `
                <!-- 第一行 (手机): 序号 + 开关控件 -->
                <div class="flex items-center justify-between sm:justify-start w-full sm:w-auto gap-3">
                    <span class="font-bold text-slate-300 dark:text-slate-700 w-6 shrink-0 select-none">#${idx+1}</span>
                    
                    <div class="flex gap-2">
                        <!-- 显示/隐藏 -->
                        <div class="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                            <button onclick="updateFilter(${idx}, 'action', 'show')" class="px-2 sm:px-3 py-1 rounded text-xs font-bold transition-all ${f.action==='show'?'bg-white dark:bg-slate-700 shadow text-emerald-600 dark:text-emerald-400':'text-slate-500 hover:text-slate-700'}">显示</button>
                            <button onclick="updateFilter(${idx}, 'action', 'hide')" class="px-2 sm:px-3 py-1 rounded text-xs font-bold transition-all ${f.action==='hide'?'bg-white dark:bg-slate-700 shadow text-rose-600 dark:text-rose-400':'text-slate-500 hover:text-slate-700'}">隐藏</button>
                        </div>
                        <!-- 单个/范围 -->
                        <div class="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                            <button onclick="updateFilter(${idx}, 'type', 'single')" class="px-2 sm:px-3 py-1 rounded text-xs font-bold transition-all ${f.type==='single'?'bg-white dark:bg-slate-700 shadow text-indigo-600 dark:text-indigo-400':'text-slate-500 hover:text-slate-700'}">单个</button>
                            <button onclick="updateFilter(${idx}, 'type', 'range')" class="px-2 sm:px-3 py-1 rounded text-xs font-bold transition-all ${f.type==='range'?'bg-white dark:bg-slate-700 shadow text-indigo-600 dark:text-indigo-400':'text-slate-500 hover:text-slate-700'}">范围</button>
                        </div>
                    </div>
                </div>

                <!-- 第二行 (手机): ID 输入框 -->
                <div class="flex items-center gap-2 w-full sm:flex-1">
                    <input type="number" placeholder="ID" value="${f.val1||''}" onchange="updateFilter(${idx}, 'val1', this.value)" class="flex-1 w-full p-2 border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded text-sm text-center focus:border-indigo-500 outline-none transition-all placeholder-slate-300">
                    ${f.type === 'range' ? `
                        <span class="text-slate-400 font-bold">-</span>
                        <input type="number" placeholder="ID" value="${f.val2||''}" onchange="updateFilter(${idx}, 'val2', this.value)" class="flex-1 w-full p-2 border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded text-sm text-center focus:border-indigo-500 outline-none transition-all placeholder-slate-300">
                    ` : ''}
                </div>

                <!-- 第三行 (手机): 排序与删除按钮 -->
                <div class="flex items-center justify-end sm:justify-start gap-1 w-full sm:w-auto border-t sm:border-t-0 border-slate-100 dark:border-slate-800 pt-2 sm:pt-0 mt-1 sm:mt-0">
                    <!-- 上移 -->
                    <button onclick="moveFilter(${idx}, -1)" class="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors bg-slate-50 dark:bg-slate-800/50 sm:bg-transparent rounded-lg sm:rounded-none ${idx === 0 ? 'opacity-30 cursor-not-allowed' : ''}" title="上移优先级" ${idx === 0 ? 'disabled' : ''}>
                        <i data-lucide="arrow-up" class="w-4 h-4"></i>
                    </button>
                    <!-- 下移 -->
                    <button onclick="moveFilter(${idx}, 1)" class="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors bg-slate-50 dark:bg-slate-800/50 sm:bg-transparent rounded-lg sm:rounded-none ${idx === total - 1 ? 'opacity-30 cursor-not-allowed' : ''}" title="下移优先级" ${idx === total - 1 ? 'disabled' : ''}>
                        <i data-lucide="arrow-down" class="w-4 h-4"></i>
                    </button>
                    <div class="w-px h-4 bg-slate-200 dark:bg-slate-700 mx-1 hidden sm:block"></div>
                    <!-- 删除 -->
                    <button onclick="removeFilter(${idx})" class="p-2 text-slate-400 hover:text-white hover:bg-rose-500 transition-colors rounded-lg" title="删除规则">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </div>`; 
                list.appendChild(div); 
            }); 
            lucide.createIcons(); 
        }

        // 新增：移动规则位置
        function moveFilter(index, direction) {
            const filters = state.settings.filters;
            const newIndex = index + direction;

            // 边界检查
            if (newIndex >= 0 && newIndex < filters.length) {
                // 交换位置
                [filters[index], filters[newIndex]] = [filters[newIndex], filters[index]];
                renderFilters();
                autoSaveSettings(); // 实时保存
            }
        }

        function addFilter() { 
            state.settings.filters.push({action:'show',type:'single',val1:'',val2:''}); 
            renderFilters(); 
            autoSaveSettings(); // 实时保存
        }

        function removeFilter(i) { 
            state.settings.filters.splice(i,1); 
            renderFilters(); 
            autoSaveSettings(); // 实时保存
        }

        function updateFilter(idx, key, val) { 
            state.settings.filters[idx][key] = val; 
            renderFilters(); 
            autoSaveSettings(); // 实时保存
        }

        // 核心自动保存函数
        function autoSaveSettings() { 
            // 1. 同步输入框的值到 State
            const s = document.getElementById('cfg-single');
            const m = document.getElementById('cfg-multiple');
            const sh = document.getElementById('cfg-short');
            const pwd = document.getElementById('cfg-verify-pwd');
            
            // 仅当元素存在时更新（防止在非设置页面触发报错，虽然一般不会）
            const rndOpt = document.getElementById('cfg-random-opts');
            if(rndOpt) state.settings.randomizeOptions = rndOpt.checked;
            
            localStorage.setItem('quiz_cfg', JSON.stringify(state.settings));

            if(s) state.settings.single = parseInt(s.value) || 0; 
            if(m) state.settings.multiple = parseInt(m.value) || 0; 
            if(sh) state.settings.short = parseFloat(sh.value) || 0; 
            if(pwd) state.settings.verifyPassword = pwd.value;
            
            // 2. 写入本地存储
            localStorage.setItem('quiz_cfg', JSON.stringify(state.settings)); 
            
            // 可以在这里添加 Toast 提示，但为了不打扰用户，保持静默即可
            // console.log('Settings auto-saved');
        }
        function saveSettings() { state.settings.single=parseInt(document.getElementById('cfg-single').value); state.settings.multiple=parseInt(document.getElementById('cfg-multiple').value); state.settings.short=parseFloat(document.getElementById('cfg-short').value); localStorage.setItem('quiz_cfg', JSON.stringify(state.settings)); showAlert('设置已保存！'); }
        

        /**
         * MSSP 位流处理器
         * 用于在二进制层面精确操作比特位
         */
        var MSSPBitBuffer = class {
            constructor() {
                this.buffer = []; // 存储 8-bit 的数组
                this.currentByte = 0;
                this.bitOffset = 0;
            }

            // 写入指定位宽的值 (例如 write(15, 4) 写入 1111)
            write(value, bits) {
                for (let i = bits - 1; i >= 0; i--) {
                    const bit = (value >> i) & 1;
                    this.currentByte = (this.currentByte << 1) | bit;
                    this.bitOffset++;

                    if (this.bitOffset === 8) {
                        this.buffer.push(this.currentByte);
                        this.currentByte = 0;
                        this.bitOffset = 0;
                    }
                }
            }

            // 完成写入，处理末尾不足 8 位的情况
            finish() {
                if (this.bitOffset > 0) {
                    this.currentByte <<= (8 - this.bitOffset);
                    this.buffer.push(this.currentByte);
                }
                return new Uint8Array(this.buffer);
            }

            // 从 Uint8Array 加载数据用于读取
            static fromUint8Array(array) {
                const instance = new MSSPBitBuffer();
                instance.readBuffer = array;
                instance.readByteIdx = 0;
                instance.readBitIdx = 0;
                return instance;
            }

            // 读取指定位宽的值
            read(bits) {
                let value = 0;
                for (let i = 0; i < bits; i++) {
                    if (this.readByteIdx >= this.readBuffer.length) return null;
                    
                    const byte = this.readBuffer[this.readByteIdx];
                    const bit = (byte >> (7 - this.readBitIdx)) & 1;
                    value = (value << 1) | bit;
                    
                    this.readBitIdx++;
                    if (this.readBitIdx === 8) {
                        this.readByteIdx++;
                        this.readBitIdx = 0;
                    }
                }
                return value;
            }
        }

        /**
         * MSSP 字符编码转换
         * 映射范围：0-9, A-Z, a-z
         */
        var MSSPCodec = {
            ALPHABET: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',

            // 将 Uint8Array 转换为 Base62 字符串
            encode(uint8Array) {
                let hex = Array.from(uint8Array).map(b => b.toString(16).padStart(2, '0')).join('');
                let num = BigInt('0x' + hex);
                if (num === 0n) return '0';
                
                let res = '';
                while (num > 0n) {
                    res = this.ALPHABET[Number(num % 62n)] + res;
                    num /= 62n;
                }
                return res;
            },

            // 将 Base62 字符串还原为 Uint8Array
            decode(str) {
                let num = 0n;
                for (let char of str) {
                    num = num * 62n + BigInt(this.ALPHABET.indexOf(char));
                }
                let hex = num.toString(16);
                if (hex.length % 2 !== 0) hex = '0' + hex;
                
                const arr = new Uint8Array(hex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
                return arr;
            }
        };

        /**
         * MSSP 密码学组件
         * 负责生成数据指纹以及流加密混淆
         */
        var MSSPCrypto = {
            async generateFullHash(answersObj) {
                const sortedKeys = Object.keys(answersObj).sort((a, b) => a - b);
                const rawString = sortedKeys.map(k => `${k}:${JSON.stringify(answersObj[k])}`).join('|');
                
                // --- 保底逻辑：如果不支持 WebCrypto (如本地文件环境)，使用简单哈希 ---
                if (!window.crypto || !window.crypto.subtle) {
                    let hash = 0;
                    for (let i = 0; i < rawString.length; i++) {
                        hash = ((hash << 5) - hash) + rawString.charCodeAt(i);
                        hash |= 0;
                    }
                    return Math.abs(hash);
                }

                const msgBuffer = new TextEncoder().encode(rawString);
                const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
                const view = new DataView(hashBuffer);
                return view.getUint32(0) >>> 0;
            },

            async deriveStreamKey(teacherPassword, nonceHex, length) {
                // 关键点：确保 nonce 补齐 4 位十六进制，保证加解密输入一致
                const inputStr = teacherPassword + nonceHex;
                console.log("[MSSP] 密钥派生输入:", inputStr);
                const input = new TextEncoder().encode(inputStr);
                const hashBuffer = await crypto.subtle.digest('SHA-256', input);
                const hashArray = new Uint8Array(hashBuffer);
                
                const keyStream = new Uint8Array(length);
                for (let i = 0; i < length; i++) {
                    keyStream[i] = hashArray[i % hashArray.length];
                }
                return keyStream;
            },

            applyXOR(dataUint8Array, keyStream) {
                const result = new Uint8Array(dataUint8Array.length);
                for (let i = 0; i < dataUint8Array.length; i++) {
                    result[i] = dataUint8Array[i] ^ keyStream[i];
                }
                return result;
            }
        };

        var MSSP_CONFIG = {
            VERSION: 2,
            BASE_DATE: new Date('2026-01-01').getTime(),
            MAX_BIT_LENGTH: 17500 // 二维码建议的最大比特长度
        };
