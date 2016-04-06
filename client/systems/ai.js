module.exports = {
  name:  'AI',
  phase: 'ai',
  deps:  ['AI', 'Collision', 'Motion', 'Player', 'Position'],

  update(id, [a, c, m, play1, pos1], { comps }) {
    var ball = Object.keys(comps('Ball'))[0];

    var play2 = comps('Player',   ball),
        pos2  = comps('Position', ball),
        delta = a.sign * a.factor * c.h;

    m.vmax = play2.name === play1.name ? a.vout : a.vin;
    m.ay = Math.sign(pos2.y - (pos1.y + delta)) * a.difficulty * m.amax;
  }
};
