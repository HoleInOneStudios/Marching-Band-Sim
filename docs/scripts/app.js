
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
let scale = 3; //scale of field

let x_offset = settings.width / 2; // automatically calculate offset
let y_offset = settings.height / 2; // automatically calculate offset

let mp = { x: 0, y: 0 }; //mouse position

let move = true; //move or not
let path = true; //show path or not
let show = true; //show objects or not

let stack = []; //Array of objects
let maxSet = 0; //greatest set of objects in array
let currentSet = 0; //current set
let nextSet = 1; //next set
let lerpNum = 0.0; //used to move

let playPause; //play pause button element
let debugP; //debug p element
let pathController; //path checkbox
let ieArea; //import export text area
let sSlider; //speed control slider


function init() {
	assignElements();
	updateInputs();
	updateElements();

	resizeCanvas();

	window.addEventListener('resize', resizeCanvas); //event listener for resizing
	c.addEventListener('mousemove', mouseMoved); //event listener for mouse movement

	Stack.objs.push(new FieldObject(["S1-Y45-I0-H1-J0", "S1-Y50-I0-H2-J0", "S2-Y35-I0-H1-J0", "S1-Y45-I0-H1-J0"], '#0000ff', "blue_Guy")); // default test object

	setInterval(update, 1); //animation loop
}

function update() {
	Field.draw(); // draw the field
	updateElements();
	updateInputs();

	Stack.update();

	lerpNum = (lerpNum + settings.speed) % (1 + settings.speed); //Iterate step in animation

	if (move && maxSet > 1) {
		if (lerpNum >= 1) {
			NextSet();

		} //iterate set when lerp is above 1
	}
	else {
		lerpNum = 0;
	} //if move is true and lerpNum is above 1 go to next set else set lerp number to 0
}