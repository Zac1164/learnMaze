//Set up
var game = new Game();
var board = new Board();
var user = new Character();
var renderer = new Renderer();
user.setSprite("green");
user.setPosition(0,0);
board.setSize(1,10);
board.setGoal(0,9);
board.setObstacle("switchOn",0,5);
board.setObstacle("switchOff",0,7);
game.setCharacter(user);
game.setBoard(board);
renderer.setGame(game);
renderer.showDangerZones(true);
renderer.render();
