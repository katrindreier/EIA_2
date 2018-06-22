var L10;
(function (L10) {
    class Fish {
        // declare method without keyword function
        move() {
            this.x += Math.random() * (-2) - 2;
            this.y += Math.random() * (-1) - 1;
            if (this.x < -55) {
                this.x = L10.crc2.canvas.width;
                this.y += Math.random() * (-1) - 1;
            }
            if (this.y < 0) {
                this.y = L10.crc2.canvas.height;
                this.x += Math.random() * (-1) - 3;
            }
        }
        draw() {
            //Fischkörper
            L10.crc2.strokeStyle = "black";
            L10.crc2.fillStyle = this.color;
            L10.crc2.lineWidth = 0.5;
            L10.crc2.beginPath();
            L10.crc2.moveTo(this.x, this.y);
            L10.crc2.bezierCurveTo(this.x, this.y, this.x + 17, this.y - 35, this.x + 50, this.y - 3);
            L10.crc2.lineTo(this.x + 55, this.y - 15);
            L10.crc2.bezierCurveTo(this.x + 55, this.y - 15, this.x + 62, this.y - 5, this.x + 55, this.y);
            L10.crc2.bezierCurveTo(this.x + 55, this.y, this.x + 62, this.y + 5, this.x + 55, this.y + 15);
            L10.crc2.lineTo(this.x + 50, this.y + 5);
            L10.crc2.bezierCurveTo(this.x + 50, this.y + 5, this.x + 17, this.y + 35, this.x, this.y);
            L10.crc2.fill();
            L10.crc2.closePath();
            L10.crc2.stroke();
            //  crc2.lineTo(xFish + 50, yFish);      
            //Auge
            L10.crc2.beginPath();
            L10.crc2.fillStyle = "white";
            L10.crc2.arc(this.x + 15, this.y - 2, 5, 0, Math.PI * 2, true);
            L10.crc2.fill();
            L10.crc2.closePath();
            L10.crc2.beginPath();
            L10.crc2.fillStyle = "black";
            L10.crc2.arc(this.x + 13, this.y - 2, 3, 0, Math.PI * 2, true);
            L10.crc2.fill();
            L10.crc2.closePath();
        }
    }
    L10.Fish = Fish;
})(L10 || (L10 = {}));
//# sourceMappingURL=Unterwasserwelt.js.map