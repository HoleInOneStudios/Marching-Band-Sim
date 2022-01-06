class FieldObject {
    position = createVector();
    color = 'rgb(255, 0, 0)'
    sets = ["S1-Y50-I0-H1-J0"];

    constructor(sets = this.sets, color = this.color) {
        this.sets.push(...sets);
        this.color = color;

        this.show = function () {
            fill(this.color);
            ellipse(this.position.x, this.position.y, 1.5 * scale);
        }

        this.update = function () {
            if (this.sets.length > nextSet) {
                //console.log("move");
                this.position = p5.Vector.lerp(drillToCoords(this.sets[currentSet]), drillToCoords(this.sets[nextSet]), lerpNum);
            }
        }

        this.setPosition = function (s) {
            if (s < this.sets.length) {
                this.position = drillToCoords(this.sets[s]);
            }
            //console.log(this.position);
        }

        this.showPath = function () {
            strokeWeight(3);
            for (let i = 0; i < this.sets.length; i++) {
                line(drillToCoords(this.sets[i]).x, drillToCoords(this.sets[i]).y, drillToCoords(this.sets[i + 1]).x, drillToCoords(this.sets[i + 1]).y)
            }

            strokeWeight(1);
        }

    }
}