const Manic = require('manic');

const comps = require('./components');
const stage = require('./data/stage.json');
const types = require('./data/types.json');

var manic = Manic(document.getElementById('game'), 0.6);

for (var name in comps) manic.component(name, comps[name]);
manic.types(types);
manic.stage(stage);

// const Game = require('./classes/game');

// let game = window.game = new Game();

// document.body.appendChild(game.el);

// let running;

// window.addEventListener('keydown', function(e) {
//   if (e.keyCode !== 32) return;
//   if (running) {
//     running = false;
//     game.stop();
//   } else {
//     running = true;
//     game.start();
//   }
// });
