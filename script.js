// ====== lời chúc theo cung ======
// {tên} sẽ tự đổi thành tên người nhập, mỗi cung có 2 lời, web bốc ngẫu nhiên 1
const zodiac = [
  {
    name: 'Ma Kết', symbol: '♑', from: [12, 22], to: [1, 19], date: '22/12 – 19/1',
    traits: ['Kỷ luật', 'Có trách nhiệm', 'Hài hước ngầm'], color: 'Nâu be',
    wishes: [
      'Ma Kết là kiểu người có kế hoạch cho cả kế hoạch dự phòng. Tani chúc {tên} chạm tới mọi mục tiêu đã đặt ra, nhưng nhớ chừa vài ngày "không làm gì cả" nha bbi, ngày đó cũng nằm trong kế hoạch đó.',
      'Nàng Ma Kết nhìn nghiêm túc vậy chứ thân rồi mới thấy hài cực. Tani chúc {tên} mọi nỗ lực đều được đền đáp, và có thêm thật nhiều khoảnh khắc thả lỏng cười cho đã.'
    ]
  },
  {
    name: 'Bảo Bình', symbol: '♒', from: [1, 20], to: [2, 18], date: '20/1 – 18/2',
    traits: ['Sáng tạo', 'Độc lập', 'Khác biệt'], color: 'Xanh trời',
    wishes: [
      'Bảo Bình hay nghĩ ra những ý tưởng mà người khác phải mất một lúc mới hiểu, rồi gật gù khen hay. Tani chúc nàng {tên} cứ tự tin là phiên bản khác biệt của mình, và sớm có một đề tài làm cả ban trầm trồ.',
      'Đóa hồng Bảo Bình có cái đầu chứa toàn ý tưởng "không đụng hàng". Tani chúc {tên} luôn được tự do làm điều mình thích, và được gặp những người hiểu được thế giới của cổ.'
    ]
  },
  {
    name: 'Song Ngư', symbol: '♓', from: [2, 19], to: [3, 20], date: '19/2 – 20/3',
    traits: ['Mơ mộng', 'Tinh tế', 'Giàu tưởng tượng'], color: 'Tím lavender',
    wishes: [
      'Đóa hồng Song Ngư có cả một thế giới đầy màu sắc trong đầu. Tani chúc {tên} giữ được sự mơ mộng ấy, biến nó thành những điều thật xinh ngoài đời, và có thật nhiều ngày bình yên.',
      'Người đẹp Song Ngư dịu dàng mà tinh tế, ở cạnh cổ là thấy nhẹ lòng. Tani chúc {tên} năm nay được thương thật nhiều, và mọi điều nàng ấp ủ đều thành sự thật.'
    ]
  },
  {
    name: 'Bạch Dương', symbol: '♈', from: [3, 21], to: [4, 19], date: '21/3 – 19/4',
    traits: ['Nhiệt huyết', 'Dám nghĩ dám làm', 'Thẳng thắn'], color: 'Đỏ san hô',
    wishes: [
      'Bạch Dương nhà mình lúc nào cũng xung phong đầu tiên, việc gì cổ cũng làm hết mình. Tani chúc {tên} giữ được ngọn lửa đó thật lâu, nhưng nhớ chừa chút năng lượng cho bản thân nữa nha bbi.',
      'Nàng Bạch Dương nghĩ là làm, nói là xắn tay áo vô liền. Tani chúc {tên} năm nay dám thử thật nhiều thứ mới, và thứ nào bắt tay vào cũng ra kết quả xịn.'
    ]
  },
  {
    name: 'Kim Ngưu', symbol: '♉', from: [4, 20], to: [5, 20], date: '20/4 – 20/5',
    traits: ['Kiên nhẫn', 'Chắc chắn', 'Mê đồ ăn ngon'], color: 'Xanh bạc hà',
    wishes: [
      'Kim Ngưu làm gì cũng từ tốn mà chắc chắn, ai chung nhóm với nàng cũng thấy yên tâm. Hôm nay Tani chúc {tên} được ăn một bữa thật ngon, ngủ một giấc thật đã, và có một học kỳ thật êm.',
      'Người đẹp Kim Ngưu kiên nhẫn số một, deadline dí cỡ nào cổ vẫn bình tĩnh. Tani chúc {tên} lúc nào cũng có đồ ăn ngon trong tay, ví lúc nào cũng dày, và mọi công sức bỏ ra đều được đền đáp xứng đáng.'
    ]
  },
  {
    name: 'Song Tử', symbol: '♊', from: [5, 21], to: [6, 21], date: '21/5 – 21/6',
    traits: ['Lanh lợi', 'Hoạt ngôn', 'Tò mò'], color: 'Vàng chanh',
    wishes: [
      'Người đẹp Song Tử có cả trăm câu hỏi "tại sao", mà đó chính là nguyên liệu của nghiên cứu đó. Tani chúc {tên} giữ mãi sự tò mò dễ thương này, và lúc nào cũng có chuyện vui để kể.',
      'Có Song Tử là nhóm chat không bao giờ im. Tani chúc bbi {tên} năm nay quen thêm thật nhiều người hay ho, học được thật nhiều điều thú vị, và ngày nào cũng có lý do để hạnh phúc nhaaaa.'
    ]
  },
  {
    name: 'Cự Giải', symbol: '♋', from: [6, 22], to: [7, 22], date: '22/6 – 22/7',
    traits: ['Chu đáo', 'Tình cảm', 'Biết lắng nghe'], color: 'Trắng sữa',
    wishes: [
      '{tên} hay để ý tới cảm xúc của người khác, nên hôm nay tới lượt mọi người để ý tới đóa hồng này nha. Tani chúc bbi lúc nào cũng có một góc thật ấm áp để về, và được thương nhiều như cách {tên} vẫn thương cả ban.',
      'Nàng Cự Giải là người nhớ sinh nhật cả ban và hỏi han từng đứa một. Tani chúc {tên} lúc nào cũng được bao quanh bởi những người thật lòng, và luôn nhớ thương bản thân trước tiên nha.'
    ]
  },
  {
    name: 'Sư Tử', symbol: '♌', from: [7, 23], to: [8, 22], date: '23/7 – 22/8',
    traits: ['Tự tin', 'Toả sáng', 'Hào phóng'], color: 'Vàng mật ong',
    wishes: [
      'Sư Tử bước vào đâu là chỗ đó sáng lên, kể cả lúc thuyết trình 7 giờ sáng. Tani chúc người đẹp {tên} luôn tự tin là chính mình, đứng ở sân khấu nào cũng nhận được tràng vỗ tay xứng đáng.',
      'Đóa hồng Sư Tử vừa xinh vừa có khí chất, đi đâu cũng khó mà bị lẫn. Tani chúc {tên} năm nay gặt được thật nhiều thành tích, và luôn có người bên cạnh cổ vũ hết mình.'
    ]
  },
  {
    name: 'Xử Nữ', symbol: '♍', from: [8, 23], to: [9, 22], date: '23/8 – 22/9',
    traits: ['Tỉ mỉ', 'Cầu toàn', 'Đáng tin'], color: 'Xanh rêu',
    wishes: [
      'Có Xử Nữ trong nhóm là mọi thứ gọn gàng, đâu ra đó liền. Tani chúc nàng bớt khắt khe với bản thân một chút, vì {tên} đã đủ giỏi rồi đó.',
      'Người đẹp Xử Nữ tỉ mỉ từng chút, việc gì qua tay cổ cũng chỉn chu hơn hẳn. Tani chúc {tên} mọi kế hoạch đều suôn sẻ y như checklist, và thỉnh thoảng cho phép mình lười một bữa cũng được nha bbi.'
    ]
  },
  {
    name: 'Thiên Bình', symbol: '♎', from: [9, 23], to: [10, 23], date: '23/9 – 23/10',
    traits: ['Hoà nhã', 'Có gu', 'Khéo léo'], color: 'Hồng phấn',
    wishes: [
      '20/10 rơi đúng mùa Thiên Bình, nên năm nay đóa hồng {tên} được chúc gấp đôi nha. Tani chúc bbi lúc nào cũng cân bằng được giữa học, chơi và nghỉ, và mỗi lần chọn món không phải phân vân quá lâu.',
      'Nàng Thiên Bình vừa có gu vừa khéo léo, nhóm nào có cổ cũng dễ thở hơn hẳn. Tani chúc {tên} lúc nào cũng xinh, lúc nào cũng vui, và được ở cạnh những người khiến mình thấy dễ chịu.'
    ]
  },
  {
    name: 'Bọ Cạp', symbol: '♏', from: [10, 24], to: [11, 21], date: '24/10 – 21/11',
    traits: ['Sâu sắc', 'Quyết tâm', 'Bí ẩn'], color: 'Đỏ rượu vang',
    wishes: [
      'Nhìn thì bí ẩn vậy chứ một khi cổ đã quyết thì không gì cản được. Tani chúc {tên} được đào sâu vào những gì mình thích, và luôn có những người bạn đủ thân để thấy mặt dễ thương của nàng.',
      'Người đẹp Bọ Cạp nói ít mà làm nhiều, đã nhận việc là làm tới nơi tới chốn. Tani chúc {tên} giữ được sự quyết tâm này, và năm nay thu về toàn tin vui.'
    ]
  },
  {
    name: 'Nhân Mã', symbol: '♐', from: [11, 22], to: [12, 21], date: '22/11 – 21/12',
    traits: ['Lạc quan', 'Thích khám phá', 'Hài hước'], color: 'Cam đào',
    wishes: [
      'Có Nhân Mã là buổi họp căng cỡ nào cũng có tiếng cười. Tani chúc người đẹp {tên} năm nay được đi nhiều nơi, học nhiều điều mới, và vẫn giữ nguyên tinh thần "ok để tớ lo".',
      'Bbi Nhân Mã lạc quan tới mức trời sập cũng thấy có cầu vồng. Tani chúc {tên} năm nay có thật nhiều chuyến đi vui, và gặp thật nhiều người cũng tích cực như cổ.'
    ]
  }
];

