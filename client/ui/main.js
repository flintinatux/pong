const m = require('mithril');

const Game = require('./game');

exports.view = function(ctrl, args, extras) {
  return m('.main', [
    m('.header', [
      m('h1.title', 'Battle Pong!')
    ]),

    m('.content', m(Game))
  ]);
};
