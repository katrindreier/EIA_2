var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Fly extends Abschlussaufgabe.RemoveObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            let fly = document.getElementById("Fly");
            Abschlussaufgabe.crc2.drawImage(fly, this.x, this.y, 50, 50);
        }
    }
    Abschlussaufgabe.Fly = Fly;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Fly.js.map