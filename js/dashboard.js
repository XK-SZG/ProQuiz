function updateDashboard() {
            const h = JSON.parse(localStorage.getItem('quiz_history')) || [];
            const m = JSON.parse(localStorage.getItem('quiz_mistakes')) || [];
            
            // --- 鼓励语随机逻辑 ---
            const quotes = [
                "坚持就是胜利，加油！奥里给！",
                "干就完了，这次稳如泰山！",
                "这题你能行，拿来吧你！",
                "解！快给题目上点难度！",
                "这波刷完，直接经验拉满！",
                "拿下这题，你就是天选刷题人！",
                "错题退散！这波操作秀啊~",
                "妖魔错题快走开~妖魔错题快走开~",
                "笔锋所至，梦想开花！",
                "蓄力前行，终将抵达！",
                "稳住，你每一步都算数！",
                "你的努力，正在解锁未来！",
                "全神贯注，此刻即是成长！",
                "今天的题，是明天的底气！",
                "思路全对，下笔如有神！",
                "逢考必过，势如破竹！",
                "步步扎实，关关突破！",
                "冲就对了，这波优势在你！",
                "思路超神，直接拿下！",
                "稳住别慌，操作稳稳当当。",
                "你可以的，根本难不倒你！",
                "自信点，你就是解题王！",
                "系统提示：您已击败90%对手。",
                "这题简单，我DNA动了！",
                "知识已加载，秒了秒了！",
                "优雅，永不过时（解题版）。",
                "Buff已加满，速通此题！",
                "前路有光，星辰正开奖。",
                "笔下生风，答案全对。",
                "每一步，都在靠近巅峰。",
                "今天的你，是超级进化版！",
                "脑力全开，灵感正在路上。",
                "轻松拿捏，问题不大！",
                "稳赢局，就看这一笔。",
                "精准发力，完美通关。",
                "秒解，这就是实力！",
                "开干，结局必是满分！"
            ];
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            const quoteBox = document.getElementById('quote-box');
            if (quoteBox) quoteBox.innerText = randomQuote;
            // ---------------------

            let avg=0, maxR=0, minR=0, maxM=0, minM=0;
            if (h.length) { const rs = h.map(x=>x.scoreRatio||0); const ms = h.map(x=>x.mCount||0); avg = Math.round(rs.reduce((a,b)=>a+b,0)/h.length); maxR=Math.max(...rs); minR=Math.min(...rs); maxM=Math.max(...ms); minM=Math.min(...ms); }
            
            document.getElementById('stat-accuracy').innerText = `${avg}%`; document.getElementById('stat-acc-max').innerText = maxR; document.getElementById('stat-acc-min').innerText = minR;
            document.getElementById('stat-count').innerText = h.length; document.getElementById('stat-mistakes').innerText = m.length; document.getElementById('stat-mis-max').innerText = maxM; document.getElementById('stat-mis-min').innerText = minM;
            
            if(h.length) { const l = h[h.length-1]; document.getElementById('stat-last-score').innerText = l.score; document.getElementById('stat-last-time').innerText = l.dateStr; }
            
            const ctx = document.getElementById('trendChart').getContext('2d'); if (window.myChart) window.myChart.destroy();
            const recent = h.slice(-10); 
            
            const isDark = document.documentElement.classList.contains('dark');
            const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
            const textColor = isDark ? '#94A3B8' : '#64748B';
            
            window.myChart = new Chart(ctx, { type: 'line', data: { labels: recent.map(x=>x.dateStr), datasets: [{ label: '得分率', data: recent.map(x=>x.scoreRatio), borderColor: '#4F46E5', backgroundColor: 'rgba(79, 70, 229, 0.1)', fill: true, tension: 0.4, yAxisID: 'y' }, { label: '速度', data: recent.map(x=>x.time), borderColor: '#F59E0B', borderDash: [5,5], tension: 0.4, yAxisID: 'y1' }] }, options: { responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false }, scales: { y: { min: 0, max: 100, position: 'left', grid: {color: gridColor}, ticks: {color: textColor} }, y1: { position: 'right', grid: { drawOnChartArea: false }, ticks: {color: textColor} }, x: { grid: {color: gridColor}, ticks: {color: textColor} } } } });
        }
