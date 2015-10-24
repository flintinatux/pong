import m from 'mithril';

export function controller(args, extras) {
  return {};
}

export function view(ctrl, { ball }, extras) {
  let style = {
    height: 2*ball.radius + '%',
    width:  2*ball.radius + '%',
    top:    ball.y - ball.radius + '%',
    left:   ball.x - ball.radius + '%',
  };

  return m('.ball', { style });
}

export default { controller, view };
