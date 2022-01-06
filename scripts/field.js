let fieldSettings = {
    "width": 100,
    "height": 160 / 3,
    "hash_distance": 40 / 3
}

//Styles of field for easy modification in the program
let fieldStyle = {
    "bg": 'rgb(50, 150, 50)',
    "lnCol": 'rgb(255, 255, 255)',
    "ydln10w": 4,
    "ydln5w": 2,
    "hlnw": 3,
    "fontSize": 5
}

const Field = {
    draw: function () {
        background(fieldStyle["bg"]); // Fill background

        //Draw yard lines and text
        stroke(fieldStyle["lnCol"]);
        fill(255, 255, 255);
        textSize(fieldStyle["fontSize"] * scale);

        for (let i = -45; i < 50; i += 5) {
            switch (Math.abs(i % 10)) {
                case 0:
                    strokeWeight(fieldStyle["ydln10w"]);
                    if (i < 0) {
                        text(Math.abs(i + 50), (i / 10 * fieldSettings["width"] / 10 - fieldStyle["fontSize"] / 2) * scale, (fieldSettings["height"] - fieldStyle["fontSize"]) * scale / 2);
                        text(Math.abs(i + 50), (i / 10 * fieldSettings["width"] / 10 - fieldStyle["fontSize"] / 2) * scale, (fieldStyle["fontSize"] * 2.5 - fieldSettings["height"]) * scale / 2);
                    }
                    else {
                        text(50 - i, (i / 10 * fieldSettings["width"] / 10 - fieldStyle["fontSize"] / 2) * scale, (fieldSettings["height"] - fieldStyle["fontSize"]) * scale / 2);
                        text(50 - i, (i / 10 * fieldSettings["width"] / 10 - fieldStyle["fontSize"] / 2) * scale, (fieldStyle["fontSize"] * 2.5 - fieldSettings["height"]) * scale / 2);
                    }
                    break;
                case 5:
                    strokeWeight(fieldStyle["ydln5w"]);

                    break;

            }
            line(i / 10 * fieldSettings["width"] / 10 * scale, -fieldSettings["height"] / 2 * scale, i / 10 * fieldSettings["width"] / 10 * scale, fieldSettings["height"] / 2 * scale);
        }

        //Draw Hashes
        strokeWeight(fieldStyle["hlnw"]);
        drawingContext.setLineDash([10]);

        line(-fieldSettings["width"] / 2 * scale, fieldSettings["hash_distance"] * scale / 2, fieldSettings["width"] / 2 * scale, fieldSettings["hash_distance"] * scale / 2);
        line(-fieldSettings["width"] / 2 * scale, fieldSettings["hash_distance"] * scale / -2, fieldSettings["width"] / 2 * scale, fieldSettings["hash_distance"] * scale / -2);

        //reset
        drawingContext.setLineDash([0]);
        stroke(0);
        fill(0);
        strokeWeight(1);

    }
}

function GoToNextSet() {
    currentSet = nextSet;
    nextSet = (currentSet + 1) % maxSet;
}

function GoToPreviousSet() {
    currentSet = maxSet - (currentSet + nextSet);
    nextSet = (currentSet + 1) % maxSet;
}