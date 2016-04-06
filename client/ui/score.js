const m = require('mithril');

const events = require('../lib/events');

exports.controller = function(args, extras) {
  var score = m.prop(0);
  events.on('goal-scored', incrScore);
  return { score, onunload };

  function incrScore({ player }) {
    if (player === args.player) score(score() + 1);
    m.redraw();
  }

  function onunload() {
    events.off('goal-scored', incrScore);
  }
};

exports.view = function(ctrl, args, extras) {
  return m('.score', { className: args.player }, ctrl.score());
};
