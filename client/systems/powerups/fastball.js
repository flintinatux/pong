module.exports = {
  name:  'Fastball',
  phase: 'physics',
  deps:  ['Fastball', 'Motion'],

  update(id, [f, m], { comps }) {
    m.vmax += f.dvmax;
    var theta = Math.atan2(m.vy, m.vx);
    m.vx = m.vmax * Math.cos(theta);
    m.vy = m.vmax * Math.sin(theta);
    comps.remove('Fastball', id);
  }
};
