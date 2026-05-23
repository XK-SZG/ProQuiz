// --- v1.4 DYNAMIC BACKGROUND SYSTEM CORE (EVENT SUPPORT) ---

window.ProQuiz = window.ProQuiz || {
    themes: {}, 
    registerTheme: function(id, name, classRef) {
        this.themes[id] = { name: name, classRef: classRef };
    }
};

class BackgroundManager {
    constructor() {
        this.canvas = document.getElementById('bg-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.overlay = document.getElementById('bg-overlay');
        this.activeEffect = null;
        this.rafId = null;
        this.currentThemeId = 'none';
        
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.isDark = document.documentElement.classList.contains('dark');
        
        this.target = { x: this.width/2, y: this.height/2, px: 0.5, py: 0.5 };
        this.current = { x: this.width/2, y: this.height/2, px: 0.5, py: 0.5 };
        this.easeFactor = 0.08;

        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => this.updateInput(e.clientX, e.clientY));
        window.addEventListener('touchmove', (e) => { if(e.touches[0]) this.updateInput(e.touches[0].clientX, e.touches[0].clientY); }, {passive: true});
        window.addEventListener('touchstart', (e) => { if(e.touches[0]) this.updateInput(e.touches[0].clientX, e.touches[0].clientY); }, {passive: true});
        
        this.resize();
    }

    updateInput(x, y) {
        this.target.x = x;
        this.target.y = y;
        this.target.px = x / this.width;
        this.target.py = y / this.height;
    }

    // 新增：触发互动事件（供主程序调用）
    // name: 事件名 (如 'answer')
    // data: 附加数据 (如 { correct: true, text: 'A', score: 1 })
    triggerEvent(name, data) {
        if (this.activeEffect && typeof this.activeEffect.onEvent === 'function') {
            this.activeEffect.onEvent(name, data);
        }
    }

    getEffectiveConfig(themeId) {
        const themeDef = window.ProQuiz.themes[themeId];
        if (!themeDef || !themeDef.classRef.schema) return {};
        const defaults = {};
        for (const [key, field] of Object.entries(themeDef.classRef.schema)) {
            defaults[key] = field.default;
        }
        const savedJson = localStorage.getItem(`quiz_theme_cfg_${themeId}`);
        const saved = savedJson ? JSON.parse(savedJson) : {};
        return { ...defaults, ...saved };
    }

    loadTheme(themeId) {
        if (this.activeEffect) {
            if (typeof this.activeEffect.destroy === 'function') this.activeEffect.destroy();
            this.activeEffect = null;
            cancelAnimationFrame(this.rafId);
            this.ctx.clearRect(0, 0, this.width, this.height);
        }

        this.currentThemeId = themeId;

        if (themeId === 'none' || !window.ProQuiz.themes[themeId]) {
            this.canvas.classList.add('opacity-0');
            this.canvas.style.backgroundColor = ''; 
            this.overlay.className = "fixed inset-0 z-0 pointer-events-none bg-slate-50 dark:bg-slate-950 transition-colors duration-300";
            return;
        }

        const ThemeClass = window.ProQuiz.themes[themeId].classRef;
        const config = this.getEffectiveConfig(themeId);
        
        this.activeEffect = new ThemeClass(this.ctx, this.width, this.height, this.isDark, config);
        
        this.canvas.classList.remove('opacity-0');
        this.updateThemeMode(this.isDark);
        this.loop();
    }

    updateConfig(key, value) {
        if (!this.activeEffect) return;
        if (this.activeEffect.config) this.activeEffect.config[key] = value;
        if (typeof this.activeEffect.onConfigChange === 'function') this.activeEffect.onConfigChange(key, value);

        if (key.startsWith('bgColor')) this.updateThemeMode(this.isDark);

        const currentCfg = this.getEffectiveConfig(this.currentThemeId);
        currentCfg[key] = value;
        localStorage.setItem(`quiz_theme_cfg_${this.currentThemeId}`, JSON.stringify(currentCfg));
    }

    loop() {
        if (!this.activeEffect) return;
        const dx = this.target.px - this.current.px;
        const dy = this.target.py - this.current.py;
        if (Math.abs(dx) > 0.0001 || Math.abs(dy) > 0.0001) {
            this.current.px += dx * this.easeFactor;
            this.current.py += dy * this.easeFactor;
            this.current.x += (this.target.x - this.current.x) * this.easeFactor;
            this.current.y += (this.target.y - this.current.y) * this.easeFactor;
            if (this.activeEffect.onMouseMove) this.activeEffect.onMouseMove(this.current);
        }
        this.activeEffect.draw();
        this.rafId = requestAnimationFrame(() => this.loop());
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        if (this.activeEffect) this.activeEffect.resize(this.width, this.height);
    }

    updateThemeMode(isDark) {
        this.isDark = isDark;
        let bg = isDark ? '#020617' : '#f8fafc';
        if (this.activeEffect && this.activeEffect.config) {
            const cfg = this.activeEffect.config;
            if (isDark && cfg.bgColorDark) bg = cfg.bgColorDark;
            else if (!isDark && cfg.bgColorLight) bg = cfg.bgColorLight;
        }
        this.canvas.style.backgroundColor = bg; 
        const opacity = (this.activeEffect && this.activeEffect.overlayOpacity !== undefined) ? this.activeEffect.overlayOpacity : 0.85;
        this.overlay.style.backgroundColor = isDark ? `rgba(2, 6, 23, ${opacity})` : `rgba(248, 250, 252, ${opacity})`;
        if (this.activeEffect && this.activeEffect.onThemeChange) this.activeEffect.onThemeChange(isDark);
    }

    setIntensity(val) {
        if (this.activeEffect && this.activeEffect.onIntensityChange) this.activeEffect.onIntensityChange(val);
    }
}

window.BackgroundManager = BackgroundManager;