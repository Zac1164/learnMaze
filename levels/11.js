//Set up
var game = new Game();
var board = new Board();
var user = new Character();
var renderer = new Renderer();
user.setSprite("green");
user.setPosition(0,0);
board.setSize(10,10);
board.setGoal(2,0);
board.setObstacle("bomb",0,9);
for(var i = 0; i < 10; i++){
  board.setWall(1,i);
}
for(var i = 0; i < 10; i++){
	board.setWall(i,7);
}
for(var i = 0; i < 10; i++){
	board.setWall(8,i);
}
board.clear(0,7);
board.clear(1,8);
board.clear(1,9);
board.clear(8,9);
board.clear(8,8);
board.clear(9,7);
board.clear(8,0);
board.setEnemy("block",6,2);
board.setEnemy("block",3,2);

board.setObstacle("gold",4,0);
board.setObstacle("silver",7,8);
board.setObstacle("bronze",9,4);
var keyXLocation = Math.floor(Math.random() * 9) + 1;
board.setObstacle("key",keyXLocation,9);

game.setCharacter(user);
game.setBoard(board);
renderer.setGame(game);
renderer.showDangerZones(true);
renderer.render();
