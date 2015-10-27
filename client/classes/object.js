import m from 'mithril';
import extend from 'lodash/object/extend';

import types from '../data/types';
const components = require('../components/*.js', { mode: 'hash' });

function GameObject({ type, config, state }) {
  let object = {};

  object.view = m.component({ view });

  extend(object, state, { type, update });

  function update() {
    for (let component of types[type].components) {
      components[component].update(object);
    }
  }

  function view() {
    let style = {
      height: object.height + '%',
      width:  object.radius + '%',
      left:   object.x + '%',
      top:    object.y + '%'
    };

    return m('div', { style, className: object.type });
  }

  return object;
}

export default GameObject;
