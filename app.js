// ===================================================
// 🦕 다이노 스터디 - 공부 시간으로 공룡 진화 앱
// ===================================================

// ===== 진화 단계 정의 =====
// 필요 누적 시간(분) 기준
const STAGES = [
  {
    id: 0,
    name: "🥚 공룡 알",
    shortName: "공룡 알",
    emoji: "🥚",
    requiredMinutes: 0,
    label: "시작",
    desc: "아직 알 속에서 잠들어 있어요. 공부를 시작하면 부화할 거예요!",
    auraColor: "#94a3b8",
    svg: `<svg width="120" height="140" viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
      <!-- 알 -->
      <ellipse cx="60" cy="80" rx="45" ry="55" fill="#e2e8f0" />
      <ellipse cx="60" cy="80" rx="45" ry="55" fill="none" stroke="#cbd5e1" stroke-width="2"/>
      <!-- 무늬 -->
      <ellipse cx="45" cy="65" rx="8" ry="10" fill="#cbd5e1" opacity="0.6"/>
      <ellipse cx="72" cy="55" rx="6" ry="8" fill="#cbd5e1" opacity="0.6"/>
      <ellipse cx="65" cy="90" rx="7" ry="9" fill="#cbd5e1" opacity="0.6"/>
      <!-- 빛 반사 -->
      <ellipse cx="45" cy="55" rx="10" ry="14" fill="white" opacity="0.3"/>
    </svg>`
  },
  {
    id: 1,
    name: "🐣 아기 공룡",
    shortName: "아기 공룡",
    emoji: "🐣",
    requiredMinutes: 30,
    label: "30분",
    desc: "드디어 부화했어요! 귀엽고 작은 아기 공룡이에요.",
    auraColor: "#86efac",
    svg: `<svg width="130" height="150" viewBox="0 0 130 150" xmlns="http://www.w3.org/2000/svg">
      <!-- 몸통 -->
      <ellipse cx="65" cy="105" rx="35" ry="30" fill="#86efac"/>
      <!-- 머리 -->
      <circle cx="65" cy="68" r="28" fill="#86efac"/>
      <!-- 눈 흰자 -->
      <circle cx="55" cy="62" r="9" fill="white"/>
      <circle cx="76" cy="62" r="9" fill="white"/>
      <!-- 눈동자 -->
      <circle cx="57" cy="64" r="5" fill="#1e293b"/>
      <circle cx="78" cy="64" r="5" fill="#1e293b"/>
      <!-- 눈 하이라이트 -->
      <circle cx="59" cy="62" r="2" fill="white"/>
      <circle cx="80" cy="62" r="2" fill="white"/>
      <!-- 볼 -->
      <circle cx="45" cy="70" r="6" fill="#f9a8d4" opacity="0.7"/>
      <circle cx="85" cy="70" r="6" fill="#f9a8d4" opacity="0.7"/>
      <!-- 코 -->
      <ellipse cx="65" cy="73" rx="4" ry="3" fill="#4ade80"/>
      <!-- 입 -->
      <path d="M57 79 Q65 86 73 79" fill="none" stroke="#166534" stroke-width="2.5" stroke-linecap="round"/>
      <!-- 꼬리 -->
      <path d="M98 110 Q120 108 118 125 Q110 130 100 120" fill="#86efac"/>
      <!-- 앞발 -->
      <ellipse cx="42" cy="118" rx="9" ry="7" fill="#4ade80" transform="rotate(-20 42 118)"/>
      <ellipse cx="88" cy="118" rx="9" ry="7" fill="#4ade80" transform="rotate(20 88 118)"/>
      <!-- 등 돌기 -->
      <polygon points="60,42 55,52 65,52" fill="#4ade80"/>
      <polygon points="70,38 65,49 75,49" fill="#4ade80"/>
      <polygon points="55,46 50,57 60,57" fill="#4ade80"/>
    </svg>`
  },
  {
    id: 2,
    name: "🦎 꼬마 초식룡",
    shortName: "꼬마 초식룡",
    emoji: "🦎",
    requiredMinutes: 120,
    label: "2시간",
    desc: "몸이 조금 자랐어요! 나뭇잎을 즐겨 먹는 초식 공룡이에요.",
    auraColor: "#4ade80",
    svg: `<svg width="150" height="160" viewBox="0 0 150 160" xmlns="http://www.w3.org/2000/svg">
      <!-- 꼬리 -->
      <path d="M105 120 Q140 115 145 135 Q135 148 115 135" fill="#34d399"/>
      <!-- 몸통 -->
      <ellipse cx="72" cy="115" rx="42" ry="32" fill="#34d399"/>
      <!-- 머리 -->
      <ellipse cx="68" cy="72" rx="30" ry="26" fill="#34d399"/>
      <!-- 주둥이 -->
      <ellipse cx="52" cy="80" rx="16" ry="10" fill="#2dd4bf"/>
      <!-- 눈 -->
      <circle cx="62" cy="65" r="10" fill="white"/>
      <circle cx="64" cy="67" r="6" fill="#1e293b"/>
      <circle cx="66" cy="65" r="2" fill="white"/>
      <!-- 볼 -->
      <circle cx="44" cy="74" r="6" fill="#f9a8d4" opacity="0.6"/>
      <!-- 콧구멍 -->
      <circle cx="43" cy="80" r="2" fill="#047857"/>
      <circle cx="50" cy="83" r="2" fill="#047857"/>
      <!-- 등 돌기 -->
      <polygon points="65,47 60,58 70,58" fill="#059669"/>
      <polygon points="75,44 70,55 80,55" fill="#059669"/>
      <polygon points="85,47 80,58 90,58" fill="#059669"/>
      <polygon points="55,50 50,61 60,61" fill="#059669"/>
      <!-- 다리 -->
      <rect x="48" y="138" width="16" height="22" rx="8" fill="#2dd4bf"/>
      <rect x="78" y="138" width="16" height="22" rx="8" fill="#2dd4bf"/>
      <!-- 앞발 -->
      <ellipse cx="38" cy="120" rx="9" ry="6" fill="#2dd4bf" transform="rotate(-30 38 120)"/>
      <ellipse cx="105" cy="115" rx="9" ry="6" fill="#2dd4bf" transform="rotate(20 105 115)"/>
      <!-- 배 무늬 -->
      <ellipse cx="72" cy="118" rx="25" ry="18" fill="#a7f3d0" opacity="0.5"/>
    </svg>`
  },
  {
    id: 3,
    name: "🔥 불꽃 랩터",
    shortName: "불꽃 랩터",
    emoji: "🔥",
    requiredMinutes: 300,
    label: "5시간",
    desc: "빠르고 날쎈 랩터! 불꽃 같은 에너지로 공부하네요.",
    auraColor: "#fb923c",
    svg: `<svg width="155" height="165" viewBox="0 0 155 165" xmlns="http://www.w3.org/2000/svg">
      <!-- 꼬리 (길고 날카로움) -->
      <path d="M108 118 Q148 105 152 120 Q145 138 115 128" fill="#fb923c"/>
      <!-- 몸통 -->
      <ellipse cx="72" cy="112" rx="40" ry="30" fill="#f97316"/>
      <!-- 목 -->
      <rect x="62" y="78" width="22" height="30" rx="11" fill="#f97316"/>
      <!-- 머리 -->
      <ellipse cx="72" cy="68" rx="26" ry="22" fill="#f97316"/>
      <!-- 주둥이 (뾰족) -->
      <path d="M47 72 Q42 75 47 80 Q55 78 60 75 Z" fill="#ea580c"/>
      <!-- 눈 (날카롭게) -->
      <circle cx="66" cy="62" r="9" fill="#fef3c7"/>
      <circle cx="68" cy="64" r="5" fill="#7c2d12"/>
      <circle cx="70" cy="62" r="2" fill="white"/>
      <!-- 불꽃 눈썹 -->
      <path d="M58 55 Q66 51 72 55" fill="none" stroke="#7c2d12" stroke-width="2.5" stroke-linecap="round"/>
      <!-- 등 돌기 (불꽃 모양) -->
      <polygon points="68,47 63,58 73,58" fill="#ef4444"/>
      <polygon points="76,44 71,55 81,55" fill="#ef4444"/>
      <polygon points="84,47 79,58 89,58" fill="#ef4444"/>
      <polygon points="60,50 55,61 65,61" fill="#ef4444"/>
      <!-- 발톱 다리 -->
      <path d="M52 135 L48 158 L54 158 L56 145 L60 158 L66 158 L58 135 Z" fill="#ea580c"/>
      <path d="M80 135 L76 158 L82 158 L84 145 L88 158 L94 158 L86 135 Z" fill="#ea580c"/>
      <!-- 앞발 (짧고 날카로운 발톱) -->
      <path d="M38 108 L32 95 L38 93 L36 88 L43 90 L40 96 L46 98 Z" fill="#ea580c"/>
      <!-- 배 -->
      <ellipse cx="72" cy="115" rx="24" ry="16" fill="#fed7aa" opacity="0.6"/>
      <!-- 불꽃 이펙트 -->
      <path d="M62 48 Q65 38 60 30 Q68 35 66 28 Q72 36 70 25 Q76 34 74 27 Q80 36 78 44" fill="#fbbf24" opacity="0.8"/>
    </svg>`
  },
  {
    id: 4,
    name: "⚡ 번개 티라노",
    shortName: "번개 티라노",
    emoji: "⚡",
    requiredMinutes: 600,
    label: "10시간",
    desc: "강력한 티라노사우루스! 번개 에너지를 두르고 있어요.",
    auraColor: "#facc15",
    svg: `<svg width="165" height="175" viewBox="0 0 165 175" xmlns="http://www.w3.org/2000/svg">
      <!-- 번개 아우라 -->
      <ellipse cx="82" cy="120" rx="65" ry="50" fill="#fef08a" opacity="0.1"/>
      <!-- 꼬리 -->
      <path d="M115 120 Q155 108 158 125 Q150 148 120 132" fill="#ca8a04"/>
      <!-- 몸통 (크고 강함) -->
      <ellipse cx="78" cy="118" rx="50" ry="38" fill="#eab308"/>
      <!-- 목 -->
      <rect x="65" y="78" width="28" height="38" rx="14" fill="#eab308"/>
      <!-- 거대한 머리 -->
      <ellipse cx="80" cy="65" rx="36" ry="28" fill="#eab308"/>
      <!-- 강력한 턱 -->
      <path d="M46 72 Q38 80 46 88 Q62 86 72 80 Z" fill="#ca8a04"/>
      <!-- 이빨 -->
      <polygon points="50,80 46,88 54,88" fill="white"/>
      <polygon points="58,82 54,90 62,90" fill="white"/>
      <!-- 눈 (번개 빛) -->
      <circle cx="70" cy="57" r="11" fill="white"/>
      <circle cx="72" cy="59" r="7" fill="#1e293b"/>
      <circle cx="75" cy="56" r="2.5" fill="white"/>
      <!-- 번개 눈 -->
      <path d="M76 50 L73 57 L77 57 L73 65" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
      <!-- 등 돌기 (크고 날카로움) -->
      <polygon points="74,48 68,62 80,62" fill="#a16207"/>
      <polygon points="84,44 78,59 90,59" fill="#a16207"/>
      <polygon points="94,48 88,62 100,62" fill="#a16207"/>
      <polygon points="65,50 59,64 71,64" fill="#a16207"/>
      <!-- 강력한 뒷다리 -->
      <path d="M52 148 L46 172 L56 172 L58 158 L64 172 L72 172 L62 148 Z" fill="#ca8a04"/>
      <path d="M85 150 L79 172 L89 172 L91 158 L97 172 L105 172 L95 150 Z" fill="#ca8a04"/>
      <!-- 작은 앞발 -->
      <path d="M36 112 L30 98 L37 96 L35 90 L43 93 L40 100 L48 102 Z" fill="#ca8a04"/>
      <!-- 배 무늬 -->
      <ellipse cx="78" cy="122" rx="32" ry="22" fill="#fef08a" opacity="0.5"/>
      <!-- 번개 이펙트 -->
      <path d="M92 38 L87 52 L93 52 L87 66" fill="none" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
      <path d="M60 35 L56 47 L61 47 L56 60" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
    </svg>`
  },
  {
    id: 5,
    name: "🌊 용왕 플레시오",
    shortName: "용왕 플레시오",
    emoji: "🌊",
    requiredMinutes: 1200,
    label: "20시간",
    desc: "바다의 왕자! 플레시오사우루스가 용왕으로 각성했어요.",
    auraColor: "#22d3ee",
    svg: `<svg width="165" height="180" viewBox="0 0 165 180" xmlns="http://www.w3.org/2000/svg">
      <!-- 물결 아우라 -->
      <ellipse cx="82" cy="130" rx="70" ry="30" fill="#e0f2fe" opacity="0.15"/>
      <!-- 꼬리 -->
      <path d="M118 130 L148 115 L152 130 L148 145 L130 148 Z" fill="#0284c7"/>
      <!-- 지느러미 (하단) -->
      <ellipse cx="55" cy="148" rx="20" ry="10" fill="#0284c7" transform="rotate(-15 55 148)"/>
      <ellipse cx="95" cy="152" rx="20" ry="10" fill="#0284c7" transform="rotate(15 95 152)"/>
      <!-- 몸통 (긴 타원) -->
      <ellipse cx="78" cy="128" rx="48" ry="36" fill="#0ea5e9"/>
      <!-- 긴 목 -->
      <rect x="66" y="68" width="24" height="58" rx="12" fill="#0ea5e9"/>
      <!-- 머리 (작고 우아함) -->
      <ellipse cx="78" cy="55" rx="24" ry="20" fill="#0ea5e9"/>
      <!-- 주둥이 -->
      <ellipse cx="60" cy="58" rx="18" ry="9" fill="#0284c7"/>
      <!-- 눈 -->
      <circle cx="72" cy="48" r="10" fill="white"/>
      <circle cx="74" cy="50" r="6" fill="#0c4a6e"/>
      <circle cx="77" cy="47" r="2" fill="white"/>
      <!-- 왕관 -->
      <polygon points="62,36 66,26 70,36 74,24 78,36 82,26 86,36" fill="#f59e0b" stroke="#d97706" stroke-width="1"/>
      <!-- 등 지느러미 -->
      <path d="M70 70 Q78 55 86 70" fill="#0284c7"/>
      <!-- 배 무늬 -->
      <ellipse cx="78" cy="132" rx="30" ry="20" fill="#bae6fd" opacity="0.5"/>
      <!-- 물결 무늬 -->
      <path d="M45 125 Q60 115 75 125 Q90 135 105 125" fill="none" stroke="#7dd3fc" stroke-width="2.5" opacity="0.7"/>
      <path d="M50 135 Q65 125 80 135 Q95 145 110 135" fill="none" stroke="#7dd3fc" stroke-width="2" opacity="0.5"/>
      <!-- 비늘 -->
      <circle cx="78" cy="108" r="4" fill="#0284c7" opacity="0.4"/>
      <circle cx="68" cy="115" r="4" fill="#0284c7" opacity="0.4"/>
      <circle cx="88" cy="115" r="4" fill="#0284c7" opacity="0.4"/>
    </svg>`
  },
  {
    id: 6,
    name: "🌟 신룡 드래곤",
    shortName: "신룡 드래곤",
    emoji: "🌟",
    requiredMinutes: 3000,
    label: "50시간",
    desc: "전설의 신룡이 되었어요! 공부의 신이 되었습니다! 🎉",
    auraColor: "#c084fc",
    svg: `<svg width="170" height="185" viewBox="0 0 170 185" xmlns="http://www.w3.org/2000/svg">
      <!-- 날개 (왼쪽) -->
      <path d="M42 90 Q10 60 15 30 Q30 40 38 65 Q20 45 32 38 Q42 60 46 80 Z" fill="#a855f7" opacity="0.8"/>
      <!-- 날개 (오른쪽) -->
      <path d="M118 90 Q150 60 145 30 Q130 40 122 65 Q140 45 128 38 Q118 60 114 80 Z" fill="#a855f7" opacity="0.8"/>
      <!-- 꼬리 -->
      <path d="M118 130 Q155 118 158 135 Q152 158 122 142" fill="#9333ea"/>
      <!-- 꼬리 끝 다이아몬드 -->
      <polygon points="158,135 165,125 170,135 165,145" fill="#f59e0b"/>
      <!-- 몸통 -->
      <ellipse cx="80" cy="120" rx="50" ry="38" fill="#9333ea"/>
      <!-- 목 -->
      <rect x="66" y="76" width="28" height="42" rx="14" fill="#9333ea"/>
      <!-- 머리 -->
      <ellipse cx="80" cy="62" rx="32" ry="26" fill="#9333ea"/>
      <!-- 뿔 -->
      <polygon points="65,40 60,20 70,35" fill="#f59e0b"/>
      <polygon points="80,36 78,15 86,34" fill="#f59e0b"/>
      <polygon points="95,40 90,20 100,35" fill="#f59e0b"/>
      <!-- 주둥이 -->
      <path d="M50 68 Q44 74 50 82 Q62 80 70 74 Z" fill="#7c3aed"/>
      <!-- 이빨 -->
      <polygon points="54,74 50,82 58,82" fill="white"/>
      <polygon points="62,76 58,84 66,84" fill="white"/>
      <!-- 눈 (마법의 눈) -->
      <circle cx="68" cy="56" r="12" fill="white"/>
      <circle cx="70" cy="58" r="8" fill="#5b21b6"/>
      <circle cx="73" cy="55" r="3" fill="white"/>
      <!-- 눈 빛 -->
      <circle cx="68" cy="56" r="12" fill="none" stroke="#c084fc" stroke-width="2" opacity="0.7"/>
      <!-- 등 돌기 (화려함) -->
      <polygon points="74,52 68,66 80,66" fill="#7c3aed"/>
      <polygon points="84,48 78,63 90,63" fill="#7c3aed"/>
      <polygon points="94,52 88,66 100,66" fill="#7c3aed"/>
      <polygon points="65,54 59,68 71,68" fill="#7c3aed"/>
      <!-- 강력한 뒷다리 -->
      <path d="M50 150 L44 175 L54 175 L56 160 L62 175 L70 175 L60 150 Z" fill="#7c3aed"/>
      <path d="M88 152 L82 175 L92 175 L94 160 L100 175 L108 175 L98 152 Z" fill="#7c3aed"/>
      <!-- 앞발 (발톱) -->
      <path d="M36 112 L28 95 L36 93 L34 86 L44 90 L40 98 L50 100 Z" fill="#7c3aed"/>
      <!-- 배 무늬 -->
      <ellipse cx="80" cy="124" rx="32" ry="22" fill="#e9d5ff" opacity="0.4"/>
      <!-- 마법 오라 별 -->
      <text x="22" y="45" font-size="16" fill="#f59e0b" opacity="0.9">✦</text>
      <text x="128" y="42" font-size="14" fill="#f59e0b" opacity="0.9">✦</text>
      <text x="75" y="18" font-size="18" fill="#c084fc" opacity="0.9">✦</text>
    </svg>`
  }
];

