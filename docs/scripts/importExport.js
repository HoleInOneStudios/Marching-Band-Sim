import { FieldObject } from "./FieldObject.js";

class ImportExport {
    constructor (objs, field, imButton, exButton,
        imFile, exText, dnButton) {
        this.field = field;
        this.objs = objs;
        
        this.imButton = document.getElementById(imButton);
        this.exButton = document.getElementById(exButton);
        this.imFile = document.getElementById(imFile);
        this.exText = document.getElementById(exText);
        this.dnButton = document.getElementById(dnButton);

        this.exButton.onclick = async () => {
            this.export();
        }
        this.imButton.onclick = async () => {
            this.import(this.exText.value);
        }
        this.dnButton.onclick = async () => {
            this.download();
        }
        this.imFile.onchange = async (e) => {
            this.upload(e);
        }
    }
    
    async export() {
        this.exText.value = JSON.stringify(await this.objs.toJson());
    }

    async import(J) {
        this.objs.List = [];
        let data = JSON.parse(J);
        data.List.forEach(element => {
            this.objs.add(new FieldObject(element.sets, element.name));
        });
    }

    async download() {
        this.export();
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.exText.value));
        element.setAttribute('download', 'data.json');

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);

    }

    async upload(e) {
        console.log(e.target.files);

        var reader = new FileReader();

        reader.onload = async (e) => {
            this.import(e.target.result);
        }
        
    }
}

export { ImportExport };