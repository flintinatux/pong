const m = require('mithril');

const Game  = require('./game');
const Score = require('./score');

exports.view = function(ctrl, args, extras) {
  return m('.main', [
    m('.header', [
      m(Score, { player: 'one' }),
      m('.title', 'Battle Pong!'),
      m(Score, { player: 'two' })
    ]),

    m('.content', m(Game))
  ]);
};
