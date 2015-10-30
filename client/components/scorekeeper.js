function update(game, score) {
  score.content = game.scores[score.player];
}

export default { update };
