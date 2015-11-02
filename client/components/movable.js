function update(game, object) {
  let { current, next, amax, vmax } = object;
  // let friction = 0;

  // if (amax && vmax) friction = -(amax / vmax);

  // if (next.ax || friction) next.vx = current.vx * (1 + friction) + next.ax;
  // if (next.ay || friction) next.vy = current.vy * (1 + friction) + next.ay;

  next.x += next.vx; //(current.vx + next.vx) / 2;
  next.y += next.vy; //(current.vy + next.vy) / 2;
}

export default { update };
