import m from 'mithril';

import Ball from './ball';

function Game() {
  let g = window.g = {};

  g.ball  = new Ball;
  g.start = tick;
  g.stop  = stop;

  function tick() {
    g.ball.tick();
    m.redraw();
    g.id = requestAnimationFrame(tick);
  }

  function stop() {
    cancelAnimationFrame(g.id);
  };

  g.start();
  setTimeout(g.stop, 2000);
  return g;
}

export default Game;
