module.exports = {
  name:  'InputMap',
  phase: 'inputs',
  deps:  ['InputMap', 'Controls'],

  update(id, [inputMap, controls], { inputs }) {
    for (var ctrl in inputMap) {
      controls[ctrl] = inputs.keys.has(inputMap[ctrl]);
    }
  }
};
