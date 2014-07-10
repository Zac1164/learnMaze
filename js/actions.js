
var numMoves = 0;

/**
 * Move character
 * @param {string} direction Direction to move
 */
function move(direction){
  if(!isWall(direction) && !renderer.game.isDead() && !renderer.game.isComplete()){
    renderer.game.move(direction,numMoves);
    renderer.render();
    numMoves++;
  }
}


/**
 * Check whether an adjacent square is dangerous
 * @param {string} direction Direction to examine
 * @returns {boolean} Whether or not queried adjacent square is dangerous
 */
function isDangerous(direction){
  return renderer.game.isDangerous(direction);
}

/**
 * Check whether an adjacent square is a wall
 * @param {string} direction Direction to examine
 * @returns {boolean} Whether or not queried adjacent square is a wall
 */
function isWall(direction){
  return renderer.game.isWall(direction);
}

/**
 * Check whether the game is complete
 * @returns {boolean} Whether the game is complete
 */
function isComplete(){
  return renderer.game.isComplete();
}

/**
 * Examines the contents of the square that the character is on when called
 * @returns {string} Item type that exists at character's location
 */
function examine(){
  return game.examine();
}

/**
 * Checks state of switch at character's location
 * @returns {boolean} State of switch at character's location
 */
function isSwitchOn(){
  return game.isSwitchOn();
}

/**
 * Picks up item at character's location
 */
function pickUp(){
  if(!renderer.game.isDead() && !renderer.game.isComplete()){
    game.pickUp();
    renderer.render();
  }
}

/**
 * Flip the switch from on to off or vice versa at character's location
 */
function flipSwitch(){
  if(!renderer.game.isDead() && !renderer.game.isComplete()){
    game.flipSwitch();
    renderer.render();
  }
}
