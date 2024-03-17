//INITIALISE VARIABLES FOR TILEMAP
let tilemap = [];
let numDown = 10;
let numAcross = 10;
let tileSize = 50;
let textures = [];
let currentLevel = entranceObject;

//VARIABLES TO STORE ASSETS
let grassyTexture;
let stoneTexture;
let voidTexture;
let wallTexture;
let doorTexture;

//INITIALISE VARIABLES FOR PLAYER
let player;
let playerSprite;
let playerSpeed = 10;
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
    
    //SETUP STARTING LEVEL (LEVEL 1)
    loadLevel(currentLevel);

    //TILE CREATION
    createTileMap();

    //Create Player
    player = new Player(playerSprite, startAcross, startDown, tileSize, playerSpeed, tileSize);

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

    //Player methods we want to run once per frame
    player.display();
    player.move();
}

function loadLevel(levelToLoad) {
    currentLevel = levelToLoad;
    tilemap = []; // we need to wip our tilemap in case
    numAcross = levelToLoad.numAcross;
    numDown = levelToLoad.numDown;
    graphicMap = levelToLoad.graphicMap;
    tileRules = levelToLoad.tileRules;
    textures = levelToLoad.textures;
}

function createTileMap() {
    tilemap = []; //start by clearing tilemap

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

    addTransitionsToTiles();
}

function addTransitionsToTiles() {
    if (currentLevel === entranceObject) {
        currentLevel.tileRules[0][8] = transitionEntranceToCorridor;
    }

    if (currentLevel === corridorObject) {
        currentLevel.tileRules[9][2] = transitionCorridorToEntrance;
        currentLevel.tileRules[0][2] = transitionCorridorToMainHall;
    }

    if (currentLevel === mainHallObject) {
        currentLevel.tileRules[9][2] = transitionMainHallToCorridor;
    }
}

function keyPressed() {
    if (key === 'l') {
        loadLevel(corridorObject);
        createTileMap();
    }
    
    player.setDirection();
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
        stroke(255, 0, 0);
        noFill();
        rect(this.xPos, this.yPos, this.tileSize, this.tileSize);

        //LABEL
        noStroke();
        fill(255, 0, 0);
        textAlign(LEFT, TOP);
        
        text(this.tileID, this.xPos, this.yPos);
    } // I've hidden the DEBUG method but this is where the code for it goes!
}