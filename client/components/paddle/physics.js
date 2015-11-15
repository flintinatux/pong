const collide = require('../../lib/collide');
const move    = require('../../lib/move');

function PaddlePhysics(game, paddle) {
  let { current, next } = paddle;

  function update() {
    move(paddle);
    collide(game, next, { wall });
    next.y = current.y;
  }

  function wall(side, wall) {
    if ((side === 'top'    && next.vy < 0) ||
        (side === 'bottom' && next.vy > 0))
      next.ay = current.vy = 0;
  }

  return update;
}

module.exports = PaddlePhysics;
