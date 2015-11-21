const _ = require('lodash');
const EventEmitter = require('jvent');

const GameObject = require('./object');
const World      = require('./world');

const loop  = require('../data/loop');
const scene = require('../data/scene');

function Game() {
  let id, last,
      lag  = 0.0,
      game = { render, start, stop };

  Object.setPrototypeOf(game, new EventEmitter);

  game.world   = new World(game);
  game.objects = scene.objects.map(_.partial(GameObject, game));

  function render() {
    game.emit('render');
    game.emit('post-render');
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
      update();
      lag -= loop.step;
    }

    render();
    id = requestAnimationFrame(tick);
  }

  function update() {
    game.emit('update');
    game.emit('swap');
  }

  return game;
}

module.exports = Game;
