const { Ball   } = require('../data/templates');
const { Bounce } = require('../data/components');
const { randomSign } = require('../lib/util');

var vmax = Ball.Motion.vmax;

function factory() {
  var theta = Bounce.maxTheta * Math.random();

  return {
    type: 'Ball',
    state: {
      Motion: {
        vx: vmax * Math.cos(theta) * randomSign(),
        vy: vmax * Math.sin(theta) * randomSign()
      }
    }
  }
}

module.exports = factory;
