module.exports = {
  name:  'Weapon',
  phase: 'physics',
  deps:  ['Weapon', 'Contacts'],

  update(id, [weapon, contacts], { comps }) {
    for (var other in contacts) {
      var health = comps('Health', other);
      if (!health) continue;
      health.hp -= weapon.damage;
      comps.add('Death', id);
      return;
    }
  }
};
