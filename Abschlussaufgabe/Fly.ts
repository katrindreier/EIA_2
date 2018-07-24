namespace Abschlussaufgabe {
export class Fly extends RemoveObjects {

             
        constructor(_x: number, _y: number) {
        super(_x, _y);
        }  
    
       
    
       draw(): void {
        let fly: HTMLImageElement = <HTMLImageElement>document.getElementById("Fly");
        crc2.drawImage(fly, this.x, this.y, 50, 50);
           
       } 
    }
 }