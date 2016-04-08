const Ball = require('../lib/ball');

module.exports = {
  name:  'Countdown',
  phase: 'render',
  deps:  ['Countdown', 'Timer', 'Text'],

  update(id, [c, timer, text], { comps, entities }) {
    if (timer.time <= 0) {
      c.count--;
      timer.time = 1000;
    }

    if (c.count > 0) {
      text.content = c.count;
    } else {
      comps.add('Death', id);
      setTimeout(function() { entities.create(Ball()) }, 250);
    }
  }
}
