import Game from './classes/game';

let game = window.game = new Game();

document.body.appendChild(game.render());

let paused = true;

window.addEventListener('keydown', function(e) {
  if (e.keyCode !== 32) return;
  if (paused) {
    paused = false;
    game.start();
  } else {
    paused = true;
    game.stop();
  }
})

game.start();
