function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(100, 149, 237);
    drawSquare()
}

function drawSquare() {
    let fillCol = [72, 61, 139]; // store as an array!
    fill(fillCol)
    rect(100, 200, 50, 50);
}