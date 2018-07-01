var Aufgabe11;
(function (Aufgabe11) {
    class Fish extends Aufgabe11.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        // declare method without keyword function
        move() {
            this.x += Math.random() * (-2) - 2;
            this.y += Math.random() * (-1) - 1;
            if (this.x < -55) {
                this.x = Aufgabe11.crc2.canvas.width;
                this.y += Math.random() * (-1) - 1;
            }
            if (this.y < 0) {
                this.y = Aufgabe11.crc2.canvas.height;
                this.x += Math.random() * (-1) - 3;
            }
        }
        draw() {
            //Fischkörper
            Aufgabe11.crc2.strokeStyle = "black";
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.lineWidth = 0.5;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.bezierCurveTo(this.x, this.y, this.x + 17, this.y - 35, this.x + 50, this.y - 3);
            Aufgabe11.crc2.lineTo(this.x + 55, this.y - 15);
            Aufgabe11.crc2.bezierCurveTo(this.x + 55, this.y - 15, this.x + 62, this.y - 5, this.x + 55, this.y);
            Aufgabe11.crc2.bezierCurveTo(this.x + 55, this.y, this.x + 62, this.y + 5, this.x + 55, this.y + 15);
            Aufgabe11.crc2.lineTo(this.x + 50, this.y + 5);
            Aufgabe11.crc2.bezierCurveTo(this.x + 50, this.y + 5, this.x + 17, this.y + 35, this.x, this.y);
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
            //  crc2.lineTo(xFish + 50, yFish);      
            //Auge
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = "white";
            Aufgabe11.crc2.arc(this.x + 15, this.y - 2, 5, 0, Math.PI * 2, true);
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = "black";
            Aufgabe11.crc2.arc(this.x + 13, this.y - 2, 3, 0, Math.PI * 2, true);
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
        }
    }
    Aufgabe11.Fish = Fish;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Unterwasserwelt.js.map