
/** @type {HTMLCanvasElement} */
let c;
/**  @type {CanvasRenderingContext2D} */
let ctx;

let settings = {
    width: 300 / 3, //width of field
    height: 160 / 3, //height of field
    hash_distance: 60 / 3, //hash distance on field
    speed: .01 //speed of simulation
}

let x_offset = settings.width / 2; // automatically calculate offset
let y_offset = settings.height / 2; // automatically calculate offset

let stack = []; //Array of objects
let maxSet = 0; //greatest set of objects in array
let currentSet = 0; //current set
let nextSet = 1; //next set
let lerpNum = 0.0; //used to move

let move = true; //move or not
let path = true; //show path or not
let show = true; //show objects or not

let scale = 3; //scale of field

let ieArea; //import export text area

let sObj; //TODO selected object
let sSet; //TODO selected set

let play = '<img alt="Play" src="./rsc/play_arrow_black_24dp.svg" />'; //play icon
let pause = '<img alt="Pause" src="./rsc/pause_black_24dp.svg" />'; //pause icon
let playPause; //play pause button element

let debugP; //debug p element
let pathController; //path checkbox

let mp = { x: 0, y: 0 }; //mouse position

function init() {
    c = document.getElementById('mainCanvas'); //get canvas
    ctx = c.getContext("2d"); //get canvas context

    ieArea = document.getElementById('ieArea'); //get import export text area

    playPause = document.getElementById('playpause'); //get play pause button
    playPause.innerHTML = pause; //update icon

    debugP = document.getElementById('debugInfo'); //get debug p element

    pathController = document.getElementById('pathController'); //get path controller checkbox element
    pathController.checked = path; //update path controller checkbox

    scale = window.innerWidth / settings.width * .8; //update scale
    c.width = settings.width * scale; //set width
    c.height = settings.height * scale; //set height

    window.addEventListener('resize', resizeCanvas); //event listener for resizing
    c.addEventListener('mousemove', mouseMoved); //event listener for mouse movement

    stack.push(new FieldObject(["S1-Y45-I0-H1-J0", "S1-Y50-I0-H2-J0", "S2-Y35-I0-H1-J0", "S1-Y45-I0-H1-J0"], '#0000ff', "blue_Guy")); // default test object

    setInterval(update, 1); //animation loop
}

function update() {
    debugP.innerHTML = `Mouse Positon: {X: ${parseInt(mp.x / scale)}, Y: ${parseInt(mp.y / scale)}} <br> Current Set: ${currentSet} Next Set: ${nextSet} <br> Lerp Number: ${Math.round(lerpNum * 100) / 100} Speed: ${settings.speed}`; //set debug text

    path = pathController.checked; //updates path with input

    Field.draw(); // draw the field

    stack.forEach(element => {
        if (element.sets.length - 1 > maxSet) {
            maxSet = element.sets.length - 1;
        } //check that the max set is the max set and if not set the max set to the new max set
        element.update(); //update object positions
        if (path) { element.showPath(); } //draw path if path is true
        if (show) { element.show(); } // show if show is true
    }); //Render and simulate loop

    lerpNum = (lerpNum + settings.speed) % (1 + settings.speed); //Iterate step in animation

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
/**
 * Resizes the canvas and recalculates the scale
 */
function resizeCanvas() {
    scale = window.innerWidth / settings.width * .9; //update scale
    c.width = settings.width * scale; //update width
    c.height = settings.height * scale; //update height
}

/**
 * return mouse position on canvas
 * @param {Event} e 
 */
function mouseMoved(e) {
    mp = { x: e.clientX, y: e.clientY }; //set mouse position to mouse client position
}