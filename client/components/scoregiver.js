const Manic = require('manic');

function Scoregiver(goal, { player }) {
  function collided(other, side) {
    if (other.isA('Ball')) other.reset();
  }

  return function update({ entities }) {
    Manic.collide(goal, entities, collided);
  }
}

module.exports = Scoregiver;
