module.exports = {
  name:  'AI Controls',
  phase: 'ai',
  deps:  ['AI', 'Controls', 'Motion', 'Player', 'Position', 'Size'],

  update(id, [a, ctrl, m, play1, pos1, size], { comps }) {
    var ball = Object.keys(comps('Ball'))[0];
    if (!ball) return ctrl.up = ctrl.down = false;

    var play2 = comps('Player',   ball),
        pos2  = comps('Position', ball),
        min   = pos1.y + a.sign * a.min * size.h,
        max   = pos1.y + a.sign * a.max * size.h;

    m.vmax = a.difficulty * (play2.name === play1.name ? a.vout : a.vin);

    ctrl.down = pos2.y > Math.max(min, max);
    ctrl.up   = pos2.y < Math.min(min, max);
  }
};
