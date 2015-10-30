import collide from '../../util/collide';

const maxTheta = 0.25 * Math.PI;

function update(game, ball) {
  if (stopped()) start();

  collide(game, ball, { paddle, wall, computer: paddle });

  function horizontal(side) {
    return ['left', 'right'].indexOf(side) > -1;
  }

  function paddle(side, paddle) {
    if (vertical(side)) return ball.vy *= -1;
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

  function start() {
    ball.vx = Math.sign(Math.random() - 0.5) * ball.vmax;
  }

  function stopped() {
    return ball.vx === 0 && ball.vy === 0;
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
