const find  = require('lodash/find');
const Manic = require('manic');

function AI(paddle, opts) {
  var { difficulty, maxFactor, vin, vout } = opts;
  var factor, sign;
  randomize();

  function ball(other) {
    return other.isA('ball');
  }

  function randomize() {
    factor = Math.random() * maxFactor;
    sign   = Math.sign(Math.random() - 0.5);
  }

  return function update({ entities }) {
    Manic.collide(paddle, entities, randomize);

    var ball  = find(entities, ball);
    var delta = sign * factor * paddle('h');
    paddle('vmax', ball('player') !== paddle('player') ? vin : vout);
    paddle('ay', Math.sign(ball('y') - (paddle('y') + delta)) * difficulty * paddle('amax'));
  }
}

module.exports = AI;
