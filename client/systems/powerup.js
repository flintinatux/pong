module.exports = {
  name:  'Powerup',
  phase: 'physics',
  deps:  ['Powerup', 'Contacts'],

  update(id, [powerup, contacts], { comps }) {
    for (var other in contacts) {
      if (!comps('Ball', other)) continue;
      var player = comps('Player', other);

      for (var pid in comps('Paddle')) {
        if (comps('Player', pid).name !== player.name) continue;
        comps.add(powerup.type, pid);
      }

      return comps.add('Death', id);
    }
  }
};
