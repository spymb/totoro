import string from './css.js';
import string2 from './style.js';

$('#buttons').after($(string2));

const player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#showCSS'),
    demo2: document.querySelector('#tCSS')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast',
    '#btnStop': 'stop',
  },
  n: 1,

  init: () => {
    player.bindEvents();
    player.play();
  },

  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]; // pause / play / slow
        document.querySelector(key).onclick = player[value];
      }
    }

  },

  run: () => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },

  play: () => {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
  stop: () => {
    player.pause();
    player.ui.demo.innerText = string;
    player.ui.demo2.innerHTML = string;
  }
};

player.init();
