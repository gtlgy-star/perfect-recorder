const LOCAL_SHORT_SONGS = [
  {
    songId: "HAKGYOJONG",
    title: "학교종",
    bpm: 84,
    timeSignature: "4/4",
    recorderImage: "",
    notation: "G5/1 G5/1 A5/1 A5/1 G5/1 G5/1 E5/2 G5/1 G5/1 E5/1 E5/1 D5/3 R/1 G5/1 G5/1 A5/1 A5/1 G5/1 G5/1 E5/2 G5/1 E5/1 D5/1 E5/1 C5/3 R/1"
  },
  {
    songId: "SAME_SAME",
    title: "똑같아요",
    bpm: 90,
    timeSignature: "3/4",
    recorderImage: "",
    notation: "C5/1 E5/1 G5/1 C5/1 E5/1 G5/1 A5/1 A5/1 A5/1 G5/2 R/1 F5/1 F5/1 F5/1 E5/1 E5/1 E5/1 D5/1 D5/1 D5/1 C5/2 R/1"
  },
  {
    songId: "ODE",
    title: "환희의 송가",
    bpm: 92,
    timeSignature: "4/4",
    recorderImage: "",
    notation: "E5/1 E5/1 F5/1 G5/1 G5/1 F5/1 E5/1 D5/1 C5/1 C5/1 D5/1 E5/1 E5/1 D5/1 D5/2 E5/1 E5/1 F5/1 G5/1 G5/1 F5/1 E5/1 D5/1 C5/1 C5/1 D5/1 E5/1 D5/1 C5/1 C5/2"
  },
  {
    songId: "JAGEUNBYEOL",
    title: "작은별",
    bpm: 90,
    timeSignature: "4/4",
    recorderImage: "",
    notation: "C5/1 C5/1 G5/1 G5/1 A5/1 A5/1 G5/2 F5/1 F5/1 E5/1 E5/1 D5/1 D5/1 C5/2 G5/1 G5/1 F5/1 F5/1 E5/1 E5/1 D5/2 G5/1 G5/1 F5/1 F5/1 E5/1 E5/1 D5/2 C5/1 C5/1 G5/1 G5/1 A5/1 A5/1 G5/2 F5/1 F5/1 E5/1 E5/1 D5/1 D5/1 C5/2"
  },
  {
    songId: "NABIYA",
    title: "나비야",
    bpm: 88,
    timeSignature: "4/4",
    recorderImage: "",
    notation: "G5/1 E5/1 E5/2 F5/1 D5/1 D5/2 C5/1 D5/1 E5/1 F5/1 G5/1 G5/1 G5/2 G5/1 E5/1 E5/1 E5/1 F5/1 D5/1 D5/2 C5/1 E5/1 G5/1 G5/1 E5/1 E5/1 E5/2 D5/1 D5/1 D5/1 D5/1 D5/1 E5/1 F5/2 E5/1 E5/1 E5/1 E5/1 E5/1 F5/1 G5/2 G5/1 E5/1 E5/2 F5/1 D5/1 D5/2 C5/1 E5/1 G5/1 G5/1 E5/1 E5/1 E5/2"
  },
  {
    songId: "TONGTONG",
    title: "통통통통",
    bpm: 90,
    timeSignature: "4/4",
    recorderImage: "",
    notation: "C5/1 C5/1 C5/1 C5/1 C5/0.5 D5/0.5 E5/0.5 D5/0.5 C5/1 R/1 D5/1 D5/1 D5/1 D5/1 D5/0.5 E5/0.5 F5/0.5 E5/0.5 D5/1 R/1 E5/1 E5/1 E5/1 E5/1 E5/0.5 F5/0.5 G5/0.5 F5/0.5 E5/1 R/1 F5/1 F5/1 F5/1 F5/1 F5/0.5 E5/0.5 D5/0.5 E5/0.5 F5/1 R/1 G5/1 G5/1 G5/1 G5/1 G5/0.5 F5/0.5 E5/0.5 F5/0.5 G5/1 R/1 G5/0.5 F5/0.5 E5/0.5 F5/0.5 G5/0.5 F5/0.5 E5/0.5 F5/0.5 G5/0.5 F5/0.5 E5/0.5 D5/0.5 C5/1 R/1"
  },
  {
    songId: "DRAGONFLY",
    title: "잠자리",
    bpm: 90,
    timeSignature: "4/4",
    recorderImage: "",
    notation: "E5/1 C5/0.5 D5/0.5 E5/1 G5/1 D5/1 D5/1 D5/1 R/1 E5/1 C5/0.5 D5/0.5 E5/1 G5/1 A5/1 A5/1 A5/2 C6/2 B5/2 A5/2 G5/2 C6/2 B5/2 A5/2 G5/2 E5/1 C5/0.5 D5/0.5 E5/1 G5/1 D5/1 D5/1 D5/2 E5/1 C5/0.5 D5/0.5 E5/1 G5/1 A5/1 B5/1 C6/2 R/2"
  },
  {
    songId: "HOMETOWN_SPRING",
    title: "고향의 봄",
    bpm: 90,
    timeSignature: "4/4",
    recorderImage: "",
    notation: "G5/1 G5/1 E5/0.5 F5/0.5 G5/1 A5/1 A5/1 G5/2 G5/1 C6/1 E6/1 D6/0.5 C6/0.5 D6/3 R/1 E6/1 E6/1 D6/1 D6/1 C6/1 D6/0.5 C6/0.5 A5/2 G5/1 G5/1 G5/1 E5/0.5 D5/0.5 C5/3 R/1 D5/1 D5/1 E5/1 C5/1 D5/2 E5/1 G5/1 A5/1 C6/1 E6/1 D6/0.5 C6/0.5 D6/3 R/1 E6/1 E6/1 D6/1 D6/1 C6/1 D6/0.5 C6/0.5 A5/1 A5/1 G5/1 G5/1 G5/1 E5/0.5 D5/0.5 C5/3 R/1"
  }
];

