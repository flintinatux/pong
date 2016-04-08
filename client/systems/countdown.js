const Ball = require('../lib/ball');

module.exports = {
  name:  'Countdown',
  phase: 'render',
  deps:  ['Countdown', 'Text'],

  update(id, [c, t], { comps, entities, loop }) {
    c.count -= loop.step;
    if (c.count <= 0) {
      comps.add('Death', id);
      setTimeout(function() { entities.create(Ball()) }, 250);
    } else {
      t.content = Math.ceil(c.count / 1000);
    }
  }
}
