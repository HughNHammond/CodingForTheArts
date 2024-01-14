function setup() {
    console.log(int(10.3)); // prints 10.
    console.log(int(10.9)); // prints 10: note: it always rounds down!
    
    rollDie(8);
    rollDie(20);
    rollDie(20);
}

function rollDie(sides) {
    console.log(int(random(sides) + 1));
}