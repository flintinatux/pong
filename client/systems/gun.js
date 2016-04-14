const templates = require('../data/templates');

module.exports = {
  name:  'Gun',
  phase: 'physics',
  deps:  ['Controls', 'Gun', 'Position'],

  update(id, [ctrl, gun, pos], { comps, entities, loop }) {
    if (!ctrl.fire) return;

    gun.time -= loop.step;
    if (gun.time > 0) return;

    var direction = pos.x < 50 ? 1 : -1;
    entities.create({
      type: gun.ammo,
      state: {
        Motion: {
          vx: templates[gun.ammo].Motion.vmax * direction
        },
        Position: {
          x: pos.x + direction,
          y: pos.y
        }
      }
    });
    gun.count--;
    gun.time = gun.rate;

    if (gun.count <= 0) comps.remove('Gun', id);
  }
};
