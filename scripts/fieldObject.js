class FieldObject {
    position = createVector();
    sets = ["S1-Y50-I0-H1-J0"];
    
    constructor(sets = this.sets){
        this.sets.push(...sets);

        this.show = function() {
            ellipse(this.position.x, this.position.y, 10);
        }

        this.move = function(){
            if (this.sets.length > nextSet){
                //console.log("move");
                this.position = p5.Vector.lerp(converter.drillToCoords(this.sets[currentSet]), converter.drillToCoords(this.sets[nextSet]), lerpNum);
            }
        }

        this.setPosition = function(s) {
            if ( s < this.sets.length) {
                this.position = converter.drillToCoords(this.sets[s]);
            }
            //console.log(this.position);
        }

    }
}