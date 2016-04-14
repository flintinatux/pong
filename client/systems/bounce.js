module.exports = {
  name:  'Bounce',
  phase: 'physics',
  deps:  ['Bounce', 'Contacts', 'Motion', 'Player', 'Position'],

  update(id, [b, contacts, m, player, p1], { comps }) {
    for (var other in contacts) {
      var side = contacts[other];

      if (comps('Wall', other)) {
        if (side === 'top'    && m.vy < 0) { m.vy *= -1; continue; }
        if (side === 'bottom' && m.vy > 0) { m.vy *= -1; continue; }
        continue;
      }

      if (!comps('Paddle', other)) continue;

      if (side === 'left'   && m.vx > 0) continue;
      if (side === 'right'  && m.vx < 0) continue;

      var s2 = comps('Size', other),
          p2 = comps('Position', other),
          dy = p1.y - p2.y,
          theta = b.maxTheta * 2 * dy / s2.h;

      m.vx = m.vmax * Math.cos(theta) * -Math.sign(m.vx);
      m.vy = m.vmax * Math.sin(theta);

      player.prev = player.name;
      player.name = comps('Player', other).name;
    }
  }
};
