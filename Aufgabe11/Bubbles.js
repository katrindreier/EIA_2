var Aufgabe11;
(function (Aufgabe11) {
    class Bubble extends Aufgabe11.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        // declare method without keyword function
        move() {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 1 - 3;
            if (this.x < -55) {
                this.x = Aufgabe11.crc2.canvas.width;
            }
            if (this.y < 0) {
                this.y = Aufgabe11.crc2.canvas.height;
            }
        }
        draw() {
            Aufgabe11.crc2.fillStyle = "rgb(178, 216, 234, 0.5)";
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Bubble = Bubble;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Bubbles.js.map