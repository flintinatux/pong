const _ = require('lodash');
const classnames = require('classnames');

const components = require('../components');
const types = require('../lib/types');

function GameObject(game, { type, state }) {
  let el,
      proto   = types[type],
      current = _.extend({}, proto.properties, state),
      next    = _.extend({}, proto.properties, state),
      object  = { __proto__: proto, current, next, components: [] };

  _.extend(object, { render, reset, swap, type, update });

  for (let property in proto.properties) {
    Object.defineProperty(object, property, { get, set });
    function get()    { return current[property];    }
    function set(val) { return next[property] = val; }
  }

  for (let property in proto.computed) {
    let expression = _.template(proto.computed[property]);
    let descriptor = { get() { return expression(this) } };
    Object.defineProperty(object,  property, descriptor);
    Object.defineProperty(current, property, descriptor);
    Object.defineProperty(next,    property, descriptor);
  }

  for (let component of proto.components) {
    object.components.unshift(_.get(components, component)(game, object));
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

  function update() {
    let i = object.components.length;
    while (i--) object.components[i]();
  }

  return object;
}

module.exports = GameObject;
