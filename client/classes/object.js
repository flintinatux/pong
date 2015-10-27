import m from 'mithril';
import classnames from 'classnames';
import extend from 'lodash/object/extend';

import types from '../data/types';
const components = require('../components/*.js', { mode: 'hash' });

function GameObject({ type, config, state }) {
  let object = {};

  object.view = m.component({ view });

  extend(object, state, { update });

  function update() {
    for (let component of types[type].components) {
      components[component].update(object);
    }
  }

  function view() {
    let className = classnames('object', type);
    let style = {
      height: object.height + '%',
      width:  object.width  + '%',
      left:   object.x + '%',
      top:    object.y + '%'
    };

    return m('div', { className, style });
  }

  return object;
}

export default GameObject;
