const APP_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzz6Q0JnDkkg5SDMKdUzPdCf3OrLI9IPeCIGrr72mzpmeN_VZlT6JcJG3bU7rl7P4E3/exec";
const SONGS_CACHE_KEY = "recorder_student_songs_cache_v2";
const SONGS_CACHE_TIME_KEY = "recorder_student_songs_cache_time_v1";
const SONGS_CACHE_MAX_AGE_MS = 1000 * 60 * 10;
let songsRefreshPromise = null;

const app = {
  user: null,
  songs: [],
  currentSong: null,

  async login(code) {
    const result = await this.api("loginByCode", { code });

    if (!result || !result.user) {
      throw new Error("로그인 응답이 올바르지 않습니다.");
    }

    this.user = result.user;
    return this.user;
  },

  async loadSongs() {
    const cached = loadSongsCache();
    if (cached.length) {
      this.songs = cached;
      const stale = isSongsCacheStale();
      const refreshPromise = stale ? this.refreshSongs() : this.refreshSongs();
      return { ok: true, songs: cached, fromCache: true, stale, refreshPromise };
    }

    try {
      return await this.refreshSongs();
    } catch (err) {
      const mock = getMockSongs();
      this.songs = mock;
      return { ok: true, songs: mock, fromMock: true };
    }
  },

  async refreshSongs({ force = false } = {}) {
    if (!force && songsRefreshPromise) {
      return songsRefreshPromise;
    }

    songsRefreshPromise = (async () => {
      try {
        const result = await this.api("getSongs", {});
        const songs = Array.isArray(result?.songs) ? result.songs : [];

        this.songs = songs;
        saveSongsCache(songs);

        return { ok: true, songs };
      } finally {
        songsRefreshPromise = null;
      }
    })();

    return songsRefreshPromise;
  },

  selectSong(songId) {
    const song = this.songs.find(s => s.songId === songId);
    this.currentSong = song;

    // ⭐ 리코더 이미지 갱신
    updateRecorderImage(song);

    return song;
  },

  async api(action, payload = {}) {
    if (!APP_SCRIPT_URL || String(APP_SCRIPT_URL).trim() === "") {
      return mockApi(action, payload);
    }

    try {
      const res = await fetch(APP_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ action, payload })
      });

      if (!res.ok) throw new Error(`서버 오류 (${res.status})`);

      const data = await res.json();
      if (data?.ok === false) {
        throw new Error(data.error || "요청 실패");
      }

      return data;
    } catch (err) {
      console.error("[API ERROR]", err);

      if (action === "getSongs") {
        const cached = loadSongsCache();
        if (cached.length) return { ok: true, songs: cached, fromCache: true };
        return { ok: true, songs: getMockSongs(), fromMock: true };
      }

      throw err;
    }
  }
};

/* =========================
   캐시
========================= */

function saveSongsCache(songs) {
  try {
    localStorage.setItem(SONGS_CACHE_KEY, JSON.stringify(songs || []));
    localStorage.setItem(SONGS_CACHE_TIME_KEY, String(Date.now()));
  } catch {}
}

function loadSongsCache() {
  try {
    const raw = localStorage.getItem(SONGS_CACHE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function getSongsCacheAgeMs() {
  try {
    const raw = localStorage.getItem(SONGS_CACHE_TIME_KEY);
    const savedAt = Number(raw);
    if (!Number.isFinite(savedAt) || savedAt <= 0) return Infinity;
    return Math.max(0, Date.now() - savedAt);
  } catch {
    return Infinity;
  }
}

function isSongsCacheStale() {
  return getSongsCacheAgeMs() > SONGS_CACHE_MAX_AGE_MS;
}

/* =========================
   mock (비상용)
========================= */

function getMockSongs() {
  return [
    {
      songId: "TEST",
      title: "테스트곡",
      recorderImage: "",
      notation: "C5/1 D5/1 E5/1 F5/1"
    }
  ];
}

function getMockSongs() {
  return [
    {
      songId: "NABIYA",
      title: "나비야",
      bpm: 88,
      timeSignature: "4/4",
      recorderImage: "",
      notation: "G5/1 E5/1 E5/1 F5/1 D5/1 D5/1 C5/2 E5/1 G5/1 G5/1 E5/1 E5/1 F5/1 D5/1 E5/2"
    },
    {
      songId: "BIHAENGGI",
      title: "비행기",
      bpm: 96,
      timeSignature: "4/4",
      recorderImage: "",
      notation: "C5/1 D5/1 E5/1 C5/1 E5/1 F5/1 G5/2 G5/1 A5/1 G5/1 F5/1 E5/1 C5/1 G5/2"
    },
    {
      songId: "HAKGYOJONG",
      title: "학교종",
      bpm: 84,
      timeSignature: "4/4",
      recorderImage: "",
      notation: "G5/1 G5/1 A5/1 G5/1 C6/1 B5/2 G5/1 G5/1 A5/1 G5/1 D6/1 C6/2"
    },
    {
      songId: "JAGEUNBYEOL",
      title: "작은별",
      bpm: 90,
      timeSignature: "4/4",
      recorderImage: "",
      notation: "C5/1 C5/1 G5/1 G5/1 A5/1 A5/1 G5/2 F5/1 F5/1 E5/1 E5/1 D5/1 D5/1 C5/2"
    }
  ];
}

function mockApi(action, payload = {}) {
  if (action === "getSongs") {
    return { ok: true, songs: getMockSongs() };
  }
  return { ok: true };
}

/* =========================
   ⭐ 리코더 UI
========================= */

// 생성
function createRecorderUI() {
  const wrap = document.querySelector(".judgeLineWrap");
  if (!wrap) return;

  if (document.getElementById("recorderImg")) return;

  const img = document.createElement("img");
  img.id = "recorderImg";
  wrap.appendChild(img);
}

// 스타일
function applyRecorderStyle() {
  const wrap = document.querySelector(".judgeLineWrap");
  const img = document.getElementById("recorderImg");

  if (!wrap || !img) return;

  wrap.style.position = "relative";

  img.style.position = "absolute";
  img.style.top = "-140px";
  img.style.left = "50%";
  img.style.transform = "translateX(-50%)";
  img.style.height = "220px";
  img.style.pointerEvents = "none";
}

// 이미지 갱신
function updateRecorderImage(song) {
  const img = document.getElementById("recorderImg");
  if (!img) return;

  if (song?.recorderImage) {
    img.src = song.recorderImage;
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
}

// 초기화
function initRecorderUI() {
  createRecorderUI();
  applyRecorderStyle();
}

/* =========================
   실행
========================= */

window.addEventListener("load", () => {
  initRecorderUI();
});

window.app = app;
