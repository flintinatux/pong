import Game from './classes/game';

let game = window.game = new Game();

document.body.appendChild(game.render());

game.start();