// ===== 앱 상태 =====
let state = {
  totalMinutes: 0,       // 총 누적 공부 시간 (분)
  todayMinutes: 0,       // 오늘 공부 시간 (분)
  todaySeconds: 0,       // 오늘 공부 시간 (초, 타이머용)
  streakDays: 0,         // 연속 공부일
  lastStudyDate: null,   // 마지막 공부 날짜
  currentStage: 0,       // 현재 진화 단계
  isRunning: false,      // 타이머 실행 중
  sessionSeconds: 0,     // 현재 세션 초
};

let timerInterval = null;

// ===== 로컬스토리지 저장/불러오기 =====
function saveState() {
  localStorage.setItem('dinoStudy', JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem('dinoStudy');
  if (saved) {
    const loaded = JSON.parse(saved);
    // 날짜 체크: 오늘이 아닌 경우 todayMinutes/todaySeconds 리셋
    const today = getToday();
    if (loaded.lastStudyDate !== today) {
      // 어제 공부했으면 streak 유지, 아니면 리셋
      const yesterday = getYesterday();
      if (loaded.lastStudyDate !== yesterday) {
        loaded.streakDays = 0;
      }
      loaded.todayMinutes = 0;
      loaded.todaySeconds = 0;
    }
    state = { ...state, ...loaded };
    state.isRunning = false; // 앱 시작 시 타이머는 항상 정지
    state.sessionSeconds = 0;
  }
}

function getToday() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
}

