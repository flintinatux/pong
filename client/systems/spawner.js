const sample = require('lodash/sample');

module.exports = {
  name:  'Spawner',
  phase: 'ai',
  deps:  ['Spawner'],

  update(id, [s], { comps, entities, loop }) {
    s.time -= loop.step;
    if (s.time > 0) return;

    s.time = s.rate;
    var { xmin, xmax, ymin, ymax } = s.area;

    entities.create({
      type: sample(s.types),
      state: {
        Position: {
          x: xmin + (xmax - xmin) * Math.random(),
          y: ymin + (ymax - ymin) * Math.random()
        }
      }
    });
  }
};
