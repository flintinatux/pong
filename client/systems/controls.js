module.exports = {
  name:  'Controls',
  phase: 'inputs',
  deps:  ['Controls', 'Motion'],

  update(id, [ctrl, m], ctx) {
    if (ctrl.up)   return m.ay = -m.amax;
    if (ctrl.down) return m.ay =  m.amax;
    m.ay = 0;
  }
};
