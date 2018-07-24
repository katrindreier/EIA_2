var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Stone extends Abschlussaufgabe.RemoveObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            let stone = document.getElementById("Stone");
            Abschlussaufgabe.crc2.drawImage(stone, this.x, this.y, 30, 30);
        }
    }
    Abschlussaufgabe.Stone = Stone;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Stone.js.map