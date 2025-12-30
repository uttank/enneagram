/* app.js */

// All application logic will go here

// Data Structures
const typeInfo = {
  1: { name: '개혁가', emoji: '⚖️', short: '원칙과 정확함', desc: '올바름을 추구하고 개선하려는 사람' },
  2: { name: '조력가', emoji: '💝', short: '돌봄과 관계', desc: '다른 사람을 돕고 연결하려는 사람' },
  3: { name: '성취가', emoji: '🏆', short: '성공과 효율', desc: '목표를 달성하고 인정받으려는 사람' },
  4: { name: '예술가', emoji: '🎨', short: '독특함과 감성', desc: '깊은 감정과 의미를 추구하는 사람' },
  5: { name: '탐구가', emoji: '🔬', short: '지식과 분석', desc: '이해하고 관찰하려는 사람' },
  6: { name: '충성가', emoji: '🛡️', short: '안전과 신뢰', desc: '안정과 확신을 추구하는 사람' },
  7: { name: '열정가', emoji: '🚀', short: '즐거움과 다양성', desc: '새로운 경험을 추구하는 사람' },
  8: { name: '도전가', emoji: '👑', short: '힘과 정의', desc: '주도하고 보호하려는 사람' },
  9: { name: '평화주의자', emoji: '☮️', short: '갈등을 피하고 연결하려는 사람' }
};

const fullQuestions = [
  // 1번 유형 - 개혁가
  { type: 1, q: "나는 옳고 그름에 대한 명확한 기준이 있고, 그것을 지키려 노력한다" },
  { type: 1, q: "일을 할 때 세부사항까지 정확하게 처리해야 마음이 편하다" },
  { type: 1, q: "다른 사람의 실수나 잘못된 행동을 보면 지적하고 싶은 충동을 느낀다" },
  
  // 2번 유형 - 조력가
  { type: 2, q: "다른 사람을 도울 때 가장 큰 보람을 느끼고, 필요한 존재가 되고 싶다" },
  { type: 2, q: "주변 사람들의 기분이나 필요를 빠르게 알아차리는 편이다" },
  { type: 2, q: "내가 도움을 주었을 때 상대방이 고마워하지 않으면 서운함을 느낀다" },
  
  // 3번 유형 - 성취가
  { type: 3, q: "목표 달성과 성공이 중요하며, 능력 있는 사람으로 인정받고 싶다" },
  { type: 3, q: "효율적으로 일을 처리하고 결과를 빠르게 얻는 것이 중요하다" },
  { type: 3, q: "다른 사람들이 나를 어떻게 보는지 신경 쓰이고, 좋은 인상을 주고 싶다" },
  
  // 4번 유형 - 예술가
  { type: 4, q: "나만의 독특함이 중요하고, 감정의 깊이가 남들보다 깊다고 느낀다" },
  { type: 4, q: "평범한 것보다는 특별하고 의미 있는 것에 끌린다" },
  { type: 4, q: "다른 사람들이 가진 것이 부럽거나, 나에게 뭔가 부족하다고 느낄 때가 있다" },
  
  // 5번 유형 - 탐구가
  { type: 5, q: "새로운 것을 배우고 이해하는 것이 즐겁고, 혼자만의 시간이 꼭 필요하다" },
  { type: 5, q: "상황에 참여하기보다 한 발 물러서서 관찰하는 것이 편하다" },
  { type: 5, q: "내 시간, 에너지, 자원이 고갈되는 것에 대한 걱정이 있다" },
  
  // 6번 유형 - 충성가
  { type: 6, q: "최악의 상황을 미리 대비하며, 신뢰할 수 있는 사람/조직이 중요하다" },
  { type: 6, q: "새로운 상황이나 사람에 대해 의심이 먼저 들고 확인하고 싶어진다" },
  { type: 6, q: "권위 있는 사람이나 조직에 대해 복잡한 감정(신뢰와 의심)을 느낀다" },
  
  // 7번 유형 - 열정가
  { type: 7, q: "새롭고 재미있는 경험을 추구하며, 여러 가지 일을 동시에 하는 게 자연스럽다" },
  { type: 7, q: "힘든 상황에서도 긍정적인 면을 찾으려 하고, 기분 전환이 빠른 편이다" },
  { type: 7, q: "한 가지에 오래 집중하거나 제한받는 것이 답답하게 느껴진다" },
  
  // 8번 유형 - 도전가
  { type: 8, q: "상황을 주도하는 것이 편하고, 불의를 보면 참기 어렵다" },
  { type: 8, q: "나의 약한 모습을 다른 사람에게 보여주는 것이 불편하다" },
  { type: 8, q: "직접적이고 솔직한 표현을 선호하고, 돌려 말하는 것이 답답하다" },
  
  // 9번 유형 - 평화주의자
  { type: 9, q: "갈등을 피하고 평화로운 분위기를 선호하며, 여러 입장을 이해할 수 있다" },
  { type: 9, q: "다른 사람의 의견에 맞추다 보면 내가 진정 원하는 것이 뭔지 모를 때가 있다" },
  { type: 9, q: "중요한 일을 미루거나, 편안한 루틴에 빠지는 경향이 있다" }
];

const integrationPaths = {
  1: { growth: 7, stress: 4, growthDesc: '즐거움과 자발성', stressDesc: '우울과 자기비판' },
  2: { growth: 4, stress: 8, growthDesc: '자기인식과 진정성', stressDesc: '공격성과 지배' },
  3: { growth: 6, stress: 9, growthDesc: '헌신과 협력', stressDesc: '무기력과 회피' },
  4: { growth: 1, stress: 2, growthDesc: '원칙과 객관성', stressDesc: '의존과 집착' },
  5: { growth: 8, stress: 7, growthDesc: '자신감과 결단력', stressDesc: '분산과 충동' },
  6: { growth: 9, stress: 3, growthDesc: '평화와 신뢰', stressDesc: '경쟁과 이미지' },
  7: { growth: 5, stress: 1, growthDesc: '깊이와 집중', stressDesc: '비판과 완벽주의' },
  8: { growth: 2, stress: 5, growthDesc: '온정과 개방', stressDesc: '고립과 냉소' },
  9: { growth: 3, stress: 6, growthDesc: '주도성과 활력', stressDesc: '불안과 의심' }
};

