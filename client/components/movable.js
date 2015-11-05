import move from '../lib/move';

function Movable(game, object) {

  function update() {
    move(object);
  }

  return { update };
}

export default Movable;
