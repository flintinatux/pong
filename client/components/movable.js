function update(game, object) {
  object.x = object.x + object.vx;
  object.y = object.y + object.vy;
}

export default { update };
