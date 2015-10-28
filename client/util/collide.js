import inRange from 'lodash/number/inRange';

function collide(game, object, handlers) {
  game.objects.forEach(checkCollision);

  function checkCollision(other) {
    if (collided(object, other) && typeof handlers[other.type] === 'function')
      handlers[other.type](other);
  }
}

function collided(A, B) {
  if (!A.collider || !B.collider || A === B) return false;
  let overlapX = inRange(A.x, B.x, B.x + B.width) ||
                 inRange(B.x, A.x, A.x + A.width);
  let overlapY = inRange(A.y, B.y, B.y + B.height) ||
                 inRange(B.y, A.y, A.y + A.height);
  return overlapX && overlapY;
}

export default collide;
