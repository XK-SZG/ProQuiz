(function() {

class FlowingMeshTheme {
    static schema = {
        sec_phy: { type: 'section', label: '流体物理' },
        pointCount: { type: 'range', label: '粒子密度', min: 20, max: 140, default: 80 },
        flowSpeed: { type: 'range', label: '流动速度', min: 0.1, max: 2.0, step: 0.1, default: 0.5 },
        separation: { type: 'range', label: '排斥力度', min: 0, max: 100, default: 40 },
        
        sec_vis: { type: 'section', label: '渲染风格' },
        renderMode: { type: 'select', label: '绘制模式', options: [{val:'line', txt:'仅连线'}, {val:'fill', txt:'仅填充'}, {val:'hybrid', txt:'线条+填充'}], default: 'hybrid' },
        lineWidth: { type: 'range', label: '连线粗细', min: 0.5, max: 3.0, step: 0.1, default: 1.0 },
        nodeSize: { type: 'range', label: '节点大小', min: 0, max: 5, step: 0.5, default: 2.0 },
        fillOpacity: { type: 'range', label: '填充浓度', min: 0.05, max: 0.8, step: 0.05, default: 0.15 },

        sec_col: { type: 'section', label: '色彩配置 (左：明亮 / 右：暗黑)' },
        bgColorLight: { type: 'color', label: '背景底色', default: '#f8fafc' },
        bgColorDark: { type: 'color', label: '背景底色', default: '#020617' },
        lineColorLight: { type: 'color', label: '连线颜色', default: '#94a3b8' },
        lineColorDark: { type: 'color', label: '连线颜色', default: '#1e293b' },
        nodeColorLight: { type: 'color', label: '节点颜色', default: '#6366f1' },
        nodeColorDark: { type: 'color', label: '节点颜色', default: '#818cf8' },
        fillColorLight: { type: 'color', label: '填充颜色', default: '#cbd5e1' },
        fillColorDark: { type: 'color', label: '填充颜色', default: '#312e81' },
    };

    static preview = `
        <div class="absolute inset-0 opacity-60 flex items-center justify-center">
            <div class="relative w-8 h-8">
                <div class="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-500 rounded-full"></div>
                <div class="absolute bottom-1 left-0 w-1 h-1 bg-indigo-500 rounded-full"></div>
                <div class="absolute bottom-1 right-0 w-1 h-1 bg-indigo-500 rounded-full"></div>
                <svg class="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor" stroke-width="5" class="text-indigo-400">
                    <line x1="50" y1="0" x2="0" y2="85" vector-effect="non-scaling-stroke" />
                    <line x1="50" y1="0" x2="100" y2="85" vector-effect="non-scaling-stroke" />
                    <line x1="0" y1="85" x2="100" y2="85" vector-effect="non-scaling-stroke" />
                </svg>
            </div>
        </div>
    `;

    constructor(ctx, w, h, isDark, config) {
        this.ctx = ctx; this.w = w; this.h = h; this.isDark = isDark; this.config = config;
        this.overlayOpacity = 0; 
        this.points = [];
        this.intensity = 0;
        this.pad = 140; // 缓冲区
        this.updateColors();
        this.initPoints();
    }

    // 添加 resize 方法
    resize(w, h) {
        this.w = w;
        this.h = h;
        // 屏幕尺寸改变时，重置点以适应新区域
        this.initPoints();
    }

    onConfigChange(key, val) {
        if (key.includes('Color') || key === 'fillOpacity') this.updateColors();
        if (key === 'pointCount') this.initPoints();
    }

    updateColors() {
        const suffix = this.isDark ? 'Dark' : 'Light';
        this.cLine = this.config[`lineColor${suffix}`];
        this.cNode = this.config[`nodeColor${suffix}`];
        const hex = this.config[`fillColor${suffix}`];
        this.rgbFill = { r: parseInt(hex.slice(1, 3), 16), g: parseInt(hex.slice(3, 5), 16), b: parseInt(hex.slice(5, 7), 16) };
    }

    onThemeChange(isDark) { this.isDark = isDark; this.updateColors(); }
    onIntensityChange(val) { this.intensity = val; }
    onMouseMove(mouse) { this.mx = mouse.x; this.my = mouse.y; }

    initPoints() {
        const count = parseInt(this.config.pointCount);
        this.points = [];
        const rangeW = this.w + this.pad * 2;
        const rangeH = this.h + this.pad * 2;
        const idealDist = Math.sqrt((rangeW * rangeH) / (count * Math.PI)) * 0.8; 

        for (let i = 0; i < count; i++) {
            let x, y, safe, attempts = 0;
            do {
                x = Math.random() * rangeW - this.pad;
                y = Math.random() * rangeH - this.pad;
                safe = true;
                for (const other of this.points) {
                    if ((x-other.x)**2 + (y-other.y)**2 < idealDist**2) { safe = false; break; }
                }
                attempts++;
            } while (!safe && attempts < 10);
            this.points.push({ x, y, vx: (Math.random()-0.5)*0.5, vy: (Math.random()-0.5)*0.5, id: i });
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.w, this.h);
        const speed = parseFloat(this.config.flowSpeed) * (1 + this.intensity * 2);
        const sepDist = parseFloat(this.config.separation);
        
        // 1. 物理更新
        for (let p of this.points) {
            p.x += (0.2 + p.vx) * speed;
            p.y += (-0.2 + p.vy) * speed;
            if (this.mx) {
                const dx = p.x - this.mx, dy = p.y - this.my;
                const distSq = dx*dx + dy*dy;
                if (distSq < 62500) { 
                    const f = (250 - Math.sqrt(distSq)) / 250;
                    p.x += (dx / Math.sqrt(distSq)) * f * 5;
                    p.y += (dy / Math.sqrt(distSq)) * f * 5;
                }
            }
            for (let p2 of this.points) {
                if (p === p2) continue;
                const dx = p.x - p2.x, dy = p.y - p2.y;
                if (Math.abs(dx) > sepDist * 2 || Math.abs(dy) > sepDist * 2) continue;
                const distSq = dx*dx + dy*dy;
                if (distSq < sepDist**2 && distSq > 0.1) {
                    const f = (sepDist - Math.sqrt(distSq)) / sepDist * 0.5;
                    p.x += (dx/Math.sqrt(distSq))*f; p.y += (dy/Math.sqrt(distSq))*f;
                }
            }
            if (p.x > this.w + this.pad) p.x = -this.pad; else if (p.x < -this.pad) p.x = this.w + this.pad;
            if (p.y > this.h + this.pad) p.y = -this.pad; else if (p.y < -this.pad) p.y = this.h + this.pad;
        }

        // 2. 三角剖分 (加入 4 个固定角点，解决边缘留白)
        const corners = [
            {x: -this.pad, y: -this.pad, isFixed: true},
            {x: this.w + this.pad, y: -this.pad, isFixed: true},
            {x: this.w + this.pad, y: this.h + this.pad, isFixed: true},
            {x: -this.pad, y: this.h + this.pad, isFixed: true}
        ];
        // 合并活动点和固定角点进行计算
        const triangulationPoints = [...this.points, ...corners];
        const triangles = this.bowyerWatson(triangulationPoints);

        // 3. 渲染
        const mode = this.config.renderMode;
        const opacity = parseFloat(this.config.fillOpacity);
        this.ctx.lineJoin = 'round';
        this.ctx.lineWidth = parseFloat(this.config.lineWidth);

        triangles.forEach(tri => {
            const p1 = tri.p1, p2 = tri.p2, p3 = tri.p3;
            // 只要三角形在屏幕范围内可见，就绘制
            // 简单的可见性检查
            const minX = Math.min(p1.x, p2.x, p3.x), maxX = Math.max(p1.x, p2.x, p3.x);
            const minY = Math.min(p1.y, p2.y, p3.y), maxY = Math.max(p1.y, p2.y, p3.y);
            if (maxX < 0 || minX > this.w || maxY < 0 || minY > this.h) return;

            this.ctx.beginPath();
            this.ctx.moveTo(p1.x, p1.y); this.ctx.lineTo(p2.x, p2.y); this.ctx.lineTo(p3.x, p3.y); this.ctx.closePath();

            if (mode !== 'line') {
                const cx = (p1.x+p2.x+p3.x)/3, cy = (p1.y+p2.y+p3.y)/3;
                let op = opacity;
                if (this.mx && (cx-this.mx)**2 + (cy-this.my)**2 < 90000) op += (1 - Math.sqrt((cx-this.mx)**2 + (cy-this.my)**2)/300) * 0.2;
                this.ctx.fillStyle = `rgba(${this.rgbFill.r}, ${this.rgbFill.g}, ${this.rgbFill.b}, ${op})`;
                this.ctx.fill();
            }
            if (mode !== 'fill') {
                this.ctx.strokeStyle = this.cLine;
                this.ctx.stroke();
            }
        });

        if (parseFloat(this.config.nodeSize) > 0) {
            this.ctx.fillStyle = this.cNode;
            for (let p of this.points) {
                // 不绘制辅助角点
                if (!p.isFixed && p.x>-5 && p.x<this.w+5 && p.y>-5 && p.y<this.h+5) {
                    this.ctx.beginPath(); this.ctx.arc(p.x, p.y, parseFloat(this.config.nodeSize), 0, Math.PI*2); this.ctx.fill();
                }
            }
        }
    }

    bowyerWatson(points) {
        const big = Math.max(this.w, this.h) * 3; // 超级三角形更大一些
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

if (window.ProQuiz) window.ProQuiz.registerTheme('flowing-mesh', '流动网格', FlowingMeshTheme);

})();