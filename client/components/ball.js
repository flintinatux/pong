import m from 'mithril';

export function controller(args, extras) {
  return {};
}

export function view(ctrl, { ball }, extras) {
  let style = {
    height: ball.size() + '%',
    width:  ball.size() + '%',
    top:    ball.y() - ball.size()/2 + '%',
    left:   ball.x() - ball.size()/2 + '%',
  };

  return m('.ball', { style });
}

export default { controller, view };
