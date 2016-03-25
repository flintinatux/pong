const three = require('three');

function BallRender(game, ball) {
  let geometry = new three.CircleGeometry(ball.radius, 32);
  let players = {
    one: new three.MeshBasicMaterial({ color: parseInt(ball.color.one) }),
    two: new three.MeshBasicMaterial({ color: parseInt(ball.color.two) })
  };
  let mesh = new three.Mesh(geometry, players.one);

  game.world.scene.add(mesh);
  game.on('render', render);

  function render() {
    mesh.position.x = ball.x;
    mesh.position.y = ball.y;
  }
}

module.exports = BallRender;
