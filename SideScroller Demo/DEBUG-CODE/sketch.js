//INITIALISE VARIABLES FOR TILEMAP
let tilemap = [];
let tileSize = 50;
let numAcross = 20;
let numDown = 10;
let textures = [];

let graphicMap = [
        //THIS IS THE Y AXIS
  // 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1], //1
    [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1], //2
    [1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1], //3
    [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1], //4    THIS IS THE X AXIS
    [1, 2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1], //5
    [1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1], //6
    [1, 1, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1], //7
    [1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //8
    [1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  //9
    ]

    let tileRules = [

        //0 = empty space
        //1 = ground
        //2 = unwalkable

            //THIS IS THE Y AXIS
    // 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19
      [2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], //0
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], //1
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], //2
      [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], //3
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], //4   THIS IS THE X AXIS
      [2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2], //5
      [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2], //6
      [2, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2], //7
      [2, 2, 1, 1, 1, 2, 1, 1, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2], //8
      [2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]  //9
    ]

//INITIALISE VARIABLES FOR PLAYER
let player;
let playerSprite;
let xSpeed = 5; //MUST BE A DIVISOR OF YOUR TILESIZE. SETS HOW FAST PLAYER MOVES HORIZONTALLY.
let ySpeed = 10; //MUST BE A DIVISOR OF YOUR TILESIZE. SETS HOW FAST PLAYER MOVES VERTICALLY.
let jumpHeight = 100; //MUST BE A MULTIPLIER OF YOUR YSPEED! SETS HOW HIGH THE PLAYER CAN JUMP.
let playerSize = tileSize;

function preload() {
    textures[0] = loadImage("void_50x.png");
    textures[1] = loadImage("wall_50x.png");
    textures[2] = loadImage("crack-l_50x.png");
    textures[3] = loadImage("crack-r_50x.png");

    playerSprite = loadImage("librarian-r.png")
}

function setup() {
    createCanvas(1000, 500); // 1000 = numAcross * tilesize; 500 = numDown * tileSize;

    let tileID = 0; // sets our tileID for the first tile we'll make

    //Creates all tiles
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];
        for (let down = 0; down < numDown; down++) {
            //Setting Texture For Tile
            let textureNum = graphicMap[down][across];
    
            //Initialising Tile
            tilemap[across][down] = new Tile(textures[textureNum], across, down, tileSize, tileID); // THIS LINE CREATES OUR NEW TILE!

            tileID++;
        }
    } //Tile creation finished
    
    //Create Player
    player = new Player(playerSprite, 3, 2, tileSize, xSpeed, ySpeed, jumpHeight, tileSize, tileRules); // THIS LINE CREATES OUR PLAYER, 
                                                                                                        // CHECK PLAYER CONSTRUCTOR CLASS FOR VARIABLE ORDER
}

function draw() {
    background(0);
    
    // Loops through all tiles each time draw() is called
    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            tilemap[across][down].display(); // runs display() method for each tile!
            //tilemap[across][down].debug(); // runs debug() method for each tile!
        }
    }
    // Finishes looping through all tiles within each draw() loop

    player.update(); //runs code in player update method once per frame 
}

function keyPressed() { //this will trigger every time a key is presed
    if (!player.isJumping && !player.isFalling && player.isGrounded) { //checks if player.isJUMPING = false, player.isFalling = false, AND player.isGrounded = true
        //Check if key is space bar (our jump button).
        if (key === " ") {
            player.isJumping = true;
            player.jumpTarget = player.yPos - player.jumpDistance;
            console.log(player.jumpTarget);
        }
    }
}

class Player {
    constructor(sprite, startAcross, startDown, size, xSpeed, ySpeed, jumpHeight, tileSize, tileRules) {
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

        //Booleans to set player y/jump state
        this.isJumping = false;
        this.isFalling = false;
        this.isGrounded = true;

        //Setting max Jump Height
        this.jumpHeight = jumpHeight;

        //store empty variable called "jumpTarget" that we will reference later.
        this.jumpTarget;

        //PLAYER CORNER COLLISION TRACKING
        //Initialising X and Y Variables
        this.playerLeft;
        this.playerRight;
        this.playerTop;
        this.playerBottom;

        //Initialising Corner Coordinate Objects
        this.topLeft = {};
        this.topRight = {};
        this.bottomLeft = {};
        this.bottomRight = {};
        
        ////Collision Padding
        this.collisionXPadding = 10;
        this.collisionYPadding = 5;
    }

    update() { // CALLED FROM DRAW() ABOVE SO CODE WILL RUN ONCE PER FRAME
        this.trackCorners();
        this.hasPlayerReachedJumpHeight();
        this.handleCollisions();
        this.move();
        
        this.display();
        this.debug();
    }

    trackCorners() { //Tracks the corner values of the player
        //X and Y Variables
        this.playerLeft = this.xPos + this.collisionXPadding;
        this.playerRight = this.xPos + this.tileSize - 1 - this.collisionXPadding;
        this.playerTop = this.yPos + this.collisionYPadding;
        this.playerBottom = this.yPos + this.tileSize - 1;

        //Corner Coordinate Objects
        this.topLeft = {
            x: this.playerLeft,
            y: this.playerTop
        }
        this.topRight = {
            x: this.playerRight,
            y: this.playerTop
        }
        this.bottomLeft = {
            x: this.playerLeft,
            y: this.playerBottom
        }
        this.bottomRight = {
            x: this.playerRight,
            y: this.playerBottom
        }
    }

