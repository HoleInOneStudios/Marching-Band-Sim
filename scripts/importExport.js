/**
 * Converts the stack to a dictionary and returns the JSON of the dictionary
 * @returns {string} Json data of each object's color and sets in the current stack
 */
function exportJson() {
    let json = {};

    json.style = Field.style;
    json.settings = settings;

    let ex = [];
    stack.forEach(element => {
        let temp = { name: element.name, color: element.color, sets: element.sets };
        ex.push(temp);
    });
    json.objects = ex;


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
        stack.push(new FieldObject(element.sets, element.color, element.name))
    });
    Object.assign(settings, result.settings);
    Object.assign(Field.style, result.style);

    //resizeCanvas();
}