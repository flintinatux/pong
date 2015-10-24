import extend from 'lodash/object/extend';
import m from 'mithril';

import Ball from './ball';

function Game() {
  let g = window.g = {};

  g.ball  = new Ball;

  extend(g, { stop, tick });

  function stop() {
    cancelAnimationFrame(g.id);
  };

  function tick() {
    g.ball.tick();
    m.redraw();
    g.id = requestAnimationFrame(tick);
  }

  g.tick();
  // setTimeout(g.stop, 2000);
  return g;
}

export default Game;
