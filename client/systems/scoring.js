const events = require('../lib/events');
const scenes = require('../data/scenes');

module.exports = {
  name:  'Scoring',
  phase: 'physics',
  deps:  ['Goal', 'Contacts', 'Player'],

  update(id, [g, contacts, player], { comps, entities }) {
    for (var other in contacts) {
      if (!comps('Ball', other)) continue;
      events.emit('goal-scored', { player: player.name });
      comps.add('Death', other);
      entities.create({ type: 'Countdown' });
    }
  }
};
