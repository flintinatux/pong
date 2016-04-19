module.exports = {
  name:  'Score',
  phase: 'physics',
  deps:  ['Score', 'Text'],

  update(id, [score, text], manic) {
    text.content = score.points;
  }
};
