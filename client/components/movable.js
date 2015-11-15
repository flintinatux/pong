const move = require('../lib/move');

function Movable(game, object) {

  function update() {
    move(object);
  }

  return update;
}

module.exports = Movable;