function getYesterday() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
}

// ===== 현재 진화 단계 계산 =====
function calcStage(minutes) {
  let stage = 0;
  for (let i = STAGES.length - 1; i >= 0; i--) {
    if (minutes >= STAGES[i].requiredMinutes) {
      stage = i;
      break;
    }
  }
  return stage;
}

// ===== 타이머 =====
function startTimer() {
  if (state.isRunning) return;
  state.isRunning = true;
  document.getElementById('startBtn').disabled = true;
  document.getElementById('stopBtn').disabled = false;
  document.getElementById('timerDisplay').classList.add('running');

  // 세션 시작 시점의 totalMinutes (base)를 저장
  const sessionBaseTotal = state.totalMinutes - state.todayMinutes;
  const sessionStartTodaySeconds = state.todaySeconds;

  timerInterval = setInterval(() => {
    state.sessionSeconds++;
    state.todaySeconds++;

    // todayMinutes와 totalMinutes 정확히 업데이트
    state.todayMinutes = Math.floor(state.todaySeconds / 60);
    state.totalMinutes = sessionBaseTotal + state.todayMinutes;

    // 날짜 업데이트
    state.lastStudyDate = getToday();

    // 연속일 업데이트
    updateStreak();

    // 진화 확인
    const newStage = calcStage(state.totalMinutes);
    if (newStage > state.currentStage) {
      const oldStage = state.currentStage;
      state.currentStage = newStage;
      showEvolutionModal(newStage);
    }

    updateUI();
    saveState();
  }, 1000);
}

