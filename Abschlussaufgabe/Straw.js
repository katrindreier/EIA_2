var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Straw extends Abschlussaufgabe.RemoveObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            Abschlussaufgabe.crc2.fillStyle = "yellow";
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 7, 0, Math.PI * 2, true);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.Straw = Straw;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Straw.js.map