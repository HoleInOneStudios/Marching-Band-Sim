class FieldObject {
    constructor () {
        
    }

    async show() {

    }

    async update(set, count) {

    }
}

class Objects {
    constructor (maxCount, interval) {
        this.List = [];
        this.selected = this.List[0];

        this.set = 0;
        this.maxSet = 0;
        this.count = 0;
        this.maxCount = maxCount || 4;

        this.time = 0;
        this.interval = interval || 10;
    }

    add(obj) {
        return this.List.push(obj);
    }

    remove(obj) {
        return this.List.splice(this.List.indexOf(obj), 1);
    }

    async show() {
        this.List.forEach(element => {
            element.show();
        });
    }

    async update() {
        this.time++;
        if (this.time >= this.interval) {
            this.count++;
            this.time = 0;
            //console.log("frame");
            if (this.count >= this.maxCount) {
                this.currentSet++;
                this.count = 0;
                //console.log("count");
                if (this.currentSet >= this.maxSet) {
                    this.currentSet = 0;
                    //console.log("set");
                }
            }
        }
        this.List.forEach(element => {
            element.update(this.set, this.count);
        });
    }
}

export { FieldObject, Objects };