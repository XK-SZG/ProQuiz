(function() {

class DigitalRainTheme {
    static schema = {
        // --- 1. 物理 ---
        sec_phy: { type: 'section', label: '雨滴物理' },
        density: { type: 'range', label: '雨滴密度', min: 10, max: 150, default: 80 },
        speed: { type: 'range', label: '下落速度', min: 1, max: 20, step: 1, default: 10 },
        length: { type: 'range', label: '拖尾长度', min: 5, max: 30, default: 15 },
        depthLevels: { type: 'select', label: '景深层级', options: [{val:'1', txt:'平面 (1层)'}, {val:'3', txt:'立体 (3层)'}, {val:'5', txt:'超立体 (5层)'}, {val:'7', txt:'沉浸 (7层)'}, {val:'9', txt:'全息 (9层)'}], default: '3' },

        // --- 2. 内容 ---
        sec_txt: { type: 'section', label: '字符内容' },
        fontSize: { type: 'range', label: '基础字号', min: 10, max: 32, default: 22 },
        charSet: { 
            type: 'select', 
            label: '字符集', 
            options: [
                {val:'binary', txt:'二进制 (01)'}, 
                {val:'matrix', txt:'黑客帝国 (半角假名)'}, 
                {val:'hex', txt:'十六进制 (0-F)'}, 
                {val:'custom', txt:'自定义文本'}
            ], 
            default: 'matrix' 
        },
        customText: { type: 'text', label: '自定义文本 (无分隔)', default: 'PROQUIZ' },

        // --- 3. 特效 ---
        sec_fx: { type: 'section', label: '视觉特效' },
        bloomStrength: { type: 'range', label: '辉光强度', min: 0, max: 20, default: 20 },
        glitchRate: { type: 'range', label: '故障概率', min: 0, max: 10, default: 0 },

        // --- 4. 色彩 (左亮右暗) ---
        sec_col: { type: 'section', label: '色彩配置 (左：明亮 / 右：暗黑)' },
        
        bgColorLight: { type: 'color', label: '背景底色', default: '#f0fdf4' }, // Green-50
        bgColorDark: { type: 'color', label: '背景底色', default: '#020617' }, // Slate-950
        
        primaryColorLight: { type: 'color', label: '雨滴颜色', default: '#16a34a' }, // Green-600
        primaryColorDark: { type: 'color', label: '雨滴颜色', default: '#22c55e' }, // Green-500
        
        headColorLight: { type: 'color', label: '头部高亮', default: '#14532d' }, // Green-900
        headColorDark: { type: 'color', label: '头部高亮', default: '#dcfce7' }, // Green-100
        
        flashColorLight: { type: 'color', label: '交互高亮', default: '#0ea5e9' }, // Sky-500
        flashColorDark: { type: 'color', label: '交互高亮', default: '#38bdf8' }, // Sky-400
        
        alarmColorLight: { type: 'color', label: '警报颜色', default: '#dc2626' }, // Red-600
        alarmColorDark: { type: 'color', label: '警报颜色', default: '#ef4444' }, // Red-500
    };

    static preview = `
        <div class="absolute inset-0 bg-black opacity-90"></div>
        <div class="absolute inset-0 flex justify-around overflow-hidden font-mono text-[8px] leading-none select-none pointer-events-none">
            <div class="flex flex-col items-center pt-2 opacity-80" style="background: linear-gradient(to bottom, transparent, #22c55e); -webkit-background-clip: text; color: transparent;">
                <span>1</span><span>0</span><span>1</span><span>0</span>
            </div>
            <div class="flex flex-col items-center pt-6 opacity-60" style="background: linear-gradient(to bottom, transparent, #22c55e); -webkit-background-clip: text; color: transparent;">
                <span>0</span><span>1</span>
            </div>
            <div class="flex flex-col items-center pt-1 opacity-90" style="background: linear-gradient(to bottom, transparent, #22c55e); -webkit-background-clip: text; color: transparent;">
                <span class="text-white drop-shadow-[0_0_2px_white]">1</span><span>0</span><span>1</span><span>1</span><span>0</span>
            </div>
            <!-- 模拟红色故障字符 -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500 font-bold text-[10px]">?</div>
        </div>
    `;

    constructor(ctx, w, h, isDark, config) {
        this.ctx = ctx; this.w = w; this.h = h; this.isDark = isDark; this.config = config;
        this.overlayOpacity = 0; 
        this.columns = [];
        this.intensity = 0;
        this.windOffset = 0; 
        this.lastMx = 0;     
        this.updateAssets();
        this.initRain();
    }

    resize(w, h) {
        this.w = w; this.h = h;
        this.initRain();
    }

    onConfigChange(key, val) {
        if (key.includes('Color')) this.updateAssets();
        if (['density', 'fontSize', 'depthLevels', 'charSet', 'customText'].includes(key)) {
            this.updateAssets();
            this.initRain();
        }
    }

    updateAssets() {
        const suffix = this.isDark ? 'Dark' : 'Light';
        this.cPrimary = this.hexToRgb(this.config[`primaryColor${suffix}`]);
        this.cHead = this.config[`headColor${suffix}`];
        this.cFlash = this.config[`flashColor${suffix}`];
        this.cAlarm = this.config[`alarmColor${suffix}`]; // 故障色直接用 Hex 字符串

        const set = this.config.charSet;
        if (set === 'binary') this.chars = '01';
        else if (set === 'hex') this.chars = '0123456789ABCDEF';
        else if (set === 'custom') this.chars = this.config.customText || 'PROQUIZ';
        else this.chars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890';
    }

    hexToRgb(hex) {
        return {
            r: parseInt(hex.slice(1, 3), 16),
            g: parseInt(hex.slice(3, 5), 16),
            b: parseInt(hex.slice(5, 7), 16)
        };
    }

    onThemeChange(isDark) { this.isDark = isDark; this.updateAssets(); }
    onIntensityChange(val) { this.intensity = val; }
    
    onMouseMove(mouse) { 
        const dx = mouse.x - this.lastMx;
        this.windOffset += dx * 0.2; 
        this.windOffset = Math.max(-50, Math.min(50, this.windOffset));
        this.lastMx = mouse.x;
        this.mx = mouse.x; 
        this.my = mouse.y; 
    }

    initRain() {
        this.columns = [];
        const fontSize = parseInt(this.config.fontSize);
        const density = parseInt(this.config.density);
        const depthLevels = parseInt(this.config.depthLevels);
        
        const totalCols = Math.floor(this.w / fontSize);
        const activeCols = Math.floor(totalCols * (density / 50)); 

        for (let i = 0; i < activeCols; i++) {
            const layer = Math.floor(Math.random() * depthLevels) + 1;
            const ratio = layer / depthLevels;
            const scale = 0.4 + 0.6 * ratio;
            const speedFactor = 0.5 + 0.5 * ratio; 

            this.columns.push({
                x: Math.floor(Math.random() * totalCols) * fontSize,
                y: Math.random() * -this.h, 
                speed: (Math.random() * 0.5 + 0.5) * speedFactor,
                layer: layer,
                scale: scale,
                chars: [], 
                nextCharTime: 0 
            });
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.w, this.h);
        
        const baseSpeed = parseInt(this.config.speed);
        const tailLen = parseInt(this.config.length);
        const fontSize = parseInt(this.config.fontSize);
        const bloom = parseInt(this.config.bloomStrength);
        const glitchProb = parseInt(this.config.glitchRate) / 500; // 概率归一化，避免太频繁
        const depthLevels = parseInt(this.config.depthLevels);

        // 紧张感影响背景色 (Optional: 让雨滴变红)
        // 这里主要影响 primary color
        const ir = this.cPrimary.r + (255 - this.cPrimary.r) * this.intensity;
        const ig = this.cPrimary.g * (1 - this.intensity);
        const ib = this.cPrimary.b * (1 - this.intensity);
        const currentColor = `rgb(${Math.floor(ir)},${Math.floor(ig)},${Math.floor(ib)})`;

        const speedMult = 1 + this.intensity * 3;
        this.windOffset *= 0.95;

        // 设置通用字体 (避免在循环内设置)
        this.ctx.font = `bold ${fontSize}px monospace`;
        this.ctx.textBaseline = 'top';
        this.ctx.textAlign = 'center';

        this.columns.forEach(col => {
            col.y += col.speed * baseSpeed * speedMult;
            
            if (col.y > this.h + tailLen * fontSize * col.scale) {
                col.y = -fontSize * 2;
                col.x = Math.floor(Math.random() * this.w);
                col.chars = []; 
            }

            col.nextCharTime--;
            if (col.nextCharTime <= 0) {
                const char = this.chars[Math.floor(Math.random() * this.chars.length)];
                col.chars.unshift(char);
                if (col.chars.length > tailLen) col.chars.pop();
                col.nextCharTime = Math.random() * 5; 
            }

            this.ctx.save();
            const wind = this.windOffset * (col.layer / depthLevels);
            this.ctx.translate(col.x + wind, col.y);
            this.ctx.scale(col.scale, col.scale);

            for (let i = 0; i < col.chars.length; i++) {
                let char = col.chars[i];
                let isGlitch = false;

                // [核心修改] 故障逻辑：纯色突变
                // 不改变位置，不改变字号，只变色和变字，保证极致流畅
                if (i > 0 && Math.random() < glitchProb) {
                    isGlitch = true;
                    // 字符随机突变
                    char = this.chars[Math.floor(Math.random() * this.chars.length)];
                    col.chars[i] = char;
                }

                const yPos = -i * fontSize;
                const screenY = col.y + yPos * col.scale;
                
                // 屏幕外剔除
                if (screenY > this.h + fontSize) continue; 
                if (screenY < -fontSize) break; 

                // 交互检测
                let isHover = false;
                if (this.mx) {
                    const dx = (col.x + wind) - this.mx;
                    const dy = screenY - this.my;
                    if (dx*dx + dy*dy < 10000) isHover = true;
                }

                // 颜色与渲染
                if (i === 0) { // 头部
                    this.ctx.fillStyle = this.cHead;
                    this.ctx.shadowBlur = col.layer === depthLevels && bloom > 0 ? bloom : 0;
                    this.ctx.shadowColor = this.cHead;
                } 
                else if (isGlitch) { // [修改] 故障：变红
                    this.ctx.fillStyle = this.cAlarm;
                    this.ctx.shadowBlur = bloom;
                    this.ctx.shadowColor = this.cAlarm;
                }
                else if (isHover) { // 交互：变青
                    this.ctx.fillStyle = this.cFlash;
                    this.ctx.shadowBlur = bloom * 1.5;
                    this.ctx.shadowColor = this.cFlash;
                } 
                else { // 尾部
                    this.ctx.fillStyle = currentColor;
                    this.ctx.shadowBlur = 0;
                    this.ctx.globalAlpha = Math.max(0, 1 - i / tailLen) * (col.layer / depthLevels);
                }

                this.ctx.fillText(char, 0, yPos);
                
                // 重置 alpha
                this.ctx.globalAlpha = 1;
            }

            this.ctx.restore();
        });
    }
}

if (window.ProQuiz) window.ProQuiz.registerTheme('digital-rain', '数字雨', DigitalRainTheme);

})();