namespace L11_Inheritance {
    export class Rect extends DavidStar {

        constructor(_color: string) {
            super(_color);
        }

         setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height;
}
        
        draw(): void {
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x - 20, this.y - 20, 40, 40);
        }
    }
}