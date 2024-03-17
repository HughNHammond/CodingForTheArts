//INITIALISE VARIABLES FOR TILEMAP
let tilemap = [];
let numDown = 10;
let numAcross = 10;
let tileSize = 50;
let textures = [];

let graphicMap = [ 
//         THIS IS OUR Y AXIS
//   0  1  2  3  4  5  6  7  8  9 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], // 2
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // 4    THIS IS OUR X AXIS
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // 6
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], // 7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 1]  // 9
]

let tileRules = [ 
//         THIS IS OUR Y AXIS
//   0  1  2  3  4  5  6  7  8  9 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], // 2
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // 4    THIS IS OUR X AXIS
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // 6
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], // 7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 1]  // 9
]

//INITIALISE VARIABLES FOR PLAYER
let player;
let playerSprite;
let playerSpeed = 5;
let playerSize = tileSize;

function preload() {
    //tilemap textures
    textures[0] = loadImage("grassy.png");
    textures[1] = loadImage("stone.png");

    //Player sprite
    playerSprite = loadImage("librarian-r.png");
}

function setup() {
    createCanvas(500, 500);

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
    //Tile creation finished

    //Create Player
    player = new Player(playerSprite, 3, 4, tileSize, playerSpeed, tileSize, tileRules);
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