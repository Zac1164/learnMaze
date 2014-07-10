//New Game
var game = new Game();
//New board
var board = new Board();
//New Character
var user = new Character();
//New Renderer; MUST BE NAMED renderer
var renderer = new Renderer();
//Set Sprite Design
user.setSprite("green");
//Set starting Position
user.setPosition(1,1);
//Set Board Size
board.setSize(10,10);
//Set Enemies
board.setEnemy("block",9,9);
board.setEnemy("fly",7,6);
board.setEnemy("slime",3,3);
//Set Obstacles
board.setObstacle("gold",4,7);
board.setObstacle("silver",3,5);
board.setObstacle("bronze",3,6);
board.setObstacle("key",3,9);
board.setObstacle("switchOff",5,5);
board.setObstacle("switchOn",5,7);
board.setObstacle("bomb",5,9);
//Set Goal
board.setGoal(9,4);
//Set Wall
board.setWall(0,5);
//Clear Spot on Board
board.clear(0,3)
//Build Hierarchy
game.setCharacter(user);
game.setBoard(board);
renderer.setGame(game);
//Show Danger Zone?
renderer.showDangerZones(true);
//Render Board
renderer.render();
