module.exports = {
  name:  'Ephemeral',
  phase: 'physics',
  deps:  ['Ephemeral', 'Position', 'Size'],

  update(id, [e, p, s], { comps }) {
    var l = p.x - s.w / 2,
        r = p.x + s.w / 2,
        t = p.y - s.h / 2,
        b = p.y + s.h / 2;

    if (
      l < e.xmin ||
      r > e.xmax ||
      t < e.ymin ||
      b > e.ymax
    ) comps.add('Death', id);
  }
}