const closing = 'Cảm ơn {tên} đã đồng hành cùng ban Học tập - Nghiên cứu khoa học. Tani chúc nàng sẽ vượt qua mọi khó khăn, luôn tỏa sáng theo cách riêng và nhận được thật nhiều hạnh phúc trên quãng đường đại học này nka. Btw, chúc cổ 20/10 thật vui, môn nào cũng qua nhẹ nhàng, và lúc nào cũng được là chính mình nha. Thương {tên} nhiều nhắm 🌷';

function getZodiac(month, day) {
  return zodiac.find(z => {
    const [fm, fd] = z.from;
    const [tm, td] = z.to;
    return (month === fm && day >= fd) || (month === tm && day <= td);
  });
}

function withName(text, name) {
  return text.split('{tên}').join(name);
}

// ====== bài hát Spotify, mỗi lá thư bốc ngẫu nhiên 1 bài ======
// link lấy ở Spotify > Chia sẻ > Sao chép liên kết bài hát, để trống thì bài đó bị bỏ qua
const allSongs = [
  { title: 'Thế Giới Của Anh', artist: 'Tinh Hà "Say Hi"', link: 'https://open.spotify.com/track/0CY9y1F7RcRSV3raHljdxu' },
  { title: 'Để Dành Cho Em', artist: '', link: '' },
  { title: 'SECRET', artist: 'Tinh Hà "Say Hi"', link: 'https://open.spotify.com/track/4TmcmTzr88j02kCDh19VNt' },
  { title: 'chờ chút...', artist: 'Tinh Hà "Say Hi", CONGB', link: 'https://open.spotify.com/track/6flJE5kzGGFK30F7kBPPno' },
  { title: 'Em Đợi Anh Lâu Chưa', artist: 'CONGB', link: 'https://open.spotify.com/track/3iNyD6fV9XuYvt94ihySsL' },
  { title: 'Ngàn Năm Ánh Sáng', artist: 'Đặng Vĩnh Thịnh, BMZ', link: 'https://open.spotify.com/track/4nyoalDFgUaZOzIKqj3aS5' },
  { title: 'Đừng Làm Trái Tim Anh Đau', artist: 'Sơn Tùng M-TP', link: 'https://open.spotify.com/track/31VNCmwspR7nVJ6kruUuJt' },
  { title: 'Ai Ngoài Anh', artist: 'VSTRA, Tyronee', link: 'https://open.spotify.com/track/6GM4ZOBDcDroldUxI8GZ2B' },
  { title: 'BADBYE', artist: 'WEAN', link: 'https://open.spotify.com/track/6ITOGYSffc8ZywqUDhWgqc' },
  { title: 'Có Đôi Điều', artist: '', link: '' },
  { title: 'tâm trí lang thang', artist: 'Ánh Sáng AZA, Negav', link: 'https://open.spotify.com/track/3W77mLoXjQEkNjxvYRifjG' },
  { title: 'Nơi Này Có Anh', artist: 'Sơn Tùng M-TP', link: 'https://open.spotify.com/track/5rSAUmbOg4giDrM29vUyHe' },
  { title: 'Phải Chăng Em Đã Yêu?', artist: 'Juky San, RedT', link: 'https://open.spotify.com/track/3i02vLHwlt14hNJtdXmeM7' },
  { title: 'Chăm Hoa', artist: 'MONO', link: '' },
  { title: 'Nắng Ấm Trong Tim', artist: 'Duongg', link: 'https://open.spotify.com/album/6jZ0FX8aJ2nPzdeyNicLKc' },
  { title: 'LAVIEM', artist: 'Tinh Hà "Say Hi"', link: 'https://open.spotify.com/track/1IWEzoYndBj6ntPQ1nYiFP' },
  { title: 'Nơi Ta Chờ Em', artist: 'Will', link: 'https://open.spotify.com/track/5wPho8pEA49NIEwbgchXiG' },
  { title: 'Simple Love', artist: 'Obito, Seachains', link: 'https://open.spotify.com/track/5AaHvf9iO6RydAIissh0kz' },
  { title: 'Say Yes', artist: 'OgeNus, PiaLinh', link: 'https://open.spotify.com/track/7mbWwlHgukuuW8r7Nc3FHv' }
].filter(s => s.link);

