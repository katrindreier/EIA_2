var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Straw extends Abschlussaufgabe.RemoveObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            let straw = document.getElementById("Straw");
            Abschlussaufgabe.crc2.drawImage(straw, this.x, this.y, 30, 30);
        }
    }
    Abschlussaufgabe.Straw = Straw;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Straw.js.map