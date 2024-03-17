//INITIALISE VARIABLES FOR TILEMAP
let tilemap = [];
let numDown;
let numAcross;
let tileSize = 50;
let textures = [];
let currentLevel; // empty variable to hold currentLevel

//INITIALISE VARIABLES FOR PLAYER
let player;
let playerSprite;
let playerSpeed = 5;
let playerSize = tileSize;
let startAcross = 3;
let startDown = 4;

function preload() {
    //tilemap textures
    grassyTexture = loadImage("grassy.png");
    stoneTexture = loadImage("stone.png");
    voidTexture = loadImage("void_50x.png");
    wallTexture = loadImage("wall_50x.png");
    doorTexture = loadImage("door.png");
    
    //Setting Textures For Each Level
    entranceObject.textures = [grassyTexture, stoneTexture, wallTexture, doorTexture];
    corridorObject.textures = [voidTexture, wallTexture, doorTexture];
    mainHallObject.textures = [voidTexture, wallTexture, doorTexture];

    //Player sprite
    playerSprite = loadImage("librarian-r.png");
}

function setup() {
    createCanvas(500, 500);

    loadLevel(entranceObject); // sets global tileMap variables to variables inside our starting level
    createTileMap(); // creates variables based on the loaded level

    //Create Player
    player = new Player(playerSprite, startAcross, startDown, tileSize, playerSpeed, tileSize, tileRules);
}

function createTileMap() {

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
    }
}

function loadLevel(levelToLoad) {
    currentLevel = levelToLoad; //set currentLevel to the level we are loading
    tilemap = []; // create a clean tilemap

    //load level variables
    numAcross = currentLevel.numAcross;
    numDown = currentLevel.numDown;
    graphicMap = currentLevel.graphicMap;
    tileRules = currentLevel.tileRules;
    textures = currentLevel.textures;
}

function draw() {
    background(0);
    
    // Loops through all tiles each time draw() is called
    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            tilemap[across][down].display(); // runs display() method for each tile!
            tilemap[across][down].debug(); // runs debug() method for each tile!
        }
    }
    // Finishes looping through all tiles within each draw() loop

    //Player methods we want to run once per frame
    player.display();
    player.move();
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