const keys = {};

const controls = {
  one: { up: 87, down: 83 },
  two: { up: 38, down: 40 }
}

window.addEventListener('keydown', keydown);
window.addEventListener('keyup',   keyup);

function keydown(event) {
  keys[event.keyCode] = true;
}

function keyup(event) {
  delete keys[event.keyCode];
}

function update(game, paddle) {
  let c = controls[paddle.player];
  if (c.up   in keys) return paddle.vy = -paddle.vmax;
  if (c.down in keys) return paddle.vy =  paddle.vmax;
  paddle.vy = 0;
}

export default { update };
