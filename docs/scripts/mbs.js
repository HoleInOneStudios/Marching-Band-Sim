import { Field } from "./field.js";
import { FieldObject, Objects } from "./fieldObject.js";
import { ImportExport } from "./importExport.js";

let field;
let fieldObj;
let imex;
let objs;

document.body.onload = async () => {
    field = new Field("canvas", 300 / 3, 160 / 3, 60 / 3, 10, "white", "green", "fieldControls", "bgColor", "lnColor", "lnWidth", "mouseX", "mouseY");

    objs = new Objects(4, 20, 0, 20, "nextSet", "currentSet", "prevSet", "count", "interval", "intervalControl", "countControl", "move", "path", "objSelect", "addObj", "removeObj");
    objs.add(new FieldObject());
    objs.add(new FieldObject([{ x: 65, y: 10 }, { x: 100, y: 20 }], "A"));

    imex = new ImportExport(objs, field, "import", "export", "importFile", "exportText", "download");

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
