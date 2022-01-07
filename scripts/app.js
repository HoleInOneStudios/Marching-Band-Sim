/// <reference path="../libraries/TS/p5.global-mode.d.ts" />

let stack = []; //Array of objects
let maxSet = 0; //greatest set of objects in array
let currentSet = 0; //current set
let nextSet = 1; //next set
let lerpNum = 0.0; //used to move 

let y_offset = 0; //depricated
let x_offset = 0; //depricated
let scale = 8; //dynamic scale of field to screen

let playerSettings = {
    "move": true, //objects move or not
    "path": true, //paths drawn or not
    "show": true, //objects shown or not
    "speed": 0.02 //speed of objects
}

let elements = {
    "c": null, //Canvas element variable
    "pInfo": null, //p element that contains info
    "pathC": null, //checkbox that controls player settings 
    "moveC": null, //checkbox that controls player settings
    "showC": null, //checkbox that controls player settings 
    "speedR": null, //slider that constrols speed
    "ieArea": null, //text area for importing and exporting

    "bgColorS": null,
    "lnColorS": null
}

function preload() {
    scale = window.innerWidth / fieldSettings["width"] * .9; //Set to 9 / 10 of the screen width to dynamically adjust field scale

    elements["pInfo"] = document.getElementById('playerInfo'); //p element that contains info (get element)
    elements["moveC"] = document.getElementById('move'); //checkbox that controls player settings (get element)
    elements["pathC"] = document.getElementById('path'); //checkbox that controls player settings  (get element)
    elements["showC"] = document.getElementById('show'); //checkbox that controls player settings  (get element)
    elements["speedR"] = document.getElementById('speed'); //slider that constrols speed (get element)
    elements["ieArea"] = document.getElementById('ieArea'); //text area for importing and exporting (get element)
    elements["bgColorS"] = document.getElementById('bgColor');
    elements["lnColorS"] = document.getElementById('lnColor');

    elements["moveC"].checked = playerSettings["move"]; //set values to predefined values to be updated
    elements["pathC"].checked = playerSettings["path"]; //set values to predefined values to be updated
    elements["showC"].checked = playerSettings["show"]; //set values to predefined values to be updated
    elements["speedR"].value = playerSettings["speed"]; //set values to predefined values to be updated
    elements["bgColorS"].value = fieldStyle["bg"];
    elements["lnColorS"].value = fieldStyle["ln"];
}

function setup() {

    elements["c"] = createCanvas(fieldSettings["width"] * scale, fieldSettings["height"] * scale); // Create the canvas
    elements["c"].parent(document.getElementById("mainCanvasDiv")); // Assign the canvas to be in the mainCanvasDiv div
    elements["c"].id('mainCanvas'); // set id of canvas
    elements["c"].translate(width / 2, height / 2) // Move origin to center

    select('main').remove(); // delete unused main element

    stack.push(new FieldObject(["S1-Y45-I0-H2-J0", "S1-Y35-I0-H2-J0", "S1-Y35-I0-H2-J0"], '#0000ff'), new FieldObject(["S1-Y50-I0-H2-J0", "S1-Y50-I0-H2-J0"], '#ff0000')); //add objects to stack
}

function windowResized() {
    scale = window.innerWidth / fieldSettings["width"] * .9;  //Set to 9 / 10 of the screen width to dynamically adjust field scale
    resizeCanvas(fieldSettings["width"] * scale, fieldSettings["height"] * scale); // Resize Canvas with new scale
}

function draw() {
    elements["c"].translate(width / 2, height / 2) //Update Origin to Center

    elements["pInfo"].innerHTML = `Current Set: ${currentSet} Next Set: ${nextSet}`; //set the info text

    playerSettings["move"] = elements["moveC"].checked; //update values
    playerSettings["path"] = elements["pathC"].checked; //update values
    playerSettings["show"] = elements["showC"].checked; //update values
    playerSettings["speed"] = parseFloat(elements["speedR"].value); //update values
    fieldStyle["bg"] = elements["bgColorS"].value;
    fieldStyle["ln"] = elements["lnColorS"].value;

    Field.draw(); // Draw field

    stack.forEach(element => {
        if (element.sets.length - 1 > maxSet) {
            maxSet = element.sets.length - 1;
        } //check that the max set is the max set and if not set the max set to the new max set
        element.update(); //update object positions
        if (path) { element.showPath(); } //draw path if path is true
        if (show) { element.show(); } // show if show is true
    }); //Render and simulate loop


    lerpNum = (lerpNum + playerSettings["speed"]) % (1 + playerSettings["speed"]); //Iterate step in animation

    if (playerSettings["move"]) {
        if (lerpNum >= 1) {
            GoToNextSet();

        } //interate set when lerp is above 1
    }
    else {
        lerpNum = 0;
    } //if move is true and lerpNum is above 1 go to next set else set lerpnum to 0


}