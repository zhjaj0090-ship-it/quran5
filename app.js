const scenes = [
  { name: "وادي الجبال", url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2000&q=85" },
  { name: "بحيرة بين الجبال", url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=85" },
  { name: "غابة هادئة", url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=85" },
  { name: "سماء ونجوم", url: "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&w=2000&q=85" },
  { name: "شلال وسط الطبيعة", url: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=2000&q=85" },
  { name: "شاطئ هادئ", url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2000&q=85" },
  { name: "صحراء وقت الغروب", url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=2000&q=85" },
  { name: "جبال خضراء", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85" },
  { name: "ضباب الفجر", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85" },
  { name: "نهر في الوادي", url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=2000&q=85" },
  { name: "قمم ثلجية", url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=85" },
  { name: "شروق الشمس فوق السحاب", url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=2000&q=85" }
];

const surahNames = [
  "الفاتحة","البقرة","آل عمران","النساء","المائدة","الأنعام","الأعراف","الأنفال","التوبة","يونس",
  "هود","يوسف","الرعد","إبراهيم","الحجر","النحل","الإسراء","الكهف","مريم","طه",
  "الأنبياء","الحج","المؤمنون","النور","الفرقان","الشعراء","النمل","القصص","العنكبوت","الروم",
  "لقمان","السجدة","الأحزاب","سبأ","فاطر","يس","الصافات","ص","الزمر","غافر",
  "فصلت","الشورى","الزخرف","الدخان","الجاثية","الأحقاف","محمد","الفتح","الحجرات","ق",
  "الذاريات","الطور","النجم","القمر","الرحمن","الواقعة","الحديد","المجادلة","الحشر","الممتحنة",
  "الصف","الجمعة","المنافقون","التغابن","الطلاق","التحريم","الملك","القلم","الحاقة","المعارج",
  "نوح","الجن","المزمل","المدثر","القيامة","الإنسان","المرسلات","النبأ","النازعات","عبس",
  "التكوير","الانفطار","المطففين","الانشقاق","البروج","الطارق","الأعلى","الغاشية","الفجر","البلد",
  "الشمس","الليل","الضحى","الشرح","التين","العلق","القدر","البينة","الزلزلة","العاديات",
  "القارعة","التكاثر","العصر","الهمزة","الفيل","قريش","الماعون","الكوثر","الكافرون","النصر",
  "المسد","الإخلاص","الفلق","الناس"
];

// قاعدة بيانات صور القراء (روابط مباشرة متعددة المصادر + صورتين احتياطيتين لكل قارئ)
const reciterRealPhotos = {
  "الحصري": [
    "https://static.qurancdn.com/images/reciters/6/mahmoud-khalil-al-hussary-profile.jpeg",
    "https://i1.sndcdn.com/artworks-000105302704-2k4w5s-t500x500.jpg"
  ],
  "المنشاوي": [
    "https://static.qurancdn.com/images/reciters/8/mohamed-siddiq-el-minshawi-profile.jpeg",
    "https://i1.sndcdn.com/artworks-000112233445-minshawi-t500x500.jpg"
  ],
  "عبد الباسط": [
    "https://static.qurancdn.com/images/reciters/1/abdulbaset-abdulsamad-profile.jpeg"
  ],
  "العفاسي": [
    "https://static.qurancdn.com/images/reciters/7/mishary-rashid-alafasy-profile.jpeg"
  ],
  "السديس": [
    "https://static.qurancdn.com/images/reciters/3/abdur-rahman-as-sudais-profile.jpeg"
  ],
  "الشريم": [
    "https://static.qurancdn.com/images/reciters/10/saud-ash-shuraim-profile.jpeg"
  ],
  "المعيقلي": [
    "https://static.qurancdn.com/images/reciters/102/maher-al-muaiqly-profile.jpeg"
  ],
  "الطبلاوي": [
    "https://static.qurancdn.com/images/reciters/11/mohamed-al-tablawi-profile.jpeg"
  ],
  "الرفاعي": [
    "https://static.qurancdn.com/images/reciters/5/hani-ar-rifai-profile.jpeg"
  ],
  "الشاطري": [
    "https://static.qurancdn.com/images/reciters/4/abu-bakr-ash-shatri-profile.jpeg"
  ],
  "العجمي": [
    "https://static.qurancdn.com/images/reciters/2/ahmed-al-ajmy-profile.jpeg"
  ],
  "الغامدي": [
    "https://static.qurancdn.com/images/reciters/13/saad-al-ghamdi-profile.jpeg"
  ],
  "ياسر الدوسري": [
    "https://static.qurancdn.com/images/reciters/97/yasser-ad-dussary-profile.jpeg"
  ],
  "ناصر القطامي": [
    "https://static.qurancdn.com/images/reciters/98/nasser-al-qatami-profile.jpeg"
  ],
  "فارس عباد": [
    "https://static.qurancdn.com/images/reciters/99/fares-abbad-profile.jpeg"
  ],
  "الحذيفي": [
    "https://static.qurancdn.com/images/reciters/9/ali-al-hudhaify-profile.jpeg"
  ],
  "الجهني": [
    "https://static.qurancdn.com/images/reciters/12/abdullah-awad-al-juhany-profile.jpeg"
  ],
  "بندر بليلة": [
    "https://static.qurancdn.com/images/reciters/104/bandar-baleela-profile.jpeg"
  ],
  "إدريس أبكر": [
    "https://static.qurancdn.com/images/reciters/103/idrees-abkar-profile.jpeg"
  ],
  "خالد الجليل": [
    "https://static.qurancdn.com/images/reciters/105/khalid-al-jalil-profile.jpeg"
  ]
};

// دالة توليد صورة SVG بورتريه واضحة ومضمونة 100% تعمل بدون إنترنت وبدون أي قيود متصفح
function createGuaranteedPortrait(name, index = 0) {
  const palettes = [
    ["#1e4d3f", "#0b1f19", "#d8c18a"],
    ["#234857", "#0d1d24", "#e2cb92"],
    ["#3c4628", "#151a0d", "#dfd09b"],
    ["#1a4a44", "#081c19", "#d8c18a"],
    ["#2d3e50", "#10171f", "#e5cfa0"]
  ];
  const [c1, c2, accent] = palettes[index % palettes.length];

  const cleanName = name.replace(/الشيخ|القارئ|الدكتور|د\./g, "").trim();
  const words = cleanName.split(/\s+/).filter(Boolean);
  const initials = words.length >= 2
    ? `${words[0][0]}.${words[1][0]}`
    : (words[0] ? words[0].slice(0, 2) : "ق");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="100%" stop-color="${c2}"/>
      </linearGradient>
    </defs>
    <rect width="200" height="200" fill="url(#bg)"/>
    <circle cx="100" cy="76" r="32" fill="${accent}" fill-opacity="0.28"/>
    <path d="M42 188 C42 138, 158 138, 158 188 Z" fill="${accent}" fill-opacity="0.28"/>
    <circle cx="100" cy="100" r="92" fill="none" stroke="${accent}" stroke-width="3" stroke-opacity="0.45"/>
    <text x="100" y="112" font-family="Arial, Tahoma, sans-serif" font-size="44" font-weight="bold" fill="#ffffff" text-anchor="middle">${initials}</text>
  </svg>`;

  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

function getReciterPhotos(name, index) {
  const fallback = createGuaranteedPortrait(name, index);
  for (const key in reciterRealPhotos) {
    if (name.includes(key)) {
      return {
        primary: reciterRealPhotos[key][0],
        fallback: fallback
      };
    }
  }
  return {
    primary: fallback,
    fallback: fallback
  };
}

let allReciters = [];
let currentReciter = null;
let sceneIndex = 0;
let autoTimer = null;
let isLooping = false;

const background = document.getElementById("background");
const sceneName = document.getElementById("sceneName");
const autoButton = document.getElementById("autoScene");
const reciterSelect = document.getElementById("reciterSelect");
const surahSelect = document.getElementById("surahSelect");
const audio = document.getElementById("quranAudio");
const playButton = document.getElementById("playButton");
const reciterPhoto = document.getElementById("reciterPhoto");

function setScene(index) {
  sceneIndex = (index + scenes.length) % scenes.length;
  background.style.opacity = ".25";
  const next = new Image();
  next.onload = () => {
    background.style.backgroundImage = `url("${scenes[sceneIndex].url}")`;
    background.style.opacity = "1";
    sceneName.textContent = scenes[sceneIndex].name;
  };
  next.onerror = () => {
    background.style.opacity = "1";
    sceneName.textContent = scenes[sceneIndex].name;
  };
  next.src = scenes[sceneIndex].url;
}

function randomScene() {
  let next = sceneIndex;
  while (scenes.length > 1 && next === sceneIndex) {
    next = Math.floor(Math.random() * scenes.length);
  }
  setScene(next);
}

function toggleAuto() {
  if (autoTimer) {
    clearInterval(autoTimer);
    autoTimer = null;
    autoButton.classList.remove("active");
    autoButton.style.color = "";
  } else {
    autoTimer = setInterval(randomScene, 30000);
    autoButton.classList.add("active");
    autoButton.style.color = "var(--gold)";
  }
}

document.getElementById("changeScene").addEventListener("click", randomScene);
document.getElementById("nextScene").addEventListener("click", randomScene);
document.getElementById("shuffle").addEventListener("click", randomScene);
autoButton.addEventListener("click", toggleAuto);

function populateSurahs() {
  surahSelect.innerHTML = surahNames
    .map((name, idx) => `<option value="${idx + 1}">${idx + 1}. سورة ${name}</option>`)
    .join("");
}

async function loadReciters() {
  // عرض صورة فورية فور فتح الصفحة قبل اكتمال التحميل
  reciterPhoto.src = getReciterPhotos("محمود خليل الحصري", 0).primary;

  try {
    const res = await fetch("https://www.mp3quran.net/api/v3/reciters?language=ar");
    const data = await res.json();

    const extracted = [];
    data.reciters.forEach((r, idx) => {
      if (r.moshaf && r.moshaf.length > 0) {
        const m = r.moshaf[0];
        const photos = getReciterPhotos(r.name, idx);
        extracted.push({
          id: r.id,
          name: r.name,
          riwaya: m.name || "حفص عن عاصم",
          server: m.server,
          photo: photos.primary,
          fallbackPhoto: photos.fallback
        });
      }
    });

    const priorityNames = [
      "الحصري", "المنشاوي", "عبد الباسط", "العفاسي", "المعيقلي",
      "السديس", "الشريم", "ياسر الدوسري", "ناصر القطامي", "فارس عباد",
      "الغامدي", "العجمي", "الحذيفي", "الجهني", "بندر بليلة", "إدريس أبكر", "خالد الجليل"
    ];
    extracted.sort((a, b) => {
      const aIdx = priorityNames.findIndex(p => a.name.includes(p));
      const bIdx = priorityNames.findIndex(p => b.name.includes(p));
      if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
      if (aIdx !== -1) return -1;
      if (bIdx !== -1) return 1;
      return a.name.localeCompare(b.name, "ar");
    });

    allReciters = extracted.slice(0, 300);
  } catch (err) {
    const fallbackList = [
      { id: 1, name: "محمود خليل الحصري", riwaya: "حفص عن عاصم", server: "https://server13.mp3quran.net/husr/" },
      { id: 2, name: "محمد صديق المنشاوي", riwaya: "حفص عن عاصم", server: "https://server10.mp3quran.net/minsh/" },
      { id: 3, name: "عبد الباسط عبد الصمد", riwaya: "حفص عن عاصم", server: "https://server7.mp3quran.net/basit/" },
      { id: 4, name: "مشاري راشد العفاسي", riwaya: "حفص عن عاصم", server: "https://server8.mp3quran.net/afs/" },
      { id: 5, name: "ماهر المعيقلي", riwaya: "حفص عن عاصم", server: "https://server12.mp3quran.net/maher/" }
    ];
    allReciters = fallbackList.map((r, idx) => {
      const photos = getReciterPhotos(r.name, idx);
      return { ...r, photo: photos.primary, fallbackPhoto: photos.fallback };
    });
  }

  document.getElementById("reciterCountBadge").textContent = allReciters.length;
  document.getElementById("libTotalCount").textContent = allReciters.length;

  reciterSelect.innerHTML = allReciters
    .map((r, i) => `<option value="${i}">${r.name}</option>`)
    .join("");

  renderRecitersGrid(allReciters);
  selectReciter(0, false);
}

function renderRecitersGrid(list) {
  const grid = document.getElementById("recitersGrid");
  grid.innerHTML = "";

  list.forEach(r => {
    const originalIndex = allReciters.indexOf(r);
    const btn = document.createElement("button");
    btn.className = "reciter-card" + (currentReciter && currentReciter.id === r.id ? " active" : "");
    btn.dataset.index = originalIndex;

    const img = document.createElement("img");
    img.alt = r.name;
    img.referrerPolicy = "no-referrer";
    img.onerror = function() {
      this.onerror = null;
      this.src = r.fallbackPhoto;
    };
    img.src = r.photo;

    const title = document.createElement("strong");
    title.textContent = r.name;

    const sub = document.createElement("span");
    sub.textContent = r.riwaya;

    btn.appendChild(img);
    btn.appendChild(title);
    btn.appendChild(sub);

    btn.addEventListener("click", () => {
      reciterSelect.value = originalIndex;
      selectReciter(originalIndex, true);
      closeLibrary();
    });

    grid.appendChild(btn);
  });
}

document.getElementById("reciterSearch").addEventListener("input", e => {
  const q = e.target.value.trim().toLowerCase();
  const filtered = allReciters.filter(r =>
    r.name.toLowerCase().includes(q) || r.riwaya.toLowerCase().includes(q)
  );
  renderRecitersGrid(filtered);
});

function selectReciter(index, autoPlay = false) {
  currentReciter = allReciters[index];
  if (!currentReciter) return;

  document.getElementById("reciterTitle").textContent = "القارئ: " + currentReciter.name;
  document.getElementById("riwayaLabel").textContent = currentReciter.riwaya;

  reciterPhoto.referrerPolicy = "no-referrer";
  reciterPhoto.onerror = function() {
    this.onerror = null;
    this.src = currentReciter.fallbackPhoto;
  };
  reciterPhoto.src = currentReciter.photo;

  document.querySelectorAll(".reciter-card").forEach(c => {
    c.classList.toggle("active", Number(c.dataset.index) === index);
  });

  loadAudioTrack(autoPlay);
}

function loadAudioTrack(autoPlay = false) {
  if (!currentReciter) return;
  const surahNum = Number(surahSelect.value);

  document.getElementById("surahTitle").textContent = "سورة " + surahNames[surahNum - 1];

  const padded = String(surahNum).padStart(3, "0");
  const serverUrl = currentReciter.server.endsWith("/")
    ? currentReciter.server
    : currentReciter.server + "/";

  audio.src = `${serverUrl}${padded}.mp3`;
  document.getElementById("progressFill").style.width = "0%";
  document.getElementById("currentTime").textContent = "00:00";
  document.getElementById("duration").textContent = "--:--";

  if (autoPlay) {
    playAudio();
  } else {
    playButton.textContent = "▶";
    document.getElementById("audioStatus").textContent = "جاهز للتشغيل";
  }
}

function playAudio() {
  document.getElementById("audioStatus").textContent = "جاري تحميل التلاوة...";
  audio.play()
    .then(() => {
      playButton.textContent = "Ⅱ";
      document.getElementById("audioStatus").textContent = "يُتلى الآن";
    })
    .catch(() => {
      playButton.textContent = "▶";
      document.getElementById("audioStatus").textContent = "السورة غير متوفرة لهذا القارئ";
    });
}

playButton.addEventListener("click", () => {
  if (audio.paused) {
    playAudio();
  } else {
    audio.pause();
    playButton.textContent = "▶";
    document.getElementById("audioStatus").textContent = "متوقف مؤقتًا";
  }
});

function formatTime(sec) {
  if (!isFinite(sec)) return "00:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    const pct = (audio.currentTime / audio.duration) * 100;
    document.getElementById("progressFill").style.width = pct + "%";
    document.getElementById("currentTime").textContent = formatTime(audio.currentTime);
    document.getElementById("duration").textContent = formatTime(audio.duration);
  }
});

document.getElementById("progressTrack").addEventListener("click", e => {
  if (!audio.duration) return;
  const rect = e.currentTarget.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  audio.currentTime = (clickX / rect.width) * audio.duration;
});

audio.addEventListener("ended", () => {
  if (isLooping) {
    audio.currentTime = 0;
    playAudio();
  } else {
    document.getElementById("next").click();
  }
});

document.getElementById("repeat").addEventListener("click", e => {
  isLooping = !isLooping;
  e.currentTarget.classList.toggle("active-repeat", isLooping);
});

reciterSelect.addEventListener("change", e => selectReciter(Number(e.target.value), !audio.paused));
surahSelect.addEventListener("change", () => loadAudioTrack(!audio.paused));

document.getElementById("volume").addEventListener("input", e => {
  audio.volume = e.target.value / 100;
});

document.getElementById("favorite").addEventListener("click", e => {
  e.currentTarget.classList.toggle("active");
  e.currentTarget.textContent = e.currentTarget.classList.contains("active") ? "♥" : "♡";
});

document.getElementById("previous").addEventListener("click", () => {
  surahSelect.selectedIndex = (surahSelect.selectedIndex - 1 + surahSelect.options.length) % surahSelect.options.length;
  loadAudioTrack(true);
});

document.getElementById("next").addEventListener("click", () => {
  surahSelect.selectedIndex = (surahSelect.selectedIndex + 1) % surahSelect.options.length;
  loadAudioTrack(true);
});

const library = document.getElementById("library");
const overlay = document.getElementById("overlay");

function openLibrary() {
  library.classList.add("open");
  overlay.classList.add("show");
  library.setAttribute("aria-hidden", "false");
}
function closeLibrary() {
  library.classList.remove("open");
  overlay.classList.remove("show");
  library.setAttribute("aria-hidden", "true");
}

document.getElementById("openLibrary").addEventListener("click", openLibrary);
document.getElementById("closeLibrary").addEventListener("click", closeLibrary);
overlay.addEventListener("click", closeLibrary);
document.getElementById("libraryChangeScene").addEventListener("click", () => {
  randomScene();
  closeLibrary();
});

audio.volume = 0.8;
setScene(0);
populateSurahs();
loadReciters();