(function() {

class GradientMeshTheme {
    static schema = {
        sec_phy: { type: 'section', label: '网格形态' },
        pointCount: { type: 'range', label: '网格密度', min: 20, max: 140, default: 80 },
        flowSpeed: { type: 'range', label: '流动速度', min: 0.1, max: 2.0, step: 0.1, default: 0.3 },
        sec_grad: { type: 'section', label: '渐变控制' },
        angle: { type: 'range', label: '渐变角度 (°)', min: 0, max: 360, default: 135 },
        contrast: { type: 'range', label: '色彩对比度', min: 0.5, max: 2.0, step: 0.1, default: 1.0 },
        opacity: { type: 'range', label: '整体透明度', min: 0.1, max: 1.0, step: 0.05, default: 0.3 },
        sec_col: { type: 'section', label: '色彩配置 (左：明亮 / 右：暗黑)' },
        bgColorLight: { type: 'color', label: '背景底色', default: '#f8fafc' },
        bgColorDark: { type: 'color', label: '背景底色', default: '#020617' },
        startColorLight: { type: 'color', label: '渐变起点', default: '#e0e7ff' }, 
        startColorDark: { type: 'color', label: '渐变起点', default: '#1e1b4b' }, 
        endColorLight: { type: 'color', label: '渐变终点', default: '#818cf8' }, 
        endColorDark: { type: 'color', label: '渐变终点', default: '#4338ca' }, 
    };

    static preview = `
        <div class="absolute inset-0 opacity-80" style="background: linear-gradient(135deg, rgba(224,231,255,0.2), rgba(67,56,202,0.6));"></div>
        <svg class="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor" fill="none">
            <path d="M0,0 L100,0 L50,50 Z" vector-effect="non-scaling-stroke" />
            <path d="M0,0 L0,100 L50,50 Z" vector-effect="non-scaling-stroke" />
            <path d="M100,100 L100,0 L50,50 Z" vector-effect="non-scaling-stroke" />
            <path d="M100,100 L0,100 L50,50 Z" vector-effect="non-scaling-stroke" />
        </svg>
    `;

    constructor(ctx, w, h, isDark, config) {
        this.ctx = ctx; this.w = w; this.h = h; this.isDark = isDark; this.config = config;
        this.overlayOpacity = 0; 
        this.points = [];
        this.pad = 200; 
        this.updateColors();
        this.initPoints();
    }

    // [修复] 添加 resize 方法
    resize(w, h) {
        this.w = w;
        this.h = h;
        this.initPoints();
    }

    onConfigChange(key, val) {
        if (key.includes('Color')) this.updateColors();
        if (key === 'pointCount') this.initPoints();
    }

    updateColors() {
        const suffix = this.isDark ? 'Dark' : 'Light';
        this.cStart = this.hexToRgb(this.config[`startColor${suffix}`]);
        this.cEnd = this.hexToRgb(this.config[`endColor${suffix}`]);
    }

    hexToRgb(hex) {
        return { r: parseInt(hex.slice(1, 3), 16), g: parseInt(hex.slice(3, 5), 16), b: parseInt(hex.slice(5, 7), 16) };
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
        const speed = parseFloat(this.config.flowSpeed) * (1 + (this.intensity||0) * 2);
        
        for (let p of this.points) {
            p.x += (0.2 + p.vx) * speed; 
            p.y += (-0.2 + p.vy) * speed;
            if (this.mx) {
                const dx = p.x - this.mx, dy = p.y - this.my;
                const d = Math.sqrt(dx*dx + dy*dy);
                if (d < 200) { const f = (200 - d)/200; p.x += (dx/d)*f*2; p.y += (dy/d)*f*2; }
            }
            if (p.x > this.w+this.pad) p.x = -this.pad; else if (p.x < -this.pad) p.x = this.w+this.pad;
            if (p.y > this.h+this.pad) p.y = -this.pad; else if (p.y < -this.pad) p.y = this.h+this.pad;
        }

        // [修复] 增加 4 个固定角点
        const corners = [
            {x: -this.pad, y: -this.pad}, {x: this.w + this.pad, y: -this.pad},
            {x: this.w + this.pad, y: this.h + this.pad}, {x: -this.pad, y: this.h + this.pad}
        ];
        const allPoints = [...this.points, ...corners];
        const triangles = this.bowyerWatson(allPoints);

        const angleRad = parseFloat(this.config.angle) * (Math.PI / 180);
        const contrast = parseFloat(this.config.contrast);
        const opacity = parseFloat(this.config.opacity);
        const cos = Math.cos(angleRad), sin = Math.sin(angleRad);
        const maxProj = Math.abs(this.w * cos) + Math.abs(this.h * sin);

        this.ctx.lineJoin = 'round';
        this.ctx.lineWidth = 0.5;

        triangles.forEach(tri => {
            const p1 = tri.p1, p2 = tri.p2, p3 = tri.p3;
            // 剔除屏幕外
            const minX = Math.min(p1.x, p2.x, p3.x), maxX = Math.max(p1.x, p2.x, p3.x);
            const minY = Math.min(p1.y, p2.y, p3.y), maxY = Math.max(p1.y, p2.y, p3.y);
            if (maxX < 0 || minX > this.w || maxY < 0 || minY > this.h) return;

            let cx = (p1.x+p2.x+p3.x)/3, cy = (p1.y+p2.y+p3.y)/3;
            let t = (cx * cos + cy * sin) / maxProj + 0.5;
            t = (t - 0.5) * contrast + 0.5;
            t = Math.max(0, Math.min(1, t));

            const r = this.cStart.r + (this.cEnd.r - this.cStart.r) * t;
            const g = this.cStart.g + (this.cEnd.g - this.cStart.g) * t;
            const b = this.cStart.b + (this.cEnd.b - this.cStart.b) * t;
            const col = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${opacity})`;
            
            this.ctx.fillStyle = col; this.ctx.strokeStyle = col;
            this.ctx.beginPath(); this.ctx.moveTo(p1.x, p1.y); this.ctx.lineTo(p2.x, p2.y); this.ctx.lineTo(p3.x, p3.y); this.ctx.closePath();
            this.ctx.fill(); this.ctx.stroke();
        });
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

if (window.ProQuiz) window.ProQuiz.registerTheme('gradient-mesh', '三角渐变', GradientMeshTheme);

})();