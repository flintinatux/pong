function Scorekeeper(game, object) {
  let score = 0;

  game.on('score goal', keepScore);

  function keepScore({ player }) {
    if (player === object.player) score += 1;
  }

  function update() {
    object.content = score;
  }

  return update;
}

module.exports = Scorekeeper;
