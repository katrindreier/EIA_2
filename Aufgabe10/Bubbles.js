var L10;
(function (L10) {
    class Bubble {
        // declare method without keyword function
        moveBubble() {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 1 - 3;
            if (this.x < -55) {
                this.x = L10.crc2.canvas.width;
            }
            if (this.y < 0) {
                this.y = L10.crc2.canvas.height;
            }
        }
        drawBubble() {
            L10.crc2.fillStyle = "rgb(178, 216, 234, 0.5)";
            L10.crc2.beginPath();
            L10.crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            L10.crc2.closePath();
            L10.crc2.fill();
        }
    }
    L10.Bubble = Bubble;
})(L10 || (L10 = {}));
//# sourceMappingURL=Bubbles.js.map