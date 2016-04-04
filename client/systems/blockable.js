module.exports = {
  name:  'Blockable',
  phase: 'physics',
  deps:  ['Contacts', 'Motion', 'Blockable'],

  update(id, [contacts, m], ctx) {
    for (var id in contacts) {
      var side = contacts[id];

      if (
        (side === 'top'    && (m.vy < 0 || m.ay < 0)) ||
        (side === 'bottom' && (m.vy > 0 || m.ay > 0))
      ) {
        return m.vy = m.ay = 0;
      }

      if (
        (side === 'left'  && (m.vx < 0 || m.ax < 0)) ||
        (side === 'right' && (m.vx > 0 || m.ax > 0))
      ) {
        return m.vx = m.ax = 0;
      }
    }
  }
}
