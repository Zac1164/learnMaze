//Set up
var game = new Game();
var board = new Board();
var user = new Character();
var renderer = new Renderer();
user.setSprite("green");
user.setPosition(0,0);
board.setSize(10,10);
board.setGoal(9,9);
board.setObstacle("bomb",0,9);
for(var i = 0; i < 10; i++){
  board.setWall(1,i);
}
for(var i = 0; i < 10; i++){
	board.setWall(i,7);
}
board.clear(0,7);
board.clear(1,8);
board.clear(1,9);
game.setCharacter(user);
game.setBoard(board);
renderer.setGame(game);
renderer.showDangerZones(true);
renderer.render();
