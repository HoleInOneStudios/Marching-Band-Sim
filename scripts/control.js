//BUTTON EVENTS

function Export() {
    ieArea.value = ExportJSON();
}

function Import() {
    ImportJSON(ieArea.value);
}

function NextSet() {
    currentSet = nextSet;
    nextSet = (currentSet + 1) % maxSet;
    lerpNum = 0;
}

function PreviousSet() {
    nextSet = currentSet;
    currentSet = (maxSet - 1 + nextSet) % maxSet;
    lerpNum = 0;
}

function ToggleMove() {
    move = !move;
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function upload(e) {
    var fr = new FileReader();

    var files = e.target.files;
    fr.readAsText(files[0]);

    fr.onload = function () {
        text = fr.result;
        //console.log(text);

        ImportJSON(text);
        ieArea.value = text;

        return text;
    }

}

function End() {
    currentSet = maxSet;
    nextSet = maxSet;
    lerpNum = 0;
}

function Begin() {
    currentSet = 0;
    nextSet = 0;
    lerpNum = 0;
}

//EVENTS

/**
 * return mouse position on canvas
 * @param {Event} e 
 */
function mouseMoved(e) {
    mp = { x: e.clientX / scale, y: e.clientY / scale }; //set mouse position to mouse client position
}

/**
 * Resizes the canvas and recalculates the scale
 */
function resizeCanvas() {
    scale = window.innerWidth / settings.width * .9; //update scale
    c.width = settings.width * scale; //update width
    c.height = settings.height * scale; //update height
}

//ASSIGN ELEMENT VARIABLES
function assignElements() {
    c = document.getElementById('mainCanvas'); //get canvas
    ctx = c.getContext("2d"); //get canvas context

    ieArea = document.getElementById('ieArea'); //get import export text area

    playPause = document.getElementById('playpause'); //get play pause button

    debugP = document.getElementById('debugInfo'); //get debug p element

    pathController = document.getElementById('pathController'); //get path controller checkbox element
}

//UPDATE ELEMENTS
function updateElements() {
    debugP.innerHTML = `Mouse Positon: {X: ${parseInt(mp.x)}, Y: ${parseInt(mp.y)}} <br> Current Set: ${currentSet} Next Set: ${nextSet} <br> Lerp Number: ${Math.round(lerpNum * 100) / 100} Speed: ${settings.speed}`; //set debug text

}


//INPUT ELEMENTS
function updateInputs() {
    path = pathController.checked; //updates path with input

}