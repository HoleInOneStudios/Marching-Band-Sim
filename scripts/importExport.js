function exportJson() {
    let ex = [];
    stack.forEach(element => {
        let temp = { "color": element.color, "sets": element.sets };
        ex.push(temp);
    });
    let newJson = JSON.stringify(ex, null, '\t');

    return newJson;
}

function importJson(J) {
    let result = JSON.parse(J);
    stack = [];

    result.forEach(element => {
        stack.push(new FieldObject(element["sets"], element["color"]))
    });
}

function buttExport() {
    ieArea.value = exportJson();
}

function buttImport() {
    importJson(ieArea.value);
}