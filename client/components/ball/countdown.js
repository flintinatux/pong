import config from '../../data/config';

let seconds = Math.floor(1000 / config.step);
let max     = 5 * seconds;
let count   = 0;
let direction = Math.sign(Math.random() - 0.5);

function update(game, ball) {
  if (stopped()) {
    if (count === 0) count = max;
    countdown();
  }

  function countdown() {
    count -= 1;
    ball.content = count ? Math.ceil(count / seconds) : '';
    if (count === 0) return start();
  }

  function start() {
    ball.vx = direction * ball.vmax;
    direction *= -1;
  }

  function stopped() {
    return ball.vx === 0 && ball.vy === 0;
  }
}

export default { update };
