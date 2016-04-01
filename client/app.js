const keycode = require('keycode');
const Manic   = require('manic');

const comps = require('./components');
const stage = require('./data/stage.json');
const types = require('./data/types.json');

var manic = Manic(document.getElementById('game'), 0.52);

for (var name in comps) manic.component(name, comps[name]);
manic.types(types);
manic.stage(stage);

var running;

window.addEventListener('keydown', function(e) {
  if (keycode(e) !== 'space') return;
  if (running) {
    running = false;
    manic.stop();
  } else {
    running = true;
    manic.start();
  }
});
