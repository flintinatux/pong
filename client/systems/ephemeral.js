module.exports = {
  name:  'Ephemeral',
  phase: 'physics',
  deps:  ['Ephemeral', 'Position', 'Render'],

  update(id, [e, p, r], { comps }) {
    var l = p.x - r.w / 2,
        r = p.x + r.w / 2,
        t = p.y - r.h / 2,
        b = p.y + r.h / 2;

    if (
      l < e.xmin ||
      r > e.xmax ||
      t < e.ymin ||
      b > e.ymax
    ) comps.add('Death', id);
  }
}
