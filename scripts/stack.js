let Stack = {
    objs: [],

    update: function () {
        this.objs.forEach(element => {
            maxSet = 0;
            if (element.sets.length - 1 > maxSet) {
                maxSet = element.sets.length - 1;
            } //check that the max set is the max set and if not set the max set to the new max set
            element.update(); //update object positions
            if (path) { element.showPath(); } //draw path if path is true
            if (show) { element.show(); } // show if show is true
        }); //Render and simulate loop
    },

    addObj: function (o = new FieldObject()) {
        this.objs.push(o);
    },

    addSet: function (s = "S1-Y50-I0-H1-J0") {
        this.objs.forEach(element => {
            element.addSet(s);

        });
    },

    removeSet: function () {
        this.objs.forEach(element => {
            element.removeSet(s);
        });
    }

}