var BONUS_BOAT_POSITIONS = window.BONUS_BOAT_POSITIONS || {
  1: { x: 32, y: 36 },
  2: { x: 62, y: 27 },
  3: { x: 87, y: 35 },
  4: { x: 88, y: 71 },
  5: { x: 33, y: 75 },
  6: { x: 49, y: 55 }
};

window.BONUS_BOAT_POSITIONS = BONUS_BOAT_POSITIONS;

var BONUS_STAGE_INFO = window.BONUS_STAGE_INFO || {
  1: {
    name: "새싹 보물섬",
    minLevel: 1,
    maxLevel: 10
  },
  2: {
    name: "꿈빛 보물섬",
    minLevel: 11,
    maxLevel: 20
  },
  3: {
    name: "멜로디 보물섬",
    minLevel: 21,
    maxLevel: 30
  },
  4: {
    name: "스타 보물섬",
    minLevel: 31,
    maxLevel: 40
  },
  5: {
    name: "무지개 보물섬",
    minLevel: 41,
    maxLevel: 49
  },
  6: {
    name: "레전드 보물섬",
    minLevel: 50,
    maxLevel: 50
  }
};

window.BONUS_STAGE_INFO = BONUS_STAGE_INFO;

function getBonusSongList() {
  if (Array.isArray(window.BONUS_SONGS)) {
    return window.BONUS_SONGS;
  }

  if (typeof BONUS_SONGS !== "undefined" && Array.isArray(BONUS_SONGS)) {
    return BONUS_SONGS;
  }

  return [];
}

function getBonusSongById(songId) {
  return getBonusSongList().find(function(song) {
    return song.songId === songId;
  }) || null;
}

function getBonusSongsByStage(stageId) {
  const targetStage = Number(stageId);

  return getBonusSongList().filter(function(song) {
    return Number(song.stage) === targetStage;
  });
}

window.getBonusSongList = getBonusSongList;
window.getBonusSongById = getBonusSongById;
window.getBonusSongsByStage = getBonusSongsByStage;
