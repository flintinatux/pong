import extend from 'lodash/object/extend';
import m from 'mithril';

import { ball, table } from './config';

function Ball() {
  let b = {};

  extend(b, ball);
  extend(b, { tick });

  function tick() {
    b.x = b.x + b.vx;
    b.y = b.y + b.vy;

    // table bottom
    if ( (b.y + b.radius) >= (table.margin + table.height) ) return b.vy = -b.vy;

    // table top
    if ( (b.y - b.radius) <= table.margin ) return b.vy = -b.vy;
  }

  return b;
}

export default Ball;
