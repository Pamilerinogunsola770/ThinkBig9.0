// --- QUOTES ARRAY ---
const quotes = [
  "Your future is created by what you do today, not tomorrow.",
  "In the 21st century, your network is your net worth.",
  "Entrepreneurship is the new job security.",
  "Wealth is built by owning, not by earning.",
  "The richest people build networks; everyone else looks for work.",
  "Leverage is the key to exponential growth.",
  "Don't work for money; make money work for you.",
  "Opportunities are created, not found.",
  "Financial education is your greatest asset.",
  "Collaboration beats competition in the new economy.",
  "The business of the 21st century is about freedom.",
  "Your mindset determines your financial destiny.",
  "Success is a decision, not a gift.",
  "The best investment is in yourself.",
  "Multiple streams of income are no longer optional.",
  "The world rewards those who solve problems.",
  "Don't fear failure; fear being in the same place next year.",
  "Your comfort zone is your enemy.",
  "The only limits are the ones you set.",
  "Wealth flows to those who add value.",
  "The 21st century belongs to the bold.",
  "If you want to go fast, go alone. If you want to go far, go together.",
  "Every setback is a setup for a comeback.",
  "The best way to predict the future is to create it.",
  "Your network is your greatest asset.",
  "Don't chase money; chase impact.",
  "The more you learn, the more you earn.",
  "Action beats intention every time.",
  "The business of the 21st century is about people.",
  "Dream big, start small, act now.",
  "You are one decision away from a new life.",
  "The only real security is self-reliance.",
  "Innovation is the currency of the future.",
  "Don't wait for opportunity. Create it.",
  "Your habits shape your destiny.",
  "The best time to start was yesterday. The next best is now.",
  "Wealth is a mindset, not a number.",
  "The future belongs to those who adapt.",
  "You can't build a reputation on what you're going to do.",
  "The greatest risk is not taking one.",
  "Success is built on service.",
  "The 21st century rewards the resourceful.",
  "Don't just make a living; make a difference.",
  "Your story can inspire others to act.",
  "The best leaders are lifelong learners.",
  "You don't need permission to succeed.",
  "The world is changing—are you?",
  "Your value is in your uniqueness.",
  "The best investment is in relationships.",
  "Don't let fear decide your future.",
  "The business of the 21st century is about empowerment.",
  "You are the CEO of your life.",
  "The only way to grow is to give.",
  "Your vision determines your direction.",
  "The future is built by those who dare.",
  "Don't just dream—do.",
  "The best way to learn is by doing.",
  "Your attitude determines your altitude.",
  "The 21st century is the age of the entrepreneur.",
  "You can't win if you don't play.",
  "The more you give, the more you get.",
  "Your network multiplies your impact.",
  "Don't be busy—be productive.",
  "The best opportunities are created, not given.",
  "Your dreams are valid.",
  "The only failure is quitting.",
  "The business of the 21st century is about contribution.",
  "You are your greatest investment.",
  "The future is for the flexible.",
  "Don't just consume—create.",
  "Your actions today shape your tomorrow.",
  "The best way to stand out is to be yourself.",
  "You can't change the past, but you can shape the future.",
  "The 21st century is about connection.",
  "Your potential is limitless.",
  "Don't let comfort kill your ambition.",
  "The best way to grow is to help others grow.",
  "You are the architect of your destiny.",
  "The future is for the courageous.",
  "Don't just wish—work.",
  "Your network is your launchpad.",
  "The business of the 21st century is about vision.",
  "You are one idea away from a breakthrough.",
  "The best way to succeed is to serve.",
  "Your dreams demand action.",
  "Don't let doubt drown your drive.",
  "The 21st century is about innovation.",
  "Your story matters.",
  "Don't just follow trends—set them.",
  "The best way to predict success is to create it.",
  "You are the brand.",
  "The future is for the prepared.",
  "Don't let excuses limit your life.",
  "Your network is your superpower.",
  "The business of the 21st century is about legacy.",
  "You are the difference.",
  "The best way to lead is to serve.",
  "Your value grows as you grow.",
  "Don't just survive—thrive.",
  "The 21st century is about collaboration.",
  "Your dreams are your blueprint.",
  "Don't let fear freeze your future.",
  "The best way to win is to help others win.",
  "You are your best asset.",
  "The future is for the relentless.",
  "Don't just talk—take action.",
  "Your network is your foundation.",
  "The business of the 21st century is about growth.",
  "You are the solution.",
  "The best way to create wealth is to create value.",
  "Your vision is your power.",
  "Don't let comfort cost you your calling.",
  "The 21st century is about empowerment.",
  "Your dreams are your fuel.",
  "Don't let fear write your story.",
  "The best way to build is to believe.",
  "You are the opportunity.",
  "The future is for the dreamers.",
  "Don't just plan—perform.",
  "Your network is your advantage.",
  "The business of the 21st century is about possibility.",
  "You are the spark.",
  "The best way to grow wealth is to grow people.",
  "Your actions echo in eternity.",
  "Don't let fear silence your voice.",
  "The 21st century is about transformation.",
  "Your dreams are your compass.",
  "Don't let comfort keep you small.",
  "The best way to make a mark is to make a move.",
  "You are the movement.",
  "The future is for the bold.",
  "Don't just hope—hustle.",
  "Your network is your legacy.",
  "The business of the 21st century is about impact.",
  "You are the inspiration.",
  "The best way to change the world is to change yourself.",
  "Your dreams are your wings.",
  "Don't let fear block your blessings.",
  "The 21st century is about visionaries.",
  "Your actions inspire others.",
  "Don't just exist—excel.",
  "The best way to build a future is to build people.",
  "You are the legacy.",
  "The future is for the passionate.",
  "Don't let comfort cloud your calling.",
  "Your network is your tribe.",
  "The business of the 21st century is about community.",
  "You are the change.",
  "The best way to rise is to lift others.",
  "Your dreams are your destiny.",
  "Don't let fear limit your leap.",
  "The 21st century is about creators.",
  "Your actions create your reality.",
  "Don't just wish for it—work for it.",
  "The best way to build wealth is to build people.",
  "You are the future.",
  "The future is for the fearless.",
  "Don't let comfort cost you your dreams.",
  "Your network is your net worth—invest in it.",
  "The business of the 21st century is about purpose.",
  "You are the possibility.",
  "The best way to grow is to give.",
  "Your dreams are your drive.",
  "Don't let fear hold you back.",
  "The 21st century is about leaders.",
  "Your actions shape your legacy.",
  "Don't just imagine—implement.",
  "The best way to succeed is to start.",
  "You are the revolution.",
  "The future is for the doers.",
  "Don't let comfort kill your creativity.",
  "Your network is your power.",
  "The business of the 21st century is about innovation.",
  "You are the answer.",
  "The best way to make a difference is to be different."
];

