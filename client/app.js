const Game = require('./classes/game');

let game = window.game = new Game();

document.body.appendChild(game.world.el);
game.render();

let running;

window.addEventListener('keydown', function(e) {
  if (e.keyCode !== 32) return;
  if (running) {
    running = false;
    game.stop();
  } else {
    running = true;
    game.start();
  }
});
