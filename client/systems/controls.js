module.exports = {
  name:  'Controls',
  phase: 'inputs',
  deps:  ['Controls', 'Motion'],

  update(id, [ctrl, m], { inputs }) {
    if (inputs.keys.has(ctrl.up))   return m.ay = -m.amax;
    if (inputs.keys.has(ctrl.down)) return m.ay =  m.amax;
    m.ay = 0;
  }
};
