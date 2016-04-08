module.exports = {
  name:  'Lifespan',
  phase: 'physics',
  deps:  ['Lifespan'],

  update(id, [l], { comps, loop }) {
    l.life -= loop.step;
    if (l.life <= 0) comps.add('Death', id);
  }
};