const relationshipDescriptions = {
  '1-1': { title: '같은 유형', desc: '서로의 기준을 이해하지만, 누가 더 옳은지 경쟁할 수 있어요', tip: '서로 다른 "옳음"을 인정해보세요' },
  '1-2': { title: '보완 관계', desc: '1번의 원칙과 2번의 따뜻함이 균형을 이뤄요', tip: '서로의 방식을 존중하면 좋은 팀이 돼요' },
  '1-3': { title: '목표 지향', desc: '둘 다 성취를 중시하지만 방식이 달라요', tip: '1번은 과정, 3번은 결과 - 둘 다 중요해요' },
  '1-4': { title: '긴장 관계', desc: '1번의 논리와 4번의 감정이 충돌할 수 있어요', tip: '감정도 중요한 데이터예요' },
  '1-5': { title: '지적 동반자', desc: '둘 다 깊이 생각하고 분석해요', tip: '머리뿐 아니라 마음도 나눠보세요' },
  '1-6': { title: '신뢰 관계', desc: '둘 다 책임감이 강하고 믿음직해요', tip: '서로를 믿으면 든든한 파트너예요' },
  '1-7': { title: '성장 파트너', desc: '1번이 7번에게 배울 점이 많아요 (성장 방향)', tip: '즐거움과 유연함을 배워보세요' },
  '1-8': { title: '충돌 가능', desc: '둘 다 자기 방식이 옳다고 생각해요', tip: '통제하려 하지 말고 협력해보세요' },
  '1-9': { title: '안정 관계', desc: '9번이 1번의 긴장을 풀어줘요', tip: '서로에게 편안함을 줄 수 있어요' },
  
  '2-2': { title: '같은 유형', desc: '서로 돌보려다 정작 본인은 소홀해질 수 있어요', tip: '받는 것도 연습해보세요' },
  '2-3': { title: '이미지 관계', desc: '둘 다 인정받고 싶어하지만 방식이 달라요', tip: '진정성 있는 대화가 필요해요' },
  '2-4': { title: '감정 공유', desc: '깊은 감정적 연결이 가능해요', tip: '2번이 4번의 독특함을 인정해주세요' },
  '2-5': { title: '거리감', desc: '2번은 가까움, 5번은 공간이 필요해요', tip: '적절한 거리감을 협의해보세요' },
  '2-6': { title: '지지 관계', desc: '서로를 지지하고 보호해요', tip: '의존이 아닌 신뢰를 쌓아가세요' },
  '2-7': { title: '활력 관계', desc: '함께 있으면 에너지가 생겨요', tip: '깊은 대화 시간도 가져보세요' },
  '2-8': { title: '강한 연결', desc: '2번의 부드러움과 8번의 강함이 만나요', tip: '서로의 취약함을 안전하게 나눠보세요' },
  '2-9': { title: '편안한 관계', desc: '서로에게 편안함을 줘요', tip: '각자의 필요도 표현해보세요' },
  
  '3-3': { title: '같은 유형', desc: '서로 경쟁하거나 함께 성장할 수 있어요', tip: '협력하면 더 큰 성과를 낼 수 있어요' },
  '3-4': { title: '긴장 관계', desc: '3번은 이미지, 4번은 진정성을 중시해요', tip: '서로 다른 가치를 인정해보세요' },
  '3-5': { title: '실용적 관계', desc: '둘 다 효율을 중시하지만 방식이 달라요', tip: '감정적 연결도 시도해보세요' },
  '3-6': { title: '신뢰 파트너', desc: '6번이 3번에게 안정감을 줘요', tip: '3번의 성장 방향(6번)이에요' },
  '3-7': { title: '에너지 관계', desc: '둘 다 활동적이고 긍정적이에요', tip: '깊이 있는 시간도 필요해요' },
  '3-8': { title: '파워 관계', desc: '둘 다 리더십이 있어요', tip: '누가 이끌지 협의가 필요해요' },
  '3-9': { title: '조화 관계', desc: '9번이 3번의 여유를 만들어줘요', tip: '서로에게 좋은 영향을 줄 수 있어요' },
  
  '4-4': { title: '같은 유형', desc: '깊은 이해가 가능하지만 감정 롤러코스터가 될 수 있어요', tip: '서로의 감정에 매몰되지 않도록 주의하세요' },
  '4-5': { title: '깊은 연결', desc: '둘 다 깊이를 추구해요', tip: '지적 + 감정적 연결이 가능해요' },
  '4-6': { title: '불안 공유', desc: '둘 다 불안을 느끼지만 표현 방식이 달라요', tip: '서로의 불안을 이해해주세요' },
  '4-7': { title: '대조 관계', desc: '4번은 깊이, 7번은 넓이를 추구해요', tip: '서로에게 새로운 시각을 줄 수 있어요' },
  '4-8': { title: '강렬한 관계', desc: '둘 다 감정이 강렬해요', tip: '힘 겨루기가 될 수 있으니 주의하세요' },
  '4-9': { title: '수용 관계', desc: '9번이 4번을 있는 그대로 받아줘요', tip: '4번은 9번의 평화를 배울 수 있어요' },
  
  '5-5': { title: '같은 유형', desc: '서로의 공간을 존중하지만 거리가 생길 수 있어요', tip: '함께하는 시간을 의도적으로 만드세요' },
  '5-6': { title: '분석 파트너', desc: '둘 다 신중하고 분석적이에요', tip: '행동으로 옮기는 연습을 함께 해보세요' },
  '5-7': { title: '대조 관계', desc: '5번은 깊이, 7번은 다양성을 원해요', tip: '서로의 스타일을 존중해보세요' },
  '5-8': { title: '성장 파트너', desc: '8번은 5번의 성장 방향이에요', tip: '5번이 8번에게 자신감을 배울 수 있어요' },
  '5-9': { title: '평화로운 관계', desc: '둘 다 조용하고 관찰하는 걸 좋아해요', tip: '에너지를 모아 함께 행동해보세요' },
  
  '6-6': { title: '같은 유형', desc: '서로를 이해하지만 불안이 증폭될 수 있어요', tip: '함께 안정감을 만들어가세요' },
  '6-7': { title: '대조 관계', desc: '6번은 조심, 7번은 낙관적이에요', tip: '균형을 찾으면 좋은 팀이에요' },
  '6-8': { title: '힘의 관계', desc: '6번은 8번의 강함에 안정을 느끼거나 위협을 느껴요', tip: '신뢰를 쌓는 데 시간이 필요해요' },
  '6-9': { title: '안정 파트너', desc: '9번이 6번에게 평화를 줘요', tip: '6번의 성장 방향(9번)이에요' },
  
  '7-7': { title: '같은 유형', desc: '함께 있으면 즐겁지만 깊이가 부족할 수 있어요', tip: '어려운 주제도 함께 다뤄보세요' },
  '7-8': { title: '에너지 폭발', desc: '둘 다 에너지가 넘쳐요', tip: '서로를 자극하되 휴식도 필요해요' },
  '7-9': { title: '편안한 관계', desc: '9번이 7번의 속도를 늦춰줘요', tip: '서로에게 균형을 줄 수 있어요' },
  
  '8-8': { title: '같은 유형', desc: '서로 존중하거나 충돌해요', tip: '누가 이기느냐보다 함께 이기는 법을 찾으세요' },
  '8-9': { title: '보완 관계', desc: '8번의 강함과 9번의 부드러움이 만나요', tip: '서로의 장점을 배울 수 있어요' },
  
  '9-9': { title: '같은 유형', desc: '평화롭지만 정체될 수 있어요', tip: '함께 목표를 세우고 움직여보세요' }
};

