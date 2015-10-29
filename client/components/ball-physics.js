import collide from '../util/collide';

const maxTheta = 0.25 * Math.PI;

function update(game, ball) {
  let handlers = { paddle, wall };
  collide(game, ball, handlers);

  function horizontal(side) {
    return ['left', 'right'].indexOf(side) > -1;
  }

  function paddle(side, paddle) {
    if (vertical(side)) return ball.vy = -ball.vy;
    if (side === 'left'  && ball.vx > 0) return;
    if (side === 'right' && ball.vx < 0) return;
    if (horizontal(side)) {
      let { vx, vy } = ball;
      let v = (vx**2 + vy**2)**0.5;
      let dy = (ball.y + ball.h/2) - (paddle.y + paddle.h/2);
      let theta = maxTheta * 2 * dy / paddle.h;
      ball.vx = v * Math.cos(theta) * -(Math.sign(vx));
      ball.vy = v * Math.sin(theta);
    }
  }

  function vertical(side) {
    return ['top', 'bottom'].indexOf(side) > -1;
  }

  function wall(side, wall) {
    if (horizontal(side)) return ball.vx = -ball.vx;
    if (vertical(side))   return ball.vy = -ball.vy;
  }
}

export default { update };
