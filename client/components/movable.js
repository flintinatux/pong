const move = require('../lib/move');

function Movable(game, object) {
  game.on('update', update);

  function update() {
    move(object);
  }
}

module.exports = Movable;
