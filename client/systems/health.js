module.exports = {
  name:  'Health',
  phase: 'physics',
  deps:  ['Health', 'Size'],

  update(id, [health, size], ctx) {
    size.h = health.hp * health.sizeRatio;
  }
};
