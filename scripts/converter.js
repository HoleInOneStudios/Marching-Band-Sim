const converter = {
    drillToCoords: function (d = "S1-Y50-I0-H1-J0") {
        let X, Y;
        let s, y, i, h, j;

        d = d.toUpperCase();

        s = parseFloat(d.substring(d.indexOf('S') + 1, d.indexOf('-Y')));
        y = parseFloat(d.substring(d.indexOf('Y') + 1, d.indexOf('-I')));
        i = parseFloat(d.substring(d.indexOf('I') + 1, d.indexOf('-H')));
        h = parseFloat(d.substring(d.indexOf('H') + 1, d.indexOf('-J')));
        j = parseFloat(d.substring(d.indexOf('J') + 1));

        X = (Field.width / 2 * Math.cos(Math.PI * s) - (y / 10 * Field.width / 10 * Math.cos(Math.PI * s) + i)) + x_offset;
        Y = (Math.cos(Math.PI * h) * (Field.hash_Distance / 2) + Math.cos(Math.PI * h) * j) + y_offset;

        //console.log(s, y, i, h, j);

        return createVector(X * scale, Y * scale);
    },

    coordsToDrill: function (c = createVector(0, 0)) {
        let s, y, i, h, j;

        return `S${s}-Y${y}-I${i}-H${h}-J${j}`;
    }
}