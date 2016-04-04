module.exports = {
  name:  'Controls',
  phase: 'inputs',
  deps:  ['Controls', 'Motion'],

  update(id, [c, m], { inputs }) {
    if (inputs.keys.has(c.up))   return m.ay = -m.amax;
    if (inputs.keys.has(c.down)) return m.ay =  m.amax;
    m.ay = 0;
  }
};
