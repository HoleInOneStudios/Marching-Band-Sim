/**
 * Converts the 
 * @param {string} d - String version of drill @default "S1-Y50-I0-H1-J0"
 * - S => side
 * - Y => Yardline
 * - I => Offset from yardline
 * - H => hash
 * - J => Offset from hash 
 * @returns {x, y} scaled coordinates to on the field
 */
function drillToCoords(d = "S1-Y50-I0-H1-J0") {
	//init variables
	let X, Y;
	let s, y, i, h, j;

	d = d.toUpperCase(); // convert param d to uppercase

	s = parseFloat(d.substring(d.indexOf('S') + 1, d.indexOf('-Y'))); //get the side value from the param d
	y = parseFloat(d.substring(d.indexOf('Y') + 1, d.indexOf('-I'))); //get the yardline value from the param d
	i = parseFloat(d.substring(d.indexOf('I') + 1, d.indexOf('-H'))); //get the x offset value from the param d
	h = parseFloat(d.substring(d.indexOf('H') + 1, d.indexOf('-J'))); //get the hash value from the param d
	j = parseFloat(d.substring(d.indexOf('J') + 1)); //get the y offset value from the param d

	X = (settings.width / 2 * Math.cos(Math.PI * s) - (y / 10 * settings.width / 10 * Math.cos(Math.PI * s) + i)) + x_offset; //Calculate X
	Y = (Math.cos(Math.PI * h) * (settings.hash_distance / 2) + Math.cos(Math.PI * h) * j) + y_offset; //Calculate Y

	//console.log(s, y, i, h, j);

	return { x: X * scale, y: Y * scale }; //Return scaled vector of x and y
}

/* TODO coords to Drill conversion */
function coordsToDrill(c = { x: 0, y: 0 }) {
	let s, y, i, h, j;

	return `S${s}-Y${y}-I${i}-H${h}-J${j}`;
}

function lerp(a, b, x) {
	return a + (b - a) * x;
}

function lerpVector(a, b, x) {
	return { x: a.x + (b.x - a.x) * x, y: a.y + (b.y - a.y) * x };
}