import { lerp, lerp2 } from "./Math.js";

class FieldObject {
    constructor (sets) {
        this.sets = sets || [{ x: 10, y: 10 }, { x: 50, y: 30 }, { x: 65, y: 10 }];
        this.pos = { x: 0, y: 0 };
    }

    async show(field) {
        field.ctx.fillStyle = "red";
        field.ctx.fillRect(this.pos.x * field.getScale(), this.pos.y * field.getScale(), 1 * field.getScale(), 1 * field.getScale());
    }

    async update(objects) {
        if (objects.nextSet < this.sets.length && objects.currentSet < this.sets.length) {
            this.pos = lerp2(this.sets[objects.currentSet], this.sets[objects.nextSet], objects.count / objects.maxCount);
        }
    }
}

class Objects {
    constructor (maxCount, minInterval, maxInterval, nextSetDis, currentSetDis, previousSetDis, countDis, intervalControl) {
        this.List = [];
        this.selected = this.List[0];

        this.nextSetDis = document.getElementById(nextSetDis);
        this.currentSetDis = document.getElementById(currentSetDis);
        this.previousSetDis = document.getElementById(previousSetDis);
        this.countDis = document.getElementById(countDis);

        this.minInterval = minInterval;
        this.maxInterval = maxInterval;
        this.intervalControl = document.getElementById(intervalControl);
        this.intervalControl.min = minInterval;
        this.intervalControl.max = maxInterval;

        this.maxSet = 0;
        this.count = 0;
        this.maxCount = maxCount || 4;

        this.time = 0;
        this.interval = lerp(this.minInterval, this.maxInterval, .5) || 10;
        this.intervalControl.value = this.interval;
        this.move = true;

        this.currentSet = 0;
        this.nextSet = (this.currentSet + 1) % this.maxSet || this.currentSet;
        this.previousSet = (this.currentSet - 1) % this.maxSet || this.currentSet;

        this.List.forEach(element => {
            if (element.sets.length - 1 > this.maxSet) {
                this.maxSet = element.sets.length;
            }
        });
        
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
        this.interval = this.intervalControl.value;
        if (this.move) {
            this.time++;
            if (this.time >= this.interval) {
                this.count++;
                //console.log(this.count / this.maxCount);
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