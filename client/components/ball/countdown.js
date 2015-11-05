import config from '../../data/config';

const seconds = Math.floor(1000 / config.step);
const max     = 5 * seconds;

function BallCountdown(game, ball) {
  let count   = 0;
  let direction = Math.sign(Math.random() - 0.5);

  function countdown() {
    count -= 1;
    ball.content = count ? Math.ceil(count / seconds) : '';
    if (count === 0) return start();
  }

  function reset() {
    count = max;
  }

  function start() {
    ball.vx = direction * ball.vmax;
    direction *= -1;
  }

  function stopped() {
    return ball.vx === 0 && ball.vy === 0;
  }

  function update() {
    if (stopped()) {
      if (count === 0) reset();
      countdown();
    }
  }

  return { update };
}

export default BallCountdown;
