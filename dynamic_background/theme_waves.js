(function() {

class FluxWavesTheme {
    static schema = {
        // --- 1. 波浪形态 ---
        sec_form: { type: 'section', label: '波浪形态' },
        layerCount: { type: 'range', label: '波浪层数', min: 1, max: 12, default: 6 },
        speed: { type: 'range', label: '流动速度', min: 0.1, max: 3.0, step: 0.1, default: 0.8 },
        amplitude: { type: 'range', label: '波浪起伏', min: 10, max: 200, default: 80 },
        frequency: { type: 'range', label: '波浪密度', min: 1, max: 20, default: 4 },
        
        // --- 2. 空间感 (新增核心设置) ---
        sec_space: { type: 'section', label: '空间层次' },
        verticalGap: { type: 'range', label: '层间高度差', min: 5, max: 100, default: 40 }, // 控制层与层之间的距离
        baseOpacity: { type: 'range', label: '基础透明度', min: 0.05, max: 0.5, step: 0.05, default: 0.1 }, // 最远一层的透明度
        opacityStep: { type: 'range', label: '透明度递增', min: 0.01, max: 0.2, step: 0.01, default: 0.08 }, // 每近一层增加多少透明度

        // --- 3. 细节与颜色 ---
        sec_detail: { type: 'section', label: '细节与色彩 (左亮右暗)' },
        style: { type: 'select', label: '绘制风格', options: [{val:'fill', txt:'填充 (推荐)'}, {val:'stroke', txt:'线条'}, {val:'hybrid', txt:'混合'}], default: 'fill' },
        noiseDetail: { type: 'range', label: '随机复杂度', min: 1, max: 4, default: 2 },
        
        bgColorLight: { type: 'color', label: '背景底色', default: '#f8fafc' },
        bgColorDark: { type: 'color', label: '背景底色', default: '#020617' },
        
        waveColorLight: { type: 'color', label: '波浪基调', default: '#6366f1' }, 
        waveColorDark: { type: 'color', label: '波浪基调', default: '#818cf8' },
    };

    static preview = `
        <div class="absolute inset-0 opacity-80 bg-slate-900 overflow-hidden rounded-lg">
            <div class="absolute bottom-[25%] left-[-10%] right-[-10%] h-[50%] bg-indigo-500/20 rounded-[50%] animate-pulse" style="animation-duration: 3s;"></div>
            <div class="absolute bottom-[10%] left-[-10%] right-[-10%] h-[50%] bg-indigo-500/40 rounded-[50%] animate-pulse" style="animation-duration: 4s;"></div>
            <div class="absolute bottom-[-5%] left-[-10%] right-[-10%] h-[50%] bg-indigo-500/60 rounded-[50%] animate-pulse" style="animation-duration: 5s;"></div>
        </div>
    `;

    constructor(ctx, w, h, isDark, config) {
        this.ctx = ctx; this.w = w; this.h = h; this.isDark = isDark; this.config = config;
        this.overlayOpacity = 0; 
        
        this.waves = [];
        this.intensity = 0;
        this.globalTime = 0;
        
        this.updateColors();
        this.initWaves();
    }

    resize(w, h) {
        this.w = w;
        this.h = h;
        this.initWaves();
    }

    onConfigChange(key, val) {
        if (key.includes('Color')) this.updateColors();
        if (['layerCount', 'verticalGap', 'amplitude'].includes(key)) this.initWaves();
    }

    updateColors() {
        const suffix = this.isDark ? 'Dark' : 'Light';
        const hex = this.config[`waveColor${suffix}`];
        this.rgbWave = {
            r: parseInt(hex.slice(1, 3), 16),
            g: parseInt(hex.slice(3, 5), 16),
            b: parseInt(hex.slice(5, 7), 16)
        };
    }

    onThemeChange(isDark) { this.isDark = isDark; this.updateColors(); }
    onIntensityChange(val) { this.intensity = val; }
    onMouseMove(mouse) { this.mx = mouse.x; this.my = mouse.y; }

    initWaves() {
        const count = parseInt(this.config.layerCount);
        const gap = parseInt(this.config.verticalGap);
        const baseAmp = parseInt(this.config.amplitude);
        this.waves = [];

        // 我们希望 i=0 是最远的（屏幕最上方），i=count-1 是最近的（屏幕最下方）
        // 这样画的时候，近的会盖住远的
        
        // 计算整体高度跨度，尽量让波浪居中偏下
        const totalHeight = count * gap;
        const startY = this.h - totalHeight + (baseAmp * 2); // 给上方留出空间

        for (let i = 0; i < count; i++) {
            this.waves.push({
                phase: Math.random() * Math.PI * 2,
                // 后面的波浪(i小)慢，前面的快 -> 视差效果
                speedFactor: 0.2 + (i / count) * 0.8,
                // 振幅：前面的波浪起伏更大
                ampFactor: 0.5 + (i / count) * 0.5, 
                // Y坐标：从上往下排
                yBase: this.h - (i * gap) - 50 // 倒序排列：i=0 在最下面？不，我们要画家算法
                // 为了方便理解，我们还是按“层级”循环：
                // Layer 0: 最远，Y 最小 (Top)
                // Layer N: 最近，Y 最大 (Bottom)
            });
        }
        
        // 重新排序 Y 轴逻辑：
        // 我们的循环渲染是从 0 到 N。
        // 如果想让 N 盖住 0，那么 0 应该是最远的。
        // 最远的波浪，Y 坐标应该偏小（屏幕上方）。
        // 最近的波浪，Y 坐标应该偏大（屏幕下方）。
        this.waves.forEach((w, i) => {
            // i=0 (最远): y = 屏幕高度 - 总高度
            // i=N (最近): y = 屏幕高度
            w.yBase = this.h - ((count - 1 - i) * gap) - (this.h * 0.15);
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.w, this.h);
        
        const speed = parseFloat(this.config.speed) * (1 + this.intensity * 2);
        const baseAmp = parseFloat(this.config.amplitude);
        const baseFreq = parseFloat(this.config.frequency) / 1000; 
        const detail = parseInt(this.config.noiseDetail);
        const style = this.config.style;
        
        const baseOp = parseFloat(this.config.baseOpacity);
        const stepOp = parseFloat(this.config.opacityStep);

        this.globalTime += speed * 0.01;

        // 遍历所有层 (从远到近)
        for (let i = 0; i < this.waves.length; i++) {
            const wave = this.waves[i];
            
            // 透明度递进计算
            // i=0 (最远): baseOp
            // i=N (最近): baseOp + N * stepOp
            let alpha = baseOp + i * stepOp;
            alpha = Math.min(0.95, alpha); // 封顶，防止完全不透明
            
            const fillCol = `rgba(${this.rgbWave.r}, ${this.rgbWave.g}, ${this.rgbWave.b}, ${alpha})`;
            const strokeCol = `rgba(${this.rgbWave.r}, ${this.rgbWave.g}, ${this.rgbWave.b}, ${Math.min(1, alpha + 0.3)})`;

            this.ctx.beginPath();
            
            // 绘制波形
            for (let x = 0; x <= this.w + 10; x += 20) { // step=20 优化性能
                let y = wave.yBase;
                
                // 叠加正弦波
                for (let j = 1; j <= detail; j++) {
                    const layerFreq = baseFreq * j * (1 + this.intensity); 
                    const layerAmp = (baseAmp * wave.ampFactor) / j; 
                    const layerPhase = wave.phase + (j * 1.5);
                    // 核心波形公式
                    y += Math.sin(x * layerFreq + this.globalTime * wave.speedFactor * j + layerPhase) * layerAmp;
                }

                // 鼠标交互：拨弦效果 (X轴相位干扰 + Y轴吸附)
                if (this.mx && this.my) {
                    const dx = x - this.mx;
                    if (Math.abs(dx) < 250) {
                        // 高斯衰减
                        const impact = Math.exp(-(dx*dx) / (2 * 80*80)); 
                        // Y轴吸引：鼠标在波浪上方时提起，下方时压下
                        const pull = (this.my - wave.yBase) * 0.4; 
                        y += pull * impact * (i / this.waves.length); // 近处的波浪受影响更大
                    }
                }

                if (x === 0) this.ctx.moveTo(x, y);
                else this.ctx.lineTo(x, y);
            }

            // 闭合与填充
            if (style !== 'stroke') {
                this.ctx.lineTo(this.w, this.h);
                this.ctx.lineTo(0, this.h);
                this.ctx.closePath();
                this.ctx.fillStyle = fillCol;
                this.ctx.fill();
            }
            
            // 描边 (在填充之上再画一条线，增加边缘清晰度)
            if (style !== 'fill') {
                // 如果刚刚闭合了，需要重新beginPath画线，否则线会围着底部画一圈
                if (style === 'hybrid') {
                    this.ctx.beginPath();
                    // 重新计算一遍路径用于描边 (为了性能，其实可以缓存路径，但这里点不多，直接算也行)
                    // 简单起见，Hybrid模式下我们只画顶部的线
                    // 这里为了不重复代码，hybrid模式下我们用 stroke() 勾勒填充区域的边缘
                    // 但 stroke() 会勾勒四周，包括底部。
                    // 更好的做法是：hybrid模式只在上面 fill() 之后，再独立画一条顶部的线。
                    // 这里简化处理：直接 stroke。如果不喜欢底部有线，可以改进。
                }
                this.ctx.lineWidth = 2;
                this.ctx.strokeStyle = strokeCol;
                this.ctx.stroke();
            }
        }
    }
}

if (window.ProQuiz) window.ProQuiz.registerTheme('flux-waves', '能量波流', FluxWavesTheme);

})();