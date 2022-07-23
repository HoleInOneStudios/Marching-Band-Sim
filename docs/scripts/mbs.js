import { Field } from "./Field.js";
import { FieldObject } from "./FieldObject.js";

let field;
let fieldObj;

document.body.onload = async () => {
    field = new Field("canvas", 300 / 3, 160 / 3, 60 / 3, 10, "white", "green", "fieldControls", "bgColor", "lnColor", "lnWidth");
    
    addEventListener('resize', () => {
        field.resize();
    });

    setInterval(() => {
        field.draw();


    }, 1000 / 60);
}
