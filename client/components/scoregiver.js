const _ = require('lodash');

const collide = require('../lib/collide');

function Scoregiver(game, object) {
  game.on('update', update);

  function ball(side, ball) {
    game.emit('score goal', _.pick(object, 'player'));
    ball.reset();
  }

  function update() {
    collide(game, object, { ball });
  }
}

module.exports = Scoregiver;
