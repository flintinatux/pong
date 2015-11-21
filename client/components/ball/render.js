const three = require('three');

function BallRender(game, ball) {
  // let geometry = new three.SphereGeometry(ball.radius);
  let geometry = new three.CircleGeometry(ball.radius);
  let material = new three.MeshBasicMaterial(0xA32100);
  let mesh = new three.Mesh(geometry, material);
  game.world.scene.add(mesh);

  game.on('render', render);

  function render() {
    mesh.position.x = ball.x;
    mesh.position.y = ball.y;
  }
}

module.exports = BallRender;
