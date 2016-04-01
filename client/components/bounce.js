const Manic = require('manic');

function Bounce(ball, { maxTheta }) {
  function collided(other, side) {
    var vx = ball('vx');
    var vy = ball('vy');

    if (side === 'top'    && vy < 0) return ball('vy', -vy);
    if (side === 'bottom' && vy > 0) return ball('vy', -vy);

    if (!other.isA('Paddle')) return;

    var vmax  = ball('vmax');
    var dy    = ball('y') - other('y');
    var theta = maxTheta * 2 * dy / other('h');
    ball('vx', vmax * Math.cos(theta) * -(Math.sign(vx)));
    ball('vy', vmax * Math.sin(theta));
  }

  return function update({ entities }) {
    Manic.collide(ball, entities, collided);
  }
}

module.exports = Bounce;
