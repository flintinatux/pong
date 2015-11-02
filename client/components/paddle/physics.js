import collide from '../../lib/collide';

function update(game, paddle) {
  let { next, y } = paddle;
  next.y += next.vy;
  collide(game, next, { wall });
  next.y = y;

  function wall(side, wall) {
    if (side === 'top'    && next.vy < 0) return next.vy = 0;
    if (side === 'bottom' && next.vy > 0) return next.vy = 0;
  }
}

export default { update };
