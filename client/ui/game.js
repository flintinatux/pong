const keycode = require('keycode');
const m       = require('mithril');
const Manic   = require('manic');

const components = require('../data/components.json');
const scenes     = require('../data/scenes');
const systems    = require('../systems');
const templates  = require('../data/templates.json');

exports.view = function(ctrl, args, extras) {
  return m('.game', { config });
};

function config(elem, isInit, ctx) {
  if (isInit) return;
  var manic   = Manic(elem, 0.52),
      running = false;

  manic.components(components);
  manic.templates(templates);
  systems.forEach(manic.system);
  manic.scene(scenes.one);

  window.addEventListener('keydown', pause);

  ctx.onunload = function() {
    manic.teardown();
    window.removeEventListener('keydown', pause);
  }

  function pause(e) {
    if (keycode(e) !== 'space') return;
    if (running) {
      running = false;
      manic.stop();
    } else {
      running = true;
      manic.start();
    }
  }
}
