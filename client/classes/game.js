import extend from 'lodash/object/extend';
import pluck  from 'lodash/collection/pluck';

function Game(config) {
  let game = {};

  let el, id, last;
  let lag = 0.0;

  game.objects = [];

  extend(game, { render, start, stop });

  function render() {
    if (!el) {
      el = document.createElement('div');
      el.className = 'game';
      let grid = document.createElement('div');
      grid.className = 'grid';
      el.appendChild(grid);
    }

    for (let object of game.objects) object.render(el);
    return el;
  }

  function start() {
    last = performance.now();
    id = requestAnimationFrame(tick);
  }

  function stop() {
    cancelAnimationFrame(id);
  };

  function tick(next) {
    lag += next - last;
    last = next;

    while (lag > config.step) {
      update();
      lag -= config.step;
    }

    render();
    id = requestAnimationFrame(tick);
  }

  function update() {
    for (let object of game.objects) object.update(game);
  }

  return game;
}

export default Game;
