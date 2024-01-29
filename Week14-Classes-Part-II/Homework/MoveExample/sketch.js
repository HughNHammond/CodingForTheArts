let xCircle = 250; //x position of circle
let yCircle = 100; //y position of circle

let xSquare = 250; //x position of square
let ySquare = 350; //y position of square

let size = 100; //We'll use the same size for both shapes!

let speed = 5; //This is how far the circle/square should move across 
//the screen each frame

function setup() {
    createCanvas(500, 500)
}

function draw() {

    background(0) //this wipes the screen every single frame so stuff
    //previously drawn disappears

    //Circle code
    circle(xCircle, yCircle, size) //draw circle using parameters 
    //declared above

    xCircle = xCircle + speed;

    /*EXPLANATION:
        The code below takes the value of xCircle and adds 5
        Each time the draw method runs, it draws the circle at whatever
        xCircle and yCircle are set to. Once it's drawn it, it adds our speed
        value (5) to whatever xCircle is. So, if xCircle = 250, xCircle will = 
        250 + 5, so 255!
        As we've changed what xCircle is, the next time draw is called (the
        next frame!) it will draw the circle at 255 instead of 250. As it will
        be doign this 60 times a second, it will look like the circle is 
        moving!*/


    //Square code
    square(xSquare, ySquare, size)

    xSquare -= speed
    /*EXPLANATION:
            So this is the exact same thing we did above with two differences:
            we've written xSquare = xSquare - speed in shorthand: -= is a shorthand
            way of writing minus a value from the value we're changing, meaning it
            is the same as writing xSquare = xSquare - speed
            The second difference is that we're SUBTRACTING rather than adding. 
            Can you figure out why? Run this code and see what the square and circle
            are doing differently!*/
}
