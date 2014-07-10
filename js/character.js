/**
 * Main protagonist
 * @class Character
 */
Character = function() {
  //Default character image
  this.sprite = "blue";
  //Default x position
  this.x = 0;
  //Default y position
  this.y = 0;
  //Default alive status
  this.alive = true;
};

/**
 * Set character sprite
 * @param {string} color Sprite's color
 */
Character.prototype.setSprite = function(color) {
  if (color === "blue" || color === "green" || color === "pink"){
    this.sprite = color;
  }
};

/**
 * Get character sprite
 * @returns {string} Character sprite
 */
Character.prototype.getSprite = function() {
  return this.sprite
};

/**
 * Set character position
 * @param {int} x Characters's position in the x-direction
 * @param {int} y Character's position in the y-direction
 */
Character.prototype.setPosition = function(x,y) {
  this.x = x;
  this.y = y;
};

/**
 * Get character's x-position
 * @returns {int} Character's x-position
 */
Character.prototype.getX = function() {
  return this.x
};

/**
 * Get character's y-position
 * @returns {int} Character's y-position
 */
Character.prototype.getY = function() {
  return this.y
};

/**
 * Move character
 * @param {string} direction Move character in given direction
 */
Character.prototype.move = function(direction){
  switch(direction){
    case "up":
      this.y = this.y - 1;
      break;
    case "down":
      this.y = this.y + 1;
      break;
    case "left":
      this.x = this.x - 1;
      break;
    case "right":
      this.x = this.x + 1;
      break;
  }
}
