/// <reference path="../libraries/TS/p5.global-mode.d.ts" />

let c; //Canvas element variable
let stack = []; //Array of objects
let maxSet = 0;
let currentSet = 0;
let nextSet = 1;
let lerpNum = 0.0;
let speed = 0.02;

let y_offset = 0;
let x_offset = 0;
let scale = 8;

let move = true;
let path = true;
let show = true;

let pInfo;
let moveC;
let showC;
let pathC;
let speedR;
let ieArea;

function preload() {
    scale = window.innerWidth / Field.width * .9; //Set to 9 / 10 of the screen width to dynamically adjust field scale
    pInfo = document.getElementById('playerInfo');


    moveC = document.getElementById('move');
    pathC = document.getElementById('path');
    showC = document.getElementById('show');
    speedR = document.getElementById('speed');
    ieArea = document.getElementById('ieArea');

    moveC.checked = move;
    pathC.checked = path;
    showC.checked = show;
    speedR.value = speed;
}

function setup() {

    c = createCanvas(Field.width * scale, Field.height * scale); // Create the canvas
    c.parent(document.getElementById("mainCanvasDiv")); // Assign the canvas to be in the mainCanvasDiv div
    c.id('mainCanvas');
    c.translate(width / 2, height / 2) // Move origin to center

    select('main').remove(); // delete unused main element

    stack.push(new FieldObject(["S1-Y45-I0-H2-J0", "S1-Y35-I0-H2-J0", "S1-Y35-I0-H2-J0"], 'rgb(0, 0, 255)'), new FieldObject(["S1-Y50-I0-H2-J0", "S1-Y50-I0-H2-J0"]));
}

function windowResized() {
    scale = window.innerWidth / Field.width * .9;  //Set to 9 / 10 of the screen width to dynamically adjust field scale
    resizeCanvas(Field.width * scale, Field.height * scale); // Resize Canvas with new scale
}

function draw() {
    c.translate(width / 2, height / 2) //Update Origin to Center

    pInfo.innerHTML = `Current Set: ${currentSet} Next Set: ${nextSet}`;

    move = moveC.checked;
    path = pathC.checked;
    show = showC.checked;
    speed = parseFloat(speedR.value);

    Field.draw(); // Draw field

    stack.forEach(element => {
        if (element.sets.length - 1 > maxSet) {
            maxSet = element.sets.length - 1;
        }
        element.update();
        if (path) { element.showPath(); }
        if (show) { element.show(); }
    }); //Render and simulate loop


    lerpNum = (lerpNum + speed) % (1 + speed); //Iterate step in animation

    if (move) {
        if (lerpNum >= 1) {
            currentSet = nextSet;
            nextSet = (nextSet + 1) % maxSet;

            //console.log(currentSet, nextSet);
        } //interate set when lerp is above 1
    }
    else {
        lerpNum = 0;
    }


}