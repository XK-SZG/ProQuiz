(function() {

class NetworkTrafficTheme {
    static schema = {
        // --- 网络拓扑 ---
        sec_net: { type: 'section', label: '网络拓扑' },
        nodeCount: { type: 'range', label: '核心节点数', min: 10, max: 140, default: 80 },
        virtualRate: { type: 'range', label: '虚拟节点生成率', min: 0, max: 20, default: 5 },
        
        // --- 流量控制 ---
        sec_flow: { type: 'section', label: '流量控制' },
        trafficRate: { type: 'range', label: '通信频率', min: 1, max: 60, default: 15 },
        attackRate: { type: 'range', label: '网络攻击率', min: 0, max: 50, default: 15 },
        packetSpeed: { type: 'range', label: '传输速度', min: 1, max: 20, step: 1, default: 8 },
        
        // --- 视觉效果 ---
        sec_vis: { type: 'section', label: '视觉效果' },
        radioRate: { type: 'range', label: '无线电频率', min: 0, max: 10, default: 2 },
        flashRate: { type: 'range', label: '高并发链路频率', min: 0, max: 5, default: 2 },
        lineWidth: { type: 'range', label: '基础线宽', min: 0.5, max: 2, step: 0.25, default: 1 },

        // --- 色彩配置 ---
        sec_col: { type: 'section', label: '色彩配置 (左：明亮 / 右：暗黑)' },
        bgColorLight: { type: 'color', label: '背景底色', default: '#f8fafc' },
        bgColorDark: { type: 'color', label: '背景底色', default: '#020617' },
        
        baseColorLight: { type: 'color', label: '暗网颜色', default: '#cbd5e1' },
        baseColorDark: { type: 'color', label: '暗网颜色', default: '#1e293b' },
        
        normalColorLight: { type: 'color', label: '正常信号', default: '#3b82f6' }, // Blue
        normalColorDark: { type: 'color', label: '正常信号', default: '#60a5fa' },
        
        attackColorLight: { type: 'color', label: '攻击信号', default: '#ef4444' }, // Red
        attackColorDark: { type: 'color', label: '攻击信号', default: '#f87171' },
    };

    static preview = `
<div class="absolute inset-0 opacity-80 bg-slate-900"></div>
<div class="absolute inset-0 flex items-center justify-center">
    <!-- 正三角形的三个顶点 -->
    <!-- 顶点1：左上角，深灰色 -->
    <div class="absolute w-1.5 h-1.5 rounded-full" style="left: 25%; top: 25%; transform: translate(-50%, -50%); background-color: #334155;"></div>
    
    <!-- 顶点2：右上角，深灰色 -->
    <div class="absolute w-1.5 h-1.5 rounded-full" style="left: 75%; top: 25%; transform: translate(-50%, -50%); background-color: #334155;"></div>
    
    <!-- 顶点3：底部中间，红色 -->
    <div class="absolute w-2 h-2 rounded-full shadow-[0_0_10px_red]" style="left: 50%; top: 75%; transform: translate(-50%, -50%); background-color: #f87171;"></div>
    
    <svg class="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
        <!-- 三条连线 -->
        <!-- 深灰色线：连接顶点1和顶点2 -->
        <line x1="25" y1="25" x2="75" y2="25" stroke="#334155" stroke-width="1" />
        
        <!-- 红色线：连接顶点2和顶点3 -->
        <line x1="75" y1="25" x2="50" y2="75" stroke="#f87171" stroke-width="1" />
        
        <!-- 蓝色线：连接顶点3和顶点1 -->
        <line x1="50" y1="75" x2="25" y2="25" stroke="#60a5fa" stroke-width="1" />
    </svg>
</div>
    `;

    constructor(ctx, w, h, isDark, config) {
        this.ctx = ctx; this.w = w; this.h = h; this.isDark = isDark; this.config = config;
        this.overlayOpacity = 0; 
        
        this.nodes = [];
        this.packets = []; 
        this.radios = [];     
        this.flashes = [];    // 存储长链路闪烁对象
        this.particles = [];  
        
        this.edgeUsage = new Set(); 
        this.intensity = 0;
        this.frame = 0;
        this.pad = 200; 

        this.updateColors();
        this.initNetwork();
    }

    resize(w, h) { this.w = w; this.h = h; this.initNetwork(); }

    onConfigChange(key, val) {
        if (key.includes('Color')) this.updateColors();
        if (key === 'nodeCount') this.initNetwork();
    }

    updateColors() {
        const suffix = this.isDark ? 'Dark' : 'Light';
        this.cBase = this.config[`baseColor${suffix}`];
        this.cNormal = this.config[`normalColor${suffix}`];
        this.cAttack = this.config[`attackColor${suffix}`];
        this.cRadio = this.isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
    }

    onThemeChange(isDark) { this.isDark = isDark; this.updateColors(); }
    onIntensityChange(val) { this.intensity = val; }
    onMouseMove(mouse) { this.mx = mouse.x; this.my = mouse.y; }

    initNetwork() {
        const count = parseInt(this.config.nodeCount);
        this.nodes = [];
        this.spawnNodes(count, false);
    }

    spawnNodes(count, isVirtual) {
        const rangeW = this.w + this.pad*2;
        const rangeH = this.h + this.pad*2;
        const idealDist = Math.sqrt((rangeW * rangeH) / ((this.nodes.length + count) * Math.PI)) * 0.7;

        for (let i = 0; i < count; i++) {
            let x, y, safe, attempts=0;
            do {
                x = Math.random() * rangeW - this.pad;
                y = Math.random() * rangeH - this.pad;
                safe = true;
                for(let n of this.nodes) {
                    if (n.status === 'active' && (x-n.x)**2 + (y-n.y)**2 < idealDist**2) { safe=false; break; }
                }
                attempts++;
            } while(!safe && attempts < 10);

            this.nodes.push({
                x, y, 
                vx: (Math.random()-0.5)*0.3, 
                vy: (Math.random()-0.5)*0.3, 
                id: Math.random(), 
                neighbors: [],
                isVirtual: isVirtual,
                life: isVirtual ? 300 + Math.random()*300 : Infinity,
                maxHealth: 5,
                health: 5,
                status: 'active',
                rebootTimer: 0,
                flashVal: 0
            });
        }
    }

    getEdgeKey(a, b) { return a.id < b.id ? `${a.id}-${b.id}` : `${b.id}-${a.id}`; }

    spawnPacket() {
        if (this.packets.length >= 140) return;
        const activeNodes = this.nodes.filter(n => n.status === 'active');
        if (activeNodes.length < 2) return;

        let startNode = null;
        let attempts = 0;
        while (!startNode && attempts < 5) {
            const n = activeNodes[Math.floor(Math.random() * activeNodes.length)];
            if (n.neighbors.length > 0 && n.x > 0 && n.x < this.w && n.y > 0 && n.y < this.h) startNode = n;
            attempts++;
        }
        if (!startNode) return;

        const candidates = startNode.neighbors.filter(n => n.status === 'active' && !this.edgeUsage.has(this.getEdgeKey(startNode, n)));
        if (candidates.length === 0) return;

        const target = candidates[Math.floor(Math.random() * candidates.length)];
        const edgeKey = this.getEdgeKey(startNode, target);
        this.edgeUsage.add(edgeKey);

        const isAttack = Math.random() * 100 < parseFloat(this.config.attackRate);

        this.packets.push({
            from: startNode, to: target,
            currentDist: 0, 
            totalDist: Math.sqrt((startNode.x-target.x)**2 + (startNode.y-target.y)**2),
            edgeKey: edgeKey,
            type: isAttack ? 'attack' : 'normal'
        });
    }

    spawnRadio() {
        const activeNodes = this.nodes.filter(n => n.status === 'active' && n.x > 0 && n.x < this.w);
        if (activeNodes.length === 0) return;
        const n = activeNodes[Math.floor(Math.random() * activeNodes.length)];
        this.radios.push({ x: n.x, y: n.y, r: 0, opacity: 1.0 });
    }

    // 核心逻辑：生成长路径闪烁
    spawnFlash() {
        const activeNodes = this.nodes.filter(n => n.status === 'active');
        if (activeNodes.length < 10) return;
        
        // 随机起点
        let curr = activeNodes[Math.floor(Math.random() * activeNodes.length)];
        const path = [curr];
        
        // 随机游走寻找一条路径 (长度 3-6)
        const len = 3 + Math.floor(Math.random() * 4);
        
        for(let i=0; i<len; i++) {
            if (!curr.neighbors) break;
            // 找一个没走过的邻居
            const nexts = curr.neighbors.filter(n => n.status === 'active' && !path.includes(n));
            if (nexts.length === 0) break;
            curr = nexts[Math.floor(Math.random() * nexts.length)];
            path.push(curr);
        }

        // 只有路径够长才闪烁
        if (path.length >= 3) {
            this.flashes.push({ 
                path: path, 
                life: 1.0, // 持续 1.0 (约60帧)
                color: Math.random() > 0.3 ? this.cNormal : this.cAttack // 大概率蓝色，小概率红色
            }); 
        }
    }

    spawnExplosion(x, y) {
        for(let i=0; i<8; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 1 + Math.random() * 2;
            this.particles.push({
                x: x, y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 1.0,
                color: this.isDark ? '#ef4444' : '#ef4444'
            });
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.w, this.h);
        this.frame++;
        this.edgeUsage.clear(); 

        const speedBase = parseFloat(this.config.packetSpeed);
        const realSpeed = speedBase * (1 + this.intensity * 2); 
        const baseLw = parseFloat(this.config.lineWidth);

        // --- 1. 物理更新 ---
        for (let i = this.nodes.length - 1; i >= 0; i--) {
            const p = this.nodes[i];
            p.x += p.vx; p.y += p.vy;
            if(this.mx) {
                const dx = p.x - this.mx, dy = p.y - this.my;
                const d = Math.sqrt(dx*dx+dy*dy);
                if(d<150) { p.x += (dx/d)*0.5; p.y += (dy/d)*0.5; }
            }
            if(p.x < -this.pad || p.x > this.w+this.pad) p.vx *= -1;
            if(p.y < -this.pad || p.y > this.h+this.pad) p.vy *= -1;
            p.neighbors = [];

            if (p.status === 'rebooting') {
                p.rebootTimer--;
                if (p.rebootTimer <= 0) { p.status = 'active'; p.health = p.maxHealth; p.flashVal = 1.0; }
            } else {
                if (p.isVirtual) {
                    p.life--;
                    if (p.life <= 0) { this.nodes.splice(i, 1); continue; }
                }
                if (p.flashVal > 0) p.flashVal -= 0.05;
            }
        }

        const vRate = parseInt(this.config.virtualRate);
        if (vRate > 0 && this.frame % (60*5/vRate) === 0 && this.nodes.length < 100) this.spawnNodes(1, true);

        // --- 2. 拓扑重建 ---
        const activeNodes = this.nodes.filter(n => n.status === 'active');
        const corners = [
            {x: -this.pad, y: -this.pad}, {x: this.w + this.pad, y: -this.pad},
            {x: this.w + this.pad, y: this.h + this.pad}, {x: -this.pad, y: this.h + this.pad}
        ];
        const triangles = this.bowyerWatson([...activeNodes, ...corners]);

        // --- 3. 绘制层 ---
        
        // Layer A: 暗网连线
        this.ctx.strokeStyle = this.cBase;
        this.ctx.lineWidth = 0.5;
        this.ctx.beginPath();
        const drawnEdges = new Set();
        
        triangles.forEach(tri => {
            const link = (a, b) => {
                if ((a.x-b.x)**2 + (a.y-b.y)**2 > (this.w/1.5)**2) return;
                if (a.neighbors && b.neighbors) {
                    if(!a.neighbors.includes(b)) a.neighbors.push(b);
                    if(!b.neighbors.includes(a)) b.neighbors.push(a);
                }
                const k = a.id < b.id ? `${a.id}-${b.id}` : `${b.id}-${a.id}`;
                if (!drawnEdges.has(k)) {
                    if (!((a.x < 0 && b.x < 0) || (a.x > this.w && b.x > this.w))) {
                        this.ctx.moveTo(a.x, a.y); this.ctx.lineTo(b.x, b.y);
                    }
                    drawnEdges.add(k);
                }
            };
            link(tri.p1, tri.p2); link(tri.p2, tri.p3); link(tri.p3, tri.p1);
        });
        this.ctx.stroke();

        // Layer B: 链路闪烁 (模拟高并发)
        if (Math.random() < parseFloat(this.config.flashRate)/100) this.spawnFlash();
        
        for (let i = this.flashes.length - 1; i >= 0; i--) {
            const f = this.flashes[i];
            f.life -= 0.02; // 约 1 秒 (50帧)
            if (f.life <= 0) { this.flashes.splice(i, 1); continue; }
            
            this.ctx.strokeStyle = f.color || this.cNormal;
            // 闪烁效果：Life越小越透
            this.ctx.globalAlpha = Math.max(0, f.life * 0.6); 
            // 宽度比普通线宽，显眼
            this.ctx.lineWidth = baseLw * 3;
            
            this.ctx.beginPath();
            for (let j=0; j<f.path.length-1; j++) {
                if (f.path[j].status==='active' && f.path[j+1].status==='active') {
                    this.ctx.moveTo(f.path[j].x, f.path[j].y);
                    this.ctx.lineTo(f.path[j+1].x, f.path[j+1].y);
                }
            }
            this.ctx.stroke();
            this.ctx.globalAlpha = 1; // 重置透明度
        }

        // Layer C: 信号包
        const tRate = parseInt(this.config.trafficRate);
        if (this.frame % Math.max(2, 60 - tRate*2) === 0) this.spawnPacket();

        this.ctx.lineWidth = Math.max(2, baseLw * 2.5); 
        this.ctx.lineCap = 'round';

        for (let i = this.packets.length - 1; i >= 0; i--) {
            const p = this.packets[i];
            
            if (p.to.status !== 'active' || p.from.status !== 'active') {
                this.packets.splice(i, 1);
                continue;
            }

            p.totalDist = Math.sqrt((p.to.x-p.from.x)**2 + (p.to.y-p.from.y)**2);
            p.currentDist += realSpeed;
            this.edgeUsage.add(p.edgeKey);

            this.ctx.beginPath();
            this.ctx.strokeStyle = p.type === 'attack' ? this.cAttack : this.cNormal;
            
            const head = Math.min(p.currentDist, p.totalDist);
            const tail = Math.max(0, p.currentDist - 40);
            
            if (tail >= p.totalDist) {
                this.edgeUsage.delete(p.edgeKey);
                if (p.type === 'attack') {
                    p.to.health--;
                    p.to.flashVal = 1.0;
                    if (p.to.health <= 0) {
                        p.to.status = 'rebooting';
                        p.to.rebootTimer = 300;
                        this.spawnExplosion(p.to.x, p.to.y);
                        this.packets.splice(i, 1);
                        continue;
                    }
                }
                const candidates = p.to.neighbors.filter(n => {
                    const k = this.getEdgeKey(p.to, n);
                    return n !== p.from && !this.edgeUsage.has(k) && n.status === 'active';
                });
                if (candidates.length > 0 && Math.random() > 0.2) {
                    const next = candidates[Math.floor(Math.random() * candidates.length)];
                    p.from = p.to; p.to = next; p.currentDist = 0;
                    p.edgeKey = this.getEdgeKey(p.from, p.to);
                    this.edgeUsage.add(p.edgeKey);
                } else {
                    this.packets.splice(i, 1);
                }
            } else if (p.totalDist > 0.1) {
                const dx = p.to.x - p.from.x, dy = p.to.y - p.from.y;
                const r1 = tail / p.totalDist, r2 = head / p.totalDist;
                this.ctx.moveTo(p.from.x + dx * r1, p.from.y + dy * r1);
                this.ctx.lineTo(p.from.x + dx * r2, p.from.y + dy * r2);
                this.ctx.stroke(); // 立即绘制
            }
        }

        // Layer D: 无线电
        const rRate = parseInt(this.config.radioRate);
        if (rRate > 0 && Math.random() < rRate/300) this.spawnRadio();

        for (let i = this.radios.length - 1; i >= 0; i--) {
            const r = this.radios[i];
            r.r += 5;
            r.opacity -= 0.01;
            if (r.opacity <= 0) { this.radios.splice(i, 1); continue; }
            this.ctx.beginPath();
            this.ctx.arc(r.x, r.y, r.r, 0, Math.PI*2);
            this.ctx.fillStyle = this.cRadio;
            this.ctx.globalAlpha = r.opacity;
            this.ctx.fill();
            this.ctx.globalAlpha = 1;
        }

        // Layer E: 节点
        for (let p of activeNodes) {
            if (p.x < -10 || p.x > this.w+10 || p.y < -10 || p.y > this.h+10) continue;
            const baseSize = p.isVirtual ? 1.5 : 2.5;
            const size = baseSize + p.flashVal * 3;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, size, 0, Math.PI*2);
            if (p.flashVal > 0.1) this.ctx.fillStyle = p.isVirtual ? '#fca5a5' : this.cAttack;
            else this.ctx.fillStyle = p.isVirtual ? this.cBase : (this.isDark ? '#475569' : '#94a3b8');
            this.ctx.fill();
        }

        // Layer F: 爆炸
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const pt = this.particles[i];
            pt.x += pt.vx; pt.y += pt.vy;
            pt.life -= 0.01;
            if (pt.life <= 0) { this.particles.splice(i, 1); continue; }
            this.ctx.fillStyle = pt.color;
            this.ctx.globalAlpha = pt.life;
            this.ctx.fillRect(pt.x, pt.y, 3, 3);
            this.ctx.globalAlpha = 1;
        }
        
        if (this.packets.length > 140) this.packets.splice(0, 1);
    }

    bowyerWatson(points) {
        const big = Math.max(this.w, this.h) * 3;
        const stP1 = {x: this.w/2, y: -big}; const stP2 = {x: -big, y: big * 1.5}; const stP3 = {x: this.w + big, y: big * 1.5};
        let triangles = [new Triangle(stP1, stP2, stP3)];
        for (let point of points) {
            let badTriangles = [];
            for (let tri of triangles) { if (this.inCircumcircle(point, tri)) badTriangles.push(tri); }
            let polygon = [];
            for (let tri of badTriangles) {
                for (let edge of tri.edges) {
                    let isShared = false;
                    for (let other of badTriangles) { if (tri !== other && this.hasEdge(other, edge)) { isShared = true; break; } }
                    if (!isShared) polygon.push(edge);
                }
            }
            triangles = triangles.filter(t => !badTriangles.includes(t));
            for (let edge of polygon) triangles.push(new Triangle(edge.p1, edge.p2, point));
        }
        return triangles.filter(t => !(this.isSuper(t.p1, stP1, stP2, stP3) || this.isSuper(t.p2, stP1, stP2, stP3) || this.isSuper(t.p3, stP1, stP2, stP3)));
    }
    isSuper(p, s1, s2, s3) { return p === s1 || p === s2 || p === s3; }
    inCircumcircle(p, t) {
        const ax=t.p1.x, ay=t.p1.y, bx=t.p2.x, by=t.p2.y, cx=t.p3.x, cy=t.p3.y;
        const D = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
        if(Math.abs(D)<0.001) return false; 
        const centerX = ((ax*ax + ay*ay)*(by - cy) + (bx*bx + by*by)*(cy - ay) + (cx*cx + cy*cy)*(ay - by)) / D;
        const centerY = ((ax*ax + ay*ay)*(cx - bx) + (bx*bx + by*by)*(ax - cx) + (cx*cx + cy*cy)*(bx - ax)) / D;
        return ((centerX - p.x)**2 + (centerY - p.y)**2) < ((centerX - ax)**2 + (centerY - ay)**2);
    }
    hasEdge(tri, edge) { return (tri.p1 === edge.p1 && tri.p2 === edge.p2) || (tri.p1 === edge.p2 && tri.p2 === edge.p1) || (tri.p2 === edge.p1 && tri.p3 === edge.p2) || (tri.p2 === edge.p2 && tri.p3 === edge.p1) || (tri.p3 === edge.p1 && tri.p1 === edge.p2) || (tri.p3 === edge.p2 && tri.p1 === edge.p1); }
}

class Triangle {
    constructor(p1, p2, p3) { this.p1 = p1; this.p2 = p2; this.p3 = p3; this.edges = [{p1:p1, p2:p2}, {p1:p2, p2:p3}, {p1:p3, p2:p1}]; }
}

if (window.ProQuiz) window.ProQuiz.registerTheme('network-traffic', '网络通信', NetworkTrafficTheme);

})();