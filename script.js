// ── year ────────────────────────────────────────────────
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── gallery captions ─────────────────────────────────────
const memories = [
  ['WhatsApp Image 2026-07-02 at 11.49.49 PM.jpeg',      'omaagaaaa lawaaaa nya baby cayanggg kena cium dengan matahari😭☀️'],
  ['WhatsApp Image 2026-07-02 at 11.49.51 PM.jpeg',      'ackshuallyy this smile fixed 67% of my problems ☝️🤓'],
  ['WhatsApp Image 2026-07-02 at 11.49.51 PM (1).jpeg',  'senyummu menawan bak idaman khalustiwa planet pluto terakhir baby cantik lebiuuuu'],
  ['WhatsApp Image 2026-07-02 at 11.49.51 PM (2).jpeg',  'face card never declines btw'],
  ['WhatsApp Image 2026-07-02 at 11.49.51 PM (3).jpeg',  'cakap hi kat sape tu hihi'],
  ['WhatsApp Image 2026-07-02 at 11.49.51 PM (4).jpeg',  'auumm tomeynya bakal bini (please please)'],
  ['WhatsApp Image 2026-07-02 at 11.49.51 PM (5).jpeg',  'yang di jalan hati hati, yang di hati jangan jalan jalan yellow font btw'],
  ['WhatsApp Image 2026-07-02 at 11.49.51 PM (6).jpeg',  'anyonyonyo tomeynyaa'],
  ['WhatsApp Image 2026-07-02 at 11.49.51 PM (7).jpeg',  'pergh ni gambar fav i btw'],
  ['WhatsApp Image 2026-07-02 at 11.49.51 PM (8).jpeg',  'tomeyynyaa video call mayu mayu pulak'],
  ['WhatsApp Image 2026-07-02 at 11.49.51 PM (9).jpeg',  'pov: pergi mall'],
  ['WhatsApp Image 2026-07-02 at 11.49.51 PM (10).jpeg', 'aip sape kasi bunga tu, nak kenaaaa dia ni'],
  ['WhatsApp Image 2026-07-02 at 11.49.51 PM (11).jpeg', 'the height differences just nise ~chef kiss~'],
  ['WhatsApp Image 2026-07-02 at 11.49.51 PM (12).jpeg', 'nanti kita remake otayyy'],
  ['WhatsApp Image 2026-07-02 at 11.49.51 PM (13).jpeg', 'baby pegang tangaann sapeeeee'],
  ['WhatsApp Image 2026-07-02 at 11.49.51 PM (14).jpeg', 'ackshuallyy, i meow u so muchieee'],
  ['WhatsApp Image 2026-07-02 at 11.49.51 PM (15).jpeg', 'wow banyaknya hadiah baby'],
  ['WhatsApp Image 2026-07-02 at 11.49.51 PM (16).jpeg', 'adik sesat ke, meh abang pimpin adik ke pelamin'],
  ['WhatsApp Image 2026-07-02 at 11.49.51 PM (17).jpeg', 'tomeynya baby senyumm'],
  ['WhatsApp Image 2026-07-02 at 11.49.51 PM (18).jpeg', 'noob kena bantai'],
  ['WhatsApp Image 2026-07-02 at 11.49.51 PM (19).jpeg', 'please be mine forever… please please please, let me let me let me, let me get what i want this time😭'],
];

const gallery = document.getElementById('photo-gallery');
if (gallery) {
  memories.forEach(([file, caption], index) => {
    const card = document.createElement('figure');
    card.className = 'memory-card';

    const photo = document.createElement('img');
    photo.src = `assets/${file}`;
    photo.alt = `Memory ${index + 1}`;
    photo.loading = 'lazy';

    const text = document.createElement('figcaption');
    text.textContent = caption;

    card.append(photo, text);
    gallery.appendChild(card);
  });
}

// ── proposal buttons ─────────────────────────────────────
const proposalActions = document.getElementById('proposal-actions');
const yesButton       = document.getElementById('yes-btn');
const noButton        = document.getElementById('no-btn');
const proposalResult  = document.getElementById('proposal-result');
const celebration     = document.getElementById('celebration');

let escapeCount = 0;

function moveNoButton() {
  const area   = proposalActions.getBoundingClientRect();
  const button = noButton.getBoundingClientRect();
  const maxLeft = Math.max(0, area.width  - button.width);
  const maxTop  = Math.max(0, area.height - button.height);

  noButton.style.left      = `${Math.random() * maxLeft}px`;
  noButton.style.top       = `${Math.random() * maxTop}px`;
  noButton.style.transform = 'none';
  escapeCount += 1;

  const replies = ['oppps gak kena 😏', 'you tak sayang i ke🥺?', 'baby jom la tawenn', 'naurrrr my honeyy beee', 'NO NO NO NO NO NO NO DONT DOOOOO THATTT!!!'];
  proposalResult.textContent = replies[(escapeCount - 1) % replies.length];
}