// 호환성 조회 함수
const getRelationshipDesc = (t1, t2) => {
  const key = `${Math.min(t1,t2)}-${Math.max(t1,t2)}`;
  return relationshipDescriptions[key] || { title: '관계', desc: '서로를 알아가보세요', tip: '소통이 중요해요' };
};

const compatibility = {
  '1-1': 70, '1-2': 85, '1-3': 75, '1-4': 60, '1-5': 80, '1-6': 75, '1-7': 90, '1-8': 65, '1-9': 80,
  '2-2': 70, '2-3': 65, '2-4': 90, '2-5': 55, '2-6': 75, '2-7': 80, '2-8': 85, '2-9': 80,
  '3-3': 70, '3-4': 60, '3-5': 65, '3-6': 85, '3-7': 80, '3-8': 75, '3-9': 90,
  '4-4': 65, '4-5': 85, '4-6': 70, '4-7': 65, '4-8': 60, '4-9': 80,
  '5-5': 75, '5-6': 70, '5-7': 60, '5-8': 85, '5-9': 75,
  '6-6': 70, '6-7': 60, '6-8': 55, '6-9': 90,
  '7-7': 75, '7-8': 80, '7-9': 85,
  '8-8': 65, '8-9': 85,
  '9-9': 70
};

const getCompatibility = (t1, t2) => {
  const key = `${Math.min(t1,t2)}-${Math.max(t1,t2)}`;
  return compatibility[key] || 70;
};

// ⭐ 1~10점 척도 검사 UI related functions
const getScoreLabel = (score) => {
  if (score <= 2) return '전혀 아니다';
  if (score <= 4) return '아니다';
  if (score <= 6) return '보통이다';
  if (score <= 8) return '그렇다';
  return '매우 그렇다';
};

const getScoreColor = (score) => {
  if (score <= 2) return 'from-blue-500 to-blue-600';
  if (score <= 4) return 'from-cyan-500 to-cyan-600';
  if (score <= 6) return 'from-yellow-500 to-yellow-600';
  if (score <= 8) return 'from-orange-500 to-orange-600';
  return 'from-pink-500 to-pink-600';
};

// 점수 계산 로직 (10점 척도용)
const calculateProfile = (answers, questions) => {
  // 1. 유형별 점수 합산
  const typeScores = {};
  for (let t = 1; t <= 9; t++) typeScores[t] = 0;
  
  questions.forEach((q, idx) => {
    if (answers[idx] !== undefined) {
      typeScores[q.type] += answers[idx];
    }
  });

  // 2. 백분율 변환 (각 유형 최대 30점 = 10점 × 3문항)
  const maxScore = 30;
  const typePercentages = {};
  for (let t = 1; t <= 9; t++) {
    typePercentages[t] = (typeScores[t] / maxScore) * 100;
  }

  // 3. 핵심 유형 결정
  const sorted = Object.entries(typePercentages).sort((a, b) => b[1] - a[1]);
  const coreType = parseInt(sorted[0][0]);
  const secondType = parseInt(sorted[1][0]);

  // 4. 날개 결정 (인접 유형 중 높은 점수)
  const leftWing = coreType === 1 ? 9 : coreType - 1;
  const rightWing = coreType === 9 ? 1 : coreType + 1;
  const wingType = typePercentages[leftWing] > typePercentages[rightWing] ? leftWing : rightWing;

  return { 
    core_type: coreType, 
    wing_type: wingType,
    second_type: secondType,
    all_scores: typePercentages,
    raw_scores: typeScores,
    integration: integrationPaths[coreType]
  };
};

// UI State Management (Simple example, can be expanded)
let currentScreen = 'splash-screen';
const screens = {}; // To store references to screen elements
let lastUserProfile = null; // To store the last calculated profile
let currentUserEmail = null; // Stores the email of the currently logged-in user

// Local Storage Utility Functions
const USER_KEY = 'mem-user-v5';
const AUTH_PREFIX = 'mem-auth-v5-';
const DATA_PREFIX = 'mem-data-v5-';

function saveCurrentUser(email) {
    localStorage.setItem(USER_KEY, email);
    currentUserEmail = email;
}

function loadCurrentUser() {
    currentUserEmail = localStorage.getItem(USER_KEY);
    return currentUserEmail;
}

