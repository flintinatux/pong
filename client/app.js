import Game       from './classes/game';
import GameObject from './classes/object';

import config     from './data/config';
import objects    from './data/objects';

let game = window.game = new Game(config);

for (let object of objects) game.objects.push(new GameObject(object));

document.body.appendChild(game.render());

game.start();
