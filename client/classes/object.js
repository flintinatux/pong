const _ = require('lodash');

const components = require('../components');
const types = require('../lib/types');

function GameObject(game, { type, state }) {
  let proto   = types[type],
      current = _.extend({}, proto.properties, state),
      next    = _.extend({}, proto.properties, state),
      object  = { __proto__: proto, components: [], current, next };

  _.extend(object, { reset, swap, type, update });

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
