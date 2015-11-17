const _ = require('lodash');
const events = require('events');

const GameObject = require('./object');
const Loop = require('./loop');

const objects = require('../data/objects');

function Game() {
  let el,
      game = { render },
      loop = new Loop;

  game.vent    = new events.EventEmitter;
  game.objects = objects.map(_.partial(GameObject, game));

  _.extend(game, _.pick(loop, 'start', 'stop'));

  loop.on('render', render);
  loop.on('update', update);

  function invoke(action) {
    let i = game.objects.length;
    while (i--) game.objects[i][action]();
  }

  function render() {
    if (!el) {
      el = document.createElement('div');
      el.className = 'game';
      let grid = document.createElement('div');
      grid.className = 'grid';
      el.appendChild(grid);
    }

    for (let object of game.objects) object.render(el);

    game.vent.emit('rendered', { time: performance.now() });
    return el;
  }

  function update() {
    invoke('update');
    invoke('swap');
  }

  return game;
}

module.exports = Game;
