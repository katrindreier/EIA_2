var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Dirt extends Abschlussaufgabe.RemoveObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            /*  crc2.fillStyle = "#9b8966";
              crc2.beginPath();
              crc2.arc(this.x, this.y, 7, 0, Math.PI * 2, true);
              crc2.closePath();
              crc2.fill();*/
            let dirt = document.getElementById("Dirt");
            Abschlussaufgabe.crc2.drawImage(dirt, this.x, this.y, 45, 45);
        }
    }
    Abschlussaufgabe.Dirt = Dirt;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Dirt.js.map