function saveUserData(email, data) {
    localStorage.setItem(DATA_PREFIX + email, JSON.stringify(data));
}

function loadUserData(email) {
    const data = localStorage.getItem(DATA_PREFIX + email);
    return data ? JSON.parse(data) : null;
}

function clearAllUserData() {
    localStorage.removeItem(USER_KEY);
    // Optionally clear all auth and data keys for the current user
    // For simplicity, we'll just clear the current user entry
    currentUserEmail = null;
    lastUserProfile = null;
}

// Global UX Functions
let toastTimeout;
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `p-3 rounded-lg text-white shadow-md transition-all duration-300 transform translate-x-full opacity-0`;
    if (type === 'info') toast.classList.add('bg-blue-500');
    if (type === 'success') toast.classList.add('bg-green-500');
    if (type === 'error') toast.classList.add('bg-red-500');
    if (type === 'warning') toast.classList.add('bg-yellow-500');
    toast.textContent = message;

    toastContainer.prepend(toast); // Add new toasts at the top

    // Animate in
    setTimeout(() => {
        toast.classList.remove('translate-x-full', 'opacity-0');
        toast.classList.add('translate-x-0', 'opacity-100');
    }, 10);

    // Animate out and remove
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('translate-x-0', 'opacity-100');
        toast.classList.add('translate-x-full', 'opacity-0');
        toast.addEventListener('transitionend', () => toast.remove());
    }, 3000);
}

const messageModal = document.getElementById('message-modal');
const messageModalTitle = document.getElementById('message-modal-title');
const messageModalContent = document.getElementById('message-modal-content');
const messageModalCloseButton = document.getElementById('message-modal-close-button');

function showMessageModal(title, message) {
    messageModalTitle.textContent = title;
    messageModalContent.textContent = message;
    messageModal.classList.remove('hidden');
}

if (messageModalCloseButton) {
    messageModalCloseButton.addEventListener('click', () => {
        messageModal.classList.add('hidden');
    });
}

const loadingSpinner = document.getElementById('loading-spinner');
function showLoadingSpinner() {
    loadingSpinner.classList.remove('hidden');
}

function hideLoadingSpinner() {
    loadingSpinner.classList.add('hidden');
}

function showScreen(screenId) {
    Object.values(screens).forEach(screen => {
        screen.classList.add('hidden');
    });
    screens[screenId].classList.remove('hidden');
    currentScreen = screenId;
    console.log(`Showing screen: ${currentScreen}`);
}

