import m from 'mithril';

import config     from './data/config';
import Game       from './classes/game';
import GameObject from './classes/object';
import objects    from './data/objects';

let game = window.game = new Game(config);

for (let object of objects) {
  game.objects.push(new GameObject(object));
}

m.mount(document.body, game.view);

game.start();

setTimeout(game.stop, 2500);
