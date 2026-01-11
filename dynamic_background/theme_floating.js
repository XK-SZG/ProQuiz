// --- Theme: Floating Shapes (Advanced Interactive) ---

(function() {

    class FloatingShapesTheme {
        static schema = {
            // --- 1. 行为与物理 ---
            sec_phy: { type: 'section', label: '物理行为' },
            count: { type: 'range', label: '粒子密度', min: 10, max: 150, default: 50 },
            baseSpeed: { type: 'range', label: '流动速度', min: 0.2, max: 3, step: 0.1, default: 1.0 },

            // --- 2. 外观形态 ---
            sec_app: { type: 'section', label: '外观形态' },
            minSize: { type: 'range', label: '最小尺寸', min: 5, max: 40, default: 10 },
            maxSize: { type: 'range', label: '最大尺寸', min: 20, max: 100, default: 50 },

            // --- 3. 运动方式 ---
            moveStyle: { 
                type: 'select', 
                label: '运动方向', 
                options: [{val:'float', txt:'自由漂浮'}, {val:'up', txt:'气泡上升'}, {val:'side', txt:'侧向流动'}], 
                default: 'up' 
            },
            
            shapeType: { 
                type: 'multiselect', 
                label: '形状组合 (可多选)', 
                options: [
                    {val:'circle', txt:'圆形'}, {val:'square', txt:'方块'}, {val:'triangle', txt:'三角'},
                    {val:'math', txt:'算术符'}, {val:'alpha', txt:'字母'}, {val:'custom', txt:'自定义'}
                ], 
                default: ['circle', 'square'] 
            },
            customText: { type: 'text', label: '自定义文本 (英文逗号分隔)', default: '加油,必胜,稳住,ProQuiz' },
            
            // --- 4. 色彩配置 (左右对照) ---
            sec_col: { type: 'section', label: '色彩配置 (左：明亮 / 右：暗黑)' },
            
            // 第一行：策略与透明度 (完美配对)
            colorMode: { type: 'select', label: '配色策略', options: [{val:'mono', txt:'单色'}, {val:'bi', txt:'双色混合'}, {val:'multi', txt:'多彩随机'}], default: 'bi' },
            opacity: { type: 'range', label: '整体不透明度', min: 0.1, max: 1.0, step: 0.1, default: 0.5 },

            // 第二行：背景底色
            bgColorLight: { type: 'color', label: '背景底色 (亮)', default: '#f8fafc' },
            bgColorDark: { type: 'color', label: '背景底色 (暗)', default: '#020617' },
            
            // 第三行：主色调
            primaryColorLight: { type: 'color', label: '主色调 (亮)', default: '#cbd5e1' }, 
            primaryColorDark: { type: 'color', label: '主色调 (暗)', default: '#1e293b' }, 
            
            // 第四行：副色调
            secondaryColorLight: { type: 'color', label: '副色调 (亮)', default: '#94a3b8' }, 
            secondaryColorDark: { type: 'color', label: '副色调 (暗)', default: '#334155' }, 
        };

        // 2. 静态预览 HTML
        static preview = `
            <div class="absolute top-4 left-4 w-16 h-16 bg-indigo-400 rounded-full opacity-60"></div>
            <div class="absolute top-2 right-6 w-0 h-0 border-l-[24px] border-r-[24px] border-b-[32px] border-l-transparent border-r-transparent border-b-emerald-400 opacity-60 rotate-45"></div>
            <div class="absolute bottom-2 left-16 text-4xl font-bold text-slate-400 select-none">A</div>
            <div class="absolute top-1 right-16 w-9 h-9 bg-red-400 opacity-60"></div><div class="absolute bottom-6 right-0 w-12 h-12 bg-amber-400 rounded-full opacity-70"></div>
        `;

        constructor(ctx, w, h, isDark, config) {
            this.ctx = ctx; this.w = w; this.h = h; this.isDark = isDark; this.config = config;
            this.overlayOpacity = 0; 
            
            this.particles = [];
            this.feedbackParticles = [];
            this.intensity = 0;
            
            // 资源缓存
            this.colors = [];
            this.allowedTypes = []; // ['circle', 'text', ...]
            this.textPool = [];     // ['A', 'B', '1', ...]
            
            this.updateAssets(); 
            this.initParticles(); // 初始化生成
        }

        onConfigChange(key, val) {
            // 1. 更新资源库
            if (key.includes('Color') || key === 'customText' || key === 'shapeType' || key === 'colorMode') {
                this.updateAssets();
                // 核心修改：资源变了，立即刷新所有现有粒子的外观，而不需要等到 count 变化
                this.refreshParticles();
            }
            
            // 2. 数量变化，重置数组
            if (key === 'count') {
                this.initParticles(); 
            }
        }

        updateAssets() {
            // 1. 颜色处理
            const suffix = this.isDark ? 'Dark' : 'Light';
            this.colors = [this.config[`primaryColor${suffix}`]];
            
            if (this.config.colorMode === 'bi') {
                this.colors.push(this.config[`secondaryColor${suffix}`]);
            } else if (this.config.colorMode === 'multi') {
                // 多彩模式，额外增加一些协调色
                this.colors.push(this.config[`secondaryColor${suffix}`]);
                this.colors.push(this.isDark ? '#475569' : '#e2e8f0'); // 补充色
            }

            // 2. 形状类型处理
            // config.shapeType 现在是一个数组，例如 ['circle', 'custom']
            // 为了兼容旧配置（可能是字符串），做个兼容处理
            let types = this.config.shapeType;
            if (!Array.isArray(types)) types = [types];
            
            this.allowedTypes = types;

            // 3. 文本池处理 (合并所有需要的文本)
            this.textPool = [];
            if (types.includes('math')) this.textPool.push(...['+', '-', '×', '÷', '=', '?', '%']);
            if (types.includes('alpha')) this.textPool.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
            if (types.includes('custom')) {
                const raw = this.config.customText || "";
                // 兼容中英文逗号，过滤空字符串
                const customArr = raw.replace(/，/g, ',').split(',').map(s => s.trim()).filter(s => s.length > 0);
                if (customArr.length > 0) this.textPool.push(...customArr);
                else if (types.length === 1 && types[0] === 'custom') this.textPool.push('?'); // 防止空
            }
        }

        onThemeChange(isDark) {
            this.isDark = isDark;
            this.updateAssets();
            this.refreshParticles(); // 立即刷新颜色
        }

        onIntensityChange(val) {
            this.intensity = val;
        }

        onMouseMove(mouse) {
            this.mx = mouse.x;
            this.my = mouse.y;
        }

        onEvent(name, data) {
            if (name === 'answer') {
                const centerX = this.w / 2;
                const centerY = this.h / 2;
                const color = data.correct ? '#10b981' : '#f43f5e'; 
                if (data.text) this.spawnFeedback(data.text, centerX - 50, centerY, color, 80);
                if (data.score > 0) setTimeout(() => this.spawnFeedback(`+${data.score}`, centerX + 50, centerY, '#fbbf24', 60), 100);
            }
        }

        spawnFeedback(text, x, y, color, size) {
            this.feedbackParticles.push({
                text: text, x: x + (Math.random()-0.5)*40, y: y,
                vx: (Math.random()-0.5)*2, vy: -3 - Math.random()*2,
                size: size, life: 1.0, color: color
            });
        }

        // 初始化：创建全新的粒子数组
        initParticles() {
            const count = parseInt(this.config.count);
            // 如果数量增加了，补充；减少了，截断。这样比清空重建更平滑。
            if (count > this.particles.length) {
                const add = count - this.particles.length;
                for(let i=0; i<add; i++) this.particles.push(this.createParticle());
            } else if (count < this.particles.length) {
                this.particles.length = count;
            }
            // 强制刷新属性以匹配当前配置
            this.refreshParticles();
        }

        // 刷新：保留位置/速度，更新外观属性 (解决闪烁和undefined的关键)
        refreshParticles() {
            this.particles.forEach(p => {
                const props = this.generateAppearance();
                p.type = props.type;
                p.content = props.content;
                p.color = props.color;
                // 尺寸也刷新一下，防止切换模式后比例不对
                // 但为了不过于跳跃，可以平滑过渡，这里直接更新简单点
                // p.size = props.size; 
            });
        }

        // 核心工厂：生成外观属性
        generateAppearance() {
            // 1. 随机选一种允许的类型
            const typeKey = this.allowedTypes[Math.floor(Math.random() * this.allowedTypes.length)];
            
            let type = 'geo';
            let content = null; // 用于存储文本内容

            // 判断是几何还是文本
            if (['math', 'alpha', 'custom'].includes(typeKey)) {
                type = 'text';
                // 从文本池中随机取一个 (如果池子空了，给个默认)
                content = this.textPool.length > 0 
                    ? this.textPool[Math.floor(Math.random() * this.textPool.length)]
                    : '?';
            } else {
                type = typeKey; // circle, square, triangle
            }

            const minS = parseInt(this.config.minSize);
            const maxS = parseInt(this.config.maxSize);
            const size = minS + Math.random() * (maxS - minS);
            const color = this.colors[Math.floor(Math.random() * this.colors.length)];
            
            return { type, content, size, color };
        }

        createParticle() {
            const props = this.generateAppearance();
            return {
                x: Math.random() * this.w,
                y: Math.random() * this.h,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                rotation: Math.random() * Math.PI * 2,
                rotSpeed: (Math.random() - 0.5) * 0.02,
                opacity: 0.2 + Math.random() * 0.5, // 随机初始透明度
                ...props // type, content, size, color
            };
        }

        draw() {
            this.ctx.clearRect(0, 0, this.w, this.h);
            const moveStyle = this.config.moveStyle;
            const baseSpeed = parseFloat(this.config.baseSpeed) * (1 + this.intensity * 2);
            const globalOpacity = parseFloat(this.config.opacity) || 0.5;

            this.particles.forEach(p => {
                // --- 运动逻辑 ---
                if (moveStyle === 'float') {
                    p.x += p.vx * baseSpeed;
                    p.y += p.vy * baseSpeed;
                } else if (moveStyle === 'up') {
                    p.y -= (Math.abs(p.vy) + 0.2) * baseSpeed;
                    p.x += p.vx * baseSpeed * 0.5;
                } else if (moveStyle === 'side') {
                    p.x += (Math.abs(p.vx) + 0.2) * baseSpeed;
                    p.y += p.vy * baseSpeed * 0.5;
                }
                
                p.rotation += p.rotSpeed * (1 + this.intensity * 5);

                // 鼠标避让
                if (this.mx) {
                    const dx = p.x - this.mx;
                    const dy = p.y - this.my;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    if (dist < 150) {
                        const force = (150 - dist) / 150;
                        p.x += (dx / dist) * force * 5;
                        p.y += (dy / dist) * force * 5;
                    }
                }

                // 边界循环
                if (p.x < -100) p.x = this.w + 100;
                if (p.x > this.w + 100) p.x = -100;
                if (p.y < -100) p.y = this.h + 100;
                if (p.y > this.h + 100) p.y = -100;

                // --- 绘制逻辑 ---
                this.ctx.save();
                this.ctx.translate(p.x, p.y);
                this.ctx.rotate(p.rotation);
                this.ctx.globalAlpha = p.opacity * globalOpacity; // 叠加全局透明度设置
                this.ctx.fillStyle = p.color;
                
                if (p.type === 'text') {
                    this.ctx.font = `bold ${p.size}px Inter, sans-serif`;
                    this.ctx.textAlign = 'center';
                    this.ctx.textBaseline = 'middle';
                    this.ctx.fillText(p.content, 0, 0); // 使用 p.content 替代 undefined 的数组访问
                } else {
                    this.ctx.beginPath();
                    if (p.type === 'circle') {
                        this.ctx.arc(0, 0, p.size/2, 0, Math.PI*2);
                    } else if (p.type === 'square') {
                        this.ctx.rect(-p.size/2, -p.size/2, p.size, p.size);
                    } else if (p.type === 'triangle') {
                        const s = p.size;
                        this.ctx.moveTo(0, -s/2);
                        this.ctx.lineTo(s/2, s/2);
                        this.ctx.lineTo(-s/2, s/2);
                    }
                    this.ctx.fill();
                }
                this.ctx.restore();
            });

            // 绘制特效粒子 (Feedback) - 保持不变
            for (let i = this.feedbackParticles.length - 1; i >= 0; i--) {
                const fp = this.feedbackParticles[i];
                fp.life -= 0.02; fp.x += fp.vx; fp.y += fp.vy; fp.size += 0.5;
                if (fp.life <= 0) { this.feedbackParticles.splice(i, 1); continue; }
                this.ctx.save();
                this.ctx.translate(fp.x, fp.y);
                const scale = 1 + Math.sin((1-fp.life) * Math.PI) * 0.2; 
                this.ctx.scale(scale, scale);
                this.ctx.globalAlpha = fp.life;
                this.ctx.fillStyle = fp.color;
                this.ctx.shadowColor = fp.color;
                this.ctx.shadowBlur = 20;
                this.ctx.font = `900 ${fp.size}px Inter, sans-serif`;
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText(fp.text, 0, 0);
                this.ctx.restore();
            }
        }
    }

    if (window.ProQuiz) {
        window.ProQuiz.registerTheme('floating-shapes', '悬浮几何', FloatingShapesTheme);
    }

})();