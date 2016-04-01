function Controls(paddle, { up, down }) {
  return function update({ inputs }) {
    if (inputs.keys.has(up))   return paddle('ay', -paddle('amax'));
    if (inputs.keys.has(down)) return paddle('ay',  paddle('amax'));
    paddle('ay', 0);
  }
}

module.exports = Controls;
