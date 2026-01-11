// --- Theme: Configurable Grid (Dual Color Support) ---

(function() {

    class SimpleGridTheme {
        static schema = {
            // --- 1. 几何与运动 ---
            sec_geo: { type: 'section', label: '几何与运动' },
            gridSize: { type: 'range', label: '网格大小', min: 20, max: 150, default: 60 },
            lineWidth: { type: 'range', label: '线条粗细', min: 0.5, max: 5, step: 0.5, default: 1 },
            speedX: { type: 'range', label: '水平漂移', min: -2, max: 2, step: 0.1, default: 0.5 },
            speedY: { type: 'range', label: '垂直漂移', min: -2, max: 2, step: 0.1, default: 0.5 },
            
            // --- 2. 纹理图案 ---
            sec_pat: { type: 'section', label: '纹理填充' },
            fillType: { 
                type: 'select', 
                label: '填充图案', 
                options: [
                    {val:'none', txt:'无填充'}, 
                    {val:'checker', txt:'国际象棋'}, 
                    {val:'row', txt:'横向条纹'}, 
                    {val:'col', txt:'纵向条纹'}
                ], 
                default: 'none' 
            },
            fillOpacity: { type: 'range', label: '填充浓度', min: 0, max: 1, step: 0.05, default: 0.1 },

            // --- 3. 色彩配置 (左右对照) ---
            sec_col: { type: 'section', label: '色彩配置 (左：明亮 / 右：暗黑)' },
            
            // 第一行：背景底色
            bgColorLight: { type: 'color', label: '背景底色 (亮)', default: '#f8fafc' },
            bgColorDark: { type: 'color', label: '背景底色 (暗)', default: '#020617' },
            
            // 第二行：线条颜色
            lineColorLight: { type: 'color', label: '线条颜色 (亮)', default: '#6366f1' },
            lineColorDark: { type: 'color', label: '线条颜色 (暗)', default: '#4f46e5' },
            
            // 第三行：填充颜色
            fillColorLight: { type: 'color', label: '填充颜色 (亮)', default: '#818cf8' },
            fillColorDark: { type: 'color', label: '填充颜色 (暗)', default: '#4338ca' }
        };

        // 2. 静态预览 HTML
        static preview = `
            <div class="absolute inset-0 opacity-40 dark:opacity-30" 
                style="background-image: linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px); background-size: 12px 12px;">
            </div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-indigo-400/50 rounded-sm"></div>
        `;

        constructor(ctx, w, h, isDark, config) {
            this.ctx = ctx;
            this.w = w;
            this.h = h;
            this.isDark = isDark;
            this.config = config;
            
            this.overlayOpacity = 0; // 0遮罩，纯靠底色
            
            this.accumulatedX = 0;
            this.accumulatedY = 0;
            
            this.updateColors();
        }

        onConfigChange(key, val) {
            // 只要是颜色或透明度变化，就刷新缓存
            if (key.includes('Color') || key === 'fillOpacity') {
                this.updateColors();
            }
        }

        // 核心：根据当前模式选择颜色
        updateColors() {
            const suffix = this.isDark ? 'Dark' : 'Light';
            
            // 线条颜色
            this.lineStroke = this.config[`lineColor${suffix}`];
            
            // 填充颜色 (Hex -> RGBA)
            const hex = this.config[`fillColor${suffix}`];
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            this.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.config.fillOpacity})`;
        }

        resize(w, h) { this.w = w; this.h = h; }
        
        onThemeChange(isDark) { 
            this.isDark = isDark; 
            this.updateColors(); // 切换模式时立即更新颜色缓存
        } 
        
        onMouseMove(mouse) { 
            this.mx = mouse.px * 40; 
            this.my = mouse.py * 40; 
        }
        
        onIntensityChange(val) {
            this.boostSpeed = val * 3.0;
        }

        draw() {
            this.ctx.clearRect(0, 0, this.w, this.h);
            
            const size = parseInt(this.config.gridSize);
            const lw = parseFloat(this.config.lineWidth);
            const sx = parseFloat(this.config.speedX) + (this.boostSpeed || 0);
            const sy = parseFloat(this.config.speedY) + (this.boostSpeed || 0);
            const fillType = this.config.fillType;

            // 1. 更新累加位移
            this.accumulatedX += sx;
            this.accumulatedY += sy;

            // 周期重置
            const cycle = size * 2;
            if (Math.abs(this.accumulatedX) > cycle) {
                this.accumulatedX = this.accumulatedX % cycle;
            }
            if (Math.abs(this.accumulatedY) > cycle) {
                this.accumulatedY = this.accumulatedY % cycle;
            }

            // 2. 视觉偏移
            const visualOffsetX = this.accumulatedX + (this.mx || 0);
            const visualOffsetY = this.accumulatedY + (this.my || 0);

            // 3. 起始点
            const startX = Math.floor(visualOffsetX % size) - size;
            const startY = Math.floor(visualOffsetY % size) - size;

            // --- 绘制方格 ---
            if (fillType !== 'none') {
                this.ctx.fillStyle = this.fillStyle;
                
                for (let x = startX; x < this.w; x += size) {
                    for (let y = startY; y < this.h; y += size) {
                        const colIndex = Math.floor((x - visualOffsetX) / size);
                        const rowIndex = Math.floor((y - visualOffsetY) / size);
                        const c = Math.abs(colIndex);
                        const r = Math.abs(rowIndex);
                        
                        let shouldFill = false;
                        if (fillType === 'checker') shouldFill = (c + r) % 2 !== 0;
                        else if (fillType === 'row') shouldFill = r % 2 !== 0;
                        else if (fillType === 'col') shouldFill = c % 2 !== 0;

                        if (shouldFill) {
                            this.ctx.fillRect(x, y, size + 0.5, size + 0.5);
                        }
                    }
                }
            }

            // --- 绘制线条 ---
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.lineStroke;
            this.ctx.lineWidth = lw;

            for (let x = startX; x < this.w; x += size) {
                if (x > -lw && x < this.w + lw) {
                    this.ctx.moveTo(x, 0);
                    this.ctx.lineTo(x, this.h);
                }
            }
            for (let y = startY; y < this.h; y += size) {
                if (y > -lw && y < this.h + lw) {
                    this.ctx.moveTo(0, y);
                    this.ctx.lineTo(this.w, y);
                }
            }
            this.ctx.stroke();
        }
    }

    if (window.ProQuiz) {
        window.ProQuiz.registerTheme('simple-grid', '自定义网格', SimpleGridTheme);
    }

})();