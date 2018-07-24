namespace Abschlussaufgabe {
export class Straw extends RemoveObjects {

             
        constructor(_x: number, _y: number) {
        super(_x, _y);
        }  

       draw(): void {
        let straw: HTMLImageElement = <HTMLImageElement>document.getElementById("Straw");
        crc2.drawImage(straw, this.x, this.y, 30, 30);
       } 
    }
 }