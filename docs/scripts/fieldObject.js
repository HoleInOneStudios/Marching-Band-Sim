class FieldObject {
	name = "no name";
	position = { x: 0, y: 0 }; //position of object
	color = '#ff00ff' //rgb color of fill
	sets = ["S1-Y50-I0-H1-J0", "S1-Y50-I0-H1-J0"]; //array of drill strings

	constructor (sets = this.sets, color = this.color, name = this.name) {
		this.sets = sets;
		this.color = color;
		this.name = name;

		this.show = function () {
			ctx.fillStyle = this.color;
			ctx.beginPath();
			ctx.ellipse(this.position.x, this.position.y, 1.5 * scale, 1.5 * scale, 0, 0, 360);
			ctx.fill();
		}

		this.update = function () {
			if (this.sets.length > nextSet) {
				//console.log("move");
				this.position = lerpVector(drillToCoords(this.sets[currentSet]), drillToCoords(this.sets[nextSet]), lerpNum);
			}
		}

		this.setPosition = function (s) {
			if (s < this.sets.length) {
				this.position = drillToCoords(this.sets[s]);
			}
			//console.log(this.position);
		}

		this.showPath = function () {
			ctx.lineWidth = 3;
			for (let i = 0; i < this.sets.length; i++) {
				ctx.beginPath();
				ctx.moveTo(drillToCoords(this.sets[i]).x, drillToCoords(this.sets[i]).y);
				ctx.lineTo(drillToCoords(this.sets[i + 1]).x, drillToCoords(this.sets[i + 1]).y);
				ctx.stroke();
			}

			ctx.lineWidth = 1;
		}

		this.addSet = function (s = "S1-Y50-I0-H1-J0") {
			if (this.sets.length < currentSet) {
				this.sets.splice(this.sets.length - 1, 0, s);
			}
			else {
				this.sets.splice(currentSet, 0, s);
			}

		}

		this.removeSet = function () {
			if (this.sets.length < currentSet) {
				this.sets.pop();
			}
			else {
				this.sets.splice(currentSet, 1);
			}

		}

	}
}