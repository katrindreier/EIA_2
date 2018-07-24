namespace Abschlussaufgabe {
export class Stone extends RemoveObjects {

             
        constructor(_x: number, _y: number) {
        super(_x, _y);
        }  

       draw(): void {
        let stone: HTMLImageElement = <HTMLImageElement>document.getElementById("Stone");
        crc2.drawImage(stone, this.x, this.y, 30, 30);
       } 
    }
 }