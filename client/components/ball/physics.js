import collide from '../../lib/collide';

const maxTheta = 0.25 * Math.PI;

function update(game, ball) {
  collide(game, ball, { paddle, wall, computer: paddle });

  function horizontal(side) {
    return ['left', 'right'].indexOf(side) > -1;
  }

  function paddle(side, paddle) {
    ball.player = paddle.player;
    if (side === 'top'    && ball.vy < 0) return ball.vy *= -1;
    if (side === 'bottom' && ball.vy > 0) return ball.vy *= -1;
    if (side === 'left'   && ball.vx > 0) return;
    if (side === 'right'  && ball.vx < 0) return;
    if (horizontal(side)) {
      let { vx, vmax } = ball;
      let dy = ball.y - paddle.y;
      let theta = maxTheta * 2 * dy / paddle.h;
      ball.vx = vmax * Math.cos(theta) * -(Math.sign(vx));
      ball.vy = vmax * Math.sin(theta);
    }
  }

  function vertical(side) {
    return ['top', 'bottom'].indexOf(side) > -1;
  }

  function wall(side, wall) {
    if (horizontal(side)) return ball.vx *= -1;
    if (vertical(side))   return ball.vy *= -1;
  }
}

export default { update };
