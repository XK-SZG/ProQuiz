var state = {
            mode: null,
            questions: [],
            currentIdx: 0,
            answers: {},
            answersScore: {},
            answeredCount: 0, // v3 缓存已答题数
            startTime: 0,
            timer: null,
            timerVal: 0,
            singleStage: 'answering',
            memoStep: 1,
            mistakesSession: [],
            scrollSubmitted: false,
            selectedSets: [], // 记录用户选择的题集索引
            settings: JSON.parse(localStorage.getItem('quiz_cfg')) || {
                single: 3,
                multiple: 5,
                short: 2.5,
                randomizeOptions: false,
                verifyPassword: ''
            }
        };