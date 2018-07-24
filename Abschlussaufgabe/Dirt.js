var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Dirt extends Abschlussaufgabe.RemoveObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            Abschlussaufgabe.crc2.fillStyle = "#9b8966";
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 7, 0, Math.PI * 2, true);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.Dirt = Dirt;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Dirt.js.map