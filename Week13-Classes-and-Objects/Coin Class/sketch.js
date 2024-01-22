let coinSprite;
let coin1;
let coin2;

function preload() { //preLoad is called BEFORE setup!
    coinSprite = loadImage("coin.gif"); //make sure you have the right file name!
}

function setup() {
    createCanvas(500, 500);
    coin1 = new Coin(coinSprite, 100, 50, 50, 100);
    coin2 = new Coin(coinSprite, 200, 330, 50, 100);
    console.log(coin1.addDimensions());
}

function draw() {
    background(245);
    //display(sprite) //this is our custom function we make below!
}

function display() {
    imageMode(CENTER);
    image(coinSprite, mouseX, mouseY, 50, 50);
}

class Coin {
    constructor(sprite, x, y, size, points) {
        this.sprite = sprite; //note this time we do use = and semi-colons.
        this.x = x;
        this.y = y;
        this.size = size;
        this.points = points;
        this.added; //let's create a new empty variable in our class!
    } 

    addDimensions() { //note! Note function keyword but still use brackets!
        return this.added = this.x + this.y;
    }

    display() {
        imageMode(CENTER);
        image(this.coinSprite, this.x, this.y, this.size, this.size);
    }
} 