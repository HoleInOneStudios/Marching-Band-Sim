/// <reference path="../libraries/TS/p5.global-mode.d.ts" />

let c; //Canvas element variable
let stack = []; //Array of objects
let maxSet = 0;
let currentSet = 0;
let nextSet = 1;
let lerpNum = 0.0;

let speedSlider;
let speed = 0.02;

let infoP;

let y_offset = 0;
let x_offset = 0;
let scale = 8;

function setup() {
    scale = window.innerWidth / Field.width * .9; //Set to 9 / 10 of the screen width to dynamically adjust field scale

    c = createCanvas(Field.width * scale, Field.height * scale); // Create the canvas
    c.parent(document.getElementById("mainCanvasDiv")); // Assign the canvas to be in the mainCanvasDiv div
    c.id('mainCanvas');

    c.translate(width/2, height/2) // Move origin to center

    //console.log(converter.drillToCoords());
    //console.log(converter.coordsToDrill(converter.drillToCoords()));

    stack.push(new FieldObject(["S1-Y45-I0-H2-J0", "S1-Y35-I0-H2-J0", "S1-Y35-I0-H2-J0"]), new FieldObject(["S1-Y50-I0-H2-J0", "S1-Y50-I0-H2-J0"]));

    speedSlider = createSlider(0, .10, speed, .01);
    infoP = createP();
}

function windowResized() {
    scale = window.innerWidth / Field.width * .9;  //Set to 9 / 10 of the screen width to dynamically adjust field scale

    resizeCanvas(Field.width * scale, Field.height * scale); // Resize Canvas with new scale
}

function draw() {
    speed = speedSlider.value();

    infoP.html(`${currentSet} <br> ${nextSet} <br> ${speed} <br>`);

    c.translate(width/2, height/2) //Update Origin to Center

    Field.draw(); // Draw field

    stack.forEach(element => { 
        if (element.sets.length - 1 > maxSet){
            maxSet = element.sets.length - 1;
        }
        element.move();
        element.show();
    }); //Render and simulate loop

    
    lerpNum = (lerpNum + speed) % (1 + speed); //Iterate step in animation

    if ( lerpNum >= 1){
        currentSet = nextSet;
        nextSet = (nextSet + 1) % maxSet;

        //console.log(currentSet, nextSet);
    } //interate set when lerp is above 1

    
}