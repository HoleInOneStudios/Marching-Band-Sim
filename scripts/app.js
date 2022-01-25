
/** @type {HTMLCanvasElement} */
let c;
/** @type {CanvasRenderingContext2D} */
let ctx;

let settings = {
    "width": 300 / 3,
    "height": 160 / 3,
    "hash_distance": 60 / 3,
    "speed": .01
}

let x_offset = settings["width"] / 2;
let y_offset = settings["height"] / 2;

let stack = []; //Array of objects
let maxSet = 0; //greatest set of objects in array
let currentSet = 0; //current set
let nextSet = 1; //next set
let lerpNum = 0.0; //used to move

let move = true;
let path = true;
let show = true;

let scale = 3;

let ieArea;

let sObj;
let sSet;

function init(){
    c = document.getElementById('mainCanvas');
    ctx = c.getContext("2d");

    ieArea = document.getElementById('ieArea');

    scale = window.innerWidth / settings["width"] * .9;
    c.width = settings["width"] * scale;
    c.height = settings["height"] * scale;

    window.addEventListener('resize', resizeCanvas);
    c.addEventListener('mousemove', mouseMoved);

    stack.push(new FieldObject(["S1-Y45-I0-H1-J0", "S1-Y50-I0-H2-J0", "S2-Y35-I0-H1-J0", "S1-Y45-I0-H1-J0"], '#0000ff'));
    
    setInterval(update, 1);
}

function update(){
    

    Field.draw();

    stack.forEach(element => {
        if (element.sets.length - 1 > maxSet) {
            maxSet = element.sets.length - 1;
        } //check that the max set is the max set and if not set the max set to the new max set
        element.update(); //update object positions
        if (path) { element.showPath(); } //draw path if path is true
        if (show) { element.show(); } // show if show is true
    }); //Render and simulate loop

    lerpNum = (lerpNum + settings["speed"]) % (1 + settings["speed"]); //Iterate step in animation

    if (move) {
        if (lerpNum >= 1) {
            GoToNextSet();

        } //interate set when lerp is above 1
    }
    else {
        lerpNum = 0;
    } //if move is true and lerpNum is above 1 go to next set else set lerpnum to 0
}

// Events
function resizeCanvas(){
    scale = window.innerWidth / settings["width"] * .9;
    c.width = settings["width"] * scale;
    c.height = settings["height"] * scale;
}

function mouseMoved(e){
    
}