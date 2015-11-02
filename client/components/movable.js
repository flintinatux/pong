function update(game, object) {
  let { next } = object;
  next.x += next.vx;
  next.y += next.vy;
}

export default { update };