function getLocalShortSongs() {
  return LOCAL_SHORT_SONGS.map(song => ({ ...song }));
}

const TEXTBOOK_SONGS_BY_GRADE = {
  "3": [
    { songId: "TB3_CUCKOO", title: "뻐꾸기", bpm: 84, timeSignature: "3/4", notation: "D6/1 B5/1 R/1 D6/1 B5/1 R/1 A5/1 G5/1 A5/1 G5/2 R/1 A5/1 A5/1 B5/1 C6/2 A5/1 B5/1 B5/1 C6/1 D6/2 B5/1 D6/2 B5/1 D6/2 B5/1 C6/1 B5/1 A5/1 G5/2 R/1" },
    { songId: "TB3_MORNING", title: "아침", bpm: 88, timeSignature: "3/4", notation: "B5/1 B5/1 A5/1 G5/2 R/1 B5/1 B5/1 A5/1 G5/2 R/1 B5/1 C6/1 D6/1 D6/1 C6/0.5 B5/0.5 C6/1 A5/1 B5/1 C6/1 C6/1 B5/0.5 A5/0.5 b5/1 b/1 b/1 c6/1 d6/2 R/1 B5/1 B5/1 a/1 g/2 r/1" },
    { songId: "TB3_RAIN", title: "구슬비", bpm: 88, timeSignature: "2/4", notation: "E5/0.5 G5/0.5 G5/0.5 F5/0.5 E5/0.5 G5/0.5 G5/0.5 F5/0.5 E5/1 G5/1 F5/1.5 R/0.5 D5/0.5 F5/0.5 F5/0.5 E5/0.5 D5/0.5 F5/0.5 F5/0.5 E5/0.5 D5/1 F5/1 E5/1.5 R/0.5 C5/0.5 C5/0.5 E5/0.5 G5/0.5 C6/1 A5/1 G5/0.5 G5/0.5 A5/1 G5/1.5 R/0.5 E5/0.5 G5/0.5 G5/0.5 F5/0.5 E5/0.5 G5/0.5 G5/0.5 F5/0.5 E5/1 D5/1 C5/1.5 R/0.5" },
    { songId: "TB3_PLANE", title: "비행기", bpm: 96, timeSignature: "4/4", notation: "B5/1 A5/1 G5/1 A5/1 B5/1 B5/1 B5/2 A5/1 A5/1 A5/2 B5/1 B5/1 B5/2 B5/1 A5/1 G5/1 A5/1 B5/1 B5/1 B5/2 A5/1 A5/1 B5/1 A5/1 G5/2" },
    { songId: "TB3_AUTUMN", title: "가을길", bpm: 100, timeSignature: "4/4", notation: "E5/1 E5/0.5 E5/0.5 E5/1 F5/0.5 G5/0.5 A5/1 G5/0.5 F5/0.5 E5/1 R/1 G5/1 G5/0.5 G5/0.5 G5/1 A5/0.5 B5/0.5 C6/1 B5/0.5 A5/0.5 G5/1 R/1 E5/1 E5/0.5 E5/0.5 E5/1 F5/0.5 G5/0.5 A5/1 G5/0.5 F5/0.5 E5/1 R/1 A5/1 C6/1 B5/1 D6/1 C6/1 C6/1 C6/1 R/1 A5/1 C6/0.5 C6/0.5 C6/1 R/1 A5/1 C6/0.5 C6/0.5 C6/1 R/1 A5/1 C6/0.5 C6/0.5 C6/1 C6/1 C6/1 B5/0.5 A5/0.5 G5/1 F5/1 E5/1 E5/0.5 E5/0.5 E5/1 F5/0.5 G5/0.5 A5/1 G5/0.5 F5/0.5 E5/1 R/1 A5/1 C6/1 B5/1 D6/1 C6/1 C6/1 C6/1 R/1" },
    { songId: "TB3_SPIDER", title: "거미가 줄을 타고", bpm: 110, timeSignature: "4/4", keySignature: "C", notation: "C5/1 C5/0.5 D5/0.5 E5/0.5 E5/0.5 E5/0.5 E5/0.5 D5/0.5 C5/0.5 D5/0.5 E5/0.5 C5/2 C5/1 C5/0.5 D5/0.5 E5/0.5 E5/0.5 E5/0.5 E5/0.5 D5/0.5 C5/0.5 D5/0.5 E5/0.5 C5/2 E5/1 E5/0.5 F5/0.5 G5/1 G5/1 F5/0.5 E5/0.5 F5/0.5 G5/0.5 E5/2 C5/1 C5/0.5 D5/0.5 E5/1 E5/1 D5/0.5 C5/0.5 D5/0.5 E5/0.5 C5/2 C5/1 C5/0.5 D5/0.5 E5/0.5 E5/0.5 E5/0.5 E5/0.5 D5/0.5 C5/0.5 D5/0.5 E5/0.5 C5/2 C5/1 C5/0.5 D5/0.5 E5/0.5 E5/0.5 E5/0.5 E5/0.5 D5/0.5 C5/0.5 D5/0.5 E5/0.5 C5/2" },
    { songId: "TB3_LITTLE_BEE", title: "꼬마벌", bpm: 90, timeSignature: "4/4", keySignature: "C", notation: "G5/2 F5/2 E5/3 R/1 D5/1 E5/1 F5/1 D5/1 C5/3 R/1 E5/1 F5/1 G5/1 E5/1 D5/1 E5/1 F5/1 D5/1 E5/1 F5/1 G5/1 E5/1 D5/1 E5/1 F5/1 D5/1 G5/2 F5/2 E5/3 R/1 D5/1 E5/1 F5/1 D5/1 C5/3 R/1" },
    { songId: "TB3_TWINKLE", title: "작은 별", bpm: 90, timeSignature: "4/4", keySignature: "C", notation: "C5/1 C5/1 G5/1 G5/1 A5/1 A5/1 G5/2 F5/1 F5/1 E5/1 E5/1 D5/1 D5/1 C5/2 G5/1 G5/1 F5/1 F5/1 E5/1 E5/1 D5/2 G5/1 G5/1 F5/1 F5/1 E5/1 E5/1 D5/2 C5/1 C5/1 G5/1 G5/1 A5/1 A5/1 G5/2 F5/1 F5/1 E5/1 E5/1 D5/1 D5/1 C5/2" }
  ],
  "4": [
    { songId: "HAPPY_BIRTHDAY", title: "생일 축하합니다", bpm: 80, timeSignature: "3/4", keySignature: "F", notation: "c/8. c/16 | d/4 c/4 f/4 | e/2 c/8. c/16 | d/4 c/4 g/4 | f/2 c/8. c/16 | c6/4 a/4 f/4 | e/4 d/4 b/8. b/16 | a/4 f/4 g/4 | f/2 r/4" },
    { songId: "TB4_MUSIC_FOREVER", title: "음악은 영원히", bpm: 96, timeSignature: "3/4", keySignature: "F", notation: "a/4 a/4 a/4 | g/4. a/8 b/4 | c/4 d/4 e/4 | f/2. | c6/4 c6/4 c6/4 | b/4. c6/8 d6/4 | b/4 b/4 b/4 | a/4. b/8 c6/4 | a/4 a/4 a/4 | g/4. a/8 b/4 | c/4 d/4 e/4 | f/2." },
    { songId: "TB4_ALWAYS_WITH_ME", title: "언제나 몇 번이라도", bpm: 92, timeSignature: "3/4", keySignature: "F", notation: "r/4 r/4 f/8 g/8 | a/8 f/8 c6/4. a/8 | g/4 c6/4 g/4 | f/8 d/8 <a/4 a/8> f/8 | e/2 f/8 e/8 | d/4 e/4 f/8 g/8 | c/4 f/4 g/8 a/8 | b/4 b/8 a/8 g/8 f/8 | g/2 f/8 g/8 | a/8 f/8 c6/4. a/8 | g/4 c6/4 g/4 | f/8 d/8 d/4 e/8 f/8 | c/2 c/8 c/8 | d/4 e/4 f/8 g/8 | c/4 f/4 g/8 a/8 | b/4 b/8 a/8 g/8 f/8 | <f/2. | f/4> r/4 a/8 b/8 | c6/4 c6/4 c6/4 | c6/4 c6/8 d6/8 c6/8 b/8 | a/4 a/4 a/4 | a/4 a/8 b/8 a/8 g/8 | f/4 f/4 f/8 e/8 | d/4 e/4 e/8 f/8 | g/4 g/8 a/8 a/8 f/8 | g/2 a/8 b/8 | c6/4 c6/4 c6/4 | c6/4 c6/8 d6/8 c6/8 b/8 | a/4 a/4 a/4 | a/8 b/8 a/8 g/8 f/8 e/8 | d/4 d/8 e/8 f/8 g/8 | c/4 f/4 g/8 a/8 | g/4. g/8 g/8 f/8 | <f/2. | f/4> r/4 f/8 g/8 | a/8 f/8 <c6/4 c6/8> a/8 | g/4 c6/4 g/4 | f/8 d/8 a/4. f/8 | <e/4 e/4> f/8 e/8" },
    { songId: "TB4_SMALL_WORLD", title: "작은 세상", bpm: 100, timeSignature: "4/4", notation: "r/2 r/4 e/8 f/8 | g/4 e6/4 c6/4 d6/8 c6/8 | c6/4 b/4 b/4 d/8 e/8 | f/4 d6/4 b/4 c6/8 b/8 | a/4 g/4 g/4 e/8 f/8 | g/4 c6/8 d6/8 e6/4 d6/8 c6/8 | a/4 d6/8 e6/8 f6/4 e6/8 d6/8 | g/4 f6/4 e6/4 d6/4 | c6/2. r/4 | c6/4. c6/8 e6/4 c6/4 | d6/4. d6/8 d6/2 | d6/4. d6/8 f6/4 d6/4 | e6/4. e6/8 e6/2 | e6/4. e6/8 g6/4 e6/4 | f6/4. f6/8 f6/4 e6/8 d6/8 | g/4 f6/4 e6/4 d6/4 | c6/2. r/4" },
    { songId: "TB4_MOZART_SONATA", title: "모차르트 소나타", bpm: 108, timeSignature: "3/4", keySignature: "G", notation: "b/4. c6/8 b/4 | d6/2 d6/2 | a/4. b/8 a/4 | c6/2 c6/4 | g/2 g/4 | a/2 a/4 | b/2 d6/8 c6/8 | b/2 a/4 | b/4. c6/8 b/4 | d6/2 d6/4 | a/4. b/8 a/4 | c6/2 c6/4 | g/2 a/4 | b/2 c6/4 | b/2 a/4 | g/2 r/4" },
    { songId: "TB4_VROOM_VROOM", title: "부릉부릉 부르릉", bpm: 112, timeSignature: "4/4", notation: "e/8 e/8 g/8 g/8 f/8 f/8 a/8 a/8 | g/8 g/8 c6/8 c6/8 f/8. g/16 a/8 <g/8 | g/2> g/8 g/8 g/8 g/8 | a/4. <g/8 g/4> r/4 | e/8 e/8 g/8 g/8 f/8 f/8 a/8 a/8 | g/8 g/8 c6/8 c6/8 f/8. g/16 a/8 <g/8 | g/2> g/8 g/8 g/8 g/8 | a/4. <g/8 g/4> g/4 | a/4 a/2 a/4 | b/2 b/2 | c6/0 | c6/2 r/2 | e/4 e/4 g/4 g/4 | (f/8. e/16) f/8 <d/8 d/2> | e/4 e/4 g/4 g/4 | (a/8. g/16) a/8 <g/8 g/2> | e/4 e/4 g/4 g/4 | f/4. <d/8 d/4> g/4 | a/4 a/4 b/4. <c6/8 | c6/2.> r/4" },
    { songId: "TB4_DO_YOU_WANT_TO_BUILD_A_SNOWMAN", title: "같이 눈사람 만들래", bpm: 108, timeSignature: "4/4", keySignature: "F", notation: "r/4 f/8 f/8 f/8 c/8 f/8 a/8 | g/4 a/2. | r/4 r/8 f/8 f/8 c/8 f/8 a/8 | g/0 | r/4 r/8 f/8 f/8 c/8 f/8 a/8 | b/8 a/8 f/4 r/8 c/8 b/8 a/8 | f/4 r/8 f/8 f/8 c/8 f/8 a/8 | c6/0 | r/4 r/8 c6/8 c6/8 b/8 a/8 b/8 | c6/8 <f/8 f/4> r/4 r/8 f/8 | g/4 a/8 <f/8 f/4> r/8 g/8 | a/4 g/8 f/8 g/4 a/4 | d6/0 | r/4 f/8 f/8 f/8 c/8 f/8 a/8 | g/4 a/2. | r/8 f/8 f/8 f/8 f/8 c/8 f/8 a/8 | g/4 f/2. | r/2 f/4 e/4 | f/0" },
    { songId: "TB4_DREAM", title: "꿈", bpm: 96, timeSignature: "3/4", keySignature: "F", notation: "c/4 | c/2 e/4 | d/4 r/4 c/4 | c/2 e/4 | d/4 r/4 c/4 | c/4 g/4 e/4 | f/4 g/4 r/8 a/8 | a/2 b/4 | g/4 r/4 c/4 | c/2 e/4 | d/4 r/4 c/4 | c/2 e/4 | d/4 r/4 c/4 | c/4 g/4 e/4 | f/4 g/4 a/4 | a/2 b/4 | g/4 r/4 a/8 b/8 | c6/2 c6/4 | c6/4 b/4 a/4 | <b/2. | b/4> r/4 g/8 a/8 | b/2 b/4 | b/4 a/4 g/4 | <a/2. | a/4> r/4 a/8 b/8 | c6/2 c6/4 | c6/4 b/4 a/4 | d6/2 r/4 | d6/4 c6/4 b/4 | c6/2 r/4 | c6/4 b/4 a/4 | b/2 r/4 | b/4 a/4 g/4 | <f/2. | f/4> r/4" },
  ],
  "5": [
    { songId: "TB5_WINDY_PLACE", title: "바람이 불어오는 곳", bpm: 95, timeSignature: "4/4", keySignature: "F", notation: "a/8 c6/4 c6/8 d6/8 c6/16 <b/16 b/8> a/8 | f/2. r/4 | d/8 f/4. g/4 f/8 g/8 | a/2. r/4 | a/8 c6/4 c6/8 d6/8 c6/16 <b/16 b/8> a/8 | f/2. r/4 | d/8 f/4. g/4 f/8 e/8 | f/2. r/4 | d/8 f/16 <f/16 f/8> f/8 g/4 f/8 g/8 | a/4 c6/4 d6/2 | d6/8 d6/16 <d6/16 d6/4> c6/8 b/16 <a/16 a/8> g/8 | a/2. r/4 | a/8 c6/4 c6/8 d6/8 c6/16 <b/16 b/8> a/8 | f/2. r/4 | d/8 f/4 f/8 g/4 f/8 e/8 | f/2. r/4 | a/8 c6/4 c6/8 d6/8 c6/16 <b/16 b/8> a/8 | f/2. r/4 | d/8 f/4. g/4 f/8 g/8 | a/2. r/4 | a/8 c6/4 c6/8 d6/8 c6/16 <b/16 b/8> a/8 | f/2. r/4 | d/8 f/4 f/8 g/4 f/8 e/8 | f/2. r/4 | d/8 f/4 f/8 g/4 f/8 g/8 | a/4 c6/4 d6/2 | d6/8 d6/16 <d6/16 d6/4> c6/8 b/16 <a/16 a/8> g/8 | a/2. r/4 | a/8 <c6/4 c6/8> b/8 a/4 g/8 | f/2. r/4 | d/8 f/4 f/8 g/4 f/8 e/8 | f/2. r/4" },
    { songId: "TB5_TRY_EVERYTHING", title: "Try Everything", bpm: 108, timeSignature: "4/4", keySignature: "F", notation: "r/2 r/8 f/8 f/8 g/8 | a/4 f/8 f/8 f/8 f/8 <b/4 | b/4> a/8 b/8 c6/8. <a/16 a/8> <a/8 | a/4> a/8 a/8 c6/8 c6/8 <c6/4 | c6/4> r/8 f/8 f/8 g/8 f/8 b/8 | a/4. r/8 a/8 a/8 a/8 a/8 | b/8 b/4 r/8 b/8 b/8 b/8 a/8 | a/8 a/4 e/8 e/8 f/4. | r/2 r/8 f/8 f/8 g/8 | a/4 f/8 f/8 f/8 f/8 <b/4 | b/4> a/8 b/8 c6/8. <a/16 a/8> <a/8 | a/4> a/8 a/8 c6/8 c6/8 <c6/4 | c6/4> r/8 f/8 f/8 g/8 f/8 b/8 | a/4. r/8 a/8 a/8 a/8 a/8 | b/8 b/4 r/8 b/8 b/8 b/8 a/8 | a/8 a/4 e/8 e/8 f/4. | r/0 | a/8. <a/16 a/8> <a/8 a/8> a/8 b/4 | r/4 f6/8 d6/8 d6/8 d6/4 c6/8 | a/8. <a/16 a/8> <a/8 a/8> a/8 g/4 |  r/4 f6/8 e6/8 e6/8 e6/4 f6/8 | a/8. <a/16 a/8> <a/8 a/8> a/8 b/4 | r/4 f6/8 d6/8 d6/8 d6/4 c6/8 | a/8. <a/16 a/8> <g/8 g/8> g/8 <f/4 | f/4> r/4 r/2" },
    { songId: "TB5_YOU_RAISE_ME_UP", title: "You Raise Me Up", bpm: 72, timeSignature: "4/4", keySignature: "F", notation: "c/8 c/8 f/8 | a/4. f/8 g/4 f/8 d/8 | c/8 <f/8 f/4> r/8 e/8 f/8 a/8 | c6/4. f/8 d6/4 c6/8 a/8 | g/2 r/8 c6/8 d6/8 e6/8 | f6/4. e6/8 e6/8 d6/8 c6/8 b/8 | c6/4 a/4 r/8 c/8 c6/8 b/8 | a/4. a/8 a/8 g/8 f/8 e/8 | f/2 r/8 c6/8 d6/8 e6/8 | f6/4. e6/8 e6/8 d6/8 c6/8 b/8 | c6/4 a/4 r/8 c6/8 g6/8. f6/16 | f6/4. e6/8 e6/8 d6/8 c6/8 b/8 | c6/2 r/4 c6/8 e6/8 | f6/4. e6/8 e6/8 d6/8 c6/8 b/8 | c6/4 f6/4 r/8 c/8 c6/8 b/8 | a/4. a/8 a/8 g/8 f/8 e/8 | f/2 r/8" },
    { songId: "TB5_ROAD_TO_SCHOOL", title: "학교 가는 길", bpm: 104, timeSignature: "4/4", keySignature: "C", notation: "g/4. g/8 g/8 f/8 e/8 f/8 | g/2. b/8 c6/8 | a/4 b/8 c6/8 g/4 b/8 c6/8 | f/4 f/8 e/8 d/4 e/8 f/8 | g/4 g/4 c/4 d/8 e/8 | f/8 e/8 d/8 c/8 d/4 e/8 f/8 | g/4 b/4 b/8 a/8 g/8 e/8 | e/4 d/8 c/8 d/2 | g/4. g/8 g/8 f/8 e/8 f/8 | g/2. b/8 c6/8 | a/4 b/8 c6/8 g/4 b/8 c6/8 | f/4 f/8 e/8 d/4 e/8 f/8 | g/4 g/4 c/4 d/8 e/8 | f/8 e/8 d/8 c/8 d/4 e/8 f/8 | g/4 b/4 b/8 a/8 g/8 e/8 | e/4 d/8 c/8 d/2 | c6/4. c6/8 b/4 a/4 | a/4 g/2 g/4 | g/4 g/4 b/4 c6/4 | a/2. a/4 | a/4 a/4 e6/4 d6/8 c6/8 | e6/4 c6/4 c6/4 g/4 | a/2 b/4 c6/4 | d6/2. r/4 | c6/4. c6/8 b/4 a/4 | a/4 g/2 g/4 | g/4 g/4 b/4 c6/4 | a/2. a/4 | a/4 a/4 e6/4 d6/8 c6/8 | e6/4 c6/4 c6/4 g/4 | a/4. a/8 b/4. b/8 | c6/2. r/4" },
    { songId: "TB5_COLORS_OF_THE_WIND_ANIME", title: "바람의 빛깔", bpm: 108, timeSignature: "4/4", keySignature: "F", notation: "c/8 | a/8 c6/8 c6/8 a/8 g/4 f/8 | g/8 <d/4. d/4> r/8 c/8 | a/8 c6/8 c6/8 a/8 a/8 g/4 f/8 | a/2. r/8 c6/8 | d6/8 c6/8 c6/8 a/8 a/8 g/4 f/8 | g/8 <d/4. d/4> f/8 a/8 | g/8 f/4 a/8 g/8 f/8 d/8 f/8 | f/2. a/8 c6/8 | f6/8 e6/8 e6/8 d6/8 d6/8 c6/4 a/16 g/16 | a/8 c6/4 <d6/8 d6/4> r/8 d6/8 | f6/8 e6/8 e6/8 d6/8 d6/8 c6/8 c6/8 a/8 | c6/2. a/8 c6/8 | f6/8 e6/8 e6/8 d6/8 d6/8 c6/4 c6/16 d6/16 | c6/8 <f/4. f/4> d/8 f/8 | g/8 a/8 a/8 g/8 g/8 f/8 f/8 d/8 | g/2. d/8 f/8 | g/8 a/8 a/8 g/8 g/8 f/8 d/8 f/8 | f/2. r/8" },
    { songId: "TB5_PINOCCHIO", title: "피노키오", bpm: 108, timeSignature: "4/4", keySignature: "C", notation: "g/8 <g/4. g/2> | b/8 <a/4. a/2> | a/0 | g/2. r/4 | g/8 g/8 g/8 g/8 d6/4 c6/4 | e/8 e/8 e/8 e/8 b/4 a/4 | d/8 d/8 d/8 d/8 a/4. a/8 | g/2. r/4 | g/8 g/8 g/8 g/8 d6/4 c6/4 | e/8 e/8 e/8 e/8 b/4 a/4 | d/8 d/8 d/8 d/8 a/4. a/8 | g/4 r/8 g/8 g/8 f/8 e/8 f/8 | g/4 g/4 a/4 b/4 | d6/8 c6/8 d6/8 c6/8 d6/8 c6/8 d6/8 c6/8 | b/4 a/8 <a/8 a/2> | b/8 a/8 b/8 a/8 b/8 a/8 b/8 a/8 | g/4 f/8 <f/8 f/2> | g/8 f/8 g/8 f/8 g/8 f/8 g/8 f/8 | e/4 d/8 <d/8 d/4> d/8 f/8 | e/4 d/4 c/8 d/4 e/8 | r/4 g/4 a/4 b/4 | d6/8 c6/8 d6/8 c6/8 d6/8 c6/8 d6/8 c6/8 | b/4 a/8 <a/8 a/2> | b/8 a/8 b/8 a/8 b/8 a/8 b/8 a/8 | g/4 f/8 <f/8 f/2> | g/8 f/8 g/8 f/8 g/8 f/8 g/8 f/8 | e/4 d/8 <d/8 d/4> d/8 f/8 | e/4 d/4 c/8 d/4 <c/8 | c/4> r/4 r/2" },
    { songId: "TB5_WINTER_TREE", title: "겨울 나무", bpm: 108, timeSignature: "6/8", keySignature: "C", notation: "g/4. c6/4 b/8 | a/4 c6/8 <g/4 g/8> | c/4 d/8 e/4 a/8 | <g/4. g/4> r/8 | <e/4 e/8> a/4 c6/8 | g/4 f/8 e/4. | f/4 e/8 d/8 a/8 g/8 | <c/4. c/4> r/8 | d/4 e/8 f/4 e/8 | d/8 c/8 b4/8 a4/4. | c/4 d/8 e/4 a/8 | <g/4. g/4> r/8 | c6/4 b/8 d6/4 c6/8 | b/8 a/8 g/8 e/4. | d/8 a/8 g/8 d/8 f/8 e/8 | <c/4. c/4> r/8" },
    { songId: "TB5_SUMMER", title: "Summer", bpm: 112, timeSignature: "4/4", keySignature: "C", notation: "r/2 g/8 c6/8 d6/8 e6/8 | d6/4 c6/8 <c6/8 c6/2> | r/2 g/8 c6/8 d6/8 e6/8 | d6/4 c6/8 <d6/8 d6/8> e6/4 <e6/8 | e6/2> g/8 c6/8 d6/8 e6/8 | d6/4 c6/8 <c6/8 c6/2> | r/2 g/8 c6/8 d6/8 e6/8 | d6/4 c6/8 <d6/8 d6/8> g6/4 <e6/8 | e6/2> e6/4 f6/4 | g6/4 g6/8 <g6/8 g6/4> g6/4 | g6/4 e6/8 <c6/8 c6/4> e6/8 f6/8 | g6/4 g6/8 <g6/8 g6/4> g6/4 | g6/4 e6/8 <c6/8 c6/4> c6/8 d6/8 | e6/4 e6/8 <e6/8 e6/4> e6/4 | e6/2 d6/4 c6/4 | d6/2. r/4 | r/2 g/8 c6/8 d6/8 e6/8 | d6/4 c6/8 <c6/8 c6/2> | r/2 g/8 c6/8 d6/8 e6/8 | d6/4 c6/8 <d6/8 d6/8> e6/4 <e6/8 | e6/2> g/8 c6/8 d6/8 e6/8 | d6/4 c6/8 <c6/8 c6/2> | r/2 g/8 c6/8 d6/8 e6/8 | d6/4 c6/8 <d6/8 d6/8> g6/4 <e6/8 | e6/2> e6/4 f6/4 | g6/4 g6/8 <g6/8 g6/4> g6/4 | g6/4 e6/8 <c6/8 c6/4> e6/8 f6/8 | g6/4 g6/8 <g6/8 g6/4> g6/4 | g6/4 e6/8 <c6/8 c6/4> c6/8 d6/8 | e6/4 e6/8 <e6/8 e6/4> e6/4 | e6/2 d6/4 a/4 | c6/2. r/4" },
  
  ],
  "6": [
    { songId: "TB6_MORNING", title: "아침 햇살", bpm: 90, timeSignature: "4/4", notation: "C5/1 D5/1 G5/1 A5/1 G5/1 E5/1 C5/2" },
    { songId: "TB6_WORLD", title: "넓은 세상", bpm: 100, timeSignature: "4/4", notation: "E5/1 G5/1 A5/1 C6/1 B5/1 A5/1 G5/2" },
    { songId: "TB6_HOPE", title: "희망의 노래", bpm: 92, timeSignature: "4/4", notation: "D5/1 F5/1 A5/1 B5/1 A5/1 F5/1 D5/2" }
  ]
};

