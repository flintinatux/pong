import _ from 'lodash';

import collide from '../../lib/collide';

const difficulty = 1.0;
let factor, sign;
randomize();

function randomize() {
  factor = Math.random() * 0.35;
  sign   = Math.sign(Math.random() - 0.5);
}

function update(game, paddle) {
  collide(game, paddle, { ball: randomize });
  let ball = _.find(game.objects, { type: 'ball' });
  let delta = sign * factor * paddle.h;
  paddle.ay = Math.sign(ball.y - (paddle.y + delta)) * difficulty * paddle.amax;
}

export default { update };
