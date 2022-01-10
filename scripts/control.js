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
}

function GoToPreviousSet() {
    currentSet = maxSet - (currentSet + nextSet);
    nextSet = (currentSet + 1) % maxSet;
}

function toggleMove() {
    playerSettings["move"] = !playerSettings["move"];
}