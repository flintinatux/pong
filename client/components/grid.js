import m from 'mithril';

import Ball   from './ball';
import Paddle from './paddle';
import Table  from './table';

export function controller(args, extras) {
  return {};
}

export function view(ctrl, args, extras) {
  return m('.grid', [
    m('.aspect-ratio'),
    m.component(Table),
    m.component(Paddle, { player: 'one' }),
    m.component(Paddle, { player: 'two' }),
    m.component(Ball)
  ]);
}

export default { controller, view };
