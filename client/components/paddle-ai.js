import find from 'lodash/collection/find';

function update(game, paddle) {
  let ball = find(game.objects, { type: 'ball' });
  let by = ball.y + ball.h / 2;
  let py = paddle.y + paddle.h / 2;
  paddle.vy = Math.sign(by - py) * 0.85 * paddle.vmax;
}

export default { update };
