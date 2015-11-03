import _ from 'lodash';
import classnames from 'classnames';

import types from '../lib/types';

const components = require('../components/**/*.js', { mode: 'hash' });

function GameObject({ type, state }) {
  let el,
      proto   = types[type],
      current = _.extend({}, proto.properties, state),
      next    = _.extend({}, proto.properties, state),
      object  = { __proto__: proto, current, next };

  _.extend(object, { render, reset, swap, type, update });

  for (let property in proto.properties) {
    Object.defineProperty(object, property, { get, set });
    function get()    { return current[property];    }
    function set(val) { return next[property] = val; }
  }

  for (let property in proto.computed) {
    let expression = _.template(proto.computed[property]);
    function get() { return expression(this); }
    Object.defineProperty(object,  property, { get });
    Object.defineProperty(current, property, { get });
    Object.defineProperty(next,    property, { get });
  }

  function render(parent) {
    if (!el) el = document.createElement('div');
    if (!el.parentNode) parent.appendChild(el);
    if (object.content !== undefined) el.innerHTML = object.content;
    let variations = _.values(_.pick(object, object.variations));

    el.className    = classnames('object', type, variations);
    el.style.height = object.h + '%';
    el.style.width  = object.w + '%';
    el.style.left   = object.l + '%';
    el.style.top    = object.t + '%';
    return el;
  }

  function reset() {
    _.extend(next, state);
  }

  function swap() {
    _.extend(current, next);
  }

  function update(game) {
    for (let component of object.components) {
      components[component].update(game, object);
    }
  }

  return object;
}

export default GameObject;
