function setup() {
    let newNumber = addNumbersTogether(28, 39);
    console.log(newNumber);
    let newNumberTwo = addNumbersTogether(5, 7);
    console.log(newNumberTwo);
    console.log(addNumbersTogether(10, 2));
}

function draw() {

}

function addNumbersTogether(numberOne, numberTwo) {
    return numberOne + numberTwo;
}