document.addEventListener('DOMContentLoaded', () => {
    const screens = {
        start: document.getElementById('start-screen'),
        test: document.getElementById('test-screen'),
        loading: document.getElementById('loading-screen'),
        result: document.getElementById('result-screen')
    };

    const startSimpleTestBtn = document.getElementById('start-simple-test-btn');
    const startFullTestBtn = document.getElementById('start-full-test-btn');
    const questionNumberElement = document.querySelector('#test-screen .question-number');
    const questionTextElement = document.querySelector('#test-screen .question-text');
    const optionsContainer = document.querySelector('#test-screen .options-container');
    const progressBarFill = document.querySelector('.progress-bar-fill');

    const resultTypeTitle = document.querySelector('#result-screen .result-type-title');
    const resultTypeImage = document.querySelector('#result-screen .result-type-image');
    const resultSummary = document.querySelector('#result-screen .result-summary');
    const strategyTabs = document.querySelector('#result-screen .strategy-tabs');
    const strategyContentElements = {
        learning: document.querySelector('#result-screen .learning-strategy'),
        interpersonal: document.querySelector('#result-screen .interpersonal-strategy'),
        career: document.querySelector('#result-screen .career-strategy')
    };
    const shareResultBtn = document.getElementById('share-result-btn');
    const goToStartBtn = document.getElementById('go-to-start-btn');

    let allData = {};
    let activeQuestionSet = [];
    let currentQuestionIndex = 0;
    let userAnswers = {};

    function showScreen(screenName) {
        Object.values(screens).forEach(screen => screen.classList.remove('active'));
        screens[screenName].classList.add('active');
    }

    async function loadData() {
        try {
            const response = await fetch('data.json');
            allData = await response.json();
            console.log('Data loaded:', allData);
            showScreen('start');
        } catch (error) {
            console.error('Failed to load data:', error);
            alert('데이터 로드에 실패했습니다. 새로고침 해주세요.');
        }
    }

    function startTest(testType) {
        activeQuestionSet = testType === 'simple' ? allData.simple_questions : allData.full_questions;
        currentQuestionIndex = 0;
        userAnswers = {};
        showScreen('test');
        updateProgressBar();
        renderQuestion();
    }

    function updateProgressBar() {
        const progress = (currentQuestionIndex / activeQuestionSet.length) * 100;
        progressBarFill.style.width = `${progress}%`;
    }

    function handleAnswerSelection(questionId, value) {
        userAnswers[questionId] = value;
        currentQuestionIndex++;
        updateProgressBar();

        setTimeout(() => {
            if (currentQuestionIndex < activeQuestionSet.length) {
                renderQuestion();
            } else {
                calculateResult();
            }
        }, 200);
    }

    function renderQuestion() {
        const question = activeQuestionSet[currentQuestionIndex];
        questionNumberElement.textContent = `Q.${currentQuestionIndex + 1} / ${activeQuestionSet.length}`;
        questionTextElement.textContent = question.text;

        optionsContainer.innerHTML = '';
        
        const optionYes = document.createElement('button');
        optionYes.classList.add('option-btn');
        optionYes.dataset.value = 'yes';
        optionYes.textContent = '예';
        optionYes.addEventListener('click', () => handleAnswerSelection(question.id, 'yes'));
        optionsContainer.appendChild(optionYes);

        const optionNo = document.createElement('button');
        optionNo.classList.add('option-btn');
        optionNo.dataset.value = 'no';
        optionNo.textContent = '아니오';
        optionNo.addEventListener('click', () => handleAnswerSelection(question.id, 'no'));
        optionsContainer.appendChild(optionNo);
    }

    function calculateResult() {
        showScreen('loading');
        setTimeout(() => {
            const typeScores = {};
            for (let i = 1; i <= 9; i++) {
                typeScores[i] = 0;
            }

            for (const q of activeQuestionSet) {
                if (userAnswers[q.id] === 'yes') {
                    typeScores[q.type]++;
                }
            }

            console.log('Type Scores:', typeScores);

            const sortedTypes = Object.entries(typeScores).sort((a, b) => b[1] - a[1]);
            const primaryType = sortedTypes[0][0];

            displayResult(primaryType);
        }, 1500);
    }

    function displayResult(typeId) {
        const result = allData.results[typeId];
        if (!result) {
            console.error('Result data not found for type:', typeId);
            alert('결과를 불러오는 데 문제가 발생했습니다.');
            showScreen('start');
            return;
        }

        resultTypeTitle.textContent = `${result.title}`;
        // Update result logo div
        resultTypeImage.setAttribute('aria-label', `${result.title} 로고`);
        resultTypeImage.dataset.typeId = typeId;

        resultSummary.textContent = result.summary;

        strategyContentElements.learning.textContent = result.strategy.learning;
        strategyContentElements.interpersonal.textContent = result.strategy.interpersonal;
        strategyContentElements.career.textContent = result.strategy.career;

        strategyTabs.querySelector('.tab-btn.active')?.classList.remove('active');
        strategyTabs.querySelector('.tab-btn[data-strategy="learning"]').classList.add('active');
        Object.values(strategyContentElements).forEach(el => el.classList.remove('active'));
        strategyContentElements.learning.classList.add('active');

        shareResultBtn.onclick = () => {
            const shareText = `저는 ${result.title}입니다! 에니어그램으로 저를 더 깊이 이해했어요. 이 앱을 통해 당신의 잠재력도 발견해보세요! ${window.location.href}`;
            navigator.clipboard.writeText(shareText).then(() => {
                alert('결과가 클립보드에 복사되었습니다! 친구들에게 공유해보세요.');
            }).catch(err => {
                console.error('Failed to copy: ', err);
                alert('결과 복사에 실패했습니다.');
            });
        };

        showScreen('result');
    }

    // --- Event Listeners ---
    startSimpleTestBtn.addEventListener('click', () => startTest('simple'));
    startFullTestBtn.addEventListener('click', () => startTest('full'));

    strategyTabs.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('tab-btn')) {
            strategyTabs.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            Object.values(strategyContentElements).forEach(el => el.classList.remove('active'));
            target.classList.add('active');
            const strategyType = target.dataset.strategy;
            strategyContentElements[strategyType].classList.add('active');
        }
    });

    goToStartBtn.addEventListener('click', () => {
        showScreen('start');
    });

    loadData();
});
