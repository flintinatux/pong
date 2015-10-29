import inRange from 'lodash/number/inRange';
import max from 'lodash/math/max';

function collide(game, A, handlers) {
  if (!A.collider) throw new Error(`${A.type} is not a collider`);
  game.objects.forEach(checkCollision);

  function checkCollision(B) {
    if (!B.collider || A === B) return;

    let Li = inRange(A.x, B.x, B.x + B.width);
    let Ri = inRange(B.x, A.x, A.x + A.width);
    let Ti = inRange(A.y, B.y, B.y + B.height);
    let Bi = inRange(B.y, A.y, A.y + A.height);

    let Lo = B.x + B.width  - A.x;
    let Ro = A.x + A.width  - B.x;
    let To = B.y + B.height - A.y;
    let Bo = A.y + A.height - B.y;

    let side = (function() {
      switch (true) {
        case (Ti && Li):
          return Lo > To ? 'top' : 'left';
        case (Ti && Ri):
          return Ro > To ? 'top' : 'right';
        case (Bi && Li):
          return Lo > Bo ? 'bottom' : 'left';
        case (Bi && Ri):
          return Ro > Bo ? 'bottom' : 'right';
        default:
          return null;
      }
    })();

    if (side) handlers[B.type](side, B);
  }
}

export default collide;
