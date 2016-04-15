const inRange = require('lodash/inRange');

module.exports = {
  name:  'AI Firing',
  phase: 'ai',
  deps:  ['AI', 'Controls', 'Player', 'Position'],

  update(id, [a, ctrl, play, pos], { comps }) {
    for (var other in comps('Paddle')) {
      if (other === id) continue;

      var { y } = comps('Position', other);
      var { h } = comps('Size', other);

      ctrl.fire = inRange(pos.y, y - h/2, y + h/2);
      return;
    }
  }
};
