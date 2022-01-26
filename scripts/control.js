/**
 * Function called by the export button to export the stack to the import export text area
 */
function buttExport() {
    ieArea.value = exportJson();
}

/**
 * Function called by the import button to import the value of the import export text area to the stack
 */
function buttImport() {
    importJson(ieArea.value);
}

function GoToNextSet() {
    currentSet = nextSet;
    nextSet = (currentSet + 1) % maxSet;
    lerpNum = 0;
}

function GoToPreviousSet() {
    nextSet = currentSet;
    currentSet = (maxSet - 1 + nextSet) % maxSet;
    lerpNum = 0;
}

function toggleMove() {
    move = !move;
    if (move) {
        playPause.innerHTML = pause;
    }
    else {
        playPause.innerHTML = play;
    }
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

function uploadJson(e) {
    var fr = new FileReader();

    var files = e.target.files;
    fr.readAsText(files[0]);

    fr.onload = function () {
        text = fr.result;
        //console.log(text);

        importJson(text);
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