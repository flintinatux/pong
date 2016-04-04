module.exports = {
  name:  'AdjustAI',
  phase: 'physics',
  deps:  ['AI', 'Contacts'],

  update(id, [ai, contacts], { comps }) {
    for (var other in contacts) {
      if (!comps('Ball', other)) continue;
      ai.factor = Math.random() * ai.maxFactor;
      ai.sign   = Math.sign(Math.random() - 0.5);
    }
  }
}
