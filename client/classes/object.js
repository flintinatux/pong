import classnames from 'classnames';
import extend from 'lodash/object/extend';

import types from '../data/types';
const components = require('../components/*.js', { mode: 'hash' });

function GameObject({ type, state }) {
  let el, object = {};
  let { proto } = types[type];
  if (proto) object.__proto__ = new GameObject({ type: proto });

  extend(object, { render, type, update }, types[type], state);

  function render(parent) {
    if (!el) el = document.createElement('div');
    if (!el.parentNode) parent.appendChild(el);
    el.className    = classnames('object', type);
    el.style.height = object.h + '%';
    el.style.width  = object.w + '%';
    el.style.left   = object.x + '%';
    el.style.top    = object.y + '%';
    return el;
  }

  function update(game) {
    for (let component of object.components) {
      components[component].update(game, object);
    }
  }

  return object;
}

export default GameObject;
