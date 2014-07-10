//Set up
var game = new Game();
var board = new Board();
var user = new Character();
var renderer = new Renderer();
user.setSprite("green");
user.setPosition(1,0);
board.setSize(6,10);
board.setGoal(2,9);
board.setObstacle("key",1,5);
board.setEnemy("block",1,2);
board.setEnemy("fly",3,7);
game.setCharacter(user);
game.setBoard(board);
renderer.setGame(game);
renderer.showDangerZones(true);
renderer.render();
