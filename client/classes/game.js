import _ from 'lodash';
import events from 'events';

import GameObject from './object';

import config  from '../data/config';
import objects from '../data/objects';

function Game() {
  let game = {};

  let el, id, last;
  let lag = 0.0;

  game.vent    = new events.EventEmitter;
  game.objects = objects.map(_.partial(GameObject, game));

  _.extend(game, { render, start, stop });

  function invoke(action) {
    let i = game.objects.length;
    while (i--) game.objects[i][action]();
  }

  function render() {
    if (!el) {
      el = document.createElement('div');
      el.className = 'game';
      let grid = document.createElement('div');
      grid.className = 'grid';
      el.appendChild(grid);
    }

    for (let object of game.objects) object.render(el);

    game.vent.emit('rendered', { time: performance.now() });
    return el;
  }

  function start() {
    last = performance.now();
    id = requestAnimationFrame(tick);
    game.vent.emit('started', { time: last });
  }

  function stop() {
    cancelAnimationFrame(id);
    game.vent.emit('stopped', { time: performance.now() });
  };

  function tick(next) {
    lag += next - last;
    last = next;

    if (lag > config.maxLag) lag = config.maxLag;

    while (lag > config.step) {
      update();
      lag -= config.step;
    }

    render();
    id = requestAnimationFrame(tick);
  }

  function update() {
    invoke('update');
    invoke('swap');
  }

  return game;
}

export default Game;
