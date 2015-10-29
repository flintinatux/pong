import inRange from 'lodash/number/inRange';
import max from 'lodash/math/max';

function collide(game, A, handlers) {
  if (!A.collider) throw new Error(`${A.type} is not a collider`);
  game.objects.forEach(checkCollision);

  function checkCollision(B) {
    if (!B.collider || A === B) return;

    let Li = inRange(A.x, B.x, B.x + B.w);
    let Ri = inRange(B.x, A.x, A.x + A.w);
    let Ti = inRange(A.y, B.y, B.y + B.h);
    let Bi = inRange(B.y, A.y, A.y + A.h);

    let Lo = B.x + B.w - A.x;
    let Ro = A.x + A.w - B.x;
    let To = B.y + B.h - A.y;
    let Bo = A.y + A.h - B.y;

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

    if (side && typeof handlers[B.type] === 'function')
      handlers[B.type](side, B);
  }
}

export default collide;
