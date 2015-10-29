import collide from '../util/collide';
import move    from '../util/move';

function update(game, paddle) {
  let { y } = paddle;
  paddle.y += paddle.vy;
  collide(game, paddle, { wall });
  paddle.y = y;

  function wall(side, wall) {
    if (side === 'top'    && paddle.vy < 0) return paddle.vy = 0;
    if (side === 'bottom' && paddle.vy > 0) return paddle.vy = 0;
  }
}

export default { update };
