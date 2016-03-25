const _     = require('lodash');
const three = require('three');

function World(game) {
  let camera   = new three.OrthographicCamera(-50, 50, 26, -26, -100, 100),
      renderer = new three.WebGLRenderer({ antialias: true }),
      scene    = new three.Scene,
      world    = { scene, el: renderer.domElement };

  renderer.setClearColor(0xFFFFFF);
  scene.add(camera);

  window.addEventListener('resize', _.throttle(resize, 100));
  game.once('render', resize);
  game.on('post-render', render);

  function render() {
    renderer.render(scene, camera);
  }

  function resize() {
    let parent = renderer.domElement.parentElement;
    if (parent) {
      let width = parent.clientWidth;
      renderer.setSize(width, width * 26/50);
    }
  }

  return world;
}

module.exports = World;
