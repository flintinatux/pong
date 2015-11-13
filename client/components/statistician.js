import _ from 'lodash';

const sample = 30;

function Statistician(game, object) {
  let deltas = new Array(sample),
      fps    = 0.0,
      last   = performance.now(),
      tail   = 0;

  game.vent.on('rendered', calcFPS);
  game.vent.on('started',  started);

  function calcFPS({ time }) {
    deltas[tail] = time - last;
    fps  = sample * 1000 / _.sum(deltas);
    last = time;
    tail = (tail + 1) % sample;
  }

  function started({ time }) {
    last = time;
  }

  function update() {
    object.content = `fps: ${_.round(fps, 3)}`;
  }

  return update;
}

export default Statistician;
