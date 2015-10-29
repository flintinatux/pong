const keys = {};

window.addEventListener('keydown', keydown);
window.addEventListener('keyup',   keyup);

function keydown(event) {
  keys[event.keyCode] = true;
}

function keyup(event) {
  delete keys[event.keyCode];
}

function update(game, paddle) {
  if (38 in keys) return paddle.vy = -paddle.vmax;
  if (40 in keys) return paddle.vy = paddle.vmax;
  paddle.vy = 0;
}

export default { update };
