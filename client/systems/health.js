module.exports = {
  name:  'Health',
  phase: 'physics',
  deps:  ['Health', 'Position', 'Size'],

  update(id, [health, pos, size], { comps }) {
    health.next = Math.min(health.max, health.next);
    var delta = Math.sign(health.next - health.hp);
    health.hp += delta;
    size.h = health.hp * health.sizeRatio;
    if (delta < 1) return;

    var contacts = comps('Contacts', id);
    if (contacts) {
      for (var other in contacts) {
        if (!comps('Wall', other)) continue;
        contacts[other] === 'top'
          ? pos.y += delta * health.sizeRatio / 2
          : pos.y -= delta * health.sizeRatio / 2;
      }
    }
  }
};