// --- CONFIG ---
const EVENT_DATE = new Date('2026-05-23T00:00:00');
const EVENT_LINK = window.location.href;
const QUOTES_COUNT = 150;

// --- MONEY ANIMATION ---
function initMoneyAnimation() {
  const moneyBg = document.querySelector('.money-bg');
  if (!moneyBg) return;
  
  const moneySymbols = ['💵', '💴', '💶', '💷', '💸', '🤑'];
  
  for (let i = 0; i < 40; i++) {
    const money = document.createElement('div');
    money.className = 'money-float';
    money.textContent = moneySymbols[Math.floor(Math.random() * moneySymbols.length)];
    
    const randomLeft = Math.random() * 100;
    const randomDelay = Math.random() * 12;
    const randomDuration = 10 + Math.random() * 8;
    const randomSize = 0.8 + Math.random() * 1.5;
    
    money.style.left = randomLeft + '%';
    money.style.animationDelay = randomDelay + 's';
    money.style.animationDuration = randomDuration + 's';
    money.style.fontSize = (2.2 * randomSize) + 'rem';
    money.style.opacity = 0.1 + Math.random() * 0.12;
    
    moneyBg.appendChild(money);
  }
}

// --- COUNTDOWN ---
function updateCountdown() {
  const now = new Date();
  const diff = EVENT_DATE - now;
  const countdownDiv = document.getElementById('countdown');
  const eventLiveDiv = document.getElementById('event-live');
  const eventLiveOverlay = document.querySelector('.event-live-overlay');
  const quoteCard = document.getElementById('quote-card');
  const websiteContent = document.querySelector('.website-content');
  
  if (diff <= 0) {
    countdownDiv.style.display = 'none';
    eventLiveDiv.style.display = 'none';
    quoteCard.style.display = 'none';
    eventLiveOverlay.classList.add('active');
    if (websiteContent) {
      websiteContent.classList.add('active');
    }
    triggerConfetti();
    return;
  }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  countdownDiv.innerHTML = `
    <span>${days}<span class="countdown-label">Days</span></span>
    <span>${hours}<span class="countdown-label">Hrs</span></span>
    <span>${mins}<span class="countdown-label">Mins</span></span>
    <span>${secs}<span class="countdown-label">Secs</span></span>
  `;
}

