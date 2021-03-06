const { randomSign } = require('../../lib/util');

module.exports = {
  name:  'AI Adjustments',
  phase: 'physics',
  deps:  ['AI', 'Contacts'],

  update(id, [ai, contacts], { comps }) {
    for (var other in contacts) if (comps('Ball', other)) ai.sign *= -1;
  }
};
