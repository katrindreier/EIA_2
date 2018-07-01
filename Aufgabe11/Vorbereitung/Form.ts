namespace L11_Inheritance {
    export class Form extends DavidStar {

        constructor(_color: string) {
            super(_color);
        }

        draw(): void {
        crc2.fillStyle = this.color; 
        crc2.beginPath();
        crc2.arc(this.x, this.y, 30, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
       
        }
    }
}