    hasPlayerReachedJumpHeight() {
        if (this.yPos === this.jumpTarget) { //Check if max height of jump reached
            console.log("jump height reached");
            this.isFalling = true;
            this.isJumping = false;
        }
    }

    setYDirection() {
        if (this.isGrounded) {
            this.dirY = 0;
        }
        
        if (this.isJumping) {
            this.dirY = -1;
        }

        if (this.isFalling) {
            this.dirY = 1;
        }
    }

    handleCollisions() {
        
        //Make sure dirY is up to date
        this.setYDirection();

        //CHECK CURRENT VELOCITY
        let velX = this.dirX * this.xSpeed;
        let velY = this.dirY * this.ySpeed;

        //check for collisions on top
        if (this.isOverlappingCollisionTile(this.topLeft.x, this.topLeft.y + velY) ||
            this.isOverlappingCollisionTile(this.topRight.x, this.topRight.y + velY)) {
            //console.log("Collision above");
            this.isJumping = false;
            this.isfalling = true;
            
            //Update this.dirY and velY
            this.setYDirection();
            velY = this.dirY * this.ySpeed;
        }


        //Get Coordinates of tiles below
        if (this.isOverlappingGroundTile(this.bottomLeft.x, this.bottomLeft.y + 1) ||
            this.isOverlappingGroundTile(this.bottomRight.x, this.bottomRight.y + 1)) {
                //console.log("Player is on the ground");
                this.isGrounded = true;
                this.isFalling = false;

                this.setYDirection();
                velY = this.dirY * this.ySpeed;
            } else {
                //console.log("Player is in the air");
                this.isGrounded = false;
                
    
                if (!this.isJumping) {
                    this.isFalling = true;
                }

            this.setYDirection();
            velY = this.dirY * this.ySpeed;
        }
    }

    move() {
        this.yPos += this.ySpeed * this.dirY;
    }


    checkCollisions(velX, velY) {
        if (this.isOverlappingCollisionTile(this.topLeft.x + velX, this.topLeft.y + velY) ||
            this.isOverlappingCollisionTile(this.bottomLeft.x + velX, this.bottomLeft.y + velY) ||
            this.isOverlappingCollisionTile(this.topRight.x + velX, this.topRight.y + velY) ||
            this.isOverlappingCollisionTile(this.bottomRight.x + velX, this.bottomRight.y + velY)) {
            //COLLISION ON X AXIS
            return true;
        } else {
            return false;
        }
    }

    isOverlappingCollisionTile(pointX, pointY) { //Used to check if there is ANYTHING THAT IS COLLIDABLE at the specified points
        let tileX = Math.floor(pointX / this.tileSize);
        let tileY = Math.floor(pointY / this.tileSize);

        return this.tileRules[tileY][tileX] != 0; //will return TRUE if the tileRules value is NOT 0 for this tile
    }

    isOverlappingGroundTile(pointX, pointY) { //Used to check if the point is intersecting with a GROUND tile (but will return false if either empty space of unwalkable)
        let tileX = Math.floor(pointX / this.tileSize);
        let tileY = Math.floor(pointY / this.tileSize);

        return this.tileRules[tileY][tileX] === 1; //will return TRUE if the tileRules value IS 1 for this tile
    }

    display() {
        imageMode(CORNER);
        image(this.sprite, this.xPos, this.yPos, this.size, this.size);
    }

    debug() {
        //COLLISION BOX
        stroke(255,0,0); // red top
        line(this.topLeft.x, this.topLeft.y, this.topRight.x, this.topRight.y);
        stroke(34,139,34); // green bottom
        line(this.bottomLeft.x, this.bottomLeft.y, this.bottomRight.x, this.bottomRight.y);
        stroke(0,0,255); // blue left
        line(this.topLeft.x, this.topLeft.y, this.bottomLeft.x, this.bottomLeft.y);
        stroke(255,192,203); // pink right
        line(this.topRight.x, this.topRight.y, this.bottomRight.x, this.bottomRight.y);
    }
}

class Tile {
    constructor(texture, across, down, tileSize, tileID) {
        this.texture = texture;
        this.across = across; // new values!
        this.down = down; // new values!
        this.xPos = across * tileSize; // pixel value generated from across
        this.yPos = down * tileSize; // pixel value generated from down
        this.tileSize = tileSize;
        this.tileID = tileID;
    }

    display() {
        //Displays the texture of instance of NPC class
        noStroke();
        image(this.texture, this.xPos, this.yPos, this.tileSize, this.tileSize)
    }

    debug() {
        //TILE
        stroke(245);
        noFill();
        rect(this.xPos, this.yPos, this.tileSize, this.tileSize);

        //LABEL
        noStroke();
        fill(255);
        textAlign(LEFT, TOP);
        
        text(this.tileID, this.xPos, this.yPos);
    } // I've hidden the DEBUG method but this is where the code for it goes!
}