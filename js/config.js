// --- 1. CONFIG & STATE ---
        var SCORE_RULES = { single: 1, judge: 1, multiple: 3, short: 10 };
        var DEFAULT_FILTERS = [
            {"action":"show","type":"range","val1":"1","val2":"29"},
            {"action":"show","type":"range","val1":"31","val2":"40"},
            {"action":"show","type":"single","val1":"49","val2":""},
            {"action":"show","type":"single","val1":"101","val2":""},
            {"action":"show","type":"range","val1":"103","val2":"105"},
            {"action":"show","type":"range","val1":"107","val2":"112"},
            {"action":"show","type":"range","val1":"155","val2":"158"}
        ];

        var MSSP_MODE_INDEX = {
            'sequential-2way': 1,
            'sequential-1way': 2,
            'random-2way': 3,
            'random-1way': 4,
            'memorize': 5,
            'speed': 6,
            'exam': 7,
            'random-2way-draw': 8,
            'random-1way-draw': 9
        };

        var MSSP_MODE_NAME = {
            1: '顺序双向', 2: '顺序单向', 3: '随机双向', 4: '随机单向',
            5: '背简答题', 6: '秒题训练', 7: '模拟考试',
            8: '双向随机抽选', 9: '单向随机抽选'
        };

        // --- 鱼眼交互核心配置 ---
        var FISHEYE_CONFIG = {
            maxScale: 3.5,      // 最大放大倍数
            radius: 120,        // 感应半径（像素）
            baseWidth: 6,       // 基础宽度
            desktopBaseWidth: 10 // 桌面端基础宽度
        };

        // 口令配置已移至 js/secret.js (Git 忽略文件)
        // 若未配置，则默认使用空字符串
        if (typeof MSSP_INTERNAL_SECRET === 'undefined') {
            var MSSP_INTERNAL_SECRET = ``;
        }
