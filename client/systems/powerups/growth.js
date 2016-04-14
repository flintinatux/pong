module.exports = {
  name:  'Grow',
  phase: 'physics',
  deps:  ['Growth', 'Position', 'Size'],

  update(id, [growth, pos, size], { comps, loop }) {
    growth.dh || (growth.dh = growth.delta * loop.step / growth.time);

    size.h += growth.dh;

    var contacts = comps('Contacts', id);
    if (contacts) {
      for (var other in contacts) {
        if (!comps('Wall', other)) continue;
        contacts[other] === 'top'
          ? pos.y += growth.dh / 2
          : pos.y -= growth.dh / 2;
      }
    }

    growth.time -= loop.step;

    if (growth.time <= 0 || size.h >= growth.max)
      comps.remove('Growth', id);
  }
};
