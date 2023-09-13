class Field {
  static presets = {
    HighSchool: {
      length: 300,
      width: 160,
      endzones: 30,
    },
  };

  static settings = {
    lineColor: "white",
    fieldColor: "green",
  };

  constructor(id, preset = "HighSchool") {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.preset = Field.presets[preset];

    this.scale = 2;

    // First Canvas Loop
    this.resizeCanvas();
  }

  resizeCanvas() {
    this.canvas.width =
      (2 * this.preset.endzones + this.preset.length) * this.scale;
    this.canvas.height = this.preset.width * this.scale;
  }
  drawField() {
    this.ctx.fillStyle = Field.settings.fieldColor;

    // playable area of the field
    this.ctx.fillRect(
      this.preset.endzones * this.scale,
      0,
      this.preset.length * this.scale,
      this.preset.width * this.scale
    );
  }
}

export { Field };
