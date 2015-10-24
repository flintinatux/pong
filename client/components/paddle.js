import m from 'mithril';

export function controller(args, extras) {
  return {};
}

export function view(ctrl, args, extras) {
  let { player } = args;

  return m('.paddle', { className: player });
}

export default { controller, view };
