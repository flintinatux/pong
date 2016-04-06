const events = require('../lib/events');
const scenes = require('../data/scenes');

module.exports = {
  name:  'Scoring',
  phase: 'physics',
  deps:  ['Goal', 'Contacts', 'Player'],

  update(id, [g, contacts, player], { comps, manic }) {
    for (var other in contacts) {
      if (!comps('Ball', other)) continue;
      events.emit('goal-scored', { player: player.name });
      manic.stop();
      manic.scene(scenes.one);
    }
  }
};