let song = null;
let spotify = null;     // Spotify iFrame API
let controller = null;  // trình phát của bài hiện tại
let songPlaying = false;
let wantPlay = false;

function pickSong() {
  song = allSongs[Math.floor(Math.random() * allSongs.length)];
}

function spotifyUri(link) {
  const m = link.match(/(track|playlist|album)\/([A-Za-z0-9]+)/);
  return m ? `spotify:${m[1]}:${m[2]}` : '';
}

window.onSpotifyIframeApiReady = api => {
  spotify = api;
  if (song) setupPlayer();
};

function setupPlayer() {
  if (!spotify || !song) return;
  if (controller) controller.destroy();
  controller = null;
  songPlaying = false;

  const box = document.getElementById('spotify');
  box.innerHTML = '<div id="spotify-embed"></div>';
  box.classList.add('show');

  const options = { uri: spotifyUri(song.link), width: '100%', height: 80 };
  spotify.createController(document.getElementById('spotify-embed'), options, c => {
    controller = c;
    c.addListener('ready', () => {
      if (wantPlay) c.play();
      wantPlay = false;
    });
    c.addListener('playback_update', e => {
      songPlaying = !e.data.isPaused;
      if (songPlaying && musicOn) stopMusic();
      updatePlayerUI();
    });
  });
}

