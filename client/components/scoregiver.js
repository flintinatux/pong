import _ from 'lodash';

import collide from '../lib/collide';

function Scoregiver(game, object) {

  function ball(side, ball) {
    game.vent.emit('score goal', _.pick(object, 'player'));
    ball.reset();
  }

  function update() {
    collide(game, object, { ball });
  }

  return { update };
}

export default Scoregiver;
