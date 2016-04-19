module.exports = {
  name:  'Goal',
  phase: 'physics',
  deps:  ['Goal', 'Contacts', 'Player'],

  update(id, [g, contacts, player], { comps, entities }) {
    for (var other in contacts) {
      if (!comps('Ball', other)) continue;

      for (var _id in comps('Score')) {
        if (comps('Player', _id).name === player.name)
          comps('Score', _id).points++;
      }

      comps.add('Death', other);
      entities.create({ type: 'Countdown' });
    }
  }
};