function toggleSong() {
  if (!spotify) {
    // không tải được trình phát thì mở thẳng Spotify
    window.open(song.link, '_blank');
    return;
  }
  stopMusic();
  if (controller) {
    controller.togglePlay();
  } else {
    wantPlay = true;
  }
}

function pauseSong() {
  if (controller && songPlaying) controller.pause();
  songPlaying = false;
}

function renderSong() {
  const box = document.getElementById('tracks');
  box.innerHTML = '';
  if (!song) return;
  const row = document.createElement('div');
  row.className = 'track';
  row.innerHTML = `
    <span class="no">01</span>
    <div class="info"><p class="t"></p><p class="a"></p></div>
    <button aria-label="Phát">▶</button>`;
  row.querySelector('.t').textContent = song.title;
  row.querySelector('.a').textContent = song.artist;
  row.querySelector('button').onclick = toggleSong;
  box.appendChild(row);
  setupPlayer();
  updatePlayerUI();
}

// ====== nhạc nền hộp nhạc ======
let ctx = null;
let master = null;
let musicOn = false;
let loopTimer = null;

const N = {
  C3: 130.81, G3: 196.0, A3: 220.0, F3: 174.61, E3: 164.81, D3: 146.83, B3: 246.94,
  B4: 493.88, C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, 'F#5': 739.99,
  G5: 783.99, A5: 880.0, B5: 987.77, C6: 1046.5, D6: 1174.66, E6: 1318.51
};

