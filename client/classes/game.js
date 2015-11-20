const _ = require('lodash');
const EventEmitter = require('jvent');

const GameObject = require('./object');
const Loop = require('./loop');

const scene = require('../data/scene');

function Game() {
  let game = { render },
      loop = new Loop;

  Object.setPrototypeOf(game, new EventEmitter);

  setupDom();
  game.objects = scene.objects.map(_.partial(GameObject, game));

  _.extend(game, _.pick(loop, 'start', 'stop'));

  loop.on('render', render);
  loop.on('update', update);

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
    game.emit('update');
    game.emit('swap');
  }

  return game;
}

module.exports = Game;
