var L11_Inheritance;
(function (L11_Inheritance) {
    class Form extends L11_Inheritance.DavidStar {
        constructor(_color) {
            super(_color);
        }
        draw() {
            L11_Inheritance.crc2.fillStyle = this.color;
            L11_Inheritance.crc2.beginPath();
            L11_Inheritance.crc2.arc(this.x, this.y, 30, 0, Math.PI * 2, true);
            L11_Inheritance.crc2.closePath();
            L11_Inheritance.crc2.fill();
        }
    }
    L11_Inheritance.Form = Form;
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=Form.js.map