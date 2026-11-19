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

const knownReciterPhotos = {
  "الحصري": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Mahmoud_Khalil_Al-Hussary.jpg/440px-Mahmoud_Khalil_Al-Hussary.jpg",
  "المنشاوي": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Mohamed_Siddiq_El-Minshawi.jpg/440px-Mohamed_Siddiq_El-Minshawi.jpg",
  "عبد الباسط": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Abdul_Basit_%27Abd_us-Samad.jpg/440px-Abdul_Basit_%27Abd_us-Samad.jpg",
  "العفاسي": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Mishary_Rashid_Alafasy.jpg/440px-Mishary_Rashid_Alafasy.jpg",
  "السديس": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Abdul_Rahman_Al-Sudais.jpg/440px-Abdul_Rahman_Al-Sudais.jpg",
  "الشريم": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Saud_Al-Shuraim.jpg/440px-Saud_Al-Shuraim.jpg",
  "المعيقلي": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Maher_Al_Mueaqly.jpg/440px-Maher_Al_Mueaqly.jpg",
  "الطبلاوي": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mohamed_Mahmoud_Al-Tablawi.jpg/440px-Mohamed_Mahmoud_Al-Tablawi.jpg",
  "البنا": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Mahmoud_Ali_Al-Banna.jpg/440px-Mahmoud_Ali_Al-Banna.jpg",
  "مصطفى إسماعيل": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Mustafa_Ismail.jpg/440px-Mustafa_Ismail.jpg"
};

function getReciterImage(name) {
  for (const key in knownReciterPhotos) {
    if (name.includes(key)) return knownReciterPhotos[key];
  }
  const cleanName = name.replace(/الشيخ|القارئ/g, "").trim();
  const initials = cleanName.split(" ").slice(0, 2).map(w => w[0] || "").join(" ");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#17382e"/>
        <stop offset="100%" stop-color="#091713"/>
      </linearGradient>
    </defs>
    <rect width="200" height="200" fill="url(#g)"/>
    <circle cx="100" cy="100" r="88" fill="none" stroke="#d8c18a" stroke-opacity="0.35" stroke-width="2"/>
    <text x="100" y="114" font-family="Cairo, Arial, sans-serif" font-size="54" font-weight="bold" fill="#d8c18a" text-anchor="middle">${initials}</text>
  </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

let allReciters = [];
let currentReciter = null;
let currentSurah = 1;
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
  try {
    const res = await fetch("https://www.mp3quran.net/api/v3/reciters?language=ar");
    const data = await res.json();

    const extracted = [];
    data.reciters.forEach(r => {
      if (r.moshaf && r.moshaf.length > 0) {
        const m = r.moshaf[0];
        extracted.push({
          id: r.id,
          name: r.name,
          riwaya: m.name || "حفص عن عاصم",
          server: m.server,
          surahList: m.surah_list ? m.surah_list.split(",").map(Number) : [],
          photo: getReciterImage(r.name)
        });
      }
    });

    const priorityNames = ["الحصري", "المنشاوي", "عبد الباسط", "العفاسي", "المعيقلي", "السديس", "الشريم", "ياسر الدوسري", "ناصر القطامي", "فارس عباد"];
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
    allReciters = [
      { id: 1, name: "محمود خليل الحصري", riwaya: "حفص عن عاصم", server: "https://server13.mp3quran.net/husr/", photo: getReciterImage("الحصري") },
      { id: 2, name: "محمد صديق المنشاوي", riwaya: "حفص عن عاصم", server: "https://server10.mp3quran.net/minsh/", photo: getReciterImage("المنشاوي") },
      { id: 3, name: "عبد الباسط عبد الصمد", riwaya: "حفص عن عاصم", server: "https://server7.mp3quran.net/basit/", photo: getReciterImage("عبد الباسط") },
      { id: 4, name: "مشاري راشد العفاسي", riwaya: "حفص عن عاصم", server: "https://server8.mp3quran.net/afs/", photo: getReciterImage("العفاسي") },
      { id: 5, name: "ماهر المعيقلي", riwaya: "حفص عن عاصم", server: "https://server12.mp3quran.net/maher/", photo: getReciterImage("المعيقلي") }
    ];
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
  grid.innerHTML = list.map(r => {
    const originalIndex = allReciters.indexOf(r);
    const isActive = currentReciter && currentReciter.id === r.id ? "active" : "";
    return `
      <button class="reciter-card ${isActive}" data-index="${originalIndex}">
        <img src="${r.photo}" alt="${r.name}" loading="lazy" onerror="this.src='${getReciterImage(r.name)}'">
        <strong>${r.name}</strong>
        <span>${r.riwaya}</span>
      </button>
    `;
  }).join("");

  grid.querySelectorAll(".reciter-card").forEach(card => {
    card.addEventListener("click", () => {
      const idx = Number(card.dataset.index);
      reciterSelect.value = idx;
      selectReciter(idx, true);
      closeLibrary();
    });
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
  reciterPhoto.src = currentReciter.photo;
  reciterPhoto.onerror = () => {
    reciterPhoto.src = getReciterImage(currentReciter.name);
  };

  document.querySelectorAll(".reciter-card").forEach(c => {
    c.classList.toggle("active", Number(c.dataset.index) === index);
  });

  loadAudioTrack(autoPlay);
}

function loadAudioTrack(autoPlay = false) {
  if (!currentReciter) return;
  const surahNum = Number(surahSelect.value);
  currentSurah = surahNum;

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