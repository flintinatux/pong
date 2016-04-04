module.exports = {
  name:  'Bounce',
  phase: 'physics',
  deps:  ['Bounce', 'Contacts', 'Motion', 'Position'],

  update(id, [b, contacts, m, p1], { comps }) {
    for (var other in contacts) {
      var side = contacts[other];

      if (side === 'top'    && m.vy < 0) return m.vy *= -1;
      if (side === 'bottom' && m.vy > 0) return m.vy *= -1;

      if (!comps('Paddle', other)) return;

      var c2 = comps('Collision', other),
          p2 = comps('Position',  other),
          dy = p1.y - p2.y,
          theta = b.maxTheta * 2 * dy / c2.h;

      m.vx = m.vmax * Math.cos(theta) * -Math.sign(m.vx);
      m.vy = m.vmax * Math.sin(theta);
    }
  }
}
