namespace L10 {
    export class Fish {
        x: number;
        y: number;
        color: string;
            
        // declare method without keyword function
        move(): void {
            this.x += Math.random() * (-2) - 2;
            this.y += Math.random() * (-1) - 1;
            if (this.x < -55) {
            this.x = crc2.canvas.width;
            this.y += Math.random() * (-1) - 1;
            }
            if (this.y < 0) {
            this.y = crc2.canvas.height;
            this.x += Math.random() * (-1) - 3;
            }
        }
         

        
        draw(): void { 
             //Fischkörper
             crc2.strokeStyle = "black"; 
             crc2.fillStyle = this.color; 
             crc2.lineWidth = 0.5; 
             crc2.beginPath();
             crc2.moveTo(this.x, this.y);
             crc2.bezierCurveTo(this.x, this.y, this.x + 17, this.y - 35, this.x + 50, this.y - 3);
             crc2.lineTo(this.x + 55, this.y - 15);
             crc2.bezierCurveTo(this.x + 55, this.y - 15, this.x + 62, this.y - 5, this.x + 55, this.y);
             crc2.bezierCurveTo(this.x + 55, this.y, this.x + 62, this.y + 5, this.x + 55, this.y + 15);
             crc2.lineTo(this.x + 50, this.y + 5);
             crc2.bezierCurveTo(this.x + 50, this.y + 5, this.x + 17, this.y + 35, this.x, this.y);
             crc2.fill();
             crc2.closePath();
             crc2.stroke();
             //  crc2.lineTo(xFish + 50, yFish);      
             //Auge
             crc2.beginPath();
             crc2.fillStyle = "white"; 
             crc2.arc(this.x + 15, this.y - 2, 5, 0, Math.PI * 2, true);
             crc2.fill();
             crc2.closePath();
                
             crc2.beginPath();
             crc2.fillStyle = "black"; 
             crc2.arc(this.x + 13, this.y - 2, 3, 0, Math.PI * 2, true);
             crc2.fill();
             crc2.closePath();
      
        }
    }
    
   
}