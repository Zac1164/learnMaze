/**
 * Board for maze
 * @class Board
 */
Board = function() {
  //default width
  this.width = 0;
  //default height
  this.height = 0;
  //number of keys
  this.keys = 0;
  //number of switches
  this.switches = 0;
};

/**
 * Set board size
 * @param {int} width Width of board
 * @param {int} height Height of board
 */
Board.prototype.setSize = function(width,height) {
  this.width = width;
  this.height = height;
  //item locations
  this.objects = new Array(height);
  for (var i = 0; i < height; i++) {
    this.objects[i] = new Array(width);
  }
  //dangerous squares
  this.dangerous = new Array(height);
  for (var i = 0; i < height; i++) {
    this.dangerous[i] = new Array(width);
  }
  //record step/movement number at each square
  this.stepNum = new Array(height);
  for (var i = 0; i < height; i++) {
    this.stepNum[i] = new Array(width);
  }
  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      this.stepNum[i][j] = -1;
    }
  }
};

/**
 * Get maze width
 * @returns {int} Width of board
 */
Board.prototype.getWidth = function() {
  return this.width;
};

/**
 * Get maze height
 * @returns {int} Height of board
 */
Board.prototype.getHeight = function() {
  return this.height;
};

/**
 * Set an obstacle
 * @param {string} etype Type of obstacle
 * @param {int} x x-position
 * @param {int} y y-position
*/
Board.prototype.setObstacle = function(etype,x,y) {
  if(etype === "key" || etype === "switchOff" || etype === "switchOn" || etype === "gold" || etype === "silver" || etype === "bronze" || etype === "bomb"){
    this.objects[y][x] = etype;
  }
  if(etype === "key"){
    this.keys++;
  }
  if(etype === "switchOn" || etype === "switchOff"){
    this.switches++;
  }
};

/**
 * Clear a square
 * @param {int} x x-position
 * @param {int} y y-position
*/
Board.prototype.clear = function(x,y) {
  var etype = this.objects[y][x];
  if(etype === "key"){
    this.keys--;
  }
  if(etype === "switchOn" || etype === "switchOff"){
    this.switches--;
  }
  this.objects[y][x] = "";
};

/**
 * Set a wall
 * @param {int} x x-position
 * @param {int} y y-position
*/
Board.prototype.setWall = function(x,y) {
  this.objects[y][x] = "wall";
};


/**
 * Set the goal
 * @param {int} x x-position
 * @param {int} y y-position
*/
Board.prototype.setGoal = function(x,y) {
  this.objects[y][x] = "goal";
};

/**
 * Set an enemy
 * @param {string} etype Type of enemy
 * @param {int} x x-position
 * @param {int} y y-position
*/
Board.prototype.setEnemy = function(etype,x,y) {
  if(etype === "block" || etype === "fly" || etype === "slime"){
    this.objects[y][x] = etype;
  }
};

/**
 * Get object at location
 * @param {int} x x-position
 * @param {int} y y-position
 * @returns {string} Type of object
 */
Board.prototype.getObject = function(x,y) {
  return this.objects[y][x];
};

