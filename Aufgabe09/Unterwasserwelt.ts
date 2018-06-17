namespace L09_Unterwasserwelt {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        
        //Meer
        crc2.fillStyle = "#65b0d3";       //Füllfarbe
        crc2.fillRect(0, 10, crc2.canvas.width, crc2.canvas.height * 0.8);             //Quadrat
        
        //Algen
        for (let i: number = 0; i < 7; i++) {
        let xrandomAlge: number = Math.random() * crc2.canvas.width;      //x Zufällige Stelle wo das Element platziert wird
        drawAlge(xrandomAlge);
        }
        
        //Sandboden
        crc2.fillStyle = "#f6fc7b";       //Füllfarbe
        crc2.fillRect(0, crc2.canvas.height * 0.8, crc2.canvas.width, crc2.canvas.height * 0.2);             //Quadrat
        
        //Fkt Sand
        for (let i: number = 0; i < 200; i++) {
          var xSand: number = Math.random() * crc2.canvas.width;      //x Zufällige Stelle wo das Element platziert wird
          var ySand: number = (Math.random() * crc2.canvas.height * 0.2) + crc2.canvas.height * 0.8;     //y
          let radius: number = Math.random() * 3;
          drawSand(xSand, ySand, radius);  
        }
        
        //Fkt Fische 
        for (let i: number = 0; i < 10; i++) {
          var xFish: number = Math.random() * crc2.canvas.width;      //x Zufällige Stelle wo das Element platziert wird
          var yFish: number = Math.random() * crc2.canvas.height * 0.7;     //y
          let direction: boolean
          let num: number = Math.random();
          let color: string;
       
        if (num >= 0.5) {
            direction = true;
        }
        else {
            direction = false;
        }
        if (num <= 0.3) {
            color = "#ffcefa";
        }
            
        else if (num <= 0.6 && num >= 0.3) {
            color = "#96efff";
         } 
        
        else {
           color = "#ffc272";    
        }
        
        drawFish(xFish, yFish, direction, color);  
        }
        
        
       let xOct: number = 150;
       drawOctopus(xOct);  
       
        let xBox: number = 50;
        let treasure: boolean;
        let num: number = Math.random();
        console.log (num)
        if (num >= 0.5) {
           treasure = true;
        }
        else {
            treasure = false;
        }
       drawBox(xBox, treasure); 
        
        
        
       //Fkt bubbles 
        for (let i: number = 0; i < 20; i++) {
            let xWater: number = Math.random() * crc2.canvas.width;      //x Zufällige Stelle wo das Element platziert wird
            let yWater: number = Math.random() * crc2.canvas.height * 0.9;     //y
            let radius: number = Math.random() * 20;
            drawBubbles(xWater, yWater, radius);                                    //Funktionsaufruf Element zeichnen
        }
        
        
        
    }

    function drawBubbles(xWater: number, yWater: number, radius: number): void {
        crc2.fillStyle = "rgb(178, 216, 234, 0.5)"; 
        crc2.beginPath();
        crc2.arc(xWater, yWater, radius, 0, Math.PI * 2, true);
        crc2.closePath();
      //  crc2.stroke();                //Umrandung
       /* crc2.moveTo(_x, _y - 20);
        crc2.lineTo(_x + 20, _y + 10);
        crc2.lineTo(_x - 20, _y + 10);
        crc2.closePath();

        crc2.moveTo(_x, _y + 20);
        crc2.lineTo(_x + 20, _y - 10);
        crc2.lineTo(_x - 20, _y - 10);
        crc2.closePath();
        crc2.stroke();*/
        crc2.fill();
    }
    
    function drawFish(xFish: number, yFish: number, direction: boolean, color: string): void { 
    if (direction == false) {
     //Fischkörper
     crc2.strokeStyle = "black"; 
     crc2.fillStyle = color; 
     crc2.lineWidth = 0.5; 
     crc2.beginPath();
     crc2.moveTo(xFish, yFish);
     crc2.bezierCurveTo(xFish, yFish, xFish + 17, yFish - 35, xFish + 50, yFish - 3);
     crc2.lineTo(xFish + 55, yFish - 15);
     crc2.bezierCurveTo(xFish + 55, yFish - 15, xFish + 62, yFish - 5, xFish + 55, yFish);
     crc2.bezierCurveTo(xFish + 55, yFish, xFish + 62, yFish + 5, xFish + 55, yFish + 15);
     crc2.lineTo(xFish + 50, yFish + 5);
     crc2.bezierCurveTo(xFish + 50, yFish + 5, xFish + 17, yFish + 35, xFish, yFish);
     crc2.fill();
     crc2.closePath();
     crc2.stroke();
   //  crc2.lineTo(xFish + 50, yFish);      
     //Auge
     crc2.beginPath();
     crc2.fillStyle = "white"; 
     crc2.arc(xFish + 15, yFish - 2, 5, 0, Math.PI * 2, true);
     crc2.fill();
     crc2.closePath();
        
     crc2.beginPath();
     crc2.fillStyle = "black"; 
     crc2.arc(xFish + 13, yFish - 2, 3, 0, Math.PI * 2, true);
     crc2.fill();
     crc2.closePath();
      }
     else {  
      //Fischkörper
     crc2.strokeStyle = "black"; 
     crc2.fillStyle = color; 
     crc2.lineWidth = 0.5; 
     crc2.beginPath();
     crc2.moveTo(xFish, yFish);
     crc2.bezierCurveTo(xFish, yFish, xFish - 17, yFish - 35, xFish - 50, yFish - 3);
     crc2.lineTo(xFish - 55, yFish - 15);
     crc2.bezierCurveTo(xFish - 55, yFish - 15, xFish - 62, yFish - 5, xFish - 55, yFish);
     crc2.bezierCurveTo(xFish - 55, yFish, xFish - 62, yFish + 5, xFish - 55, yFish + 15);
     crc2.lineTo(xFish - 50, yFish + 5);
     crc2.bezierCurveTo(xFish - 50, yFish + 5, xFish - 17, yFish + 35, xFish, yFish);
     crc2.fill();
     crc2.closePath();
     crc2.stroke();
   //  crc2.lineTo(xFish + 50, yFish);      
     //Auge
     crc2.beginPath();
     crc2.fillStyle = "white"; 
     crc2.arc(xFish - 15, yFish - 2, 5, 0, Math.PI * 2, true);
     crc2.fill();
     crc2.closePath();
        
     crc2.beginPath();
     crc2.fillStyle = "black"; 
     crc2.arc(xFish - 13, yFish - 2, 3, 0, Math.PI * 2, true);
     crc2.fill();
     crc2.closePath();
    }
    }
    
    function drawAlge(xrandomAlge: number): void {
     crc2.strokeStyle = "#a4f9a4";
     crc2.lineWidth = 5; 
     crc2.beginPath();
     crc2.moveTo(xrandomAlge, crc2.canvas.height * 0.8);
     crc2.bezierCurveTo(xrandomAlge, crc2.canvas.height * 0.8, xrandomAlge + 10 , crc2.canvas.height * 0.75, xrandomAlge, crc2.canvas.height * 0.7);
     crc2.bezierCurveTo(xrandomAlge, crc2.canvas.height * 0.7, xrandomAlge - 10, crc2.canvas.height * 0.65, xrandomAlge, crc2.canvas.height * 0.6);         
        //  crc2.lineTo(xrandomAlge, crc2.canvas.height * 0.7);   
        //crc2.closePath();
     crc2.stroke();
    }
    
    function drawSand(xSand: number, ySand: number, radius: number): void {
     crc2.fillStyle = "#c6b423"; 
     crc2.beginPath();
     crc2.arc(xSand, ySand, radius, 0, Math.PI * 2, true);
     crc2.closePath();
     crc2.fill();

    }
    
    function drawOctopus(xOct: number): void {
     crc2.strokeStyle = "black"; 
     crc2.fillStyle = "#fc7f74"; 
     crc2.lineWidth = 0.5; 
     crc2.beginPath();
     crc2.moveTo(xOct, 500);
     crc2.bezierCurveTo(xOct, 480, xOct + 25, 490, xOct + 50, 450);
     crc2.bezierCurveTo(xOct + 50, 450, xOct + 53, 440, xOct + 70, 435);
     crc2.bezierCurveTo(xOct + 70, 435, xOct + 95, 435, xOct + 100, 455);
     crc2.bezierCurveTo(xOct + 100, 455, xOct + 105, 485, xOct + 150, 500);
     crc2.bezierCurveTo(xOct + 150, 500, xOct + 155, 510, xOct + 140, 510);
     crc2.bezierCurveTo(xOct + 140, 510, xOct + 100, 500, xOct + 90, 495);
     crc2.bezierCurveTo(xOct + 90, 495, xOct + 80, 495, xOct + 75, 505);
     crc2.bezierCurveTo(xOct + 75, 505, xOct + 70, 510, xOct + 65, 505);
     crc2.bezierCurveTo(xOct + 65, 505, xOct + 65, 495, xOct + 55, 490);
     crc2.bezierCurveTo(xOct + 55, 490, xOct + 40, 500, xOct + 35, 500);
     crc2.bezierCurveTo(xOct + 35, 500, xOct + 30, 500, xOct + 30, 490);
     crc2.bezierCurveTo(xOct + 30, 490, xOct + 25, 490, xOct + 15, 495);
     crc2.bezierCurveTo(xOct + 15, 495, xOct + 5, 505, xOct, 500);
     crc2.fill();

        
     crc2.moveTo(xOct + 60, 460);
     crc2.bezierCurveTo(xOct + 60, 460, xOct + 70, 470, xOct + 80, 460);

     crc2.stroke();
     
     //Auge
     for (let i: number = 0; i < 2; i++) {
     crc2.beginPath();
     crc2.fillStyle = "white"; 
     crc2.arc(xOct + 60, 450, 5, 0, Math.PI * 2, true);
     crc2.fill();
     crc2.closePath();
        
     crc2.beginPath();
     crc2.fillStyle = "black"; 
     crc2.arc(xOct + 60, 452 , 3, 0, Math.PI * 2, true);
     crc2.fill();
     crc2.closePath();
     xOct = xOct + 20;
         }
        }
   
    function drawBox (xBox: number, treasure: boolean): void {
    crc2.strokeStyle = "black";
    crc2.fillStyle = "#b79149";  
    crc2.lineWidth = 0.5; 
    crc2.beginPath();
  //  crc2.moveTo(xBox, 500);
    crc2.fillRect(xBox, 450, 80, 50);
    crc2.strokeRect(xBox, 450, 80, 50);
    crc2.moveTo(xBox, 450);
    crc2.lineTo(xBox - 5, 430);
    crc2.lineTo(xBox + 75, 430);
    crc2.lineTo(xBox + 80, 450);
    crc2.stroke();
    crc2.fillStyle = "#99783b";  
    crc2.fill();
    console.log (treasure);
    
    if (treasure == true) {
       crc2.beginPath();  
       crc2.moveTo(xBox + 5, 450);
       crc2.lineTo(xBox + 7, 440);
       crc2.lineTo(xBox + 15, 440);
       crc2.lineTo(xBox + 20, 450);
       crc2.lineTo(xBox + 25, 440);
       crc2.lineTo(xBox + 45, 440);
       crc2.lineTo(xBox + 50, 450);
       crc2.lineTo(xBox + 55, 440);
       crc2.lineTo(xBox + 60, 440);
       crc2.lineTo(xBox + 70, 450);

       crc2.stroke();
       crc2.fillStyle = "#ffee35";  
       crc2.fill();
       }   
    }

}