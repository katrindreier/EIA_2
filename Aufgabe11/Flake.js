var Aufgabe11;
(function (Aufgabe11) {
    class Flake extends Aufgabe11.MovingObjects {
        //x: number;
        //y: number;
        // radius: number;
        constructor(_x, _y) {
            super(_x, _y);
        }
        // declare method without keyword function
        move() {
            //  this.x += Math.random();
            this.y += Math.random() * 1 + 3;
            if (this.y >= 550) {
                this.y = 550;
            }
        }
        draw() {
            Aufgabe11.crc2.fillStyle = "#b79149";
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, 10, 0, Math.PI * 2, true);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Flake = Flake;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Flake.js.map