const _ = require('lodash');

const Components = require('../components');
const types = require('../lib/types');

function GameObject(game, { type, state }) {
  let components = [],
      proto   = types[type],
      current = _.extend({}, proto.properties, state),
      next    = _.extend({}, proto.properties, state),
      object  = { current, next, reset, swap, type, update };

  Object.setPrototypeOf(object, proto);

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
    components.unshift(_.get(Components, component)(game, object));
  }

  function reset() {
    _.extend(next, state);
  }

  function swap() {
    _.extend(current, next);
  }

  function update() {
    let i = components.length;
    while (i--) components[i]();
  }

  return object;
}

module.exports = GameObject;
