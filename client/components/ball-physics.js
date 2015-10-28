import collide from '../util/collide';

function update(game, object) {
  let handlers = { paddle, wall };
  collide(game, object, handlers);

  function paddle(other) {
    object.vx = -object.vx;
  }

  function wall(other) {
    object.vy = -object.vy;
  }
}

export default { update };
