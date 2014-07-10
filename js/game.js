/**
 * Controller for main game
 * @class Game
 */
Game = function() {
  //Value of coins collected
  this.coins = 0;
  //Number of keys collected
  this.keys = 0;
  //Number of moves/steps made
  this.numMoves = 0;
};

/**
 * Set board
 * @param {Board} board Game board
 */
Game.prototype.setBoard = function(board) {
  this.board = board;
};

/**
 * Set character
 * @param {Character} character Main protagonist
 */
Game.prototype.setCharacter = function(character) {
  this.character = character;
};

/**
 * Check whether a specified square is dangerous
 * @param {string} direction Direction to examine
 * @returns {boolean} Whether or not specified adjacent square is dangerous
 */
Game.prototype.isDangerous = function(direction){
  board.calculateDangerZones();
  var x = this.character.getX();
  var y = this.character.getY();
  switch(direction){
    case "up":
      y = y - 1;
      break;
    case "down":
      y = y + 1;
      break;
    case "left":
      x = x - 1;
      break;
    case "right":
      x = x + 1;
      break;
  }
  return board.isDangerous(x,y);
}

/**
 * Check whether an adjacent square is a wall
 * @param {string} direction Direction to examine
 * @returns {boolean} Whether or not queried adjacent square is a wall
 */
Game.prototype.isWall = function(direction){
  var x = this.character.getX();
  var y = this.character.getY();
  switch(direction){
    case "up":
      y = y - 1;
      break;
    case "down":
      y = y + 1;
      break;
    case "left":
      x = x - 1;
      break;
    case "right":
      x = x + 1;
      break;
  }
  if(x < 0 || y < 0 || x >= board.getWidth() || y >= board.getHeight()){
    return true;
  }
  var object = board.getObject(x,y);
  return object === "wall";
}

/**
 * Move character
 * @param {string} direction Move character in given direction
 * @param {int} stepNum Number of movements to this point
 */
Game.prototype.move = function(direction,stepNum){
  this.character.move(direction);
  var x = this.character.getX();
  var y = this.character.getY();
  this.board.setStepNum(x,y,stepNum);
  this.numMoves++;
}

/**
 * Check whether the game is complete
 * @returns {boolean} Whether the game is complete
 */
Game.prototype.isComplete = function(){
  if(this.keys !== board.getNumKeys() || board.getSwitchesOn() !== board.getNumSwitches()){
    return false;
  }
  var x = this.character.getX();
  var y = this.character.getY();
  return board.getObject(x,y) === "goal";
}

/**
 * Check whether the character is dead
 * @returns {boolean} Whether the character is dead
 */
Game.prototype.isDead = function(){
  var x = this.character.getX();
  var y = this.character.getY();
  return board.isDangerous(x,y);
}

/**
 * Examines the contents of the square that the character is on when called
 * @returns {string} Item type that exists at character's location
 */
Game.prototype.examine = function(){
  var x = this.character.getX();
  var y = this.character.getY();
  var object = board.getObject(x,y);
  if (object === "key"){
    return "key";
  }
  else if(object === "gold" || object === "silver" || object === "bronze"){
    return "coin";
  }
  else if(object === "switchOn" || object === "switchOff"){
    return "switch";
  }
  else{
    return "none"
  }
}

/**
 * Checks state of switch at character's location
 * @returns {boolean} State of switch at character's location
 */
Game.prototype.isSwitchOn = function(){
  var x = this.character.getX();
  var y = this.character.getY();
  var object = board.getObject(x,y);
  if(object === "switchOn"){
    return true;
  }
  else if(object === "switchOff"){
    return false;
  }
  else{
    alert("No switch!");
    return false;
  }
}

/**
 * Flip the switch from on to off or vice versa at character's location
 */
Game.prototype.flipSwitch = function(){
  var x = this.character.getX();
  var y = this.character.getY();
  var object = examine();
  if(object === "switch"){
    if(this.isSwitchOn()){
      board.objects[y][x] = "switchOff";
    }
    else{
      board.objects[y][x] = "switchOn";
    }
  }
}

/**
 * Get the number of keys collected
 * @returns {int} Number of keys collected
 */
Game.prototype.getNumKeys = function(){
  return this.keys;
}

/**
 * Get the value of coins collected
 * @returns {int} Value of coins collected
 */
Game.prototype.getCoinValue = function(){
  return this.coins;
}

/**
 * Picks up item at character's location
 */
Game.prototype.pickUp = function(){
  var x = this.character.getX();
  var y = this.character.getY();
  var object = this.examine();
  if(object === "key"){
    this.keys++;
    board.objects[y][x] = "";
  }
  else if(object === "coin"){
    if(board.getObject(x,y) === "gold"){
      this.coins = this.coins + 3;
    }
    else if(board.getObject(x,y) === "silver"){
      this.coins = this.coins + 2;
    }
    else if(board.getObject(x,y) === "bronze"){
      this.coins = this.coins + 1;
    }
    board.objects[y][x] = "";
  }
  else{
    alert("Space is empty or object cannot be picked up!");
  }
}

/**
 * Get the number of moves/steps made
 * @returns {int} Number of moves/steps made
 */
Game.prototype.getNumMoves = function(){
  return this.numMoves;
}