const tune = {
  beat: 0.3,
  melody: [
    'E5','G5','C6','B5','G5','E5',  'F5','A5','D6','C6','A5','F5',
    'E5','G5','C6','B5','A5','G5',  'F5','E5','D5','C5', null, null,
    'E5','G5','C6','D6','C6','B5',  'A5','C6','F5','A5','G5','F5',
    'E5','G5','D5','F5','B4','D5',  'C5', null,'G5', null,'C6', null
  ],
  bass: ['C3','F3','C3','G3','A3','F3','G3','C3']
};

function initAudio() {
  if (ctx) return;
  ctx = new (window.AudioContext || window.webkitAudioContext)();
}

function pluck(freq, time, length, volume) {
  const osc = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const g = ctx.createGain();
  const g2 = ctx.createGain();
  osc.type = 'sine';
  osc2.type = 'triangle';
  osc.frequency.value = freq;
  osc2.frequency.value = freq * 2;
  g2.gain.value = 0.15;
  osc.connect(g);
  osc2.connect(g2).connect(g);
  g.connect(master);
  g.gain.setValueAtTime(0, time);
  g.gain.linearRampToValueAtTime(volume, time + 0.01);
  g.gain.exponentialRampToValueAtTime(0.001, time + length);
  osc.start(time); osc2.start(time);
  osc.stop(time + length + 0.05); osc2.stop(time + length + 0.05);
}

function playLoop() {
  const start = ctx.currentTime + 0.1;
  tune.melody.forEach((note, i) => {
    if (note) pluck(N[note], start + i * tune.beat, 1.4, 0.5);
  });
  tune.bass.forEach((note, i) => {
    pluck(N[note], start + i * 6 * tune.beat, 2.2, 0.28);
  });
  loopTimer = setTimeout(playLoop, tune.melody.length * tune.beat * 1000);
}

function startMusic() {
  initAudio();
  if (ctx.state === 'suspended') ctx.resume();
  stopMusic();
  master = ctx.createGain();
  master.gain.value = 0.35;
  master.connect(ctx.destination);
  musicOn = true;
  playLoop();
  updatePlayerUI();
}

function stopMusic() {
  clearTimeout(loopTimer);
  if (master) {
    master.disconnect();
    master = null;
  }
  musicOn = false;
  updatePlayerUI();
}

function updatePlayerUI() {
  const row = document.querySelector('.track');
  if (row) {
    row.classList.toggle('on', songPlaying);
    row.querySelector('button').textContent = songPlaying ? '❚❚' : '▶';
  }
  document.getElementById('cassette').classList.toggle('playing', musicOn || songPlaying);
  document.getElementById('sound').classList.toggle('muted', !musicOn);

  let text = 'Bấm ▶ để nghe bài hát nha';
  if (musicOn) text = 'Đang phát nhạc nền';
  if (songPlaying) text = 'Đang phát trên Spotify';
  document.getElementById('now').textContent = text;
}

// ====== hiệu ứng ======
const flowerColors = ['#f6c1cc', '#f9d6dc', '#eea3b3', '#fbe3e6', '#f4b6c2', '#fff1ec', '#e98fa3'];

