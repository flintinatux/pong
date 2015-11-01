import extend from 'lodash/object/extend';
import pluck  from 'lodash/collection/pluck';

import GameObject from './object';

import config  from '../data/config';
import objects from '../data/objects';

function Game() {
  let game = {};

  let el, id, last;
  let lag = 0.0;

  game.objects = objects.map(GameObject);
  game.scores  = { one: 0, two: 0 };

  extend(game, { render, reset, start, stop });

  function render() {
    if (!el) {
      el = document.createElement('div');
      el.className = 'game';
      let grid = document.createElement('div');
      grid.className = 'grid';
      el.appendChild(grid);
    }

    for (let object of game.objects) object.render(el);
    return el;
  }

  function reset() {
    for (let object of game.objects) object.reset(el);
  }

  function start() {
    last = performance.now();
    id = requestAnimationFrame(tick);
  }

  function stop() {
    cancelAnimationFrame(id);
  };

  function tick(next) {
    lag += next - last;
    last = next;

    while (lag > config.step) {
      update();
      lag -= config.step;
    }

    render();
    id = requestAnimationFrame(tick);
  }

  function update() {
    for (let object of game.objects) object.update(game);
  }

  return game;
}

export default Game;
