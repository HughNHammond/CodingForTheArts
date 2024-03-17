const entranceObject = {
    numAcross: 10,
    numDown: 10,

    //TEXTURE VALUES:
    //0: grassy; 1: stone; 2: wall; 3: door

    graphicMap: [ 
    //      THIS IS OUR Y AXIS
    //   0  1  2  3  4  5  6  7  8  9 
        [0, 0, 0, 0, 0, 0, 0, 2, 3, 2], // 0
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 1
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], // 2
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // 4    THIS IS OUR X AXIS
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // 6
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], // 7
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 1]  // 9
    ],

    tileRules: [ 
    //         THIS IS OUR Y AXIS
    //   0  1  2  3  4  5  6  7  8  9 
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1], // 0
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0], // 2
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], // 4    THIS IS OUR X AXIS
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0], // 6
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], // 7
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 1]  // 9
    ]
}

const corridorObject = {
    numAcross: 5,
    numDown: 10,

    //TEXTURE VALUES
    //0: void; 1: wall; 2: door;

    graphicMap: [
    //   0  1  2  3  4
        [1, 1, 2, 1, 1], // 0
        [1, 0, 0, 0, 1], // 1
        [1, 0, 0, 0, 1], // 2 
        [1, 0, 0, 0, 1], // 3
        [1, 0, 0, 0, 1], // 4
        [1, 0, 0, 0, 1], // 5
        [1, 0, 0, 0, 1], // 6
        [1, 0, 0, 0, 1], // 7
        [1, 0, 0, 0, 1], // 8
        [1, 1, 2, 1, 1]  // 9
    ],

    tileRules: [
    //   0  1  2  3  4
        [1, 1, 1, 1, 1], // 0
        [1, 0, 0, 0, 1], // 1
        [1, 0, 0, 0, 1], // 2 
        [1, 0, 0, 0, 1], // 3
        [1, 0, 0, 0, 1], // 4
        [1, 0, 0, 0, 1], // 5
        [1, 0, 0, 0, 1], // 6
        [1, 0, 0, 0, 1], // 7
        [1, 0, 0, 0, 1], // 8
        [1, 1, 1, 1, 1]  // 9
    ],
}

const mainHallObject = {
    numAcross: 10,
    numDown: 10,

    //TEXTURE VALUES:
    //0: void; 1: wall; 2: door;

    graphicMap: [ 
    //      THIS IS OUR Y AXIS
    //   0  1  2  3  4  5  6  7  8  9 
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 0
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 1
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1], // 2
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 3
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 1], // 4    THIS IS OUR X AXIS
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 5
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 1], // 6
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 1], // 7
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 8
        [1, 1, 2, 1, 1, 1, 1, 1, 1, 1]  // 9
    ],

    tileRules: [ 
        //      THIS IS OUR Y AXIS
    //   0  1  2  3  4  5  6  7  8  9 
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 0
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 1
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1], // 2
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 3
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 1], // 4    THIS IS OUR X AXIS
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 5
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 1], // 6
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 1], // 7
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], // 8
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  // 9
    ]
}


//STORING LEVELS
let levels = {
    entrance: entranceObject,
    corridor: corridorObject,
    mainHall: mainHallObject,
}

let transitionEntranceToCorridor = {
    linkedLevel: levels.corridor,
    startingXPos: 2 * tileSize,
    startingYPos: 8 * tileSize
}

let transitionCorridorToEntrance = {
    linkedLevel: levels.entrance,
    startingXPos: 8 * tileSize,
    startingYPos: 1 * tileSize
}

let transitionCorridorToMainHall = {
    linkedLevel: levels.mainHall,
    startingXPos: 2 * tileSize,
    startingYPos: 8 * tileSize
}

let transitionMainHallToCorridor = {
    linkedLevel: levels.corridor,
    startingXPos: 2 * tileSize,
    startingYPos: 1 * tileSize
}