const Field = {
	style: {
		bg: '#008700',
		ln: '#ffffff',
		ydln10w: 1,
		ydln5w: .5,
		hlnw: 3,
		fontSize: 5
	},

	draw: function () {
		//draw grass
		ctx.fillStyle = this.style.bg;
		ctx.fillRect(0, 0, settings.width * scale, settings.height * scale);

		//drawing parts
		ctx.strokeStyle = this.style.ln;
		ctx.font = this.style.fontSize * scale + "px serif";
		for (let i = 5; i < 100; i += 5) {
			switch (Math.abs(i % 10)) {
				case 0:
					//text drawing
					if (i <= 50) {
						ctx.strokeText(Math.abs(i), (i / 10 * settings.width / 10 - this.style.fontSize / 2) * scale, (settings.height - this.style.fontSize) * scale);
						ctx.strokeText(Math.abs(i), (i / 10 * settings.width / 10 - this.style.fontSize / 2) * scale, (this.style.fontSize * 1.5) * scale);
					}
					else {
						ctx.strokeText(100 - i, (i / 10 * settings.width / 10 - this.style.fontSize / 2) * scale, (settings.height - this.style.fontSize) * scale);
						ctx.strokeText(100 - i, (i / 10 * settings.width / 10 - this.style.fontSize / 2) * scale, (this.style.fontSize * 1.5) * scale);
					}
					ctx.lineWidth = this.style.ydln10w * scale;
					break;

				case 5:
					ctx.lineWidth = this.style.ydln5w * scale;
					break;

				default:
					break;
			}
			//yd line drawing
			ctx.beginPath();

			ctx.moveTo(i * scale, 0);
			ctx.lineTo(i * scale, settings.height * scale);

			ctx.stroke();
		}

		//hash drawing
		ctx.strokeStyle = this.style.hlnw;
		ctx.setLineDash([10]);

		ctx.beginPath();
		ctx.moveTo(0, (settings.height - settings.hash_distance) * scale);
		ctx.lineTo(settings.width * scale, (settings.height - settings.hash_distance) * scale);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(0, settings.hash_distance * scale);
		ctx.lineTo(settings.width * scale, settings.hash_distance * scale);
		ctx.stroke();

		//Reset for other drawing
		ctx.setLineDash([0]);
		ctx.strokeStyle = 'black';
		ctx.lineWidth = 1;
		ctx.fillStyle = 'white';
	}
}