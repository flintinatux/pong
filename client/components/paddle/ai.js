import find from 'lodash/collection/find';

import collide from '../../util/collide';

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
  let by = ball.y + ball.h / 2;
  let py = paddle.y + paddle.h / 2;
  let delta = sign * factor * paddle.h;
  paddle.vy = Math.sign(by - (py + delta)) * difficulty * paddle.vmax;
}

export default { update };
