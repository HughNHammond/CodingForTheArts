//Enemies
let bowser;
let goombas = [];
let goombaSize = 48;
let numGoombas = 100;

//sprite variables
let goombaSprite;
let bowserSprite;

function preload() {
    goombaSprite = loadImage("goomba.png");
    bowserSprite = loadImage("Bowser.png");
}

function setup() {
    createCanvas(500, 500);
    
    bowser = new Enemy(bowserSprite, 250, 250, 99);

    //FOR LOOP TO CREATE GOOMBAS - Store Goombas in array
    for (let enemyCount = 0; enemyCount < numGoombas; enemyCount++) {
        goombas[enemyCount] = new Enemy(goombaSprite,
                                        random(0, width),
                                        random(0, height),
                                        goombaSize)
    }
}

function draw() {
    background(245);

    bowser.display();

    //FOR LOOP TO DISPLAY GOOMBAS - Access instances of goombas from array created in setup()
    for (let enemyCount = 0; enemyCount < numGoombas; enemyCount++) {
        goombas[enemyCount].display();
    }
}   

class Enemy {
    constructor(sprite, x, y, size) {
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.size = size;
    }

    display() {
        image(this.sprite, this.x, this.y, this.size);
    }
}