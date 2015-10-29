import collide from '../util/collide';

function update(game, ball) {
  let handlers = { paddle: bouncer, wall: bouncer };
  collide(game, ball, handlers);

  function bouncer(side, other) {
    if (['left', 'right'].indexOf(side) > -1) return ball.vx = -ball.vx;
    if (['top', 'bottom'].indexOf(side) > -1) return ball.vy = -ball.vy;
  }
}

export default { update };
