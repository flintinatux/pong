const _ = require('lodash');
const { EventEmitter } = require('events');

const defaults = require('../data/loop');

function Loop(config) {
  let id, last,
      lag  = 0.0,
      loop = { __proto__: new EventEmitter, start, stop };

  config = _.defaults({}, config, defaults);

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
