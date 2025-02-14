class Player {
    constructor(sprite, startAcross, startDown, size, speed, tileSize) {
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
        this.speed = speed;

        //Check rules/collisions for the tile the player wants to move to (target Tile)
        this.tileSize = tileSize;

        //some extra properties that we will use to control player movement below
        //what direction the player will travel in
        this.dirX = 0;
        this.dirY = 0;
        
        //whether the player is currently moving to another tile
        this.isMoving = false;
        
        //the x/y position of the tile the player is moving to (the target)
        this.tx = this.xPos; //set these to the initial player pos
        this.ty = this.yPos;
    }

    setDirection() {
        //Check if we're NOT currently moving...
        if (!this.isMoving) {
            //if not, then let's set the direction the player is travelling!

            //UP
            if (keyIsDown(87)) {
                this.dirX = 0;
                this.dirY = -1; //direction is up!
            }

            //DOWN
            if (keyIsDown(83)) {
                this.dirX = 0;
                this.dirY = 1; //direction is down!
            }

            //LEFT
            if (keyIsDown(65)) {
                this.dirX = -1; //direction is left!
                this.dirY = 0; 
            }

            //RIGHT
            if (keyIsDown(68)) {
                this.dirX = 1; //direction is right!
                this.dirY = 0;
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
            //if it is in bounds, have we set it as moveable in our ruleMap:
            if (tileRules[nextTileVertical][nextTileHorizontal] != 1) { // remember we have to swap these!
                //First, we'll check if it is a transition tile
                if (typeof tileRules[nextTileVertical][nextTileHorizontal] === "object") {
                //if yes:
                    //reset dirX or dirY
                    this.dirX = 0;
                    this.dirY = 0;

                    //Access the transition object we stored tileRules:
                    let nextLevel = tileRules[nextTileVertical][nextTileHorizontal];

                    //Load data from that transition object
                    currentLevel = nextLevel.linkedLevel;
                    player.xPos = nextLevel.startingXPos;
                    player.yPos = nextLevel.startingYPos;

                    //Load the next Level!
                    loadLevel(currentLevel);
                    createTileMap();

                    //Break out of the if statement
                    return;
                }
                
                //if the target tile is walkable, then...
                //...calculate the precise x and y coordinate of the target tile...
                this.tx = nextTileHorizontal * this.tileSize;
                this.ty = nextTileVertical * this.tileSize;
                
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
            this.xPos += this.speed * this.dirX;
            this.yPos += this.speed * this.dirY;

            //Now check if player has reached targetX
            if (this.xPos === this.tx && this.yPos === this.ty) { // === means TRUE EQUIVALENCE, are these two values EQUIVALENT/the same
                //if there, stop moving and reset our variables
                this.isMoving = false;
                this.dirX = 0;
                this.dirY = 0;
            }
        }
    }

    display() {
        imageMode(CORNER);
        image(this.sprite, this.xPos, this.yPos, this.size, this.size);
    }
}