function stopTimer() {
  if (!state.isRunning) return;
  state.isRunning = false;
  clearInterval(timerInterval);
  document.getElementById('startBtn').disabled = false;
  document.getElementById('stopBtn').disabled = true;
  document.getElementById('timerDisplay').classList.remove('running');
  saveState();
}

function resetTimer() {
  stopTimer();
  state.sessionSeconds = 0;
  updateTimerDisplay(0);
}

function updateStreak() {
  const today = getToday();
  const yesterday = getYesterday();
  // streak는 오늘 처음 공부 시작 시 업데이트 (간단히 날짜 체크)
}

// ===== UI 업데이트 =====
function updateUI() {
  updateTimerDisplay(state.sessionSeconds);
  updateDino();
  updateStats();
  updateEvolutionBar();
  updateStagesList();
}

function updateTimerDisplay(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  document.getElementById('timerDisplay').textContent =
    `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function updateDino() {
  const stage = STAGES[state.currentStage];
  document.getElementById('dinoDisplay').innerHTML = stage.svg;
  document.getElementById('evolutionBadge').textContent = `${stage.emoji} ${stage.shortName}`;
  document.getElementById('stageLabel').textContent = `진화 단계 ${state.currentStage + 1} / ${STAGES.length}`;

  // 아우라 색상
  const aura = document.getElementById('dinoAura');
  aura.style.background = stage.auraColor;
  aura.style.opacity = state.currentStage === 0 ? '0' : '0.25';
}

function updateStats() {
  const totalH = (state.totalMinutes / 60).toFixed(1);
  document.getElementById('totalHours').textContent = totalH;
  document.getElementById('streakDays').textContent = state.streakDays || 0;
  document.getElementById('evolutionLevel').textContent = state.currentStage + 1;
  document.getElementById('todayMinutes').textContent = state.todayMinutes || 0;
}

function updateEvolutionBar() {
  const current = STAGES[state.currentStage];
  const next = STAGES[state.currentStage + 1];

  if (!next) {
    // 최종 진화
    document.getElementById('evoBarFill').style.width = '100%';
    document.getElementById('nextEvoTime').textContent = '최강 달성! 🏆';
    return;
  }

  const currentReq = current.requiredMinutes;
  const nextReq = next.requiredMinutes;
  const progress = ((state.totalMinutes - currentReq) / (nextReq - currentReq)) * 100;
  const clampedProgress = Math.min(100, Math.max(0, progress));

  document.getElementById('evoBarFill').style.width = clampedProgress + '%';

  const remaining = nextReq - state.totalMinutes;
  if (remaining <= 0) {
    document.getElementById('nextEvoTime').textContent = '진화 준비 완료!';
  } else if (remaining < 60) {
    document.getElementById('nextEvoTime').textContent = `${remaining}분 남음`;
  } else {
    const h = Math.floor(remaining / 60);
    const m = remaining % 60;
    document.getElementById('nextEvoTime').textContent = m > 0 ? `${h}시간 ${m}분 남음` : `${h}시간 남음`;
  }
}

function updateStagesList() {
  const list = document.getElementById('stagesList');
  list.innerHTML = STAGES.map((stage, i) => {
    let cls = 'stage-item locked';
    let check = '🔒';
    if (i < state.currentStage) { cls = 'stage-item done'; check = '✅'; }
    if (i === state.currentStage) { cls = 'stage-item current'; check = '⭐'; }

    const req = stage.requiredMinutes === 0 ? '시작부터' :
      stage.requiredMinutes < 60 ? `${stage.requiredMinutes}분` :
      `${stage.requiredMinutes / 60 >= 1 ? Math.floor(stage.requiredMinutes/60)+'시간' : ''}${stage.requiredMinutes%60 > 0 ? ' '+stage.requiredMinutes%60+'분' : ''}`;

    return `
      <div class="${cls}">
        <div class="stage-emoji">${stage.emoji}</div>
        <div class="stage-info">
          <div class="stage-name">${stage.shortName}</div>
          <div class="stage-req">${req} 공부</div>
        </div>
        <div class="stage-check">${check}</div>
      </div>
    `;
  }).join('');
}

// ===== 진화 모달 =====
function showEvolutionModal(stageIdx) {
  const stage = STAGES[stageIdx];
  document.getElementById('modalDino').innerHTML = stage.svg;
  document.getElementById('modalDino').style.transform = 'scale(0.55)';
  document.getElementById('modalDino').style.transformOrigin = 'center bottom';
  document.getElementById('modalDino').style.height = '100px';
  document.getElementById('modalName').textContent = stage.name;
  document.getElementById('modalDesc').textContent = stage.desc;
  document.getElementById('evolutionModal').classList.add('show');

  // 파티클 이펙트 (간단)
  createConfetti();
}

function closeModal() {
  document.getElementById('evolutionModal').classList.remove('show');
}

function createConfetti() {
  // 간단한 CSS 파티클 효과
  const colors = ['#f59e0b', '#a78bfa', '#34d399', '#f9a8d4', '#67e8f9'];
  for (let i = 0; i < 20; i++) {
    const el = document.createElement('div');
    el.style.cssText = `
      position: fixed;
      width: ${Math.random() * 10 + 5}px;
      height: ${Math.random() * 10 + 5}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      left: ${Math.random() * 100}vw;
      top: -10px;
      z-index: 200;
      pointer-events: none;
      animation: confettiFall ${Math.random() * 2 + 1}s ease-in forwards;
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
  }
}

