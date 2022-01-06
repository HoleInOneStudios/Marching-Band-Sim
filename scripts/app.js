/// <reference path="../libraries/TS/p5.global-mode.d.ts" />

let c; //Canvas element variable
let stack = []; //Array of objects
let maxSet = 0; //greatest set of objects in array
let currentSet = 0; //current set
let nextSet = 1; //next set
let lerpNum = 0.0; //used to move 
let speed = 0.02; //speed of objects

let y_offset = 0; //depricated
let x_offset = 0; //depricated
let scale = 8; //dynamic scale of field to screen

let move = true; //objects move or not
let path = true; //paths drawn or not
let show = true; //objects shown or not

let pInfo; //p element that contains info
let moveC; //checkbox that controls player settings
let showC; //checkbox that controls player settings 
let pathC; //checkbox that controls player settings 
let speedR; //slider that constrols speed
let ieArea; //text area for importing and exporting

function preload() {
    scale = window.innerWidth / Field.width * .9; //Set to 9 / 10 of the screen width to dynamically adjust field scale

    pInfo = document.getElementById('playerInfo'); //p element that contains info (get element)
    moveC = document.getElementById('move'); //checkbox that controls player settings (get element)
    pathC = document.getElementById('path'); //checkbox that controls player settings  (get element)
    showC = document.getElementById('show'); //checkbox that controls player settings  (get element)
    speedR = document.getElementById('speed'); //slider that constrols speed (get element)
    ieArea = document.getElementById('ieArea'); //text area for importing and exporting (get element)

    moveC.checked = move; //set values to predefined values to be updated
    pathC.checked = path; //set values to predefined values to be updated
    showC.checked = show; //set values to predefined values to be updated
    speedR.value = speed; //set values to predefined values to be updated
}

function setup() {

    c = createCanvas(Field.width * scale, Field.height * scale); // Create the canvas
    c.parent(document.getElementById("mainCanvasDiv")); // Assign the canvas to be in the mainCanvasDiv div
    c.id('mainCanvas'); // set id of canvas
    c.translate(width / 2, height / 2) // Move origin to center

    select('main').remove(); // delete unused main element

    stack.push(new FieldObject(["S1-Y45-I0-H2-J0", "S1-Y35-I0-H2-J0", "S1-Y35-I0-H2-J0"], 'rgb(0, 0, 255)'), new FieldObject(["S1-Y50-I0-H2-J0", "S1-Y50-I0-H2-J0"])); //add objects to stack
}

function windowResized() {
    scale = window.innerWidth / Field.width * .9;  //Set to 9 / 10 of the screen width to dynamically adjust field scale
    resizeCanvas(Field.width * scale, Field.height * scale); // Resize Canvas with new scale
}

function draw() {
    c.translate(width / 2, height / 2) //Update Origin to Center

    pInfo.innerHTML = `Current Set: ${currentSet} Next Set: ${nextSet}`; //set the info text

    move = moveC.checked; //update values
    path = pathC.checked; //update values
    show = showC.checked; //update values
    speed = parseFloat(speedR.value); //update values

    Field.draw(); // Draw field

    stack.forEach(element => {
        if (element.sets.length - 1 > maxSet) {
            maxSet = element.sets.length - 1;
        } //check that the max set is the max set and if not set the max set to the new max set
        element.update(); //update object positions
        if (path) { element.showPath(); } //draw path if path is true
        if (show) { element.show(); } // show if show is true
    }); //Render and simulate loop


    lerpNum = (lerpNum + speed) % (1 + speed); //Iterate step in animation

    if (move) {
        if (lerpNum >= 1) {
            GoToNextSet();

        } //interate set when lerp is above 1
    }
    else {
        lerpNum = 0;
    } //if move is true and lerpNum is above 1 go to next set else set lerpnum to 0


}