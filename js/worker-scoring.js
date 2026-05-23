// Web Worker for Quiz Scoring
// 负责处理交卷时的密集计算任务，避免阻塞主线程

self.onmessage = function(e) {
    const { questions, answers, SCORE_RULES } = e.data;
    
    const results = {
        totalEarned: 0,
        mistakes: [],
        answersScore: {},
        isCorrectMap: {}
    };

    // 辅助函数：获取分数
    function getPoints(type) { 
        return SCORE_RULES[type] || 0; 
    }

    // 辅助函数：检查客观题是否正确
    function checkCorrect(q, ans) {
        if (q.type === 'short' || ans === undefined || ans === null) return false;
        if (q.type === 'single' || q.type === 'judge') return ans === q.answer;
        if (q.type === 'multiple') {
            if (!Array.isArray(ans) || !Array.isArray(q.answer)) return false;
            return JSON.stringify([...ans].sort()) === JSON.stringify([...q.answer].sort());
        }
        return false;
    }

    // 辅助函数：计算简答题模糊匹配分数
    function calculateFuzzyScore(standard, user) {
        if (!user || !user.trim()) return 0;
        if (!standard) return 100;
        const strStd = standard.toLowerCase().trim();
        const strUser = user.toLowerCase().trim();
        if (strStd.length > 10 && strUser.length / strStd.length < 0.2) return 0; 
        if (strStd.length < 5) return strUser.includes(strStd) || strStd.includes(strUser) ? 100 : 0;
        const getFeatures = (text) => {
            const features = new Set();
            const enWords = text.match(/[a-z0-9]+/g) || [];
            enWords.forEach(w => features.add(w));
            const cnText = text.replace(/[^\u4e00-\u9fa5]/g, '');
            for (let i = 0; i < cnText.length - 1; i++) features.add(cnText.substring(i, i + 2));
            return features;
        };
        const featStd = getFeatures(strStd);
        const featUser = getFeatures(strUser);
        if (featStd.size === 0) return strUser.includes(strStd) ? 100 : 0;
        let hits = 0;
        featStd.forEach(token => { if (featUser.has(token)) hits++; });
        let scoreRatio = hits / featStd.size;
        if (scoreRatio < 0.15) return 0;
        let finalScore = scoreRatio >= 0.9 ? 100 : ((scoreRatio - 0.15) / 0.85) * 100;
        return Math.round(Math.max(0, Math.min(100, finalScore)));
    }

    // 遍历所有题目进行判分
    questions.forEach((q, idx) => {
        const ans = answers[idx];
        
        if (q.type !== 'short') {
            const isCorrect = checkCorrect(q, ans);
            results.isCorrectMap[idx] = isCorrect;
            
            if (isCorrect) {
                results.totalEarned += getPoints(q.type);
            } else {
                results.mistakes.push(q);
            }
        } else {
            const userAns = ans || '';
            const pct2 = calculateFuzzyScore(q.answer, userAns);
            const score = Math.round((pct2 / 100) * getPoints('short'));
            results.answersScore[idx] = score;
            results.totalEarned += score;
        }
    });

    // 将结果发送回主线程
    self.postMessage(results);
};
