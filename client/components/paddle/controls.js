const controls = {
  one: { up: 87, down: 83 },  // w/s keys
  two: { up: 38, down: 40 }   // up/down arrows
}

const keys = {};

window.addEventListener('keydown', keydown);
window.addEventListener('keyup',   keyup);

function keydown(event) {
  keys[event.keyCode] = true;
}

function keyup(event) {
  delete keys[event.keyCode];
}

function PaddleControls(game, paddle) {
  let c = controls[paddle.player];

  function update() {
    if (c.up   in keys) return paddle.ay = -paddle.amax;
    if (c.down in keys) return paddle.ay =  paddle.amax;
    paddle.ay = 0;
  }

  return { update };
}

export default PaddleControls;
