/**
 * Renders maze
 * @class Renderer
 */
Renderer = function() {
};

/**
 * Set game
 * @param {Game} game Game information
 */
Renderer.prototype.setGame = function(game) {
  this.game = game;
  //Default: Hide danger zones
  this.dangerFlag = false;
};

/**
 * Get character sprite
 * @returns {string} URL for character sprite
 */
Renderer.prototype.getCharacterSprite = function() {
  var character = this.game.character.getSprite();
  if (character === "blue"){
    return "imgs/characters/blue.png";
  }
  else if(character === "green"){
    return "imgs/characters/green.png";
  }
  else if(character === "pink"){
    return "imgs/characters/pink.png";
  }
};

/**
 * Get object at location
 * @param {int} x x-position
 * @param {int} y y-position
 * @returns {string} URL for object sprite
 */
Renderer.prototype.getObject = function(x,y) {
  var etype = this.game.board.getObject(x,y);
  if(etype === "key"){
    return "imgs/obstacles/key.png";
  }
  else if(etype === "switchOff"){
    return "imgs/obstacles/switchOff.png";
  }
  else if(etype === "switchOn"){
    return "imgs/obstacles/switchOn.png";
  }
  else if(etype === "gold"){
    return "imgs/obstacles/coinGold.png";
  }
  else if(etype === "silver"){
    return "imgs/obstacles/coinSilver.png";
  }
  else if(etype === "bronze"){
    return "imgs/obstacles/coinBronze.png";
  }
  else if(etype === "bomb"){
    return "imgs/obstacles/bomb.png";
  }
  else if(etype === "block"){
    return "imgs/enemies/block.png";
  }
  else if(etype === "fly"){
    return "imgs/enemies/fly.png";
  }
  else if(etype === "slime"){
    return "imgs/enemies/slime.png";
  }
  else if(etype === "wall"){
    return "imgs/tiles/box.png";
  }
  else if(etype === "goal"){
    return "imgs/obstacles/goal.png";
  }
  else{
    return "";
  }
};

/**
 * Show danger zones
 * @param {boolean} flag Flag to show or hide danger zones
*/
Renderer.prototype.showDangerZones = function(flag) {
  this.dangerFlag = flag;
};

/**
 * Render maze
 */
Renderer.prototype.render = function() {
  var characterX = this.game.character.getX();
  var characterY = this.game.character.getY();
  this.game.board.calculateDangerZones();
  var code = "<center><div style = 'font-size: 24px'>LearnMaze v. 1.0.0</div><br /><table>";
  var status = "Alive";
  if(game.isDead()){
    status = "Dead";
  }
  else if(game.isComplete()){
    status = "Complete";
  }
  for(var i = 0; i < this.game.board.getHeight(); i++){
    code += "<tr>"
    for(var j = 0; j < this.game.board.getWidth(); j++){
      var mazeObject = this.getObject(j,i)
      code += "<td valign='middle' style = ' height:32px; width: 32px; background-repeat: no-repeat;background-size: 32px 32px; background-image:url("
      if(j === characterX && i === characterY){
        if(status === "Dead"){
          code += "imgs/tiles/dead.png)'>";
        }
        else if(status === "Complete"){
          code += "imgs/tiles/win.png)'>";
        }
        else{
          code += this.getCharacterSprite() + ")'>";
        }
      }
      else if(mazeObject !== ""){
        code += mazeObject + ")'>";
      }
      else if(this.dangerFlag && this.game.board.isDangerous(j,i)){
        code += "imgs/tiles/danger.png)'>";
      }
      else{
        code += "imgs/tiles/tile.png)'>";
      }
      var stepNum = game.board.getStepNum(j,i);
      if(stepNum !== -1){
        code += "<center>" + stepNum + "</center>";
      }
      code += "</td>";
    }
    code += "</tr>";
  }
  code += "</table>";
  $("div#content").empty();
  $("div#content").html(code + "<br /><div>Status: " + status + "<br />Number of Moves: " + game.getNumMoves() + "<br />Switches: " + game.board.getSwitchesOn() + "/" + game.board.getNumSwitches() + "<br />Keys: " + game.getNumKeys() + "/" + game.board.getNumKeys() + "<br />Coins: " + game.getCoinValue() + "</div></center>");
};
