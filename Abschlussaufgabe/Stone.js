var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Stone extends Abschlussaufgabe.RemoveObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            Abschlussaufgabe.crc2.fillStyle = "grey";
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 7, 0, Math.PI * 2, true);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.Stone = Stone;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Stone.js.map