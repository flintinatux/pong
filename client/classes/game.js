const _ = require('lodash');
const EventEmitter = require('jvent');

const GameObject = require('./object');

const loop  = require('../data/loop');
const scene = require('../data/scene');

function Game() {
  let id, last,
      lag  = 0.0,
      game = { start, stop };

  Object.setPrototypeOf(game, new EventEmitter);

  setupDom();
  game.objects = scene.objects.map(_.partial(GameObject, game));

  function setupDom() {
    game.el = document.createElement('div');
    game.el.className = 'game';
    let grid = document.createElement('div');
    grid.className = 'grid';
    game.el.appendChild(grid);
  }

  function start() {
    last = performance.now();
    id = requestAnimationFrame(tick);
    game.emit('started', { time: last });
  }

  function stop() {
    cancelAnimationFrame(id);
    game.emit('stopped', { time: performance.now() });
  }

  function tick(next) {
    lag += next - last;
    last = next;

    if (lag > loop.maxLag) lag = loop.maxLag;

    while (lag > loop.step) {
      game.emit('update');
      game.emit('swap');
      lag -= loop.step;
    }

    game.emit('render');
    game.emit('post render');
    id = requestAnimationFrame(tick);
  }

  game.emit('render');
  return game;
}

module.exports = Game;
