const converter = {
    drillToCoords: function (d = "S1-Y50-I0-H1-J0") {
        //init variables
        let X, Y;
        let s, y, i, h, j;

        d = d.toUpperCase(); // convert param d to uppercase

        s = parseFloat(d.substring(d.indexOf('S') + 1, d.indexOf('-Y'))); //get the side value from the param d
        y = parseFloat(d.substring(d.indexOf('Y') + 1, d.indexOf('-I'))); //get the yardline value from the param d
        i = parseFloat(d.substring(d.indexOf('I') + 1, d.indexOf('-H'))); //get the x offset value from the param d
        h = parseFloat(d.substring(d.indexOf('H') + 1, d.indexOf('-J'))); //get the hash value from the param d
        j = parseFloat(d.substring(d.indexOf('J') + 1)); //get the y offset value from the param d

        X = (Field.width / 2 * Math.cos(Math.PI * s) - (y / 10 * Field.width / 10 * Math.cos(Math.PI * s) + i)) + x_offset; //Calculate X
        Y = (Math.cos(Math.PI * h) * (Field.hash_Distance / 2) + Math.cos(Math.PI * h) * j) + y_offset; //Calculate Y

        //console.log(s, y, i, h, j);

        return createVector(X * scale, Y * scale); //Return scaled vector of x and y
    },

    coordsToDrill: function (c = createVector(0, 0)) {
        let s, y, i, h, j;

        return `S${s}-Y${y}-I${i}-H${h}-J${j}`;
    }
}