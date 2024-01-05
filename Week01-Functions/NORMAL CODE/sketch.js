let playerXPos;
let playerYPos = 400;
let playerXSize = 100;
let playerYSize = 25;
let score = 0;
let lives = 1;


let circleXPos;
let circleYPos;
let circleSize = 25;

let speed = 2;

function setup() {
    createCanvas(500, 500); // canvas width/height
    rectMode(CENTER);

    circleYPos = -playerYSize / 2;
    circleXPos = random(25, 426);
    
    textAlign(CENTER, CENTER);
    strokeWeight(5);
    textFont('Avant Garde');
    textStyle(BOLD)
}

function draw() {

    background(30, 225, 150);

    textSize(35);
    stroke(0);
    fill(255, 255, 255);
    text(('SCORE: ' + score), 85, 30);

    textSize(20);
    stroke(255, 255, 255);
    fill(0);
    textAlign(RIGHT, CENTER)
    text(('WILL TO LIVE'), 390, 30, 100, 100);
    textSize(40);
    text(": " + lives, 440, 30, 100, 100)

    textAlign(CENTER, CENTER);
    stroke(0);

    fill(30, 203, 225);
    circle(circleXPos, circleYPos, circleSize);
    circleYPos += speed;
    
    fill(38, 82, 153);
    playerXPos = mouseX;
    rect(playerXPos, playerYPos, playerXSize, playerYSize);

    if (lives <= 0) {
        speed = 0;
        circleXPos = -100;
    }

    if (circleXPos >= mouseX - playerXSize/2 && circleXPos <= mouseX + playerXSize/2 && circleYPos > playerYPos) {
        circleYPos = -playerYSize / 2;
        circleXPos = random(25, 426);
        speed += 0.5;
        score += 1;
    } 
    
    if (circleYPos >= 525) {
        circleYPos = -playerYSize / 2;
        circleXPos = random(25, 426);
        if (lives === 0) {
            lives = 0;
        } else {
            lives -= 1;
        }
    }
}

function mouseClicked() {
    if (lives === 0) {
        lives = 5;

        speed = 2;
        
        circleYPos = -playerYSize / 2;
        circleXPos = random(25, 426);
    }
}