/**
 * Calculate dangerous squares
*/
Board.prototype.calculateDangerZones = function() {
  this.clearDangerZones();
  for(var i = 0; i < this.height; i++){
    for(var j = 0; j < this.width; j++){
      var objectAtLocation = this.objects[i][j];
      if(objectAtLocation === "bomb"){
        this.dangerous[i][j] = 1;
      }
      else if(objectAtLocation === "block"){
        if(i < this.height && j < this.width && i >= 0 && j >= 0){
          this.dangerous[i][j] = true;
        }
        if(i-1 < this.height && j < this.width && i-1 >= 0 && j >= 0){
          this.dangerous[i-1][j] = true;
        }
        if(i < this.height && j-1 < this.width && i >= 0 && j-1 >= 0){
          this.dangerous[i][j-1] = true;
        }
        if(i-1 < this.height && j-1 < this.width && i-1 >= 0 && j-1 >= 0){
          this.dangerous[i-1][j-1] = true;
        }
        if(i+1 < this.height && j < this.width && i+1 >= 0 && j >= 0){
          this.dangerous[i+1][j] = true;
        }
        if(i < this.height && j+1 < this.width && i+1 >= 0 && j+1 >= 0){
          this.dangerous[i][j+1] = true;
        }
        if(i+1 < this.height && j+1 < this.width && i+1 >= 0 && j+1 >= 0){
          this.dangerous[i+1][j+1] = true;
        }
        if(i-1 < this.height && j+1 < this.width && i-1 >= 0 && j+1 >= 0){
          this.dangerous[i-1][j+1] = true;
        }
        if(i+1 < this.height && j-1 < this.width && i+1 >= 0 && j-1 >= 0){
          this.dangerous[i+1][j-1] = true;
        }
      }
      else if(objectAtLocation === "fly"){
        if(i < this.height && j < this.width && i >= 0 && j >= 0){
          this.dangerous[i][j] = true;
        }
        if(i-1 < this.height && j < this.width && i-1 >= 0 && j >= 0){
          this.dangerous[i-1][j] = true;
        }
        if(i-2 < this.height && j < this.width && i-2 >= 0 && j >= 0){
          this.dangerous[i-2][j] = true;
        }
        if(i < this.height && j-1 < this.width  && i >= 0 && j-1 >= 0){
          this.dangerous[i][j-1] = true;
        }
        if(i < this.height && j-2 < this.width  && i >= 0 && j-2 >= 0){
          this.dangerous[i][j-2] = true;
        }
        if(i+1 < this.height && j < this.width && i+1 >= 0 && j >= 0){
          this.dangerous[i+1][j] = true;
        }
        if(i+2 < this.height && j < this.width && i+2 >= 0 && j >= 0){
          this.dangerous[i+2][j] = true;
        }
        if(i < this.height && j+1 < this.width  && i >= 0 && j+1 >= 0){
          this.dangerous[i][j+1] = true;
        }
        if(i < this.height && j+2 < this.width  && i >= 0 && j+2 >= 0){
          this.dangerous[i][j+2] = true;
        }
      }
      else if(objectAtLocation === "slime"){
        if(i < this.height && j < this.width){
          this.dangerous[i][j] = true;
        }
        if(i-1 < this.height && j < this.width && i-1 >= 0 && j >= 0){
          this.dangerous[i-1][j] = true;
        }
        if(i < this.height && j-1 < this.width  && i >= 0 && j-1 >= 0){
          this.dangerous[i][j-1] = true;
        }
        if(i+1 < this.height && j < this.width && i+1 >= 0 && j >= 0){
          this.dangerous[i+1][j] = true;
        }
        if(i < this.height && j+1 < this.width  && i >= 0 && j+1 >= 0){
          this.dangerous[i][j+1] = true;
        }
      }
    }
  }
};

/**
 * Clear dangerous squares
*/
Board.prototype.clearDangerZones = function() {
  for(var i = 0; i < this.height; i++){
    for(var j = 0; j < this.width; j++){
      this.dangerous[i][j] = false;
    }
  }
};

/**
 * Check if dangerous at location
 * @param {int} x x-position
 * @param {int} y y-position
 * @returns {boolean} Danger level
 */
Board.prototype.isDangerous = function(x,y) {
  return this.dangerous[y][x];
};

/**
 * Get total number of keys
 * @returns {int} Number of keys
 */
Board.prototype.getNumKeys = function() {
  return this.keys;
};

/**
 * Get total number of switches
 * @returns {int} Number of switches
 */
Board.prototype.getNumSwitches = function() {
  return this.switches;
};

/**
 * Set step number at given location
 * @param {int} x x-position
 * @param {int} y y-position
 * @param {int} stepNum Step number
 */
Board.prototype.setStepNum = function(x,y,stepNum) {
  this.stepNum[y][x] = stepNum;
}

/**
 * Get step number at given location
 * @param {int} x x-position
 * @param {int} y y-position
 * @returns {int} Step number
 */
Board.prototype.getStepNum = function(x,y) {
  return this.stepNum[y][x];
}

/**
 * Get total number of switches in 'on' state
 * @returns {int} Number of switches in 'on' state
 */
Board.prototype.getSwitchesOn = function(){
  var numFlipped = 0;
  for (var i = 0; i < this.height; i++) {
    for (var j = 0; j < this.width; j++) {
      if(this.objects[i][j] === "switchOn"){
        numFlipped++;
      }
    }
  }
  return numFlipped;
}
