module.exports = {
  name:  'Grow',
  phase: 'physics',
  deps:  ['Collision', 'Growth', 'Position', 'Render'],

  update(id, [coll, growth, pos, render], { comps, loop }) {
    growth.dh || (growth.dh = growth.delta * loop.step / growth.time);

    coll.h   += growth.dh;
    render.h += growth.dh;

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
    if (growth.time <= 0) comps.remove('Growth', id);
  }
};
