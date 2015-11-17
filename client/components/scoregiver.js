const _ = require('lodash');

const collide = require('../lib/collide');

function Scoregiver(game, object) {

  function ball(side, ball) {
    game.emit('score goal', _.pick(object, 'player'));
    ball.reset();
  }

  function update() {
    collide(game, object, { ball });
  }

  return update;
}

module.exports = Scoregiver;
