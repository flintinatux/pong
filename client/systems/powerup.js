module.exports = {
  name:  'Powerup',
  phase: 'physics',
  deps:  ['Powerup', 'Contacts'],

  update(id, [p, contacts], { comps }) {
    for (var other in contacts) {
      if (!comps('Ball', other)) continue;
      console.log('Powerup acquired:', p.type);
      return comps.add('Death', id);
    }
  }
};
