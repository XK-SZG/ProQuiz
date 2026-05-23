(function() {

class CosmicHaulerTheme {
    static schema = {
        // --- 1. 飞船物理 ---
        sec_ship: { type: 'section', label: '飞船物理' },
        ropeLength: { type: 'range', label: '绳索长度', min: 50, max: 400, default: 200 },
        elasticity: { type: 'range', label: '牵引力', min: 0.01, max: 0.2, step: 0.01, default: 0.05 },
        gravity: { type: 'range', label: '环境重力', min: 0, max: 1.0, step: 0.05, default: 0.25 },
        friction: { type: 'range', label: '空气阻力', min: 0.90, max: 0.99, step: 0.01, default: 0.98 },
        
        // --- 2. 关卡设计 ---
        sec_level: { type: 'section', label: '关卡设计' },
        obstacleDensity: { type: 'range', label: '障碍密度', min: 10, max: 80, default: 35 },
        planetDistance: { type: 'range', label: '星球间距', min: 10000, max: 100000, step: 1000, default: 20000 },
        cargoCount: { type: 'range', label: '初始货物', min: 0, max: 20, default: 5 },

        // --- 3. 视觉 ---
        sec_vis: { type: 'section', label: '视觉效果' },
        starCount: { type: 'range', label: '动态星数量', min: 150, max: 500, step: 50, default: 200 },
        deepStarCount: { type: 'range', label: '背景星数量', min: 150, max: 700, step: 50, default: 400 }, // 新增
        
        // --- 4. 色彩配置 ---
        sec_col: { type: 'section', label: '色彩配置' },
        // [修改] Light 模式默认值改为深色，与 Dark 保持一致
        bgColorLight: { type: 'color', label: '深空背景', default: '#020617' }, 
        bgColorDark: { type: 'color', label: '深空背景', default: '#020617' },
        
        shipColorLight: { type: 'color', label: '飞船主体', default: '#fb923c' }, // 使用较亮的橙色
        shipColorDark: { type: 'color', label: '飞船主体', default: '#fb923c' },
        
        obsColorLight: { type: 'color', label: '障碍物基调', default: '#94a3b8' }, // 使用较亮的灰色
        obsColorDark: { type: 'color', label: '障碍物基调', default: '#94a3b8' },
        
        cargoColorLight: { type: 'color', label: '货物箱', default: '#60a5fa' }, // 使用较亮的蓝色
        cargoColorDark: { type: 'color', label: '货物箱', default: '#60a5fa' },
    };

    static preview = `
        <div class="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center overflow-hidden">
            <div class="absolute w-24 h-8 bg-orange-400 blur-md rounded-[50%] rotate-12 opacity-50"></div>
            <div class="absolute w-10 h-10 bg-black rounded-full border border-white/80 shadow-[0_0_15px_orange]"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-3 -translate-y-2 w-4 h-6 bg-orange-500 rounded-t-full -rotate-12 z-10 shadow-lg border border-white/20"></div>
        </div>
    `;

    constructor(ctx, w, h, isDark, config) {
        this.ctx = ctx; this.w = w; this.h = h; this.isDark = isDark; this.config = config;
        this.overlayOpacity = 0;
        
        this.state = 'flying'; 
        this.cameraY = 0;      
        this.level = 1;        
        this.money = 0;        
        this.earnedThisRun = 0;

        this.speedCap = 10;
        this.maxSpeedCap = 40;
        this.flyTime = 0;

        // 实体
        this.rocket = { x: w/2, y: 0, vx: 0, vy: 0, angle: 0, radius: 15, grounded: false };
        this.cargo = [];       
        this.obstacles = [];   
        this.pickups = [];     
        this.planets = []; 
        this.particles = []; 
        this.texts = []; 
        
        // 环境元素
        this.deepStars = []; // 静态背景层
        this.stars = [];     // 动态跃迁层
        this.nebulae = []; 
        this.bgPlanets = []; 
        this.blackHole = { angle: 0 }; 

        this.nextPlanetY = 0;
        this.floorY = 500; 
        this.highestGenY = 0;
        this.lowestGenY = 0;

        this.mouse = { x: w/2, y: h/4 }; 
        this.scale = 1.0; 

        this.resize(w, h); 
        this.updateColors();
        this.resetGame();
    }

    resize(w, h) { 
        this.w = w; this.h = h; 
        this.scale = w < 600 ? 0.6 : 1.0;
        this.rocket.radius = 15 * this.scale;
        this.initEnvironment(); 
    }

    onConfigChange(key) { 
        if (key.includes('Color')) this.updateColors(); 
        if (key.includes('Count')) this.initEnvironment();
    }
    
    updateColors() {
        const s = this.isDark ? 'Dark' : 'Light';
        this.cBg = this.config.bgColorDark; 
        if (this.ctx.canvas) {
            this.ctx.canvas.style.backgroundColor = this.cBg;
        }
        this.cShip = this.config[`shipColor${s}`];
        this.cObs = this.config[`obsColor${s}`];
        this.cCargo = this.config[`cargoColor${s}`];
        
        // [修改] 强制使用亮灰色绳索，忽略 isDark
        this.cRope = '#94a3b8'; 
    }
    
    onThemeChange(isDark) { this.isDark = isDark; this.updateColors(); }
    onMouseMove(mouse) { this.mouse.x = mouse.x; this.mouse.y = mouse.y; }

    // --- 环境系统 ---
    initEnvironment() {
        // 1. 静态深空星星 (Deep Background)
        // 它们固定在屏幕上，不随火箭移动，只闪烁
        const dCount = parseInt(this.config.deepStarCount) || 200;
        this.deepStars = [];
        for(let i=0; i<dCount; i++) {
            this.deepStars.push({
                x: Math.random() * this.w,
                y: Math.random() * this.h,
                size: Math.random() * 1.0 + 0.1,
                alpha: Math.random(),
                speed: 0.01 + Math.random() * 0.03 // 闪烁速度
            });
        }

        // 2. 动态星星 (Warp Layer)
        const count = parseInt(this.config.starCount);
        this.stars = [];
        const starColors = ['#ffffff', '#bfdbfe', '#fef08a', '#fecaca', '#e9d5ff'];
        for(let i=0; i<count; i++) {
            this.stars.push({
                x: Math.random() * this.w,
                y: Math.random() * this.h,
                z: Math.random() * 2 + 0.5, 
                size: Math.random() * 1.5 + 0.2,
                color: starColors[Math.floor(Math.random() * starColors.length)]
            });
        }

        // 3. 星云
        this.nebulae = [];
        for(let i=0; i<6; i++) {
            this.nebulae.push({
                x: Math.random() * this.w,
                y: Math.random() * this.h,
                r: 150 + Math.random() * 300,
                color: Math.random() > 0.5 ? 'rgba(79, 70, 229, 0.08)' : 'rgba(216, 180, 254, 0.06)'
            });
        }

        // 4. 背景星球 (多样化)
        this.bgPlanets = [];
        for(let i=0; i<5; i++) {
            // 随机分布在屏幕宽度的 1.5 倍范围内，以便视差移动时不会马上消失
            this.bgPlanets.push({
                x: (Math.random() - 0.25) * this.w * 1.5,
                y: Math.random() * this.h,
                r: 10 + Math.random() * 50,
                type: Math.random() > 0.7 ? 'ring' : (Math.random() > 0.5 ? 'gas' : 'rock'),
                color: Math.random()>0.5 ? '#1e293b' : '#334155',
                depth: 0.05 + Math.random() * 0.1 // 极慢视差
            });
        }
    }

    drawBlackHole() {
        const cx = this.w / 2;
        const cy = this.h / 2;
        this.blackHole.angle += 0.001;
        const angle = Math.sin(this.blackHole.angle) * 3 + 24

        this.ctx.save();
        this.ctx.translate(cx, cy);
        
        // 1. 吸积盘 (Accretion Disk) - 范围扩大
        this.ctx.save();
        this.ctx.rotate(angle * Math.PI / 180); 
        this.ctx.scale(0.9, 0.15); 

        const grad = this.ctx.createRadialGradient(0, 0, 70, 0, 0, 350);
        grad.addColorStop(0, "rgba(0,0,0,0)");
        grad.addColorStop(0.25, "rgba(251, 146, 60, 0.9)"); // Orange
        grad.addColorStop(0.45, "rgba(253, 224, 71, 0.95)"); // Yellow
        grad.addColorStop(0.7, "rgba(239, 68, 68, 0.4)");  // Red
        grad.addColorStop(1, "rgba(0,0,0,0)");

        this.ctx.fillStyle = grad;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, 350, 0, Math.PI*2);
        this.ctx.fill();
        this.ctx.restore();

        // 2. 引力透镜 (Gravitational Lensing)
        this.ctx.save();
        this.ctx.rotate(angle * Math.PI / 180); 
        this.ctx.scale(0.8, 0.75);
        this.ctx.strokeStyle = "rgba(253, 224, 71, 0.3)";
        this.ctx.lineWidth = 4;
        this.ctx.shadowBlur = 15;
        this.ctx.shadowColor = "orange";
        
        this.ctx.beginPath();
        this.ctx.arc(0, 18, 120, Math.PI + 0.4, 2*Math.PI - 0.4); 
        this.ctx.stroke();
        
        this.ctx.beginPath();
        this.ctx.arc(0, -18, 120, 0.4, Math.PI - 0.4); 
        this.ctx.stroke();
        this.ctx.restore();

        // 3. 事件视界 (Event Horizon) - 缩小球体
        const r = 60; // 缩小后的半径
        this.ctx.fillStyle = "#000";
        this.ctx.shadowColor = "#fbbf24"; // 亮黄色辉光
        this.ctx.shadowBlur = 30;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, r, 0, Math.PI*2);
        this.ctx.fill();
        
        // 4. 光子环 (Photon Ring) - 丝滑光晕版
        this.ctx.save(); // 保存状态以应用叠加模式

        // 关键点：使用 'lighter' 或 'screen' 混合模式，让光叠加时更亮，像真实的光源
        this.ctx.globalCompositeOperation = "screen"; 

        // 定义光环的半径范围
        const innerR = 60;  // 贴紧事件视界 (r=60)
        const outerR = 100; // 光晕向外扩散到的距离

        // 创建径向渐变 (从 r=60 到 r=100)
        const ringGrad = this.ctx.createRadialGradient(0, 0, innerR, 0, 0, outerR);
        
        // 0.0 = innerR (60px), 1.0 = outerR (100px)
        ringGrad.addColorStop(0, "rgba(255, 255, 255, 1)");   // 起始：纯白核心 (最亮)
        ringGrad.addColorStop(0.1, "rgba(255, 255, 255, 1)");   // 纯白结束
        ringGrad.addColorStop(0.25, "rgba(255, 200, 100, 0.9)"); // 稍微向外：高亮金橙色
        ringGrad.addColorStop(0.5, "rgba(251, 146, 60, 0.3)");   // 中间：柔和橙色
        ringGrad.addColorStop(1, "rgba(0, 0, 0, 0)");         // 边缘：完全透明

        this.ctx.fillStyle = ringGrad;
        
        // 绘制光环
        this.ctx.beginPath();
        this.ctx.arc(0, 0, outerR, 0, Math.PI * 2);
        this.ctx.fill();

        // 恢复之前的状态 (防止混合模式影响后续绘制)
        this.ctx.restore();

        // 重新绘制中心的纯黑遮罩 (确保黑洞内部是绝对黑的，边缘锐利)
        this.ctx.beginPath();
        this.ctx.arc(0, 0, 60, 0, Math.PI * 2);
        this.ctx.fillStyle = "#000";
        this.ctx.shadowBlur = 0; // 移除阴影，保持内部纯黑
        this.ctx.fill();

        this.ctx.restore();
    }

    drawEnvironment(vy) {
        // Layer 0: 星云
        this.nebulae.forEach(n => {
            const g = this.ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
            g.addColorStop(0, n.color);
            g.addColorStop(1, "rgba(0,0,0,0)");
            this.ctx.fillStyle = g;
            this.ctx.fillRect(0, 0, this.w, this.h);
        });

        // Layer 1: 静态深空星 (闪烁)
        this.ctx.fillStyle = "white";
        for (let s of this.deepStars) {
            s.alpha += s.speed;
            const op = Math.abs(Math.sin(s.alpha)) * 0.5 + 0.1;
            this.ctx.globalAlpha = op;
            this.ctx.beginPath();
            this.ctx.arc(s.x, s.y, s.size, 0, Math.PI*2);
            this.ctx.fill();
        }
        this.ctx.globalAlpha = 1;

        // Layer 2: 动态星星 (Warp Effect)
        const speedY = vy; 
        const speedMag = Math.abs(speedY);
        const stretchFactor = Math.min(speedMag / 2, 20); 

        this.ctx.lineCap = 'round';
        for (let s of this.stars) {
            s.y -= speedY * s.z * 0.05; 
            if (s.x < 0) s.x += this.w; if (s.x > this.w) s.x -= this.w;
            if (s.y < 0) s.y += this.h; if (s.y > this.h) s.y -= this.h;

            this.ctx.lineWidth = s.size;
            if (speedMag > 5) {
                this.ctx.strokeStyle = speedY < 0 ? `rgba(200, 240, 255, ${0.3 + s.z*0.2})` : `rgba(255, 200, 200, ${0.3 + s.z*0.2})`;
            } else {
                this.ctx.strokeStyle = s.color;
            }
            
            const tailLen = s.size + stretchFactor * s.z * 2; 
            this.ctx.beginPath();
            this.ctx.moveTo(s.x, s.y);
            const dir = speedY < 0 ? -1 : 1; 
            this.ctx.lineTo(s.x, s.y + tailLen * dir); 
            
            this.ctx.globalAlpha = 0.4 + s.z * 0.2;
            this.ctx.stroke();
            this.ctx.globalAlpha = 1;
        }

        // Layer 3: 背景星球 (Parallax & Styles)
        for (let p of this.bgPlanets) {
            p.y -= speedY * p.depth * 0.05; 
            if (p.y < -100) p.y = this.h + 100;
            if (p.y > this.h + 100) p.y = -100;

            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            
            // 本体
            this.ctx.beginPath();
            this.ctx.arc(0, 0, p.r, 0, Math.PI*2);
            this.ctx.fillStyle = p.color;
            this.ctx.fill();

            // 样式细节
            this.ctx.clip();
            this.ctx.fillStyle = "rgba(0,0,0,0.2)";
            
            if (p.type === 'gas') {
                // 条纹
                for(let j=0; j<5; j++) {
                    this.ctx.fillRect(-p.r, -p.r + j*p.r*0.4, p.r*2, p.r*0.15);
                }
            } else if (p.type === 'rock') {
                // 陨石坑
                this.ctx.beginPath();
                this.ctx.arc(p.r*0.3, -p.r*0.2, p.r*0.2, 0, Math.PI*2);
                this.ctx.arc(-p.r*0.4, p.r*0.4, p.r*0.15, 0, Math.PI*2);
                this.ctx.fill();
            }
            this.ctx.restore(); // 取消 clip

            // 阴影覆盖
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
            const g = this.ctx.createRadialGradient(p.x - p.r*0.3, p.y - p.r*0.3, p.r*0.2, p.x, p.y, p.r);
            g.addColorStop(0, "rgba(255,255,255,0.05)");
            g.addColorStop(1, "rgba(0,0,0,0.6)");
            this.ctx.fillStyle = g;
            this.ctx.fill();

            // 环状行星的环
            if (p.type === 'ring') {
                this.ctx.beginPath();
                this.ctx.ellipse(p.x, p.y, p.r*1.8, 0, -0.3, 0, Math.PI*2);
                this.ctx.strokeStyle = "rgba(255,255,255,0.05)";
                this.ctx.lineWidth = p.r * 0.1;
                this.ctx.stroke();
            }
        }

        // Layer 4: 黑洞 (位于所有背景之上)
        this.drawBlackHole();
    }

    // --- 游戏逻辑 ---

    resetGame() {
        this.rocket.x = this.w / 2;
        this.rocket.y = 0; 
        this.rocket.vx = 0;
        this.rocket.vy = 0;
        this.rocket.grounded = false;
        
        this.cameraY = -this.h * 0.75; 
        this.state = 'flying';
        this.speedCap = 5; 
        this.earnedThisRun = 0;
        
        this.cargo = [];
        const cCount = parseInt(this.config.cargoCount);
        for(let i=0; i<cCount; i++) this.addCargo(true);

        this.obstacles = [];
        this.pickups = [];
        this.planets = [];
        this.particles = [];
        this.texts = [];
        
        this.nextPlanetY = 0;
        this.highestGenY = this.rocket.y - 500;
        this.lowestGenY = this.rocket.y + 500;
        this.floorY = 500; 
        
        this.generateWorld(); 
    }

    addCargo(silent = false) {
        const parent = this.cargo.length > 0 ? this.cargo[this.cargo.length-1] : this.rocket;
        this.cargo.push({ x: parent.x, y: parent.y + 20*this.scale, vx: 0, vy: 0 });
        this.earnedThisRun += 100;
        if (!silent) this.spawnText("LOAD", this.rocket.x, this.rocket.y, this.cCargo);
    }

    removeCargo() {
        if (this.cargo.length > 0) {
            const box = this.cargo.pop();
            this.spawnExplosion(box.x, box.y, '#fbbf24');
            return true;
        }
        return false;
    }

    loseCargo() {
        if (this.cargo.length > 0) {
            const lost = this.cargo.pop();
            this.earnedThisRun -= 100;
            this.spawnExplosion(lost.x, lost.y, this.cCargo);
            this.spawnText("-100", this.rocket.x, this.rocket.y, "#ef4444");
        }
    }

    spawnExplosion(x, y, color) {
        for(let i=0; i<6; i++) {
            this.particles.push({
                x: x, y: y,
                vx: (Math.random()-0.5)*8, vy: (Math.random()-0.5)*8,
                life: 1.0, color: color
            });
        }
    }

    spawnText(str, x, y, color) {
        this.texts.push({ str: str, x: x, y: y, vy: -2, life: 1.0, color: color });
    }

    generateWorld() {
        const dist = parseInt(this.config.planetDistance);
        const viewTop = this.cameraY - this.h;
        const viewBottom = this.cameraY + this.h * 2; 
        const density = parseInt(this.config.obstacleDensity)/100;

        // 1. 向上生成
        while (this.highestGenY > viewTop) {
            this.highestGenY -= (120 * this.scale + Math.random() * 150 * this.scale); 

            if (this.highestGenY < this.nextPlanetY - dist) {
                this.nextPlanetY -= dist;
                this.highestGenY = this.nextPlanetY; 
                
                let pX = (Math.random() > 0.5) ? Math.random() * (this.w * 0.2) + 50*this.scale : this.w - (Math.random() * (this.w * 0.2) + 50*this.scale);

                this.planets.push({
                    x: pX,
                    y: this.nextPlanetY,
                    radius: 180 * this.scale,
                    color: this.isDark ? '#4f46e5' : '#818cf8',
                    visited: false
                });
                this.highestGenY -= 400 * this.scale; 
                continue;
            }

            if (Math.random() < density) {
                const types = ['asteroid', 'satellite', 'debris'];
                const type = types[Math.floor(Math.random() * types.length)];
                
                const vertices = [];
                if (type === 'asteroid') {
                    const r = 30 + Math.random() * 30;
                    for (let j=0; j<7; j++) {
                        const angle = (j / 7) * Math.PI * 2;
                        const dist = r * (0.8 + Math.random() * 0.4);
                        vertices.push({x: Math.cos(angle)*dist, y: Math.sin(angle)*dist});
                    }
                }

                this.obstacles.push({
                    x: Math.random() * this.w,
                    y: this.highestGenY,
                    w: (50 + Math.random() * 50) * this.scale,
                    h: (50 + Math.random() * 50) * this.scale,
                    type: type,
                    angle: Math.random() * Math.PI,
                    rotSpeed: (Math.random()-0.5) * 0.05,
                    vertices: vertices
                });
            } else if (Math.random() < 0.2) {
                this.pickups.push({ x: Math.random() * this.w, y: this.highestGenY, radius: 10 * this.scale });
            }
        }

        // 2. 向下生成
        while (this.lowestGenY < viewBottom) {
            this.lowestGenY += (120 * this.scale + Math.random() * 150 * this.scale);
            if (Math.random() < density) {
                this.obstacles.push({
                    x: Math.random() * this.w,
                    y: this.lowestGenY,
                    w: (60 + Math.random() * 80) * this.scale,
                    h: (20 + Math.random() * 20) * this.scale,
                    type: 'wall', 
                    angle: 0, rotSpeed: 0
                });
            }
        }

        const purgeTop = this.cameraY - 4000;
        const purgeBottom = this.cameraY + 4000;
        this.obstacles = this.obstacles.filter(o => o.y > purgeTop && o.y < purgeBottom);
        this.pickups = this.pickups.filter(o => o.y > purgeTop && o.y < purgeBottom);
        this.planets = this.planets.filter(p => p.y > purgeTop && p.y < purgeBottom);
    }

    draw() {
        this.ctx.fillStyle = this.cBg;
        this.ctx.fillRect(0, 0, this.w, this.h);

        this.drawEnvironment(this.rocket.vy);

        if (this.state === 'flying') this.updatePhysics();
        else this.updateDockingLogic();

        const targetCamY = this.rocket.y - this.h * 0.75;
        this.cameraY += (targetCamY - this.cameraY) * 0.2;
        
        this.ctx.save();
        this.ctx.translate(0, -this.cameraY);

        this.drawWorld();
        this.drawEntities();
        this.drawEffects();

        this.ctx.restore();

        this.drawRadar();
        this.drawHUD();

        if (this.state === 'flying') {
            this.generateWorld();
            this.flyTime++;
            if (this.flyTime % 60 === 0 && this.speedCap < this.maxSpeedCap) {
                this.speedCap += 1;
            }
        }
    }

    updatePhysics() {
        const k = parseFloat(this.config.elasticity);
        const ropeLen = parseInt(this.config.ropeLength) * this.scale;
        const grav = parseFloat(this.config.gravity);
        const fric = parseFloat(this.config.friction);

        const worldMouseY = this.mouse.y + this.cameraY;
        const dx = this.mouse.x - this.rocket.x;
        const dy = worldMouseY - this.rocket.y;
        const dist = Math.sqrt(dx*dx + dy*dy);

        if (dist > ropeLen) {
            const force = (dist - ropeLen) * k;
            this.rocket.vx += (dx / dist) * force;
            this.rocket.vy += (dy / dist) * force;
        }

        this.rocket.vy += grav;
        this.rocket.vx *= fric;
        this.rocket.vy *= fric;

        const currentSpeed = Math.sqrt(this.rocket.vx**2 + this.rocket.vy**2);
        if (currentSpeed > this.speedCap * 0.9 && this.speedCap < this.maxSpeedCap) this.speedCap += 0.05;
        if (this.rocket.vy < -this.speedCap) this.rocket.vy = -this.speedCap;

        this.rocket.x += this.rocket.vx;
        this.rocket.y += this.rocket.vy;

        if (this.rocket.x < 15) { this.rocket.x = 15; this.rocket.vx *= -0.6; }
        if (this.rocket.x > this.w - 15) { this.rocket.x = this.w - 15; this.rocket.vx *= -0.6; }

        if (this.rocket.y > this.floorY) {
            this.rocket.y = this.floorY;
            this.rocket.vy = 0;
            this.rocket.grounded = true;
            this.rocket.vx *= 0.8;
        }

        this.checkCollisions();
        this.updateCargo(grav);
    }

    updateCargo(grav) {
        let prev = this.rocket;
        for (let box of this.cargo) {
            const bdx = prev.x - box.x;
            const bdy = prev.y - box.y;
            const bd = Math.sqrt(bdx*bdx + bdy*bdy);
            const targetDist = 20 * this.scale;
            if (bd > targetDist) {
                const f = (bd - targetDist) * 0.3; 
                box.vx = (bdx/bd) * f;
                box.vy = (bdy/bd) * f;
            }
            box.vy += grav;
            box.x += box.vx;
            box.y += box.vy;
            prev = box;
        }
    }

    checkCollisions() {
        this.rocket.grounded = false;

        for (let i = this.obstacles.length - 1; i >= 0; i--) {
            const obs = this.obstacles[i];
            
            // 简单的圆形或矩形碰撞检测近似
            const hitR = (obs.w + obs.h) / 4; 
            const distSq = (this.rocket.x - obs.x)**2 + (this.rocket.y - obs.y)**2;
            const minDist = this.rocket.radius + hitR;

            if (distSq < minDist**2) {
                const isFalling = this.rocket.vy > 0;
                const isAbove = (this.rocket.y - this.rocket.vy) < (obs.y - hitR);

                if (isFalling && isAbove) {
                    this.rocket.y = obs.y - hitR - this.rocket.radius;
                    this.rocket.vy = 0;
                    this.rocket.vx *= 0.8;
                    this.rocket.grounded = true;
                } else {
                    if (this.rocket.vy < -5) {
                        this.loseCargo();
                        this.spawnExplosion(this.rocket.x, this.rocket.y, this.cShip);
                        this.obstacles.splice(i, 1);
                        this.rocket.vy = Math.max(this.rocket.vy, -10); 
                        this.speedCap = 11;
                    }
                    this.rocket.vy *= -0.6;
                    this.rocket.vx *= -0.6;
                }
            }
        }

        for (let i = this.pickups.length - 1; i >= 0; i--) {
            const p = this.pickups[i];
            if ((this.rocket.x-p.x)**2 + (this.rocket.y-p.y)**2 < (30*this.scale)**2) {
                this.addCargo();
                this.pickups.splice(i, 1);
            }
        }

        for (let p of this.planets) {
            if (!p.visited && (this.rocket.x-p.x)**2 + (this.rocket.y-p.y)**2 < (p.radius+20)**2) {
                this.startDocking(p);
                break;
            }
        }
    }

    startDocking(planet) {
        this.state = 'docking_approach';
        this.activePlanet = planet;
        this.dockTimer = 0;
        this.rocket.vx = 0;
        this.rocket.vy = 0;
        this.speedCap = 5; 
        this.floorY = planet.y + planet.radius + 1000;
    }

    updateDockingLogic() {
        if (!this.activePlanet) return;
        this.dockTimer++;

        if (this.state === 'docking_approach') {
            const targetX = this.activePlanet.x;
            const targetY = this.activePlanet.y - this.activePlanet.radius - 15*this.scale;
            this.rocket.x += (targetX - this.rocket.x) * 0.1;
            this.rocket.y += (targetY - this.rocket.y) * 0.1;
            this.updateCargo(0); 

            if (Math.abs(this.rocket.y - targetY) < 1 && this.dockTimer > 20) {
                this.state = 'unloading';
                this.dockTimer = 0;
            }
        } else if (this.state === 'unloading') {
            if (this.dockTimer % 5 === 0) {
                if (this.removeCargo()) {
                    this.money += 100;
                    this.spawnText("+$100", this.rocket.x, this.rocket.y - 40, "#fbbf24");
                } else {
                    this.money += this.earnedThisRun; 
                    this.earnedThisRun = 0;
                    this.state = 'loading';
                    this.dockTimer = 0;
                }
            }
        } else if (this.state === 'loading') {
            const def = parseInt(this.config.cargoCount);
            if (this.dockTimer % 5 === 0) {
                if (this.cargo.length < def) {
                    this.addCargo();
                } else {
                    this.state = 'launching';
                    this.dockTimer = 0;
                }
            }
        } else if (this.state === 'launching') {
            if (this.dockTimer < 30) {
                this.rocket.x = this.activePlanet.x + (Math.random()-0.5)*2;
            } else {
                this.state = 'flying';
                this.activePlanet.visited = true; 
                this.rocket.vy = -15; 
                this.level++;
            }
        }
    }

    drawWorld() {
        this.ctx.fillStyle = this.cObs;
        
        for (let o of this.obstacles) {
            if (o.rotSpeed) o.angle += o.rotSpeed;
            
            this.ctx.save();
            this.ctx.translate(o.x, o.y);
            
            if (o.type === 'asteroid') {
                this.ctx.rotate(o.angle);
                this.ctx.beginPath();
                if (o.vertices) {
                    this.ctx.moveTo(o.vertices[0].x, o.vertices[0].y);
                    for (let i=1; i<o.vertices.length; i++) this.ctx.lineTo(o.vertices[i].x, o.vertices[i].y);
                }
                this.ctx.closePath();
                this.ctx.fillStyle = "#64748b"; 
                this.ctx.fill();
                this.ctx.strokeStyle = "rgba(0,0,0,0.3)";
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
            } 
            else if (o.type === 'satellite') {
                this.ctx.rotate(o.angle);
                this.ctx.fillStyle = "#38bdf8";
                this.ctx.fillRect(-o.w/2, -5, o.w, 10);
                this.ctx.fillStyle = "#cbd5e1";
                this.ctx.fillRect(-10, -10, 20, 20);
                this.ctx.beginPath();
                this.ctx.moveTo(0, 0);
                this.ctx.lineTo(0, -25);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.arc(0, -25, 3, 0, Math.PI*2);
                this.ctx.fillStyle = "red";
                this.ctx.fill();
            }
            else if (o.type === 'debris') {
                this.ctx.rotate(o.angle);
                this.ctx.fillStyle = "#78350f"; 
                this.ctx.beginPath();
                this.ctx.moveTo(-10, -10);
                this.ctx.lineTo(15, -5);
                this.ctx.lineTo(5, 15);
                this.ctx.lineTo(-15, 5);
                this.ctx.fill();
            }
            else {
                this.ctx.fillStyle = this.cObs;
                this.ctx.fillRect(-o.w/2, -o.h/2, o.w, o.h);
                this.ctx.fillStyle = "rgba(255,255,255,0.2)"; 
                this.ctx.fillRect(-o.w/2, -o.h/2, o.w, 4*this.scale);
            }
            this.ctx.restore();
        }
        
        this.ctx.fillStyle = this.cCargo;
        for (let p of this.pickups) {
            this.drawSciFiBox(p.x, p.y, p.radius * 2);
        }

        for (let p of this.planets) {
            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.beginPath();
            this.ctx.arc(0, 0, p.radius, 0, Math.PI*2);
            this.ctx.fillStyle = p.color;
            this.ctx.fill();
            this.ctx.clip(); 
            this.ctx.fillStyle = "rgba(0,0,0,0.1)";
            let s = 123; 
            for(let i=0; i<5; i++) {
                const cx = Math.sin(s++) * p.radius * 0.7;
                const cy = Math.cos(s++) * p.radius * 0.7;
                const r = 10 + Math.abs(Math.sin(s++)) * 20;
                this.ctx.beginPath();
                this.ctx.arc(cx, cy, r, 0, Math.PI*2);
                this.ctx.fill();
            }
            this.ctx.restore();
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius + 10, 0, Math.PI*2);
            this.ctx.strokeStyle = "rgba(255,255,255,0.1)";
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            
            if (!p.visited) {
                this.ctx.fillStyle = "rgba(255,255,255,0.5)";
                this.ctx.fillRect(p.x - 40*this.scale, p.y - p.radius - 10, 80*this.scale, 10);
            }
        }
    }

    drawEntities() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.mouse.x, this.mouse.y + this.cameraY);
        this.ctx.lineTo(this.rocket.x, this.rocket.y);
        this.ctx.strokeStyle = this.cRope;
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([4, 4]);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        for (let b of this.cargo) {
            this.drawSciFiBox(b.x, b.y, 12 * this.scale);
        }

        this.ctx.save();
        this.ctx.translate(this.rocket.x, this.rocket.y);
        let angle = 0;
        
        // [修复] 落地时强制回正
        if (this.rocket.grounded) {
            angle = 0;
        } else if (this.state === 'flying') {
            if (Math.abs(this.rocket.vx) > 0.1 || Math.abs(this.rocket.vy) > 0.1) {
                angle = Math.atan2(this.rocket.vy, this.rocket.vx) + Math.PI/2;
            }
        }
        this.ctx.rotate(angle);
        
        this.ctx.fillStyle = this.cShip;
        this.ctx.beginPath();
        const r = this.rocket.radius; 
        this.ctx.moveTo(0, -r*1.5);
        this.ctx.quadraticCurveTo(r, 0, r, r);
        this.ctx.lineTo(-r, r);
        this.ctx.quadraticCurveTo(-r, 0, 0, -r*1.5);
        this.ctx.fill();
        
        this.ctx.fillStyle = "#38bdf8"; 
        this.ctx.beginPath();
        this.ctx.arc(0, -r*0.2, r*0.3, 0, Math.PI*2);
        this.ctx.fill();
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 1;
        this.ctx.stroke();

        this.ctx.fillStyle = "#475569";
        this.ctx.beginPath();
        this.ctx.moveTo(-r, 0);
        this.ctx.lineTo(-r*1.5, r*1.2);
        this.ctx.lineTo(-r, r);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.moveTo(r, 0);
        this.ctx.lineTo(r*1.5, r*1.2);
        this.ctx.lineTo(r, r);
        this.ctx.fill();
        
        if (this.state === 'flying' && !this.rocket.grounded) {
            this.ctx.fillStyle = '#fbbf24';
            this.ctx.beginPath();
            this.ctx.moveTo(-r*0.4, r);
            this.ctx.lineTo(r*0.4, r);
            this.ctx.lineTo(0, r + Math.random() * r * 1.5 + 5);
            this.ctx.fill();
        }
        this.ctx.restore();
    }

    drawSciFiBox(x, y, size) {
        const half = size / 2;
        this.ctx.fillStyle = this.cCargo;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y - half); 
        this.ctx.lineTo(x + half, y); 
        this.ctx.lineTo(x, y + half); 
        this.ctx.lineTo(x - half, y); 
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.strokeStyle = "rgba(255,255,255,0.4)";
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(x - half*0.5, y - half*0.5);
        this.ctx.lineTo(x + half*0.5, y + half*0.5);
        this.ctx.moveTo(x + half*0.5, y - half*0.5);
        this.ctx.lineTo(x - half*0.5, y + half*0.5);
        this.ctx.stroke();
        this.ctx.strokeStyle = this.cCargo;
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(x - half*0.6, y - half*0.6, size*0.6, size*0.6);
    }

    drawEffects() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.life -= 0.03;
            p.x += p.vx; p.y += p.vy;
            if(p.life <= 0) { this.particles.splice(i, 1); continue; }
            this.ctx.globalAlpha = p.life;
            this.ctx.fillStyle = p.color;
            this.ctx.fillRect(p.x, p.y, 4*this.scale, 4*this.scale);
            this.ctx.globalAlpha = 1;
        }
        
        this.ctx.font = "bold 14px sans-serif";
        this.ctx.textAlign = "center";
        for (let i = this.texts.length - 1; i >= 0; i--) {
            const t = this.texts[i];
            t.y += t.vy;
            t.life -= 0.02;
            if(t.life <= 0) { this.texts.splice(i, 1); continue; }
            this.ctx.globalAlpha = t.life;
            this.ctx.fillStyle = t.color;
            this.ctx.fillText(t.str, t.x, t.y);
            this.ctx.globalAlpha = 1;
        }
    }

    drawRadar() {
        const lookAhead = 1500; 
        const viewTop = this.cameraY;
        const safeY = 80; 
        
        const check = (obj, color, type) => {
            if (obj.y < viewTop && obj.y > viewTop - lookAhead) {
                const dist = Math.floor(viewTop - obj.y);
                const alpha = Math.max(0, 1 - (dist / lookAhead));
                if (alpha > 0.1) {
                    this.ctx.fillStyle = color;
                    this.ctx.globalAlpha = alpha;
                    let w = 20 * this.scale;
                    if (type === 'planet') w = 120 * this.scale;
                    else if (type === 'obs') w = obj.w || 30; 
                    const h = 16;
                    this.ctx.fillRect(obj.x - w/2, safeY, w, h);
                    if (alpha > 0.4) {
                        this.ctx.fillStyle = `rgba(255,255,255,${alpha})`;
                        this.ctx.font = "10px sans-serif";
                        this.ctx.textAlign = "center";
                        this.ctx.fillText(`${dist}m`, obj.x, safeY + 12);
                    }
                    this.ctx.globalAlpha = 1;
                }
            }
        };

        for (let o of this.obstacles) check(o, '#f87171', 'obs'); // Red-400
        for (let p of this.pickups) check(p, '#60a5fa', 'item');   // Blue-400
        for (let p of this.planets) check(p, '#818cf8', 'planet'); // Indigo-400
    }

    drawHUD() {
        this.ctx.fillStyle = 'white'; 
        this.ctx.font = 'bold 12px monospace';
        this.ctx.textAlign = 'left';
        
        const centerY = this.h / 2;
        const speed = Math.sqrt(this.rocket.vx**2 + this.rocket.vy**2).toFixed(1);
        const dist = Math.max(0, Math.floor(Math.abs(this.rocket.y - this.nextPlanetY)));
        
        this.ctx.fillText(`VEL : ${speed}/${this.speedCap.toFixed(0)}`, 20, centerY - 20);
        this.ctx.fillText(`DIST: ${dist}m`, 20, centerY);
        this.ctx.fillText(`LVL : ${this.level}`, 20, centerY + 20);
        
        this.ctx.textAlign = 'right';
        this.ctx.font = 'bold 16px monospace';
        this.ctx.fillStyle = '#fbbf24'; 
        this.ctx.fillText(`$${this.money}`, this.w - 20, 90);
        
        if (this.earnedThisRun > 0) {
            this.ctx.font = '12px monospace';
            this.ctx.fillStyle = this.cCargo;
            this.ctx.fillText(`+ $${this.earnedThisRun}`, this.w - 20, 110);
        }
    }
}

if (window.ProQuiz) window.ProQuiz.registerTheme('cosmic-hauler', '星际快递', CosmicHaulerTheme);

})();