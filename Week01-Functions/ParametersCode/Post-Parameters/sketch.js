function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(100, 149, 237);
    let fillColPurple = [72, 61, 139]; // store as an array!
    let fillColRed = [255, 204, 203];
    drawSquare(fillColPurple, 100, 200, 50, 100);
    drawSquare(fillColRed, 20, 400, 200, 40);
}

function drawSquare(fillCol, x, y, rectWidth, rectHeight) {

    fill(fillCol)
    rect(x, y, rectWidth, rectHeight);
}