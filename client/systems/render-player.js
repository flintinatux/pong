module.exports = {
  name:  'RenderPlayer',
  phase: 'render',
  deps:  ['Player', 'Render'],

  update(id, [p, r], { dom }) {
    var el = dom.get(id);
    el.classList.add(p.name);
  }
};
