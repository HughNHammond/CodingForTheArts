let tilemap = [];
let numDown = 10;
let numAcross = 10;
let tileSize = 50;

function setup() {
    createCanvas(500, 500);

    let tileID = 0;
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];
        for (let down = 0; down < numDown; down++) {
            let x = across * tileSize;
            let y = down * tileSize;
            tilemap[across][down] = new Tile(x, y, tileSize, tileID);

            tileID++;
        }
    }
}

function draw() {
    background(0);
    
    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            tilemap[across][down].debug();
        }
    }
}

class Tile {
    constructor(x, y, tileSize, tileID) {
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.tileID = tileID;
    }
    debug() {
        //TILE
        stroke(245);
        noFill();
        rect(this.x, this.y, this.tileSize, this.tileSize);

        //LABEL
        noStroke();
        noFill();
        textAlign(LEFT, TOP);

        let twoDigitID;
        if (this.tileID < 10) { //if only one digit...
            twoDigitID = "0" + this.tileID; // adds a "0" to the front of single digit tileIDs to make it 2 digits
        } else {
            twoDigitID = this.tileID; // or just use the original ID.
        }
        
        text(twoDigitID, this.x, this.y);
    }
}