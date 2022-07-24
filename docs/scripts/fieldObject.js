import { lerp, lerp2 } from "./Math.js";

class FieldObject {
    constructor () {
        this.sets = [{ x: 10, y: 10 }, { x: 100, y: 100 }, { x: 10, y: 10 }];
        this.pos = { x: 0, y: 0 };
    }

    async show(field) {
    }

    async update(objects) {
        
    }
}

class Objects {
    constructor (maxCount, interval, nextSetDis, currentSetDis, previousSetDis, countDis) {
        this.List = [];
        this.selected = this.List[0];

        this.nextSet = 0;
        this.currentSet = 0;
        this.previousSet = 0;

        this.nextSetDis = document.getElementById(nextSetDis);
        this.currentSetDis = document.getElementById(currentSetDis);
        this.previousSetDis = document.getElementById(previousSetDis);
        this.countDis = document.getElementById(countDis);

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

    async show(field) {
        this.List.forEach(element => {
            element.show(field);
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
                this.nextSet = (this.currentSet + 1) % this.maxSet;
                this.previousSet = (this.currentSet - 1) % this.maxSet;
                this.count = 0;
                //console.log("count");
                if (this.currentSet >= this.maxSet) {
                    this.currentSet = 0;
                    //console.log("set");
                }
            }
        }
        this.List.forEach(element => {
            if (element.sets.length - 1 > this.maxSet) {
                this.maxSet = element.sets.length;
            }
            element.update(this);
        });

        this.nextSetDis.innerText = this.nextSet;
        this.currentSetDis.innerText = this.currentSet;
        this.previousSetDis.innerText = this.previousSet;
        this.countDis.innerText = this.count;
    }
}

export { FieldObject, Objects };