const Manic = require('manic');

function Blockable(paddle, { by }) {
  var { current, next } = paddle;

  function collided(other, side) {
    if (!other.isA(by)) return;
    if ((side === 'top'    && paddle('vy') < 0) ||
        (side === 'bottom' && paddle('vy') > 0)) {
      next.ay = 0;
      current.vy = 0;
    }
  }

  return function update({ entities }) {
    // Manic.move(paddle);
    Manic.collide(paddle, entities, collided);
    // next.y = current.y;
  }
}

module.exports = Blockable;
