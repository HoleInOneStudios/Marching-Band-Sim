import { Field } from "./Field.js";
import { FieldObject, Objects } from "./FieldObject.js";

let field;
let fieldObj;
let objs;

document.body.onload = async () => {
    field = new Field("canvas", 300 / 3, 160 / 3, 60 / 3, 10, "white", "green", "fieldControls", "bgColor", "lnColor", "lnWidth", "mouseX", "mouseY");

    objs = new Objects(4, 20, "nextSet", "currentSet", "prevSet", "count");
    objs.add(new FieldObject());

    addEventListener('resize', () => {
        field.resize();
    });

    setInterval(() => {
        field.draw();
        field.update();

        objs.update();
        objs.show(field);

    }, 1000 / 60);
}
