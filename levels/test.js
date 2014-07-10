//Set up
var game = new Game();
var board = new Board();
var user = new Character();
var renderer = new Renderer();
user.setSprite("green");
user.setPosition(1,1);
board.setSize(10,10);
board.setEnemy("block",9,9);
board.setEnemy("block",8,1);
board.setEnemy("fly",7,6);
board.setEnemy("slime",3,3);
board.setObstacle("gold",4,7);
board.setObstacle("silver",3,5);
board.setObstacle("bronze",3,6);
board.setObstacle("key",3,9);
board.setObstacle("switchOff",5,5);
board.setObstacle("switchOn",5,7);
board.setObstacle("bomb",5,9);
board.setObstacle("bomb",6,9);
board.setGoal(9,4);
for(var i = 0; i < 10; i++){
	board.setWall(0,i);
}
board.clear(0,3)
game.setCharacter(user);
game.setBoard(board);
renderer.setGame(game);
renderer.showDangerZones(true);
renderer.render();
