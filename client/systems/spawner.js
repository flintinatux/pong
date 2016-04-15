module.exports = {
  name:  'Spawner',
  phase: 'ai',
  deps:  ['Spawner'],

  update(id, [s], { comps, entities, loop }) {
    s.time -= loop.step;
    if (s.time > 0) return;

    var { xmin, xmax, ymin, ymax } = s.area;

    entities.create({
      type: s.types[s.next],
      state: {
        Position: {
          x: xmin + (xmax - xmin) * Math.random(),
          y: ymin + (ymax - ymin) * Math.random()
        }
      }
    });

    s.next = (s.next + 1) % s.types.length;
    s.time = s.rate;
  }
};
