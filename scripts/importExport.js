/**
 * Converts the stack to a dictionary and returns the JSON of the dictionary
 * @returns {string} Json data of each object's color and sets in the current stack
 */
function exportJson() {
    let json = {};

    let ex = [];
    stack.forEach(element => {
        let temp = { "color": element.color, "sets": element.sets };
        ex.push(temp);
    });
    json["objects"] = ex;

    let newJson = JSON.stringify(json, null, '\t');

    return newJson;
}

/**
 * Converts the inputed string to the stack to be viewed on the player
 * @param {string} J - String of Json to be imported into the stack
 */
function importJson(J) {
    let result = JSON.parse(J);
    stack = [];

    result.objects.forEach(element => {
        stack.push(new FieldObject(element["sets"], element["color"]))
    });
}

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