import m from 'mithril';

import Ball   from './ball';
import Game   from '../data/game';
import Paddle from './paddle';
import Table  from './table';

export function controller(args, extras) {
  return { game: new Game };
}

export function view(ctrl, args, extras) {
  let { ball } = ctrl.game;

  return m('.game', [
    m('.aspect-ratio'),
    m.component(Table),
    m.component(Paddle, { player: 'one' }),
    m.component(Paddle, { player: 'two' }),
    m.component(Ball, { ball })
  ]);
}

export default { controller, view };