// confetti 애니메이션 주입
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
  @keyframes confettiFall {
    to {
      transform: translateY(100vh) rotate(720deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(confettiStyle);

// ===== 연속 공부일 업데이트 =====
function checkAndUpdateStreak() {
  const today = getToday();
  const yesterday = getYesterday();

  if (state.lastStudyDate === null) {
    // 처음 공부 시작
    state.streakDays = 1;
  } else if (state.lastStudyDate === today) {
    // 오늘 이미 공부함 - 아무것도 안 함
  } else if (state.lastStudyDate === yesterday) {
    // 어제 공부했으니 연속일 증가
    state.streakDays = (state.streakDays || 0) + 1;
    state.todayMinutes = 0;
    state.todaySeconds = 0;
  } else {
    // 오래 쉬었으니 리셋
    state.streakDays = 1;
    state.todayMinutes = 0;
    state.todaySeconds = 0;
  }
  state.lastStudyDate = today;
}

// ===== 초기화 =====
function init() {
  loadState();

  // streak 체크
  if (!state.isRunning) {
    checkAndUpdateStreak();
  }

  // 오늘 todaySeconds가 없으면 todayMinutes 기반으로 복원
  if (!state.todaySeconds) {
    state.todaySeconds = (state.todayMinutes || 0) * 60;
  }

  updateUI();
  document.getElementById('stopBtn').disabled = true;
}

init();
