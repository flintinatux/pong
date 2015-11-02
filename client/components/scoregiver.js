import collide from '../lib/collide';

function update(game, goal) {
  collide(game, goal, { ball });

  function ball(side, ball) {
    game.scores[goal.player] += 1;
    ball.reset();
  }
}

export default { update };
