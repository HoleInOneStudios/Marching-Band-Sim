const Field = {
    width: 100,
    height: 160 / 3,
    hash_Distance: 40 / 3,

    style: {
        bg: 'rgb(50, 150, 50)',
        lnCol: 'rgb(255, 255, 255)',
        ydln10w: 4,
        ydln5w: 2,
        hlnw: 3,
        fontSize: 5
    },

    draw: function(){
        background(this.style.bg); // Fill background

        //Draw yard lines and text
        stroke(this.style.lnCol);
        fill(255, 255, 255);
        textSize(this.style.fontSize * scale);

        for (let i = -45; i < 50; i+=5) {
            switch (i % 10) {
                case 5:
                    strokeWeight(this.style.ydln5w);

                    break;
            
                case 0:
                    strokeWeight(this.style.ydln10w);
                    if ( i < 0){
                        text(i, (i/10*this.width/10 - this.style.fontSize / 2) * scale, 0);
                    }
                    else
                    { 
                        text(i, (i/10*this.width/10 + this.style.fontSize / 2) * scale, 0);
                    }


                    break;
            }
            line ( i/10*this.width/10 * scale, -this.height / 2 * scale,  i/10*this.width/10 * scale, this.height / 2 * scale);
        }

        //Draw Hashes
        strokeWeight(this.style.hlnw);
        drawingContext.setLineDash([10]);

        line(-this.width/2 * scale, this.hash_Distance * scale / 2, this.width/2 * scale, this.hash_Distance * scale / 2);
        line(-this.width/2 * scale, this.hash_Distance * scale / -2, this.width/2 * scale, this.hash_Distance * scale / -2);

        //reset
        drawingContext.setLineDash([0]);
        stroke(0);
        fill(0);
        strokeWeight(1);
        
    }
}