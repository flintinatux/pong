function Scorekeeper(game, object) {
  let score = 0;

  game.on('score goal', keepScore);
  game.on('update', update);

  function keepScore({ player }) {
    if (player === object.player) score += 1;
  }

  function update() {
    object.content = score;
  }
}

module.exports = Scorekeeper;
