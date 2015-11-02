import assert  from 'assert';
import inRange from 'lodash/number/inRange';
import max     from 'lodash/math/max';

function collide(game, A, handlers) {
  game.objects.forEach(checkCollision);

  function checkCollision(B) {
    if (!B.collider || A === B) return;

    let Li = inRange(A.l, B.l, B.r);
    let Ri = inRange(B.l, A.l, A.r);
    let Ti = inRange(A.t, B.t, B.b);
    let Bi = inRange(B.t, A.t, A.b);

    let Lo = B.r - A.l;
    let Ro = A.r - B.l;
    let To = B.b - A.t;
    let Bo = A.b - B.t;

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
