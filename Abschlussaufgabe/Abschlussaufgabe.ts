namespace Abschlussaufgabe {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let removeObjects: RemoveObjects[] = [];   
    let imagedata: ImageData;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        
        
        drawBackground();
        
     
        imagedata = crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log ( "imgData " + imagedata);
        
        let flyX: number = 150;
        let flyY: number = 400;
        let fly: Fly = new Fly(flyX, flyY);
        removeObjects.push(fly);
        
        var n: number = Math.random() * 50 + 50;
        for (let i: number = 0; i < n; i++) {
        
        //Dreck
        var nDirt: number = Math.random() * 50 + 200;
        
      //  for (let i: number = 0; i < nDirt; i++) {
            let dirtX: number = Math.random() * 150 + 65;
            let dirtY: number = (Math.random() * 66) + 360;
            let dirt: Dirt = new Dirt(dirtX, dirtY);
            removeObjects.push(dirt);                   
      //  }
       
        //Stroh
        var nStraw: number = Math.random() * 80 + 150;
        
      //  for (let i: number = 0; i < nStraw; i++) {
            let strawX: number = Math.random() * 150 + 65;
            let strawY: number = (Math.random() * 66) + 380;
            let straw: Straw = new Straw(strawX, strawY);
            removeObjects.push(straw);
      //  }
        
        //Steine
       // var nStone: number = Math.random() * 70 + 100;
        
       // for (let i: number = 0; i < nStone; i++) {
            let stoneX: number = Math.random() * 150 + 65;
            let stoneY: number = (Math.random() * 66) + 380;
            let stone: Stone = new Stone(stoneX, stoneY);
            removeObjects.push(stone);
      //  }
        }
        
            
        for (var i: number = 0; i < removeObjects.length; i++) {
            removeObjects[i].draw();   
            }
        
            
        
        
         alert ("Pit das Schweinchen hat in einer Schlammpfütze gespielt, hilf dem Bauern ihn wieder sauber zu machen in dem du mit der Maus (auf Handy oder Tablet mit dem Finger) über ihn wischst!");
         console.log ( "imgData " + imagedata);
        //Eventlistener Remove Dreck
        canvas.addEventListener("mousemove", removeObject);
        canvas.addEventListener("touchmove", removeObject);
     //   animate();
        
           

    }
    

 
    function drawBackground (): void {
     //Himmel
       /* crc2.fillStyle = "#65b0d3";       //Füllfarbe
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height * 0.8);             //Quadrat
       
        //Wiese
        crc2.fillStyle = "#33cc33";       //Füllfarbe
        crc2.fillRect(0, crc2.canvas.height * 0.8, crc2.canvas.width, crc2.canvas.height * 0.2); 
        */
        let background: HTMLImageElement = <HTMLImageElement>document.getElementById("Background");
        crc2.drawImage(background, 0, 0, 852, 568);        
        
        
        //Schweinchen
        let schwein: HTMLImageElement = <HTMLImageElement>document.getElementById("Schwein");
        crc2.drawImage(schwein, 0, crc2.canvas.height * 0.4, 280, 380);
        
       /* crc2.font = "10px Arial";
        crc2.fillText("Pit hat in einer Pfütze gespielt, helf dem Bauern ihn wieder sauber zu machen in dem ", 10,150); 
         */       
    }
 
    
    function removeObject (_event: MouseEvent): void {
            let x: number = _event.pageX;
            let y: number = _event.pageY;
            for (var i: number = 0; i < removeObjects.length; i++) {
            crc2.putImageData(imagedata, 0, 0); 
            if (x >= 65 && x <= 240 && y >= 400 && y <= 500) {
                removeObjects.pop();
                console.log (removeObjects.length); 
                
                }
            break;
              //  removeObjects.draw();                                                                                          
            } 
            for (var i: number = 0; i < removeObjects.length; i++) {
                removeObjects[i].draw();                                                                                          
            }
        
                
            for (var m: number = 0; m < 1; m++) {
            if (removeObjects.length == 1) {
              
            console.log ("herzlichen Glückstrumpf");
             
            let flyX: number = 150;
            let flyY: number = 400;
            let fly: Fly = new Fly(flyX, flyY);
            removeObjects.push(fly);
            animate();
          }
       }
    }
    
    function animate(): void {
        window.setTimeout(animate, 20);

        crc2.putImageData(imagedata, 0, 0);
        
        moveFly();
        drawFly();
        if (removeObjects[0].x > 620) {
            removeObjects[0].x = 1;
            }
        if (removeObjects[0].y < 0) {
            removeObjects.pop();
            }
       
    }
    
    function drawFly(): void {
    crc2.fillStyle = "#ffb7ea";
    crc2.font = "20px Arial";
    crc2.fillText("Juhu, Pit ist wieder sauber!", 10, 150);
    removeObjects[0].draw();            
        }

    function moveFly(): void {
    removeObjects[0].x += Math.random() * 4 - 1;
    removeObjects[0].y -= Math.random() * 3 - 1;
        }
  
}