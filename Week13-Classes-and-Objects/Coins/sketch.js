let sprite;

function preload() { //preLoad is called BEFORE setup!
    sprite = loadImage("coin.gif"); //make sure you have the right file name!
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(245);
    display(sprite) //this is our custom function we make below!
}

function display() {
    imageMode(CENTER);
    image(sprite, mouseX, mouseY, 50, 50);
}