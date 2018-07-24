namespace Abschlussaufgabe {
export class Straw extends RemoveObjects {

             
        constructor(_x: number, _y: number) {
        super(_x, _y);
        }  

       draw(): void {
        crc2.fillStyle = "yellow"; 
        crc2.beginPath();
        crc2.arc(this.x, this.y, 7, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
       } 
    }
 }