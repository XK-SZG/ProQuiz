// --- 5. SCROLL MODE (v3.1 — Canvas sidebar, proportional scaling, Virtual List) ---

        // RAF throttle flags
        var _sMouseRaf = false;
        var _sScrollRaf = false;
        var _sMouseY = null;        // relative Y in sidebar, null = no fish-eye
        var _sStep = 2;             // vertical step per question (proportional, no gap)
        var _sCanvas = null;
        var _sCtx = null;

        // ---- 虚拟列表核心状态 ----
        var _vList = {
            itemHeights: [],      // 缓存每道题的高度
            prefixSums: [],       // 高度前缀和，用于快速计算 scrollTop 对应的索引
            totalHeight: 0,       // 列表总高度
            startIndex: -1,       // 当前渲染的起始索引
            endIndex: -1,         // 当前渲染的结束索引
            buffer: 5,            // 上下缓冲渲染的题目数量
            observer: null,       // ResizeObserver 实例
            defaultHeight: 250,   // 预估的默认题目高度
            isInitialized: false
        };

        function renderScrollMode() {
            var container = document.getElementById('scroll-container');
            var footer = document.getElementById('scroll-footer');
            var sidebar = document.getElementById('scroll-marker-sidebar');
            var singleCont = document.getElementById('single-container');

            // 1. 容器切换
            if (singleCont) singleCont.classList.add('hidden');
            container.classList.remove('hidden');
            footer.classList.remove('hidden');
            state.scrollSubmitted = false;

            // 2. 渲染题目卡片 (初始化虚拟列表)
            renderQuizCards();

            // 3. Canvas 侧边栏初始化
            if (sidebar) {
                sidebar.classList.remove('hidden');
                initSidebarCanvas(sidebar);

                // RAF 节流: mousemove
                window.addEventListener('mousemove', function(e) {
                    if (_sMouseRaf) return;
                    _sMouseRaf = true;
                    requestAnimationFrame(function() {
                        _sMouseRaf = false;
                        handleSidebarMouse(e);
                    });
                }, { passive: true });

                // RAF 节流: scroll
                window.addEventListener('scroll', function() {
                    if (_sScrollRaf) return;
                    _sScrollRaf = true;
                    requestAnimationFrame(function() {
                        _sScrollRaf = false;
                        drawSidebar();
                        updateGlobalProgress();
                        updateVirtualList(); // 触发虚拟列表更新
                    });
                }, { passive: true });

                // Canvas 点击 → 跳转题目
                if (_sCanvas) {
                    _sCanvas.addEventListener('click', function(e) {
                        var rect = _sCanvas.getBoundingClientRect();
                        var idx = yToIndex(e.clientY - rect.top);
                        if (idx >= 0) jumpToQuestion(idx);
                    });
                }

                // 窗口大小变化时重建 Canvas
                window.addEventListener('resize', function() {
                    if (sidebar && !sidebar.classList.contains('hidden')) {
                        initSidebarCanvas(sidebar);
                        drawSidebar();
                        updateVirtualList(); // 窗口大小改变可能影响可视区域
                    }
                });
            }

            // 4. 初始化
            drawSidebar();
            updateGlobalProgress();
        }

        // ---- Canvas 初始化 (v3.1: 等比缩放，不设最小高度) ----
        function initSidebarCanvas(sidebar) {
            // 隐藏旧 DOM 容器（如果还存在）
            var oldMC = document.getElementById('marker-container');
            if (oldMC) oldMC.style.display = 'none';
            var oldPtr = document.getElementById('sidebar-pointer');
            if (oldPtr) oldPtr.style.display = 'none';

            // 查找或创建 Canvas
            var canvas = document.getElementById('sidebar-canvas');
            if (!canvas) {
                canvas = document.createElement('canvas');
                canvas.id = 'sidebar-canvas';
                canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;';
                sidebar.appendChild(canvas);
            }

            var dpr = window.devicePixelRatio || 1;
            var navH = 80;
            var footH = 60;
            var availH = window.innerHeight - navH - footH;
            var count = state.questions.length || 1;

            // 等比填充：每个题目均分可用高度，无间隙，不设最小高度
            _sStep = availH / count;

            sidebar.style.top = navH + 'px';
            sidebar.style.height = availH + 'px';

            var dw = sidebar.clientWidth;
            canvas.width = dw * dpr;
            canvas.height = availH * dpr;
            canvas.style.width = dw + 'px';
            canvas.style.height = availH + 'px';

            _sCanvas = canvas;
            _sCtx = canvas.getContext('2d');
            _sCtx.scale(dpr, dpr);
        }

        // ---- 鼠标处理（鱼眼触发） ----
        function handleSidebarMouse(e) {
            var sidebar = document.getElementById('scroll-marker-sidebar');
            if (!sidebar || sidebar.classList.contains('hidden')) {
                _sMouseY = null;
                drawSidebar();
                return;
            }
            var rect = sidebar.getBoundingClientRect();
            if (e.clientX > rect.left - 150 && e.clientX < rect.right + 100 &&
                e.clientY > rect.top && e.clientY < rect.bottom) {
                _sMouseY = e.clientY - rect.top;
            } else {
                _sMouseY = null;
            }
            drawSidebar();
        }

        // ---- Y 坐标 → 题目索引 ----
        function yToIndex(canvasY) {
            if (state.questions.length === 0) return -1;
            var idx = Math.floor(canvasY / _sStep);
            if (idx < 0) return 0;
            if (idx >= state.questions.length) return state.questions.length - 1;
            return idx;
        }

        // ---- Canvas 绘制全量侧边栏 (v3.1: 等比步长，指针与 marker 坐标系一致) ----
        function drawSidebar() {
            if (!_sCtx || !_sCanvas) return;
            var ctx = _sCtx;
            var canvas = _sCanvas;
            var dpr = window.devicePixelRatio || 1;
            var w = canvas.width / dpr;
            var h = canvas.height / dpr;

            ctx.clearRect(0, 0, w, h);

            var count = state.questions.length;
            if (count === 0) return;

            var isDark = document.documentElement.classList.contains('dark');
            var baseW = window.innerWidth >= 1024 ? FISHEYE_CONFIG.desktopBaseWidth : FISHEYE_CONFIG.baseWidth;
            var step = _sStep;          // 每道题的高度步长
            var baseH = _sStep;         // 基础高度 = 步长（无间隙）
            var defColor = isDark ? '#334155' : '#cbd5e1';
            var doneColor = '#6366f1';
            var radius = FISHEYE_CONFIG.radius;
            var maxScale = FISHEYE_CONFIG.maxScale;

            // 预计算每道题的鱼眼缩放
            var scales = new Float32Array(count);
            if (_sMouseY !== null) {
                for (var i = 0; i < count; i++) {
                    var cY = i * step + baseH / 2;
                    var dY = Math.abs(_sMouseY - cY);
                    if (dY < radius) {
                        var cosD = Math.cos((dY / radius) * (Math.PI / 2));
                        scales[i] = 1 + (maxScale - 1) * cosD * cosD;
                    } else {
                        scales[i] = 1;
                    }
                }
            }

            // 绘制每个 marker
            for (var i = 0; i < count; i++) {
                var sc = scales[i] || 1;
                var hh = baseH * sc;
                var ww = baseW * sc;
                // 以步长中心为锚点放大，保持逻辑位置不变
                var drawY = i * step + (baseH - hh) / 2;

                // 裁剪到可视区
                var top2 = Math.max(0, drawY);
                var bot2 = Math.min(h, drawY + hh);
                if (bot2 <= 0 || top2 >= h) continue;

                var ans = state.answers[i];
                var done = (ans !== undefined && ans !== null && ans !== '' &&
                           (!Array.isArray(ans) || ans.length > 0));

                ctx.globalAlpha = sc > 1.2 ? Math.min(1, 1 + (sc - 1) * 0.25) : 1;
                ctx.fillStyle = done ? doneColor : defColor;

                // 圆角矩形
                var rx = Math.min(2, hh / 2);
                ctx.beginPath();
                ctx.moveTo(rx, top2);
                ctx.lineTo(ww - rx, top2);
                ctx.arcTo(ww, top2, ww, top2 + rx, rx);
                ctx.lineTo(ww, bot2 - rx);
                ctx.arcTo(ww, bot2, ww - rx, bot2, rx);
                ctx.lineTo(rx, bot2);
                ctx.arcTo(0, bot2, 0, bot2 - rx, rx);
                ctx.lineTo(0, top2 + rx);
                ctx.arcTo(0, top2, rx, top2, rx);
                ctx.closePath();
                ctx.fill();

                // 已完成题目的发光效果
                if (done) {
                    ctx.shadowColor = 'rgba(99,102,241,0.5)';
                    ctx.shadowBlur = Math.max(2, 4 * sc);
                    ctx.fill();
                    ctx.shadowColor = 'transparent';
                    ctx.shadowBlur = 0;
                }
            }

            ctx.globalAlpha = 1;

            // 绿色滚动指针 — 与 marker 共用同一坐标系
            var st = window.scrollY;
            var dh = document.documentElement.scrollHeight - window.innerHeight;
            if (dh > 0) {
                var pct = Math.min(1, st / dh);
                var pY = pct * h;
                ctx.fillStyle = '#10b981';
                ctx.shadowColor = '#10b981';
                ctx.shadowBlur = 12;
                ctx.fillRect(0, pY - 2, Math.max(baseW * 2, 12), 4);
                ctx.shadowColor = 'transparent';
                ctx.shadowBlur = 0;
            }
        }

        // ---- 题目卡片渲染（阶段二：虚拟列表） ----
        function renderQuizCards() {
            var container = document.getElementById('scroll-container');
            
            // 1. 事件委托：在父容器上统一监听 change 和 input 事件
            if (!container.dataset.delegated) {
                // 使用 input 事件处理简答题防抖保存
                var debounceTimer = null;
                container.addEventListener('input', function(e) {
                    var target = e.target;
                    if (target.tagName === 'TEXTAREA') {
                        clearTimeout(debounceTimer);
                        var qidx = parseInt(target.dataset.qidx);
                        var val = target.value;
                        debounceTimer = setTimeout(function() {
                            recordScrollAnswer(qidx, val);
                        }, 300); // 300ms 防抖
                    }
                });

                container.addEventListener('change', function(e) {
                    var target = e.target;
                    if (target.tagName === 'INPUT' && (target.type === 'radio' || target.type === 'checkbox')) {
                        var lbl = target.closest('.scroll-option-lbl');
                        if (lbl) {
                            var qidx = parseInt(lbl.dataset.qidx);
                            var oid = parseInt(lbl.dataset.oid);
                            if (target.type === 'radio') {
                                recordScrollAnswer(qidx, oid);
                            } else {
                                recordScrollAnswer(qidx, null);
                            }
                        }
                    }
                });
                container.dataset.delegated = 'true';
            }

            // 2. 初始化虚拟列表状态
            var total = state.questions.length;
            _vList.itemHeights = new Array(total).fill(_vList.defaultHeight);
            _vList.prefixSums = new Array(total + 1).fill(0);
            _vList.isInitialized = true;
            _vList.startIndex = -1;
            _vList.endIndex = -1;
            
            // 初始化前缀和
            for (var i = 0; i < total; i++) {
                _vList.prefixSums[i + 1] = _vList.prefixSums[i] + _vList.itemHeights[i];
            }
            _vList.totalHeight = _vList.prefixSums[total];

            // 设置容器总高度，撑开滚动条
            container.style.position = 'relative';
            container.style.height = _vList.totalHeight + 'px';
            container.innerHTML = ''; // 清空旧内容

            // 初始化 ResizeObserver 监听卡片高度变化
            if (_vList.observer) {
                _vList.observer.disconnect();
            }
            _vList.observer = new ResizeObserver(function(entries) {
                var changed = false;
                for (var i = 0; i < entries.length; i++) {
                    var entry = entries[i];
                    var target = entry.target;
                    var idx = parseInt(target.dataset.idx);
                    if (!isNaN(idx)) {
                        var newHeight = entry.borderBoxSize ? entry.borderBoxSize[0].blockSize : entry.contentRect.height;
                        // 加上 margin/gap 的预估值 (这里假设卡片间距为 24px, 即 space-y-6)
                        newHeight += 24; 
                        if (Math.abs(_vList.itemHeights[idx] - newHeight) > 2) {
                            _vList.itemHeights[idx] = newHeight;
                            changed = true;
                        }
                    }
                }
                if (changed) {
                    updatePrefixSums();
                    updateVirtualList();
                }
            });

            // 初始渲染
            updateVirtualList();
        }

        // 更新高度前缀和
        function updatePrefixSums() {
            var total = state.questions.length;
            for (var i = 0; i < total; i++) {
                _vList.prefixSums[i + 1] = _vList.prefixSums[i] + _vList.itemHeights[i];
            }
            _vList.totalHeight = _vList.prefixSums[total];
            var container = document.getElementById('scroll-container');
            if (container) {
                container.style.height = _vList.totalHeight + 'px';
            }
        }

        // 二分查找当前 scrollTop 对应的起始索引
        function findStartIndex(scrollTop) {
            var left = 0;
            var right = state.questions.length;
            while (left < right) {
                var mid = Math.floor((left + right) / 2);
                if (_vList.prefixSums[mid] <= scrollTop) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            return Math.max(0, left - 1);
        }

        // 核心：更新虚拟列表视图
        function updateVirtualList() {
            if (!_vList.isInitialized) return;
            
            var container = document.getElementById('scroll-container');
            if (!container || container.classList.contains('hidden')) return;

            var scrollTop = window.scrollY || document.documentElement.scrollTop;
            // 减去顶部导航栏的高度补偿
            scrollTop = Math.max(0, scrollTop - 80); 
            var viewportHeight = window.innerHeight;

            // 计算可视区域的起始和结束索引
            var startIdx = findStartIndex(scrollTop);
            var endIdx = startIdx;
            while (endIdx < state.questions.length && _vList.prefixSums[endIdx] < scrollTop + viewportHeight) {
                endIdx++;
            }

            // 加上缓冲区
            startIdx = Math.max(0, startIdx - _vList.buffer);
            endIdx = Math.min(state.questions.length, endIdx + _vList.buffer);

            // 如果渲染范围没有变化，则不重新渲染
            if (startIdx === _vList.startIndex && endIdx === _vList.endIndex && container.children.length > 0) {
                return;
            }

            _vList.startIndex = startIdx;
            _vList.endIndex = endIdx;

            // 收集当前已渲染的节点，用于复用
            var existingNodes = {};
            var children = Array.from(container.children);
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                var idx = parseInt(child.dataset.idx);
                if (!isNaN(idx)) {
                    existingNodes[idx] = child;
                }
            }

            // 创建文档片段，减少 DOM 操作
            var fragment = document.createDocumentFragment();

            for (var idx = startIdx; idx < endIdx; idx++) {
                var node = existingNodes[idx];
                if (!node) {
                    // 节点不存在，创建新节点
                    node = createCardNode(idx);
                    _vList.observer.observe(node);
                } else {
                    // 节点已存在，从 existingNodes 中移除，表示被复用
                    delete existingNodes[idx];
                }
                
                // 绝对定位，根据前缀和设置 top
                node.style.position = 'absolute';
                node.style.top = _vList.prefixSums[idx] + 'px';
                node.style.left = '0';
                node.style.right = '0';
                
                fragment.appendChild(node);
            }

            // 移除不再可视区域内的节点
            for (var key in existingNodes) {
                var nodeToRemove = existingNodes[key];
                _vList.observer.unobserve(nodeToRemove);
                container.removeChild(nodeToRemove);
            }

            // 将新节点添加到容器
            container.appendChild(fragment);
        }

        // 创建单个题目卡片 DOM 节点
        function createCardNode(idx) {
            var q = state.questions[idx];
            var div = document.createElement('div');
            div.className = "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border-2 border-slate-200 dark:border-slate-800 relative";
            div.id = 'card-' + idx;
            div.dataset.idx = idx; // 记录索引

            var content = '';
            var ans = state.answers[idx]; // 获取当前答案状态

            // 搜索高亮处理
            var qText = q.question;
            var isMatch = _searchState && _searchState.isActive && _searchState.matches.includes(idx);
            var isCurrentMatch = isMatch && _searchState.matches[_searchState.currentIndex] === idx;
            
            if (isMatch) {
                qText = highlightText(qText, _searchState.query);
                if (isCurrentMatch) {
                    div.classList.add('ring-4', 'ring-amber-400', 'dark:ring-amber-500');
                }
            }

            if (q.type === 'single' || q.type === 'judge') {
                content = '<div class="grid gap-2 mt-3">' + q.options.map(function(opt, oid) {
                    var isChecked = ans === oid ? 'checked' : '';
                    var optText = isMatch ? highlightText(opt, _searchState.query) : opt;
                    return '<label class="scroll-option-lbl flex items-center p-3 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-all" data-qidx="' + idx + '" data-oid="' + oid + '"><input type="radio" name="q_' + idx + '" value="' + oid + '" class="w-5 h-5 text-indigo-600" ' + isChecked + '><span class="ml-3 text-slate-700 dark:text-slate-300">' + optText + '</span></label>';
                }).join('') + '</div>';
            } else if (q.type === 'multiple') {
                content = '<div class="grid gap-2 mt-3">' + q.options.map(function(opt, oid) {
                    var isChecked = (Array.isArray(ans) && ans.includes(oid)) ? 'checked' : '';
                    var optText = isMatch ? highlightText(opt, _searchState.query) : opt;
                    return '<label class="scroll-option-lbl flex items-center p-3 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-all" data-qidx="' + idx + '" data-oid="' + oid + '"><input type="checkbox" name="q_' + idx + '" value="' + oid + '" class="w-5 h-5 text-indigo-600" ' + isChecked + '><span class="ml-3 text-slate-700 dark:text-slate-300">' + optText + '</span></label>';
                }).join('') + '</div>';
            } else {
                var textVal = ans || '';
                content = '<textarea id="q_input_' + idx + '" data-qidx="' + idx + '" class="w-full mt-3 p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm h-24 text-slate-700 dark:text-slate-100" placeholder="在此输入简答...">' + textVal + '</textarea>';
            }

            // 如果已经交卷，需要渲染解析和状态
            var analysisHtml = '';
            var extraClass = '';
            if (state.scrollSubmitted) {
                if (q.type !== 'short') {
                    var isCorrect = checkCorrect(q, ans);
                    extraClass = isCorrect ? 'border-emerald-500' : 'border-rose-500';
                    analysisHtml = '<div id="analysis-' + idx + '" class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 fade-in"><p class="text-sm text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 p-3 rounded-lg"><span class="font-bold">解析:</span> ' + q.analysis + '</p><p class="text-sm font-bold mt-2 text-slate-600 dark:text-slate-300">正确答案: ' + formatAnswer(q) + '</p></div>';
                } else {
                    var score = state.answersScore[idx] || 0;
                    var cc = score === getPoints('short') ? 'emerald' : (score > 0 ? 'amber' : 'rose');
                    extraClass = 'border-' + cc + '-500';
                    var pct2 = (score / getPoints('short')) * 100;
                    analysisHtml = '<div id="analysis-' + idx + '" class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 fade-in"><div class="mb-3"><div class="flex justify-between items-end mb-1"><span class="text-sm font-bold text-slate-500 dark:text-slate-400">系统评分</span><span class="text-lg font-bold text-' + cc + '-600 dark:text-' + cc + '-400">' + score + ' / ' + getPoints('short') + '</span></div><div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2"><div class="bg-' + cc + '-500 h-2 rounded-full" style="width: ' + pct2 + '%"></div></div></div><p class="text-sm text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 p-3 rounded-lg"><span class="font-bold">参考答案:</span> ' + q.answer + '<br><br><span class="font-bold">解析:</span> ' + q.analysis + '</p></div>';
                }
            } else {
                analysisHtml = '<div id="analysis-' + idx + '" class="hidden mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 fade-in"></div>';
            }

            if (extraClass) {
                div.className = div.className.replace('border-slate-200 dark:border-slate-800', extraClass);
            }

            div.innerHTML = '<div class="flex justify-between mb-2"><span class="text-xs font-bold text-slate-400">#' + (idx + 1) + ' ' + q.type.toUpperCase() + '</span><span class="text-xs font-bold text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-400 px-2 py-1 rounded">' + getPoints(q.type) + '分</span></div><h4 class="font-bold text-slate-800 dark:text-slate-100 text-lg">' + qText + '</h4>' + content + analysisHtml;
            
            // 如果已交卷，禁用输入并标记选项颜色
            if (state.scrollSubmitted) {
                var inputs = div.querySelectorAll('input, textarea');
                inputs.forEach(function(inp) { inp.disabled = true; });
                
                if (q.type !== 'short') {
                    var labels = div.querySelectorAll('.scroll-option-lbl');
                    labels.forEach(function(lbl) {
                        var oid = parseInt(lbl.dataset.oid);
                        var isSel = (q.type === 'single' || q.type === 'judge') ? ans === oid : (ans || []).includes(oid);
                        var isAns = (q.type === 'single' || q.type === 'judge') ? q.answer === oid : q.answer.includes(oid);
                        if (isAns) lbl.classList.add('scroll-opt-correct');
                        else if (isSel) lbl.classList.add('scroll-opt-wrong');
                    });
                }
            }

            return div;
        }

        // ---- 跳转 (适配虚拟列表) ----
        function jumpToQuestion(idx) {
            if (idx < 0 || idx >= state.questions.length) return;
            
            var offset = 80; // 顶部导航栏高度
            var targetScrollTop = _vList.prefixSums[idx];
            
            window.scrollTo({ top: targetScrollTop - offset, behavior: 'smooth' });
        }

        // ---- 答题记录（v3: 追踪 answeredCount） ----
        function recordScrollAnswer(qIdx, val) {
            if (state.scrollSubmitted) return;
            var q = state.questions[qIdx];

            var prev = state.answers[qIdx];
            var wasAnswered = (prev !== undefined && prev !== null && prev !== '' &&
                              (!Array.isArray(prev) || prev.length > 0));

            if (q.type === 'single' || q.type === 'judge') {
                state.answers[qIdx] = val;
            } else if (q.type === 'multiple') {
                // 对于多选，我们需要从 DOM 中获取当前选中的状态
                // 因为虚拟列表可能卸载了部分 DOM，所以最好直接操作 state
                // 但由于事件委托，我们只知道当前点击的 checkbox
                // 所以我们需要维护一个数组
                var currentAns = state.answers[qIdx] || [];
                var checkbox = document.querySelector('input[name="q_' + qIdx + '"][value="' + val + '"]');
                // 如果是通过点击触发的，val 是 null，我们需要重新收集当前可视区域内该题的所有 checkbox
                if (val === null) {
                    var cbs = document.querySelectorAll('input[name="q_' + qIdx + '"]:checked');
                    state.answers[qIdx] = Array.from(cbs).map(function(c) { return parseInt(c.value); }).sort();
                } else {
                    // 如果直接传了 val (目前没用到，预留)
                }
            } else {
                state.answers[qIdx] = val;
            }

            var cur = state.answers[qIdx];
            var isAnswered = (cur !== undefined && cur !== null && cur !== '' &&
                             (!Array.isArray(cur) || cur.length > 0));

            if (!wasAnswered && isAnswered) {
                state.answeredCount = (state.answeredCount || 0) + 1;
            } else if (wasAnswered && !isAnswered) {
                state.answeredCount = Math.max(0, (state.answeredCount || 0) - 1);
            }

            drawSidebar();
            updateGlobalProgress();
        }

        function updateSideMarker(idx) {
            drawSidebar();
        }

        // ---- 自定义搜索功能 (适配虚拟列表) ----
        var _searchState = {
            isActive: false,
            query: '',
            matches: [],
            currentIndex: -1
        };

        function initCustomSearch() {
            var searchBar = document.getElementById('custom-search-bar');
            var searchInput = document.getElementById('custom-search-input');
            var searchPrev = document.getElementById('custom-search-prev');
            var searchNext = document.getElementById('custom-search-next');
            var searchClose = document.getElementById('custom-search-close');
            var searchCount = document.getElementById('custom-search-count');

            if (!searchBar) return;

            // 拦截 Ctrl+F / Cmd+F
            window.addEventListener('keydown', function(e) {
                if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
                    // 只有在滚动模式下才拦截
                    var scrollContainer = document.getElementById('scroll-container');
                    if (scrollContainer && !scrollContainer.classList.contains('hidden')) {
                        e.preventDefault();
                        toggleSearchBar(true);
                    }
                }
                // Esc 关闭搜索
                if (e.key === 'Escape' && _searchState.isActive) {
                    toggleSearchBar(false);
                }
            });

            function toggleSearchBar(show) {
                _searchState.isActive = show;
                if (show) {
                    searchBar.classList.remove('hidden');
                    // 延迟一点点以触发动画
                    setTimeout(function() {
                        searchBar.classList.remove('translate-y-[-20px]', 'opacity-0');
                        searchInput.focus();
                    }, 10);
                } else {
                    searchBar.classList.add('translate-y-[-20px]', 'opacity-0');
                    setTimeout(function() {
                        searchBar.classList.add('hidden');
                        clearSearch();
                    }, 300);
                }
            }

            searchClose.addEventListener('click', function() {
                toggleSearchBar(false);
            });

            searchInput.addEventListener('input', function(e) {
                performSearch(e.target.value);
            });

            searchInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    if (e.shiftKey) {
                        navigateSearch(-1);
                    } else {
                        navigateSearch(1);
                    }
                }
            });

            searchPrev.addEventListener('click', function() { navigateSearch(-1); });
            searchNext.addEventListener('click', function() { navigateSearch(1); });

            function performSearch(query) {
                _searchState.query = query.toLowerCase().trim();
                _searchState.matches = [];
                _searchState.currentIndex = -1;

                if (!_searchState.query) {
                    updateSearchUI();
                    // 清除高亮 (需要重新渲染当前可视区域)
                    updateVirtualList(true);
                    return;
                }

                // 在 state.questions 中搜索
                state.questions.forEach(function(q, idx) {
                    var matchFound = false;
                    if (q.question.toLowerCase().includes(_searchState.query)) {
                        matchFound = true;
                    } else if (q.options) {
                        for (var i = 0; i < q.options.length; i++) {
                            if (q.options[i].toLowerCase().includes(_searchState.query)) {
                                matchFound = true;
                                break;
                            }
                        }
                    }
                    if (matchFound) {
                        _searchState.matches.push(idx);
                    }
                });

                if (_searchState.matches.length > 0) {
                    _searchState.currentIndex = 0;
                    jumpToMatch();
                } else {
                    updateSearchUI();
                    updateVirtualList(true);
                }
            }

            function navigateSearch(direction) {
                if (_searchState.matches.length === 0) return;
                
                _searchState.currentIndex += direction;
                if (_searchState.currentIndex >= _searchState.matches.length) {
                    _searchState.currentIndex = 0;
                } else if (_searchState.currentIndex < 0) {
                    _searchState.currentIndex = _searchState.matches.length - 1;
                }
                
                jumpToMatch();
            }

            function jumpToMatch() {
                var targetIdx = _searchState.matches[_searchState.currentIndex];
                jumpToQuestion(targetIdx);
                updateSearchUI();
                // 强制更新虚拟列表以应用高亮
                updateVirtualList(true);
            }

            function updateSearchUI() {
                if (_searchState.matches.length === 0) {
                    searchCount.innerText = _searchState.query ? '0/0' : '';
                } else {
                    searchCount.innerText = (_searchState.currentIndex + 1) + '/' + _searchState.matches.length;
                }
            }

            function clearSearch() {
                searchInput.value = '';
                _searchState.query = '';
                _searchState.matches = [];
                _searchState.currentIndex = -1;
                updateSearchUI();
                updateVirtualList(true);
            }
        }

        // 辅助函数：高亮文本
        function highlightText(text, query) {
            if (!query) return text;
            // 简单的正则替换，忽略大小写
            var regex = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
            return text.replace(regex, '<mark class="bg-amber-200 dark:bg-amber-500/50 text-inherit rounded px-0.5">$1</mark>');
        }

        // 在页面加载完成后初始化搜索
        document.addEventListener('DOMContentLoaded', initCustomSearch);

        function handleScrollSubmit() {
            var btn = document.getElementById('scroll-submit-btn');
            if (state.scrollSubmitted) { finishSession(); return; }

            var missingCount = 0;
            state.questions.forEach(function(q, idx) {
                var ans = state.answers[idx];
                if (ans === undefined || ans === null || ans === '' ||
                    (Array.isArray(ans) && ans.length === 0)) {
                    missingCount++;
                }
            });

            var doSubmit = function() {
                clearInterval(state.timer);
                stopIntensityLoop();
                
                // UI 提示正在交卷
                var originalBtnText = btn.innerText;
                btn.innerText = '正在判分中...';
                btn.disabled = true;
                btn.classList.add('opacity-75', 'cursor-not-allowed');

                // 阶段二：使用 Web Worker 进行异步判分
                // 注意：由于本地 file:// 协议下无法直接加载 Worker 脚本，这里增加 try-catch 并在失败时降级
                var useWorker = false;
                if (window.Worker) {
                    try {
                        // 尝试判断是否在 file 协议下，如果是，直接降级，避免浏览器抛出 SecurityError
                        if (window.location.protocol === 'file:') {
                            console.warn('Running on file:// protocol, Web Worker is not supported due to CORS. Falling back to main thread.');
                            throw new Error('file:// protocol unsupported for Web Workers');
                        }
                        
                        var worker = new Worker('js/worker-scoring.js');
                        useWorker = true;
                        
                        worker.onmessage = function(e) {
                            var results = e.data;
                            
                            if (bgManager && results.totalEarned > 0) {
                                bgManager.triggerEvent('answer', {
                                    correct: true,
                                    text: 'Done!',
                                    score: results.totalEarned
                                });
                            }

                            state.scrollSubmitted = true;
                            state.mistakesSession = results.mistakes;
                            state.answersScore = results.answersScore;
                            
                            // 恢复按钮状态
                            btn.disabled = false;
                            btn.classList.remove('opacity-75', 'cursor-not-allowed');
                            btn.innerText = '查看分数 (点击跳转)';
                            btn.className = 'w-full bg-emerald-600 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-emerald-700 dark:shadow-none';

                            // 强制清空当前渲染的节点，让虚拟列表重新生成带有解析和正确样式的节点
                            var container = document.getElementById('scroll-container');
                            if (container) {
                                container.innerHTML = '';
                                _vList.startIndex = -1; // 强制触发更新
                                updateVirtualList();
                            }

                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            worker.terminate(); // 结束 worker
                        };

                        worker.onerror = function(error) {
                            console.error('Worker error:', error);
                            // 降级处理：如果 worker 失败，回退到主线程计算
                            fallbackScoring();
                            worker.terminate();
                        };

                        // 发送数据给 worker
                        worker.postMessage({
                            questions: state.questions,
                            answers: state.answers,
                            SCORE_RULES: SCORE_RULES
                        });
                    } catch (e) {
                        console.error('Failed to initialize Worker:', e);
                        useWorker = false;
                    }
                }
                
                if (!useWorker) {
                    // 浏览器不支持 Worker 或初始化失败，直接在主线程计算
                    fallbackScoring();
                }
                
                function fallbackScoring() {
                    if (bgManager) {
                        var totalEarned = 0;
                        state.questions.forEach(function(q, i) {
                            if (q.type !== 'short' && checkCorrect(q, state.answers[i])) totalEarned += getPoints(q.type);
                        });
                        if (totalEarned > 0) {
                            bgManager.triggerEvent('answer', {
                                correct: true,
                                text: 'Done!',
                                score: totalEarned
                            });
                        }
                    }

                    state.scrollSubmitted = true;
                    btn.disabled = false;
                    btn.classList.remove('opacity-75', 'cursor-not-allowed');
                    btn.innerText = '查看分数 (点击跳转)';
                    btn.className = 'w-full bg-emerald-600 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-emerald-700 dark:shadow-none';

                    state.questions.forEach(function(q, idx) {
                        if (q.type !== 'short') {
                            var isCorrect = checkCorrect(q, state.answers[idx]);
                            if (!isCorrect) state.mistakesSession.push(q);
                        } else {
                            var userAns = state.answers[idx] || '';
                            var pct2 = calculateFuzzyScore(q.answer, userAns);
                            var score = Math.round((pct2 / 100) * getPoints('short'));
                            state.answersScore[idx] = score;
                        }
                    });

                    var container = document.getElementById('scroll-container');
                    if (container) {
                        container.innerHTML = '';
                        _vList.startIndex = -1;
                        updateVirtualList();
                    }

                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            };

            if (missingCount > 0) {
                showConfirm('还有 ' + missingCount + ' 道题目未完成，确定要强制提交吗？', doSubmit, '题目未做完');
            } else {
                showConfirm('确定提交所有答案吗？', doSubmit);
            }
        }
