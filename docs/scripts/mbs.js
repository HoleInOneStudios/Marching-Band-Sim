import { Field } from "./Field.js";
import { FieldObject } from "./FieldObject.js";

let field;
let fieldObj;

document.body.onload = async () => {
    field = new Field("canvas", 300 / 3, 160 / 3, 60 / 3, 10, "white", "green", "fieldControls", "bgColor", "lnColor", "lnWidth", "mouseX", "mouseY");

    addEventListener('resize', () => {
        field.resize();
    });

    setInterval(() => {
        field.draw();
        field.update();

    }, 1000 / 60);
}
