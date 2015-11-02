import classnames from 'classnames';
import extend from 'lodash/object/extend';

import types from '../lib/types';

const components = require('../components/**/*.js', { mode: 'hash' });

function GameObject({ type, state }) {
  let el,
      current = extend({}, state),
      next    = extend({}, state),
      object  = { current, next };

  extend(object, { render, reset, swap, type, update }, types[type]);

  for (let property of types[type].properties) {
    Object.defineProperty(object, property, { get, set });
    function get()    { return current[property];    }
    function set(val) { return next[property] = val; }
  }

  function render(parent) {
    if (!el) el = document.createElement('div');
    if (!el.parentNode) parent.appendChild(el);
    if (object.content !== undefined) el.innerHTML = object.content;
    el.className    = classnames('object', type);
    el.style.height = object.h + '%';
    el.style.width  = object.w + '%';
    el.style.left   = object.x + '%';
    el.style.top    = object.y + '%';
    return el;
  }

  function reset() {
    extend(next, state);
  }

  function swap() {
    extend(current, next);
  }

  function update(game) {
    for (let component of object.components) {
      components[component].update(game, object);
    }
  }

  return object;
}

export default GameObject;
