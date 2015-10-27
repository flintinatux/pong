const keys = {};

window.addEventListener('keydown', keydown);
window.addEventListener('keyup',   keyup);

function keydown(event) {
  keys[event.keyCode] = true;
}

function keyup(event) {
  delete keys[event.keyCode];
}

function update(game, object) {
  if (38 in keys) return object.vy = -0.8;
  if (40 in keys) return object.vy = 0.8;
  object.vy = 0;
}

export default { update };
