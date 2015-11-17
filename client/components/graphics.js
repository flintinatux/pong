const _ = require('lodash');
const classnames = require('classnames');

function Graphics(game, object) {
  let el = document.createElement('div');
  game.el.appendChild(el);

  game.on('render', render);

  function render() {
    if (object.content !== undefined) el.innerHTML = object.content;
    let variations = _.values(_.pick(object, object.variations));

    el.className    = classnames('object', object.type, variations);
    el.style.height = object.h + '%';
    el.style.width  = object.w + '%';
    el.style.left   = object.l + '%';
    el.style.top    = object.t + '%';
  }

  return _.noop;
}

module.exports = Graphics