const BONUS_SONGS = [
  { songId: "BONUS_EDELWEISS", title: "에델바이스", stage: 1, bpm: 80, timeSignature: "3/4", notation: "E5/2 G5/1 | D6/3 | C6/2 G5/1 | F5/3 | E5/2 E5/1 | E5/1 F5/1 G5/1 | A5/3 | G5/3 | E5/2 G5/1 | D6/3 | C6/2 G5/1 | F5/3 | E5/2 G5/1 | G5/1 A5/1 B5/1 | C6/3 | C6/3 | D6/1 r/0.5 G5/0.5 G5/1 | B5/1 A5/1 G5/1 | E5/2 G5/1 | C6/3 | A5/2 C6/1 | D6/2 C6/1 | B5/3 | G5/3 | E5/2 G5/1 | D6/3 | C6/2 G5/1 | F5/3 | E5/2 G5/1 | G5/1 A5/1 B5/1 | C6/3 | C6/3" },
{ songId: "BONUS_RUDOLPH", title: "루돌프 사슴코", stage: 1, bpm: 112, timeSignature: "4/4", notation: "g/8 a/4 g/8 e/4 c6/4 | a/4 g/2 r/4 | g/8 a/8 g/8 a/8 g/4 c6/4 | b/2. r/4 | f/8 g/4 f/8 d/4 b/4 | a/4 g/2 r/4 | g/8 a/8 g/8 a/8 g/4 a/4 | e/2. r/4 | g/8 a/4 g/8 e/4 c6/4 | a/4 g/2 r/4 | g/8 a/8 g/8 a/8 g/4 c6/4 | b/2. r/4 | f/8 g/4 f/8 d/4 b/4 | a/4 g/2 r/4 | g/8 a/8 g/8 a/8 g/4 d6/4 | c6/2. r/4 | a/4 a/4 c6/4 a/4 | g/4 e/8 < g/8 g/2 > | f/4 a/4 g/4 f/4 | e/2. r/4 | d/4 e/4 g/4 a/4 | b/4 b/4 b/2 | c6/4 c6/4 b/4 a/4 | g/4 f/4 d/2 | g/8 a/4 g/8 e/4 c6/4 | a/4 g/2 r/4 | g/8 a/8 g/8 a/8 g/4 c6/4 | b/2. r/4 | f/8 g/4 f/8 d/4 b/4 | a/4 g/2 r/4 | g/8 a/8 g/8 a/8 g/4 d6/4 | c6/2. r/4 | f/8 g/4 f/8 d/4 b/4 | a/4 g/2 r/4 | g/8 a/8 g/8 a/8 g/4 d6/4 | c6/2. r/4" },

  { songId: "BONUS_FLOWERS", title: "모두 다 꽃이야", stage: 2, bpm: 92, timeSignature: "4/4", notation: "a/4 a/8 c/8 c/8 c/8 | f/4 f/8 f/4 r/8 | a/4 a/8 c/4 c/8 | f/4 f/8 f/4 r/8 | a/8 a/8 a/8 c6/8 c6/8 c6/8 | d6/4 d6/8 c6/4. | f/8 f/8 a/8 g/4 f/8 | f/4. r/4. | a/4 a/8 c/4 c/8 | f/4 f/8 f/4 r/8 | a/4 a/8 c/4 c/8 | f/4 f/8 f/4 r/8 | a/4 a/8 c6/4 c6/8 | d6/4 d6/8 c6/4 r/8 | f/8 f/8 a/8 g/4 f/8 | f/4. r/4. | a/4 a/8 c/8 c/8 c/8 | f/4 f/8 f/4 r/8 | a/8 a/8 a/8 c/4 c/8 | f/4 f/8 f/4 r/8 | a/4 a/8 c6/8 c6/8 c6/8 | d6/4 d6/8 c6/4. | f/8 f/8 a/8 g/4 f/8 | f/4. r/4. | a/4 a/8 c/4 c/8 | f/4 f/8 f/4 r/8 | a/4 a/8 c/4 c/8 | f/4 f/8 f/4 r/8 | a/4 a/8 c6/4 c6/8 | d6/4 d6/8 c6/4 r/8 | f/8 f/8 a/8 g/4 f/8 | f/4. r/4." },
  { songId: "Granpa", title: "할아버지의 낡은 시계", stage: 2, bpm: 70, timeSignature: "4/4", notation: "g/4 | c6/4 b/8 c6/8 d6/4 c6/8 d6/8 | e6/4 f6/8 e6/8 a/4 d6/8 d6/8 | c6/4 c6/8 c6/8 b/4 a/8 b/8 | c6/2. g/8 g/8 | c6/4 b/8 c6/8 d6/4 c6/8 d6/8 | e6/4 f6/8 e6/8 a/4 d6/8 d6/8 | c6/4 c6/8 c6/8 b/4 a/8 b/8 | c6/2. c6/8 e6/8 | g6/4 e6/8 d6/8 c6/4 b/8 c6/8 | d6/8 c6/8 b/8 a/8 g/4 c6/8 e6/8 | g6/4 e6/8 d6/8 c6/4 b/8 c6/8 | d6/2. g/8 g/8 | c6/4 r/4 d6/4 r/4 | e6/8 e6/8 f6/8 e6/8 a/4 d6/8 d6/8 | c6/4 c6/8 c6/8 b/4 a/8 b/8 | c6/2. g/8 g/8 | c6/4 g/8 g/8 a/8 a/8 g/4 | e/4 g/4 e/4 g/8 g/8 | c6/4 g/8 g/8 a/8 a/8 g/4 | e/4 g/4 e/4 g/8 g/8 | c6/4 r/4 d6/4 r/4 | e6/8 e6/8 f6/8 e6/8 a/4 d6/8 d6/8 | c6/4 c6/8 c6/8 b/4 a/8 b/8 | c6/2. r/4" },
  
  { songId: "BONUS_BALLOON", title: "풍선", stage: 3, bpm: 96, timeSignature: "4/4", notation: "" },
  { songId: "BONUS_OVER_THE_RAINBOW", title: "Over The Rainbow", stage: 3, bpm: 76, timeSignature: "4/4", notation: "c/2 c6/2 | b/4 g/8 a/8 b/4 c6/4 | c/2 a/2 | g/0 | f/2 f/2 | e/4 c/8 d/8 e/4 f/4 | d/2 d/4 e/4 | c/2. r/4 | c/2 c6/2 | b/4 g/8 a/8 b/4 c6/4 | c/2 a/2 | g/0 | f/2 f/2 | e/4 c/8 d/8 e/4 f/4 | d/2 d/4 e/4 | c/2. r/8 g/8 | e/8 g/8 e/8 g/8 e/8 g/8 e/8 g/8 | f/8 g/8 f/8 g/8 f/8 g/8 f/8 g/8 | a/2 < a/2 | a/2. > r/8 g/8 | e/8 g/8 e/8 g/8 e/8 g/8 e/8 g/8 |  f/8 g/8 f/8 g/8 f/8 g/8 f/8 g/8 | b/2 b/2 | d6/2 a/2 | c/2 c6/2 | b/4 g/8 a/8 b/4 c6/4 | c/2 a/2 | g/0 | f/2 f/2 | e/4 c/8 d/8 e/4 f/4 | d/2 d/4 e/4 | c/0" },

  { songId: "BONUS_SUMMER", title: "Summer", stage: 4, bpm: 100, timeSignature: "4/4", notation: "" },
  { songId: "BONUS_TOWN_WITH_AN_OCEAN_VIEW", title: "바다가 보이는 마을", stage: 4, bpm: 96, timeSignature: "4/4", notation: "" },

  { songId: "BONUS_ALWAYS_WITH_ME", title: "언제나 몇 번이라도", stage: 5, bpm: 84, timeSignature: "4/4", notation: "" },
  { songId: "BONUS_HES_A_PIRATE", title: "He's a Pirate", stage: 5, bpm: 120, timeSignature: "4/4", notation: "" },

  { songId: "BONUS_CANON", title: "Canon", stage: 6, bpm: 80, timeSignature: "4/4", notation: "" },
  { songId: "BONUS_MERRY_GO_ROUND_OF_LIFE", title: "인생의 회전목마", stage: 6, bpm: 88, timeSignature: "3/4", notation: "" }
];

const BONUS_GROWTH_SONGS = [];
