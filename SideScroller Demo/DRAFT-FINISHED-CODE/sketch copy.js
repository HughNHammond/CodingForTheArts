//TILE VARIABLES
let tilemap = [];
let tileSize = 50;
let numAcross = 20;
let numDown = 10;
let textures = [];
let graphicsMap = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

let tileRules = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

//PLAYER VARIABLES
let player;
let playerSprite;
let playerXSpeed = 5;
let playerYSpeed = 10;

//CANVAS VARIABLES
let canvasWidth = 1000;
let canvasHeight = 500;

function preload() {
  textures[0] = loadImage("void_50x.png");
  textures[1] = loadImage("wall_50x.png");
  textures[2] = loadImage("crack-l_50x.png");
  textures[3] = loadImage("crack-r_50x.png");

  playerSprite = loadImage("librarian-r.png")
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  let tileID = 0;
  for (let across = 0; across < numAcross; across++) {
      tilemap[across] = [];
      for (let down = 0; down < numDown; down++) {

          tilemap[across][down] = new Tile(textures[graphicsMap[down][across]], across, down, tileSize, tileID);

          tileID++;
      }
  }
  player = new Player(playerSprite, 1, 7, tileSize, playerXSpeed, playerYSpeed, tileSize, tileRules);
  console.log(player);
}

function draw() {
  background(0);
  
  for (let across = 0; across < numAcross; across++) {
      for (let down = 0; down < numDown; down++) {
        tilemap[across][down].display();
        tilemap[across][down].debug();
      }
  }

  player.display();
  player.move();
  player.resetJump();
}

function keyPressed() {

  if (key === "a" || key === "d") {
    player.setDirection();
  }
  
  if (keyCode === 32) { //this is the space key, cannot be accessed via key!
    console.log("jump!")
    player.setJump();
  }
}

class Player {
  constructor(sprite, startAcross, startDown, size, xSpeed, ySpeed, tileSize, tileRules) {
      //Attach sprite to key in object
      this.sprite = sprite;

      //Store starting tile info. Later, we will use these to store the current tile the player is on.
      this.across = startAcross;
      this.down = startDown;
      
      //convert tile coordinates into pixel coordinates
      this.xPos = this.across * tileSize;
      this.yPos = this.down * tileSize;

      //storing size and speed
      this.size = size;
      this.xSpeed = xSpeed;
      this.ySpeed = ySpeed;

      //Check rules/collisions for the tile the player wants to move to (target Tile)
      this.tileRules = tileRules;
      this.tileSize = tileSize;

      //some extra properties that we will use to control player movement below
      //what direction the player will travel in
      this.dirX = 0;
      this.dirY = 0;
      
      //whether the player is currently moving to another tile
      this.isMoving = false;
      //whether a player is currently jumping
      this.isJumping = false;
      //checks if player is falling
      this.isFalling = false;
      
      //the x/y position of the tile the player is moving to (the target)
      this.tx = this.xPos; //set these to the initial player pos
      this.ty = this.yPos;
      
  }

  setDirection() {
      //Check if we're NOT currently moving...
      if (!this.isMoving) {
          //if not, then let's set the direction the player is travelling!

          //LEFT
          if (key === "a") {
              this.dirX = -1; //direction is left!
          }

          //RIGHT
          if (key === "d") {
              this.dirX = 1; //direction is right!
          }

          //With the direction set, we can now move to the next code block to check if we can move!
          this.checkTargetTile();
      }
  }

  //This checks what tile the player wants to move to and if
  //the player is allowed to move there
  checkTargetTile() {
      //First, get what tile the player is currently on
      this.across = Math.floor(this.xPos / this.tileSize);

      //Calculate the coordinates of the target tile
      let nextTileHorizontal = this.across + this.dirX;
      let nextTileVertical = this.down + this.dirY;

      //check is that tile is in bounds of the map
      // remember: && means AND (i.e. below is asking if ALL conditions are true)
      if (
          
          nextTileHorizontal >= 0 && //top of map
          nextTileHorizontal < numAcross && //bottom of map
          nextTileVertical >= 0 && //left edge of map
          nextTileVertical < numDown //right edge of map
      ) {
          //if it is in bounds, have we set it as moveable in our ruleMap:
          if (this.tileRules[nextTileVertical][nextTileHorizontal] != 1) { // remember we have to swap these!
              //if the target tile is walkable, then...
              //...calculate the precise x and y coordinate of the target tile...
              this.tx = nextTileHorizontal * this.tileSize;
              
              //Because the player is ready to move there, we can set isMoving to true!
              this.isMoving = true;
          }
      }
  }

