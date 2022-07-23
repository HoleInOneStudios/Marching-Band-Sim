class FieldObject {
    constructor () {
        
    }

    async show() {
        console.log("Shown");
    }

    async update() {
        console.log("Updated");
    }
}

class Objects {
    constructor () {
        this.List = [];
    }

    async show() {
        this.List.forEach(element => {
            element.show();
        });
    }

    async update() {
        this.List.forEach(element => {
            element.update();
        });
    }
}

export { FieldObject, Objects };