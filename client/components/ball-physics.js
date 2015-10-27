import checkCollisions from '../util/check-collisions';

function update(game, object) {
  let handlers = { paddle };
  checkCollisions(game, object, handlers);

  function paddle(other) {
    object.vx = -object.vx;
  }
}

export default { update };
