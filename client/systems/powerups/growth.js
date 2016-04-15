module.exports = {
  name:  'Grow',
  phase: 'physics',
  deps:  ['Growth', 'Health'],

  update(id, [growth, health], { comps }) {
    health.next += growth.hp;
    comps.remove('Growth', id);
  }
};