function flowerSVG(color) {
  const center = Math.random() > 0.5 ? '#f7d58b' : '#fff6e5';
  let petals = '';
  const count = 5 + Math.floor(Math.random() * 3);
  for (let i = 0; i < count; i++) {
    petals += `<ellipse cx="50" cy="27" rx="17" ry="25" fill="${color}" opacity=".92"
      transform="rotate(${(360 / count) * i} 50 50)"/>`;
  }
  return `<svg viewBox="0 0 100 100" width="100%" height="100%">${petals}
    <circle cx="50" cy="50" r="11" fill="${center}"/></svg>`;
}

function bloom(done) {
  const box = document.getElementById('bloom');
  box.innerHTML = '';
  box.classList.remove('fade');
  const total = window.innerWidth < 600 ? 55 : 90;
  for (let i = 0; i < total; i++) {
    const f = document.createElement('div');
    const size = 70 + Math.random() * 150;
    f.className = 'flower';
    f.style.width = f.style.height = size + 'px';
    f.style.left = Math.random() * 100 + '%';
    f.style.top = Math.random() * 100 + '%';
    f.style.animationDelay = Math.random() * 0.9 + 's';
    f.style.setProperty('--r', (Math.random() * 180 - 90) + 'deg');
    f.innerHTML = flowerSVG(flowerColors[i % flowerColors.length]);
    box.appendChild(f);
  }
  setTimeout(() => {
    done();
    box.classList.add('fade');
    setTimeout(() => (box.innerHTML = ''), 1100);
  }, 2100);
}

function makePetals() {
  const box = document.getElementById('petals');
  const count = window.innerWidth < 600 ? 12 : 20;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    p.className = 'petal';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = 9 + Math.random() * 10 + 's';
    p.style.animationDelay = -Math.random() * 15 + 's';
    p.style.setProperty('--dx', (Math.random() * 160 - 80) + 'px');
    p.style.transform = `scale(${0.6 + Math.random() * 0.8})`;
    box.appendChild(p);
  }
}

// ====== chuyển màn ======
function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

let person = null;

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const dob = document.getElementById('dob').value;
  const error = document.getElementById('error');

  if (!name) return (error.textContent = 'Quên điền tên rồi nè');
  if (!dob) return (error.textContent = 'Cho Tani xin ngày sinh nha');

  const [, m, d] = dob.split('-').map(Number);
  error.textContent = '';
  person = { name, sign: getZodiac(m, d) };
  fillLetter();
  show('screen-envelope');
});

function fillLetter() {
  const { name, sign } = person;
  const s = sign.symbol + '︎';
  const wish = sign.wishes[Math.floor(Math.random() * sign.wishes.length)];

  document.getElementById('to-name').textContent = name;
  document.getElementById('greet-name').textContent = name;
  document.getElementById('cas-title').textContent = 'Tặng ' + name;
  document.getElementById('cas-sign').textContent = s;
  document.getElementById('sign-symbol').textContent = s;
  document.getElementById('sign-name').textContent = sign.name;
  document.getElementById('sign-date').textContent = sign.date;
  document.getElementById('wish').textContent = withName(wish, name);
  document.getElementById('closing').textContent = withName(closing, name);
  document.getElementById('chips').innerHTML =
    sign.traits.map(t => `<span>${t}</span>`).join('') +
    `<span>Màu may mắn: ${sign.color}</span>`;

  document.getElementById('song-note').textContent = `Bài hát tặng nàng ${name} 20/10 đâyyyy`;

  pauseSong();
  pickSong();
  renderSong();
}

document.getElementById('envelope').addEventListener('click', function () {
  if (this.classList.contains('open')) return;
  this.classList.add('open');
  startMusic();
  document.getElementById('sound').classList.add('show');
  setTimeout(() => bloom(() => show('screen-letter')), 900);
});

document.getElementById('again').addEventListener('click', () => {
  stopMusic();
  pauseSong();
  document.getElementById('envelope').classList.remove('open');
  document.getElementById('form').reset();
  show('screen-form');
});

document.getElementById('sound').addEventListener('click', () => {
  if (musicOn) {
    stopMusic();
  } else {
    pauseSong();
    startMusic();
  }
});

makePetals();
