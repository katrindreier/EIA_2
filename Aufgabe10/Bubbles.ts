namespace L10 {
export class Bubble {
        x: number;
        y: number;
        radius: number;
            
        // declare method without keyword function
        moveBubble(): void {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 1 - 3;
            if (this.x < -55) {
            this.x = crc2.canvas.width;
                
            }
            if (this.y < 0) {
            this.y = crc2.canvas.height;
            }
       }
       drawBubble(): void {
        crc2.fillStyle = "rgb(178, 216, 234, 0.5)"; 
        crc2.beginPath();
        crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        crc2.closePath();
        crc2.fill();
       } 
    }
 }