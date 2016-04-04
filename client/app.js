const keycode = require('keycode');
const Manic   = require('manic');

const components = require('./data/components.json');
const stage      = require('./data/stage.json');
const systems    = require('./systems');
const templates  = require('./data/templates.json');

var manic = Manic(document.getElementById('game'), 0.52);

manic.components(components);
manic.templates(templates);
systems.forEach(manic.system);
manic.stage(stage);

var running = true;

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
