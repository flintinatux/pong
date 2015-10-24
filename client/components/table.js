import m from 'mithril';

export function controller(args, extras) {
  return {};
}

export function view(ctrl, args, extras) {
  return m('.table', [
    m('.aspect-ratio'),
    m('.surface', [
      m('.half-court'),
      m('.doubles-line')
    ])
  ]);
}

export default { controller, view };