if (proposalActions && yesButton && noButton && proposalResult && celebration) {
  noButton.addEventListener('pointerenter', moveNoButton);
  noButton.addEventListener('pointerdown', (e) => { e.preventDefault(); moveNoButton(); });
  noButton.addEventListener('click',       (e) => { e.preventDefault(); moveNoButton(); });

  yesButton.addEventListener('click', () => {
    proposalResult.textContent = 'AWWWWW Finally u sayang i pon!';
    yesButton.textContent = 'lop u so muchie baby ❤️';
    noButton.hidden = true;
    celebration.classList.add('active');
    celebration.setAttribute('aria-hidden', 'false');

    if (!celebration.hasChildNodes()) {
      // Hundreds of large animated PNGs exhaust Mobile Safari's graphics memory.
      // Keep the effect full enough visually while respecting smaller devices.
      const isPhone = window.matchMedia('(max-width: 720px)').matches;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const flowerCount = reduceMotion ? 12 : (isPhone ? 24 : 56);
      const flowers = document.createDocumentFragment();

      for (let i = 0; i < flowerCount; i++) {
        const isLily = i % 2 === 0;
        const flower = document.createElement('img');
        flower.className = `real-flower ${isLily ? 'lily' : 'babys-breath'}`;
        flower.src = isLily ? 'assets/pink-lily.png' : 'assets/pink-babys-breath-bouquet.png';
        flower.alt = '';
        flower.style.setProperty('--left',           `${-18 + Math.random() * 118}%`);
        const baseSize = isPhone ? 72 : 105;
        const sizeRange = isPhone ? 78 : 125;
        flower.style.setProperty('--size',           `${baseSize + Math.random() * sizeRange}px`);
        flower.style.setProperty('--opacity',        `${0.76 + Math.random() * 0.24}`);
        flower.style.setProperty('--duration',       `${7 + Math.random() * 7}s`);
        flower.style.setProperty('--delay',          `${Math.random() * -15}s`);
        const drift = -180 + Math.random() * 360;
        flower.style.setProperty('--drift',          `${drift}px`);
        flower.style.setProperty('--mid-drift',      `${drift * -0.35}px`);
        flower.style.setProperty('--start-rotation', `${Math.random() * 180}deg`);
        flower.style.setProperty('--end-rotation',   `${360 + Math.random() * 540}deg`);
        flowers.appendChild(flower);
      }

      celebration.appendChild(flowers);

      const ring = document.createElement('img');
      ring.className = 'celebration-ring';
      ring.src = 'assets/engagement-ring.png';
      ring.alt = 'A diamond engagement ring';
      celebration.appendChild(ring);

      // note + button — fade in after ring pops
      const overlay = document.createElement('div');
      overlay.className = 'celebration-content';
      overlay.innerHTML = `
        <p class="celebration-note">
          please be mine forever baby ku comel ucuk acam💍.<br>
        </p>
        <a href="story.html" class="celebration-btn">
          moh le kita, kami tak ramai tapi kami ada →
        </a>
      `;
      celebration.appendChild(overlay);
    }
  });
}

// ── surprise button → cincin popup ───────────────────────
const surpriseBtn    = document.getElementById('surprise-btn');
const cincinBackdrop = document.getElementById('cincin-backdrop');
const cincinClose    = document.getElementById('cincin-close');

if (surpriseBtn && cincinBackdrop) {
  surpriseBtn.addEventListener('click', () => {
    cincinBackdrop.classList.add('open');
    cincinBackdrop.setAttribute('aria-hidden', 'false');
  });

  // close on X button
  if (cincinClose) {
    cincinClose.addEventListener('click', () => {
      cincinBackdrop.classList.remove('open');
      cincinBackdrop.setAttribute('aria-hidden', 'true');
    });
  }

  // close on backdrop click
  cincinBackdrop.addEventListener('click', (e) => {
    if (e.target === cincinBackdrop) {
      cincinBackdrop.classList.remove('open');
      cincinBackdrop.setAttribute('aria-hidden', 'true');
    }
  });

  // close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cincinBackdrop.classList.contains('open')) {
      cincinBackdrop.classList.remove('open');
      cincinBackdrop.setAttribute('aria-hidden', 'true');
    }
  });
}

// ── music player ─────────────────────────────────────────
const musicBtn  = document.getElementById('music-btn');
const musicIcon = document.getElementById('music-icon');
const bgAudio   = document.getElementById('bg-audio');

if (musicBtn && bgAudio) {
  // try autoplay immediately
  bgAudio.volume = 0.5;
  const autoplayPromise = bgAudio.play();

  if (autoplayPromise !== undefined) {
    autoplayPromise
      .then(() => {
        // autoplay succeeded
        musicIcon.textContent = '⏸';
        musicBtn.classList.add('playing');
      })
      .catch(() => {
        // autoplay blocked — wait for first user interaction
        musicIcon.textContent = '▶';
        const startOnInteraction = () => {
          bgAudio.play().then(() => {
            musicIcon.textContent = '⏸';
            musicBtn.classList.add('playing');
          });
          document.removeEventListener('click', startOnInteraction);
          document.removeEventListener('keydown', startOnInteraction);
          document.removeEventListener('touchstart', startOnInteraction);
        };
        document.addEventListener('click', startOnInteraction, { once: true });
        document.addEventListener('keydown', startOnInteraction, { once: true });
        document.addEventListener('touchstart', startOnInteraction, { once: true });
      });
  }

  // toggle play/pause on button click
  musicBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (bgAudio.paused) {
      bgAudio.play();
      musicIcon.textContent = '⏸';
      musicBtn.classList.add('playing');
    } else {
      bgAudio.pause();
      musicIcon.textContent = '▶';
      musicBtn.classList.remove('playing');
    }
  });
}
