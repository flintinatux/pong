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
  let c = paddle.controls[paddle.player];

  game.on('update', update);

  function update() {
    if (c.up   in keys) return paddle.ay = -paddle.amax;
    if (c.down in keys) return paddle.ay =  paddle.amax;
    paddle.ay = 0;
  }
}

module.exports = PaddleControls;
