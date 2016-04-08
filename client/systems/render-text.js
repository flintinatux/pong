module.exports = {
  name:  'RenderText',
  phase: 'render',
  deps:  ['Text', 'Render'],

  update(id, [t, r], { dom }) {
    var el = dom.get(id);
    el.textContent = t.content;
    el.style.fontSize = `${el.clientHeight}px`;
  }
};
