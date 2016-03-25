const _ = require('lodash');
const EventEmitter = require('events');

const config = require('../data/loop');

function Loop() {
  let id, last,
      lag  = 0.0,
      loop = { start, stop };

  Object.setPrototypeOf(loop, new EventEmitter);

  function start() {
    last = performance.now();
    id = requestAnimationFrame(tick);
    loop.emit('started', { time: last });
  }

  function stop() {
    cancelAnimationFrame(id);
    loop.emit('stopped', { time: performance.now() });
  }

  function tick(next) {
    lag += next - last;
    last = next;

    if (lag > config.maxLag) lag = config.maxLag;

    while (lag > config.step) {
      loop.emit('update');
      lag -= config.step;
    }

    loop.emit('render');
    id = requestAnimationFrame(tick);
  }

  return loop;
}

module.exports = Loop;
