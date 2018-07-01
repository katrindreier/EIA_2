namespace Aufgabe11 {
export class Flake extends MovingObjects {
       //x: number;
       //y: number;
       // radius: number;
         constructor(_x: number, _y: number) {
         super(_x, _y);
         }   
        // declare method without keyword function
        move(): void {
          //  this.x += Math.random();
            this.y += Math.random() * 1 + 3;
            
            if (this.y >= 550) {
            this.y = 550 ;
            
            }
       }
    
       draw(): void {
        crc2.fillStyle = "#b79149"; 
        crc2.beginPath();
        crc2.arc(this.x, this.y, 10, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
       } 
    }
 }