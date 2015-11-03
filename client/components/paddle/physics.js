import collide from '../../lib/collide';
import move from '../../lib/move';

function update(game, paddle) {
  let { current, next, y } = paddle;
  move(paddle);
  collide(game, next, { wall });
  next.y = y;

  function wall(side, wall) {
    if ((side === 'top'    && next.vy < 0) ||
        (side === 'bottom' && next.vy > 0))
      next.ay = current.vy = 0;
  }
}

export default { update };
