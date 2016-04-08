module.exports = {
  name:  'Timer',
  phase: 'physics',
  deps:  ['Timer'],

  update(id, [t], { loop }) {
    t.time -= loop.step;
  }
}
