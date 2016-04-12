module.exports = {
  name:  'Bullets',
  phase: 'physics',
  deps:  ['Bullets'],

  update(id, [bullets], { comps }) {
    comps.add('Gun', id, bullets);
    comps.remove('Bullets', id);
  }
};
