module.exports = {
  name:  'AI',
  phase: 'ai',
  deps:  ['AI', 'Controls', 'Motion', 'Player', 'Position', 'Size'],

  update(id, [a, ctrl, m, play1, pos1, size], { comps }) {
    var ball = Object.keys(comps('Ball'))[0];
    if (!ball) return ctrl.up = ctrl.down = false;

    var play2 = comps('Player',   ball),
        pos2  = comps('Position', ball),
        delta = pos2.y - (pos1.y + a.sign * a.factor * size.h);

    m.vmax = a.difficulty * (play2.name === play1.name ? a.vout : a.vin);
    // m.ay = Math.sign(pos2.y - (pos1.y + delta)) * a.difficulty * m.amax;

    ctrl.down = delta > 0;
    ctrl.up   = delta < 0;
  }
};
