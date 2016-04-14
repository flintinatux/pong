module.exports = {
  name:  'Grow',
  phase: 'physics',
  deps:  ['Growth', 'Health', 'Position'],

  update(id, [growth, health, pos], { comps, loop }) {
    growth.dhp || (growth.dhp = growth.hp * loop.step / growth.time);

    health.hp = Math.min(health.max, health.hp + growth.dhp);

    var contacts = comps('Contacts', id);
    if (contacts) {
      for (var other in contacts) {
        if (!comps('Wall', other)) continue;
        contacts[other] === 'top'
          ? pos.y += growth.dhp * health.sizeRatio / 2
          : pos.y -= growth.dhp * health.sizeRatio / 2;
      }
    }

    growth.time -= loop.step;

    if (growth.time <= 0 || health.hp === health.max)
      comps.remove('Growth', id);
  }
};
