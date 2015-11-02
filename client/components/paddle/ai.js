import find from 'lodash/collection/find';

import collide from '../../lib/collide';

const difficulty = 0.9;
let factor, sign;
randomize();

function randomize() {
  factor = Math.random() * 0.35;
  sign   = Math.sign(Math.random() - 0.5);
}

function update(game, paddle) {
  collide(game, paddle, { ball: randomize });
  let ball = find(game.objects, { type: 'ball' });
  let delta = sign * factor * paddle.h;
  paddle.vy = Math.sign(ball.y - (paddle.y + delta)) * difficulty * paddle.vmax;
}

export default { update };
