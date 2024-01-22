let playerXPos;
let playerYPos = 400;
let playerXSize = 100;
let playerYSize = 25;
let score = 0;
let lives = 5;
let circleXPos;
let circleYPos;
let circleSize = 25;
let speed = 2;

function setup() {
    createCanvas(500, 500);
    rectMode(CENTER);
    
    setInitialBallConditions();
    setInitialFontSettings();
}

function draw() {
    background(30, 225, 150);

    drawScoreText();
    drawLivesText();

    drawBall();
    drawAndHandlePlayer();
    
    checkIfOutOfLives();
    checkIfPlayerCaughtBall(); 
    handleDroppedBall();
}

function setInitialFontSettings() {
    textAlign(CENTER, CENTER);
    strokeWeight(5);
    textFont('Avant Garde');
    textStyle(BOLD);
}

function setInitialBallConditions() {
    circleYPos = -playerYSize / 2;
    circleXPos = random(25, 426);
}


function drawScoreText() {
    textSize(35);
    stroke(0);
    fill(255, 255, 255);
    text(('SCORE: ' + score), 85, 30);
}

function drawLivesText() {
    textSize(20);
    stroke(255, 255, 255);
    fill(0);
    textAlign(RIGHT, CENTER);
    text(('WILL TO LIVE'), 390, 30, 100, 100);
    textSize(40);
    text(": " + lives, 440, 30, 100, 100);
    textAlign(CENTER, CENTER);
}

function drawBall() {
    stroke(0);
    fill(30, 203, 225);
    circle(circleXPos, circleYPos, circleSize);
    circleYPos += speed;
}

function drawAndHandlePlayer() {
    fill(38, 82, 153);
    playerXPos = mouseX;
    rect(playerXPos, playerYPos, playerXSize, playerYSize);
}

function checkIfOutOfLives() {
    if (lives <= 0) {
        speed = 0;
        circleXPos = -100;
    }
}

function checkIfPlayerCaughtBall() {
    if (circleXPos >= mouseX - playerXSize / 2 && circleXPos <= mouseX + playerXSize / 2 && circleYPos > playerYPos) {
        circleYPos = -playerYSize / 2;
        circleXPos = random(25, 426);
        speed += 0.5;
        score += 1;
    }
}

function handleDroppedBall() {
    if (circleYPos >= 525) {
        setInitialBallConditions();
    }

    if (lives === 0) {
        lives = 0;
    } else {
        lives -= 1;
    }
}

