function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(100, 149, 237);
    drawSquare()
}

function drawSquare() {
    let fillCol = [72, 61, 139]; // store as an array!
    let x = 100;
    let y = 200;
    let squareWidth = 50;
    let squareHeight = 50;

    fill(fillCol)
    rect(x, y, squareWidth, squareHeight);
}