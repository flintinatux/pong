import _ from 'lodash';

import collide from '../../lib/collide';

const difficulty = 1.0;

function PaddleAI(game, paddle) {
  let factor, sign;
  randomize();

  function followBall() {
    let ball = _.find(game.objects, { type: 'ball' });
    let delta = sign * factor * paddle.h;
    paddle.vmax = ball.player !== paddle.player ? paddle.vin : paddle.vout;
    paddle.ay = Math.sign(ball.y - (paddle.y + delta)) * difficulty * paddle.amax;
  }

  function randomize() {
    factor = Math.random() * 0.35;
    sign   = Math.sign(Math.random() - 0.5);
  }

  function update() {
    collide(game, paddle, { ball: randomize });
    followBall();
  }

  return { update };
}

export default PaddleAI;