// Main DOMContentLoaded logic
document.addEventListener('DOMContentLoaded', () => {
    // Get all screen elements
    document.querySelectorAll('section[id$="-screen"]').forEach(screen => {
        screens[screen.id] = screen;
    });

    // Check for logged-in user on startup
    const storedUserEmail = loadCurrentUser();
    if (storedUserEmail) {
        lastUserProfile = loadUserData(storedUserEmail);
        if (lastUserProfile && lastUserProfile.core_type) { // Check if core_type exists to determine if survey is completed
            console.log('User logged in:', storedUserEmail, 'with profile:', lastUserProfile);
            showScreen('dashboard-screen');
        } else {
            console.log('User logged in but no complete profile found. Going to welcome.');
            showScreen('welcome-screen');
        }
    } else {
        showScreen(currentScreen); // Initial screen display (splash)
    }

    // Splash screen button handlers
    const loginButton = document.getElementById('login-button');
    const startButton = document.getElementById('start-button');

    if (loginButton) {
        loginButton.addEventListener('click', () => showScreen('auth-screen'));
    }
    if (startButton) {
        startButton.addEventListener('click', () => showScreen('welcome-screen'));
    }

    // Auth screen elements
    const authBackButton = document.getElementById('auth-back-button');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const authModeToggle = document.getElementById('auth-mode-toggle');
    const authMessage = document.getElementById('auth-message');
    const loginEmailInput = document.getElementById('login-email');
    const registerNameInput = document.getElementById('register-name');
    const registerEmailInput = document.getElementById('register-email');


    if (authBackButton) {
        authBackButton.addEventListener('click', () => showScreen('splash-screen'));
    }

    let isLoginMode = true; // State to track current auth mode

    function toggleAuthMode() {
        isLoginMode = !isLoginMode;
        if (isLoginMode) {
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
            authModeToggle.textContent = '회원가입하기';
            authMessage.textContent = '시작하려면 로그인 또는 회원가입하세요.';
        } else {
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
            authModeToggle.textContent = '로그인하기';
            authMessage.textContent = '새 계정을 만드세요.';
        }
    }

    if (authModeToggle) {
        authModeToggle.addEventListener('click', toggleAuthMode);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = loginEmailInput.value;
            showLoadingSpinner();
            // Simulate API call
            setTimeout(() => {
                hideLoadingSpinner();
                console.log('Login attempt for:', email);
                saveCurrentUser(email);
                lastUserProfile = loadUserData(email); // Load existing profile or null
                if (lastUserProfile && lastUserProfile.core_type) {
                    showToast('로그인 성공!', 'success');
                    showScreen('dashboard-screen');
                } else {
                    showToast('로그인 성공! 테스트를 시작해주세요.', 'success');
                    showScreen('welcome-screen');
                }
            }, 1000);
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = registerEmailInput.value;
            const name = registerNameInput.value;
            showLoadingSpinner();
            // Simulate API call
            setTimeout(() => {
                hideLoadingSpinner();
                console.log('Register attempt for:', name, email);
                saveCurrentUser(email);
                // Create an empty profile for new users for now
                const newProfile = {
                    userName: name,
                    core_type: null,
                    wing_type: null,
                    second_type: null,
                    all_scores: {},
                    raw_scores: {},
                    integration: {},
                    position: { x: 0, y: 0 },
                    dailyChecks: [],
                    streak: 0,
                    maturityLevel: 5,
                    completedMissions: [],
                    badges: [],
                    lastUpdated: new Date().toISOString()
                };
                saveUserData(email, newProfile);
                lastUserProfile = newProfile;
                showToast('회원가입 성공! 테스트를 시작해주세요.', 'success');
                showScreen('welcome-screen');
            }, 1000);
        });
    }

    // Welcome screen button handler
    const startTestButton = document.getElementById('start-test-button');
    if (startTestButton) {
        startTestButton.addEventListener('click', () => {
            initializeSurvey();
            showScreen('survey-screen');
        });
    }

    // Survey screen elements
    const currentQuestionNum = document.getElementById('current-question-num');
    const totalQuestionsNum = document.getElementById('total-questions-num');
    const progressBar = document.getElementById('progress-bar');
    const questionText = document.getElementById('question-text');
    const currentScoreDisplay = document.getElementById('current-score-display');
    const scoreLabel = document.getElementById('score-label');
    const scoreButtonsGrid = document.getElementById('score-buttons-grid');
    const scoreSlider = document.getElementById('score-slider');
    const prevQuestionButton = document.getElementById('prev-question-button');
    const nextQuestionButton = document.getElementById('next-question-button');

    let shuffledQuestions = [];
    let currentQuestionIndex = 0;
    let userAnswers = []; // Store score for each question (1-10)

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function initializeSurvey() {
        shuffledQuestions = shuffleArray([...fullQuestions]);
        currentQuestionIndex = 0;
        userAnswers = Array(shuffledQuestions.length).fill(undefined);
        totalQuestionsNum.textContent = shuffledQuestions.length;
        renderQuestion();
        renderScoreButtons();
    }

    function renderScoreButtons() {
        scoreButtonsGrid.innerHTML = '';
        for (let i = 1; i <= 10; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.dataset.score = i;
            button.className = `score-button w-full h-10 flex items-center justify-center rounded-md font-semibold text-white/70 bg-white/10 hover:bg-white/20 transition-all duration-100`;
            button.addEventListener('click', (e) => {
                selectScore(parseInt(e.target.dataset.score));
            });
            scoreButtonsGrid.appendChild(button);
        }
    }

    function selectScore(score) {
        userAnswers[currentQuestionIndex] = score;
        updateScoreDisplay(score);
        updateScoreButtons(score);
        nextQuestionButton.disabled = false; // Enable next button once a score is selected
        nextQuestionButton.classList.remove('opacity-50', 'cursor-not-allowed');
        nextQuestionButton.classList.add('bg-gradient-to-r', 'from-pink-500', 'to-purple-600', 'shadow-lg');
    }

    function updateScoreDisplay(score) {
        currentScoreDisplay.textContent = score;
        scoreLabel.textContent = getScoreLabel(score);
        scoreSlider.value = score;
        currentScoreDisplay.className = `text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${getScoreColor(score)}`
    }

    function updateScoreButtons(selectedScore) {
        document.querySelectorAll('.score-button').forEach(button => {
            button.classList.remove('bg-pink-500', 'shadow-lg', 'scale-110', 'text-white');
            button.classList.add('bg-white/10', 'text-white/70');
            if (parseInt(button.dataset.score) === selectedScore) {
                button.classList.add('bg-pink-500', 'shadow-lg', 'scale-110', 'text-white');
                button.classList.remove('bg-white/10', 'text-white/70');
            }
        });
    }

    function renderQuestion() {
        if (currentQuestionIndex < 0) currentQuestionIndex = 0;
        if (currentQuestionIndex >= shuffledQuestions.length) {
            submitSurvey();
            return;
        }

        const currentQuestion = shuffledQuestions[currentQuestionIndex];
        questionText.textContent = currentQuestion.q;
        currentQuestionNum.textContent = currentQuestionIndex + 1;

        // Update progress bar
        const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;

        // Load previous answer if available, otherwise reset
        const prevAnswer = userAnswers[currentQuestionIndex];
        if (prevAnswer !== undefined) {
            updateScoreDisplay(prevAnswer);
            updateScoreButtons(prevAnswer);
            nextQuestionButton.disabled = false;
            nextQuestionButton.classList.remove('opacity-50', 'cursor-not-allowed');
            nextQuestionButton.classList.add('bg-gradient-to-r', 'from-pink-500', 'to-purple-600', 'shadow-lg');
        } else {
            updateScoreDisplay(5); // Default to 5 if no answer yet
            updateScoreButtons(0); // No button selected
            nextQuestionButton.disabled = true; // Disable next button until a score is selected
            nextQuestionButton.classList.add('opacity-50', 'cursor-not-allowed');
            nextQuestionButton.classList.remove('bg-gradient-to-r', 'from-pink-500', 'to-purple-600', 'shadow-lg');
        }

        // Update navigation buttons
        prevQuestionButton.disabled = currentQuestionIndex === 0;
        if (prevQuestionButton.disabled) {
            prevQuestionButton.classList.add('opacity-50', 'cursor-not-allowed');
            prevQuestionButton.classList.remove('bg-white/10');
        } else {
            prevQuestionButton.classList.remove('opacity-50', 'cursor-not-allowed');
            prevQuestionButton.classList.add('bg-white/10');
        }

        if (currentQuestionIndex === shuffledQuestions.length - 1) {
            nextQuestionButton.textContent = '결과 보기';
            nextQuestionButton.classList.remove('from-pink-500', 'to-purple-600');
            nextQuestionButton.classList.add('from-purple-500', 'to-red-600'); // Different color for results button
        } else {
            nextQuestionButton.textContent = '다음';
            nextQuestionButton.classList.add('from-pink-500', 'to-purple-600');
            nextQuestionButton.classList.remove('from-purple-500', 'to-red-600');
        }
    }

    // Event Listeners for survey navigation
    if (prevQuestionButton) {
        prevQuestionButton.addEventListener('click', () => {
            currentQuestionIndex--;
            renderQuestion();
        });
    }

    if (nextQuestionButton) {
        nextQuestionButton.addEventListener('click', () => {
            if (userAnswers[currentQuestionIndex] !== undefined) {
                currentQuestionIndex++;
                renderQuestion();
            } else {
                showToast('점수를 선택해주세요!', 'warning');
            }
        });
    }

    if (scoreSlider) {
        scoreSlider.addEventListener('input', (e) => {
            selectScore(parseInt(e.target.value));
        });
    }

    // Result screen elements
    const resultCoreEmoji = document.getElementById('result-core-emoji');
    const resultCoreTypeNum = document.getElementById('result-core-type-num');
    const resultCoreTypeName = document.getElementById('result-core-type-name');
    const resultCoreTypeShort = document.getElementById('result-core-type-short');
    const resultWingType = document.getElementById('result-wing-type');
    const resultCoreTypeDesc = document.getElementById('result-core-type-desc');
    const topTypesChart = document.getElementById('top-types-chart');
    const resultGrowthEmoji = document.getElementById('result-growth-emoji');
    const resultGrowthType = document.getElementById('result-growth-type');
    const resultGrowthDesc = document.getElementById('result-growth-desc');
    const resultStressEmoji = document.getElementById('result-stress-emoji');
    const resultStressType = document.getElementById('result-stress-type');
    const resultStressDesc = document.getElementById('result-stress-desc');
    const goToDashboardButton = document.getElementById('go-to-dashboard-button');

    function renderResultScreen(userProfile) {
        lastUserProfile = userProfile;
        if (currentUserEmail) {
            saveUserData(currentUserEmail, lastUserProfile);
        }

        if (!userProfile) {
            console.error('No user profile to render results.');
            return;
        }

        const coreInfo = typeInfo[userProfile.core_type];
        const wingInfo = typeInfo[userProfile.wing_type];
        const growthPathInfo = typeInfo[userProfile.integration.growth];
        const stressPathInfo = typeInfo[userProfile.integration.stress];

        // Core Type Card
        resultCoreEmoji.textContent = coreInfo.emoji;
        resultCoreTypeNum.textContent = userProfile.core_type;
        resultCoreTypeName.textContent = coreInfo.name;
        resultCoreTypeShort.textContent = coreInfo.short;
        resultWingType.textContent = `날개 ${userProfile.wing_type}번 ${wingInfo.name}`;
        resultCoreTypeDesc.textContent = coreInfo.desc;

        // Top 3 Types Bar Chart
        topTypesChart.innerHTML = '';
        const sortedScores = Object.entries(userProfile.all_scores)
            .map(([typeNum, score]) => ({ typeNum: parseInt(typeNum), score: score }))
            .sort((a, b) => b.score - a.score)
            .slice(0, 3);

        sortedScores.forEach(item => {
            const type = typeInfo[item.typeNum];
            const barWidth = `${Math.min(item.score, 100)}%`; // Cap at 100%
            const bar = document.createElement('div');
            bar.className = 'flex items-center space-x-2';
            bar.innerHTML = `
                <span class="text-xl">${type.emoji}</span>
                <span class="text-white w-8">${type.typeNum}번</span>
                <div class="flex-grow bg-white/20 rounded-full h-4 relative">
                    <div class="bg-gradient-to-r from-blue-400 to-purple-500 h-4 rounded-full" style="width: ${barWidth};"></div>
                    <span class="absolute right-2 top-0 text-xs font-bold">${item.score.toFixed(1)}%</span>
                </div>
            `;
            topTypesChart.appendChild(bar);
        });

        // Growth/Stress Direction Card
        resultGrowthEmoji.textContent = growthPathInfo.emoji;
        resultGrowthType.textContent = `${userProfile.integration.growth}번 ${growthPathInfo.name}`;
        resultGrowthDesc.textContent = userProfile.integration.growthDesc;
        
        resultStressEmoji.textContent = stressPathInfo.emoji;
        resultStressType.textContent = `${userProfile.integration.stress}번 ${stressPathInfo.name}`;
        resultStressDesc.textContent = userProfile.integration.stressDesc;

        showScreen('result-screen');
    }

    function submitSurvey() {
        console.log('Survey Submitted!', userAnswers);
        const userProfile = calculateProfile(userAnswers, shuffledQuestions);
        console.log('User Profile:', userProfile);
        renderResultScreen(userProfile);
    }

    if (goToDashboardButton) {
        goToDashboardButton.addEventListener('click', () => {
            showScreen('dashboard-screen');
        });
    }

    // Dashboard elements
    const dashboardUserName = document.getElementById('dashboard-user-name');
    const dashboardTypeInfo = document.getElementById('dashboard-type-info');
    const dashboardUserEmoji = document.getElementById('dashboard-user-emoji');
    const dashboardStreak = document.getElementById('dashboard-streak');
    const logoutButton = document.getElementById('logout-button');
    const dashboardContent = document.getElementById('dashboard-content');
    const tabButtons = document.querySelectorAll('.tab-button');

    let activeTab = 'home'; // Default active tab

    function renderDashboard(userProfile = lastUserProfile) {
        if (!userProfile || !userProfile.core_type) { // Ensure core_type exists before rendering dashboard
            console.warn('No complete user profile available for dashboard. Redirecting to welcome.');
            showScreen('welcome-screen');
            return;
        }
        
        const coreInfo = typeInfo[userProfile.core_type];

        dashboardUserName.textContent = userProfile.userName || "사용자";
        dashboardUserEmoji.textContent = coreInfo.emoji;
        dashboardTypeInfo.textContent = `${userProfile.core_type}번 ${coreInfo.name} · 날개${userProfile.wing_type}`;
        dashboardStreak.textContent = userProfile.streak || "0";

        renderTabContent(activeTab);
        // showScreen('dashboard-screen'); // showScreen is called by the override
    }

    // Compatibility Modal elements (already defined globally)
    // const compatibilityModal = document.getElementById('compatibility-modal');
    // const modalCloseButton = document.getElementById('modal-close-button'); // already defined globally

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            clearAllUserData();
            showToast('로그아웃되었습니다.', 'info');
            showScreen('splash-screen'); // Go back to splash screen
        });
    }

    // Render functions for each dashboard tab
    function renderHomeTab(userProfile) {
        if (!userProfile || !userProfile.core_type) return '<p class="text-white/70 text-center mt-10">테스트를 완료해야 홈 탭을 볼 수 있습니다.</p>';
        const coreInfo = typeInfo[userProfile.core_type];
        return `
            <h3 class="text-2xl font-bold mb-4">🏠 홈</h3>
            <div class="card bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 mb-4">
                <h4 class="text-xl font-bold mb-3">오늘의 성장 미션</h4>
                <ul class="list-disc list-inside text-white/80">
                    <li>자신의 핵심 유형(${userProfile.core_type}번 ${coreInfo.name})에 대한 이해를 깊이 파고들어 보세요.</li>
                    <li>당신의 통합 방향인 ${userProfile.integration.growth}번 유형의 긍정적인 특성(${typeInfo[userProfile.integration.growth].short})을 하루에 한 번 실천해 보세요.</li>
                </ul>
            </div>
            <div class="card bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 mb-4">
                <h4 class="text-xl font-bold mb-3">유형 분포 차트</h4>
                <div id="home-type-distribution-chart" class="space-y-2">
                    ${Object.entries(userProfile.all_scores)
                        .sort((a, b) => b[1] - a[1]) // Sort by score descending
                        .map(([typeNum, score]) => {
                            const type = typeInfo[typeNum];
                            const barWidth = `${Math.min(score, 100)}%`;
                            return `
                                <div class="flex items-center space-x-2">
                                    <span class="text-xl">${type.emoji}</span>
                                    <span class="text-white w-8">${typeNum}번</span>
                                    <div class="flex-grow bg-white/20 rounded-full h-4 relative">
                                        <div class="bg-gradient-to-r from-blue-400 to-purple-500 h-4 rounded-full" style="width: ${barWidth};"></div>
                                        <span class="absolute right-2 top-0 text-xs font-bold">${score.toFixed(1)}%</span>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                </div>
            </div>
            <div class="card bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 mb-4">
                <h4 class="text-xl font-bold mb-3">성숙의 방향 카드</h4>
                <div class="grid grid-cols-2 gap-4">
                    <div class="flex flex-col items-center">
                        <p class="text-white/70 text-sm mb-1">성장 방향</p>
                        <span class="text-3xl mb-1">${typeInfo[userProfile.integration.growth].emoji}</span>
                        <p class="text-white font-semibold text-lg">${userProfile.integration.growth}번 ${typeInfo[userProfile.integration.growth].name}</p>
                        <p class="text-white/70 text-xs">${userProfile.integration.growthDesc}</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p class="text-white/70 text-sm mb-1">스트레스 방향</p>
                        <span class="text-3xl mb-1">${typeInfo[userProfile.integration.stress].emoji}</span>
                        <p class="text-white font-semibold text-lg">${userProfile.integration.stress}번 ${typeInfo[userProfile.integration.stress].name}</p>
                        <p class="text-white/70 text-xs">${userProfile.integration.stressDesc}</p>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-4 mb-4">
                <button class="btn-secondary p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200" onclick="initializeSurvey(); showScreen('survey-screen'); showToast('테스트를 다시 시작합니다!', 'info');">재검사</button>
                <button class="btn-secondary p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200" onclick="showMessageModal('빠른 연결', '준비 중인 기능입니다.');">빠른 연결</button>
                <button class="btn-secondary p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200" onclick="showMessageModal('설정', '준비 중인 기능입니다.');">설정</button>
            </div>
        `;
    }

    function renderLearningTab(userProfile) {
        if (!userProfile || !userProfile.core_type) return '<p class="text-white/70 text-center mt-10">테스트를 완료해야 학습 탭을 볼 수 있습니다.</p>';
        const coreInfo = typeInfo[userProfile.core_type];
        return `
            <h3 class="text-2xl font-bold mb-4">📚 학습 전략</h3>
            <div class="card bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 mb-4">
                <h4 class="text-xl font-bold mb-3">학습 스타일</h4>
                <p class="text-white/80">당신은 ${coreInfo.name} 유형으로, ${coreInfo.short}을 중시합니다. 이 유형은 다음과 같은 학습 스타일에 강점이 있습니다.</p>
                <ul class="list-disc list-inside text-white/80 mt-2">
                    <li>체계적이고 논리적인 접근을 선호합니다.</li>
                    <li>개념을 깊이 이해하고 분석하는 것을 즐깁니다.</li>
                    <li>실용적인 적용 방법을 찾을 때 더욱 몰입합니다.</li>
                </ul>
            </div>
            <div class="card bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 mb-4">
                <h4 class="text-xl font-bold mb-3">추천 학습 방법</h4>
                <ul class="list-disc list-inside text-white/80">
                    <li><span class="font-bold">그룹 스터디 (매칭률 85%):</span> 타인과 지식을 공유하고 토론하며 깊이를 더하세요.</li>
                    <li><span class="font-bold">문제 해결 기반 학습 (매칭률 90%):</span> 실제 문제에 적용하며 학습 효율을 높여보세요.</li>
                    <li><span class="font-bold">명상 및 휴식 (매칭률 70%):</span> 과도한 분석에서 벗어나 마음의 평화를 찾는 것이 중요합니다.</li>
                </ul>
            </div>
            <div class="card bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 mb-4">
                <h4 class="text-xl font-bold mb-3">스트레스 시 전략</h4>
                <p class="text-white/80">스트레스 상황에서는 완벽주의적 성향이 강해지거나, 타인의 시선에 더욱 민감해질 수 있습니다. 이럴 때는 잠시 멈추고 통합 방향인 ${typeInfo[userProfile.integration.growth].name} 유형(${typeInfo[userProfile.integration.growth].emoji})의 ${typeInfo[userProfile.integration.growth].short} 특성을 떠올려보세요. 작은 성공에도 만족하며 유연함을 가지는 것이 도움이 됩니다.</p>
            </div>
        `;
    }

    function renderCareerTab(userProfile) {
        if (!userProfile || !userProfile.core_type) return '<p class="text-white/70 text-center mt-10">테스트를 완료해야 진로 탭을 볼 수 있습니다.</p>';
        const coreInfo = typeInfo[userProfile.core_type];
        return `
            <h3 class="text-2xl font-bold mb-4">🧭 진로 매칭</h3>
            <div class="card bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 mb-4">
                <h4 class="text-xl font-bold mb-3">진로 정체성</h4>
                <p class="text-white/80">${coreInfo.name} 유형은 ${coreInfo.short}이라는 핵심 강점을 가집니다. 당신은 책임감이 강하고, 분석적이며, 문제 해결 능력이 뛰어납니다. 이러한 특성을 바탕으로 사회에 긍정적인 영향을 미치는 직업에 잘 맞습니다.</p>
            </div>
            <div class="card bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 mb-4">
                <h4 class="text-xl font-bold mb-3">매칭 역할 TOP 5</h4>
                <ul class="list-disc list-inside text-white/80">
                    <li><span class="font-bold">연구원 (매칭률 92%):</span> 깊이 있는 탐구와 분석 능력 발휘.</li>
                    <li><span class="font-bold">컨설턴트 (매칭률 88%):</span> 문제 해결과 전략 수립에 강점.</li>
                    <li><span class="font-bold">기획자 (매칭률 85%):</span> 체계적인 사고로 프로젝트를 이끔.</li>
                    <li><span class="font-bold">교육자 (매칭률 80%):</span> 지식을 전달하고 타인의 성장을 도움.</li>
                    <li><span class="font-bold">엔지니어 (매칭률 78%):</span> 기술적 문제 해결과 혁신 주도.</li>
                </ul>
            </div>
            <div class="card bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 mb-4">
                <h4 class="text-xl font-bold mb-3">주의 역할</h4>
                <p class="text-white/80">지나치게 반복적이거나, 창의성을 발휘하기 어려운 환경, 또는 개인의 가치와 충돌하는 조직 문화에서는 스트레스를 받을 수 있습니다. 유연성과 개방성을 요구하는 역할도 초반에는 어려움을 느낄 수 있습니다.</p>
            </div>
        `;
    }

    function renderRelationshipTab(userProfile) {
        if (!userProfile || !userProfile.core_type) return '<p class="text-white/70 text-center mt-10">테스트를 완료해야 관계 탭을 볼 수 있습니다.</p>';
        const myType = userProfile.core_type;
        let compatibilityCards = '';

        for (let i = 1; i <= 9; i++) {
            const targetType = i;
            const targetInfo = typeInfo[targetType];
            const compatibilityScore = getCompatibility(myType, targetType);
            const relationship = getRelationshipDesc(myType, targetType);

            let compatLabel = '보통';
            let compatColor = 'text-slate-400';
            if (compatibilityScore >= 85) {
                compatLabel = '최고';
                compatColor = 'text-emerald-400';
            } else if (compatibilityScore >= 70) {
                compatLabel = '좋음';
                compatColor = 'text-yellow-400';
            }

            compatibilityCards += `
                <div class="card bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4 mb-3 flex items-center justify-between cursor-pointer" onclick="window.showCompatibilityModal(${targetType})">
                    <div class="flex items-center space-x-3">
                        <span class="text-3xl">${targetInfo.emoji}</span>
                        <div>
                            <p class="text-white text-lg font-semibold">${targetType}번 ${targetInfo.name}</p>
                            <p class="text-white/70 text-sm">${targetInfo.short}</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="${compatColor} text-lg font-bold">${compatibilityScore}%</p>
                        <p class="${compatColor} text-xs">${compatLabel}</p>
                    </div>
                </div>
            `;
        }

        return `
            <h3 class="text-2xl font-bold mb-4">💝 관계 전략</h3>
            <div class="card bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 mb-4">
                <h4 class="text-xl font-bold mb-3">관계 스타일</h4>
                <p class="text-white/80">${typeInfo[myType].name} 유형은 관계에서 ${typeInfo[myType].short}을(를) 중요하게 생각합니다. 당신은 다음과 같은 관계 스타일에 강점이 있습니다.</p>
                <ul class="list-disc list-inside text-white/80 mt-2">
                    <li>진정성 있는 관계를 추구합니다.</li>
                    <li>상대방의 감정을 깊이 이해하려 노력합니다.</li>
                    <li>때로는 완벽을 추구하여 갈등을 피하려 할 수 있습니다.</li>
                </ul>
            </div>
            <div class="card bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 mb-4">
                <h4 class="text-xl font-bold mb-3">관계 개선 팁</h4>
                <ul class="list-disc list-inside text-white/80">
                    <li>상대방의 관점을 이해하려 노력하고, 자신의 감정을 솔직하게 표현하세요.</li>
                    <li>불필요한 비판 대신 건설적인 피드백을 주고받는 연습을 하세요.</li>
                </ul>
            </div>
            <h4 class="text-xl font-bold text-white mb-3">유형별 호환성</h4>
            <div id="compatibility-list" class="space-y-4">
                ${compatibilityCards}
            </div>
        `;
    }

    // Main renderTabContent function
    function renderTabContent(tabName) {
        dashboardContent.innerHTML = ''; // Clear previous content
        tabButtons.forEach(button => {
            if (button.dataset.tab === tabName) {
                button.classList.add('text-white', 'border-b-2', 'border-pink-500');
                button.classList.remove('text-white/70');
            } else {
                button.classList.remove('text-white', 'border-b-2', 'border-pink-500');
                button.classList.add('text-white/70');
            }
        });

        if (!lastUserProfile || !lastUserProfile.core_type) {
            dashboardContent.innerHTML = '<p class="text-white/70 text-center mt-10">테스트를 완료해야 대시보드를 볼 수 있습니다.</p>';
            return;
        }

        switch (tabName) {
            case 'home':
                dashboardContent.innerHTML = renderHomeTab(lastUserProfile);
                break;
            case 'learning':
                dashboardContent.innerHTML = renderLearningTab(lastUserProfile);
                break;
            case 'career':
                dashboardContent.innerHTML = renderCareerTab(lastUserProfile);
                break;
            case 'relationship':
                dashboardContent.innerHTML = renderRelationshipTab(lastUserProfile);
                break;
            default:
                dashboardContent.innerHTML = renderHomeTab(lastUserProfile);
                break;
        }
    }
});