  move() {
      //This is in our draw loop, so called move() is called every frame BUT...
      if (this.isMoving) {
          //this code block will only activate when this.isMoving = true. Otherwise, nothing happens.
          //So first, start by moving in direction set by setDirection()
          this.xPos += this.xSpeed * this.dirX;

          //Now check if player has reached targetX
          if (this.xPos === this.tx && this.yPos === this.ty) { // === means TRUE EQUIVALENCE, are these two values EQUIVALENT/the same
              //if there, stop moving and reset our variables
              this.isMoving = false;
              this.dirX = 0;
          }
      }

      if (this.isFalling) {
        //this code block will only activate when this.isMoving = true. Otherwise, nothing happens.
        //So first, start by moving in direction set by setDirection()
        this.yPos += this.ySpeed * this.dirY;
  
        //Now check if player has reached targetX
        if (this.xPos === this.tx && this.yPos === this.ty) { // === means TRUE EQUIVALENCE, are these two values EQUIVALENT/the same
            //if there, stop moving and reset our variables
            this.isFalling = false;
        }
    }

      if (this.isJumping) {
        //this code block will only activate when this.isMoving = true. Otherwise, nothing happens.
        //So first, start by moving in direction set by setDirection()
        this.yPos += this.ySpeed * this.dirY;

        //Now check if player has reached targetX
        if (this.xPos === this.tx && this.yPos === this.ty) { // === means TRUE EQUIVALENCE, are these two values EQUIVALENT/the same
            //if there, stop moving and reset our variables
            this.isJumping = false;
            this.isFalling = true;
        }
    }


  }
  

  setJump() {

      this.dirY = -1;

      //First, get what tile the player is currently on
      this.across = Math.floor(this.xPos / this.tileSize);
      this.down = Math.floor(this.yPos / this.tileSize);

      //Calculate the coordinates of the target tile
      let nextTileHorizontal = this.across + this.dirX;
      let nextTileVertical = this.down + this.dirY;

        //check is that tile is in bounds of the map
      // remember: && means AND (i.e. below is asking if ALL conditions are true)
      if (
          
        nextTileHorizontal >= 0 && //top of map
        nextTileHorizontal < numAcross && //bottom of map
        nextTileVertical >= 0 && //left edge of map
        nextTileVertical < numDown //right edge of map
    ) {
      if (this.tileRules[nextTileVertical][nextTileHorizontal] != 1) { // remember we have to swap these!
        //if the target tile is walkable, then...
        //...calculate the precise x and y coordinate of the target tile...
        this.tx = nextTileHorizontal * this.tileSize;
        this.ty = nextTileVertical * this.tileSize;
        
        //Because the player is ready to move there, we can set isMoving to true!
        this.isJumping = true;
      }
    }
  }


resetJump() {

  if (this.isFalling) {
      this.dirY = 1;
      //First, get what tile the player is currently on
      this.across = Math.floor(this.xPos / this.tileSize);
      this.down = Math.floor(this.yPos / this.tileSize);

      //Calculate the coordinates of the target tile
      let nextTileHorizontal = this.across + this.dirX;
      let nextTileVertical = this.down + this.dirY;
      console.log(nextTileVertical);

      if (
              
        nextTileHorizontal >= 0 && //top of map
        nextTileHorizontal < numAcross && //bottom of map
        nextTileVertical >= 0 && //left edge of map
        nextTileVertical < numDown //right edge of map
    ) {
      if (this.tileRules[nextTileVertical][nextTileHorizontal] != 1) { // remember we have to swap these!
        console.log("accessed tilerules")
        //if the target tile is walkable, then...
        //...calculate the precise x and y coordinate of the target tile...
        this.tx = nextTileHorizontal * this.tileSize;
        this.ty = nextTileVertical * this.tileSize;
        
        //Because the player is ready to move there, we can set isMoving to true!
        this.isFalling = true;
      }
    }
  }
}


  display() {
      imageMode(CORNER);
      image(this.sprite, this.xPos, this.yPos, this.size, this.size);
  }
}





class Tile {
  constructor(texture, across, down, tileSize, tileID) {
    this.texture = texture;
    this.across = across;
    this.down = down;

    this.xPos = this.across * tileSize;
    this.yPos = this.down * tileSize;

    this.tileSize = tileSize;
    this.tileID = tileID;
  }

  display() {
    noStroke();
    image(this.texture, this.xPos, this.yPos, this.tileSize, this.tileSize);
  }

  debug() {
    //TILE
    stroke(245);
    noFill();
    rect(this.xPos, this.yPos, this.tileSize, this.tileSize);

    //LABEL
    noStroke();
    fill(100);
    textAlign(LEFT, TOP);

    let twoDigitID;
    if (this.tileID < 10) { //if only one digit...
        twoDigitID = "0" + this.tileID; // adds a "0" to the front of single digit tileIDs to make it 2 digits
    } else {
        twoDigitID = this.tileID; // or just use the original ID.
    }
    
    text(twoDigitID, this.xPos, this.yPos);
  }
}
