const Ball = require('../lib/ball');

module.exports = {
  name:  'Countdown',
  phase: 'render',
  deps:  ['Countdown', 'Text'],

  update(id, [c, t], { comps, dom, entities }) {
    var now = performance.now();
    if (c.last) c.count -= now - c.last;
    c.last = now;
    if (c.count <= 0) {
      comps.add('Death', id);
      entities.create(Ball())
    } else {
      t.content = Math.ceil(c.count / 1000);
    }
  }
}
