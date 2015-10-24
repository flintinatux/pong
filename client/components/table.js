import m from 'mithril';

import { table } from '../data/config.json';

export function controller(args, extras) {
  return {};
}

export function view(ctrl, args, extras) {
  let style = { 'padding-top': table.height + 2*table.margin + '%' };

  return m('.table', [
    m('.aspect-ratio', { style }),
    m('.surface', { style: { margin: table.margin + '%' } }, [
      m('.half-court'),
      m('.doubles-line')
    ])
  ]);
}

export default { controller, view };
