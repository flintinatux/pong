const _ = require('lodash');
const EventEmitter = require('events');

const GameObject = require('./object');
const Loop = require('./loop');

const objects = require('../data/objects');

function Game() {
  let game = { __proto__: new EventEmitter, render },
      loop = new Loop;

  setupDom();

  game.objects = objects.map(_.partial(GameObject, game));

  _.extend(game, _.pick(loop, 'start', 'stop'));

  loop.on('render', render);
  loop.on('update', update);

  function invoke(action) {
    let i = game.objects.length;
    while (i--) game.objects[i][action]();
  }

  function render() {
    game.emit('render');
    game.emit('rendered', { time: performance.now() });
  }

  function setupDom() {
    game.el = document.createElement('div');
    game.el.className = 'game';
    let grid = document.createElement('div');
    grid.className = 'grid';
    game.el.appendChild(grid);
  }

  function update() {
    invoke('update');
    invoke('swap');
  }

  return game;
}

module.exports = Game;
