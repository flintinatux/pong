import m from 'mithril';

function Ball() {
  let b = {};

  b.size = m.prop(2);
  b.x    = m.prop(50);
  b.y    = m.prop(31);
  b.vx   = m.prop(0.3);
  b.vy   = m.prop(0);

  b.tick = tick;

  function tick() {
    b.x( b.x() + b.vx() );
    b.y( b.y() + b.vy() );
  }

  return b;
}

export default Ball;