function triggerConfetti() {
  const overlay = document.querySelector('.event-live-overlay');
  if (!overlay) return;
  
  // Hide overlay background so website content is visible
  setTimeout(() => {
    overlay.style.background = 'transparent';
    overlay.style.pointerEvents = 'none';
  }, 1200);
  
  // Create confetti particles
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'event-live-confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.background = ['var(--accent-red)', '#60a5fa', 'var(--white)'][Math.floor(Math.random() * 3)];
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
    overlay.appendChild(confetti);
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// --- USER ID ---
function getUserId() {
  let id = localStorage.getItem('thinkbig_userid');
  if (!id) {
    id = 'u' + Math.random().toString(36).substr(2, 10) + Date.now().toString(36);
    localStorage.setItem('thinkbig_userid', id);
  }
  return id;
}

// --- PRNG (Mulberry32) ---
function mulberry32(seed) {
  let t = seed;
  return function() {
    t += 0x6D2B79F5;
    let r = Math.imul(t ^ t >>> 15, 1 | t);
    r ^= r + Math.imul(r ^ r >>> 7, 61 | r);
    return ((r ^ r >>> 14) >>> 0) / 4294967296;
  }
}

function stringToSeed(str) {
  let hash = 0, i, chr;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash;
}

// --- QUOTE PICKING ---
function getTodayQuoteIndex() {
  const userId = getUserId();
  const today = new Date().toISOString().slice(0,10);
  let used = JSON.parse(localStorage.getItem('thinkbig_used_quotes') || '[]');
  if (used.length >= QUOTES_COUNT) used = [];
  const seed = stringToSeed(userId + today);
  const prng = mulberry32(seed);
  const available = Array.from({length: QUOTES_COUNT}, (_,i) => i).filter(i => !used.includes(i));
  if (available.length === 0) return 0;
  const idx = available[Math.floor(prng() * available.length)];
  return idx;
}

function markQuoteUsed(idx) {
  let used = JSON.parse(localStorage.getItem('thinkbig_used_quotes') || '[]');
  if (!used.includes(idx)) {
    used.push(idx);
    localStorage.setItem('thinkbig_used_quotes', JSON.stringify(used));
  }
}

// --- QUOTE REVEAL ---
const quoteCard = document.getElementById('quote-card');
const quoteTextDiv = quoteCard.querySelector('.quote-text');
const revealText = quoteCard.querySelector('.quote-reveal-text');
const loader = quoteCard.querySelector('.loader');
const quoteActions = document.querySelector('.quote-actions');
let revealed = false;
let todayQuoteIdx = null;
let todayQuote = '';

function revealQuote() {
  if (revealed) return;
  revealed = true;
  quoteCard.classList.add('loading');
  loader.style.display = 'block';
  revealText.textContent = 'Revealing...';
  setTimeout(() => {
    todayQuoteIdx = getTodayQuoteIndex();
    todayQuote = quotes[todayQuoteIdx];
    markQuoteUsed(todayQuoteIdx);
    quoteTextDiv.textContent = todayQuote;
    quoteTextDiv.style.opacity = 1;
    quoteCard.classList.add('revealed');
    quoteCard.classList.remove('loading');
    loader.style.display = 'none';
    revealText.style.display = 'none';
    quoteActions.style.display = 'flex';
    quoteCard.querySelector('.footnote').style.display = 'block';
    const cbmsg = quoteCard.querySelector('.come-back-msg');
    if (cbmsg) cbmsg.style.display = 'block';
    updateFavoriteBtn();
  }, 2000);
}

quoteCard.addEventListener('click', revealQuote);
quoteCard.addEventListener('keypress', e => { if (e.key === 'Enter' || e.key === ' ') revealQuote(); });

// --- QUOTE ACTIONS ---
document.getElementById('copy-quote').onclick = function() {
  if (!todayQuote) return;
  navigator.clipboard.writeText(todayQuote);
  this.textContent = 'Copied!';
  setTimeout(() => this.textContent = 'Copy Quote', 1200);
};

document.getElementById('download-quote').onclick = function() {
  if (!todayQuote) return;
  const footnote = quoteCard.querySelector('.footnote');
  const prev = footnote.style.display;
  footnote.style.display = 'block';
  html2canvas(quoteCard, {backgroundColor: null}).then(canvas => {
    const link = document.createElement('a');
    link.download = 'thinkbig-quote.png';
    link.href = canvas.toDataURL();
    link.click();
    footnote.style.display = prev;
  });
};

document.getElementById('share-whatsapp').onclick = function() {
  if (!todayQuote) return;
  const text = encodeURIComponent(todayQuote + '\n\nJoin THINK BIG 9.0: ' + EVENT_LINK);
  window.open('https://wa.me/?text=' + text, '_blank');
};

// --- FAVORITE ---
function getFavorites() {
  return JSON.parse(localStorage.getItem('thinkbig_favorites') || '[]');
}

function updateFavoriteBtn() {
  const favBtn = document.getElementById('favorite-quote');
  const favs = getFavorites();
  if (favs.includes(todayQuoteIdx)) {
    favBtn.classList.add('favorited');
    favBtn.textContent = 'Favorited';
  } else {
    favBtn.classList.remove('favorited');
    favBtn.textContent = 'Favorite';
  }
}

document.getElementById('favorite-quote').onclick = function() {
  if (!todayQuote) return;
  let favs = getFavorites();
  if (!favs.includes(todayQuoteIdx)) {
    favs.push(todayQuoteIdx);
    localStorage.setItem('thinkbig_favorites', JSON.stringify(favs));
  }
  updateFavoriteBtn();
};

// --- GIVEAWAY CODE ---
function getGiveawayCode() {
  const userId = getUserId();
  const codeSeed = stringToSeed(userId + '2026-05-23');
  const prng = mulberry32(codeSeed);
  const digits = Math.floor(prng() * 90 + 10);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let letters = '';
  for (let i = 0; i < 3; i++) letters += chars[Math.floor(prng() * 26)];
  return digits + letters;
}

function revealGiveawayCode() {
  const code = getGiveawayCode();
  document.getElementById('giveaway-code').textContent = code;
}

document.getElementById('copy-code').onclick = function() {
  const code = document.getElementById('giveaway-code').textContent;
  navigator.clipboard.writeText(code);
  this.textContent = 'Copied!';
  setTimeout(() => this.textContent = 'Copy Code', 1200);
};

document.getElementById('download-code').onclick = function() {
  html2canvas(document.getElementById('giveaway-code')).then(canvas => {
    const link = document.createElement('a');
    link.download = 'thinkbig-giveaway-code.png';
    link.href = canvas.toDataURL();
    link.click();
  });
};

// --- INITIALIZE ---
initMoneyAnimation();
