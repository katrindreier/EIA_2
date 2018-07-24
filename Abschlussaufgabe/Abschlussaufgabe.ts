namespace Abschlussaufgabe {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let removeObjects: RemoveObjects[] = [];   
    let imagedata: ImageData;

    function init(_event: Event): void {
        var canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        
        
        
        drawBackground();
        
        imagedata = crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log ( "imgData " + imagedata)
        
        //Dreck
        var nDirt: number = Math.random() * 200 + 200;
        
        for (let i: number = 0; i < nDirt; i++) {
            let dirtX: number = Math.random() * 150 + 65;
            let dirtY: number = (Math.random() * 66) + 380;
            let dirt: Dirt = new Dirt(dirtX, dirtY);
            removeObjects.push(dirt);
            console.log ("bin ich hier?");                      
        }
       
        //Stroh
        var nStraw: number = Math.random() * 20 + 100;
        
        for (let i: number = 0; i < nStraw; i++) {
            let strawX: number = Math.random() * 150 + 65;
            let strawY: number = (Math.random() * 66) + 380;
            let straw: Straw = new Straw(strawX, strawY);
            removeObjects.push(straw);
            console.log ("bin ich hier?");                      
        }
        
        //Steine
        var nStone: number = Math.random() * 20 + 100;
        
        for (let i: number = 0; i < nStone; i++) {
            let stoneX: number = Math.random() * 150 + 65;
            let stoneY: number = (Math.random() * 66) + 380;
            let stone: Stone = new Stone(stoneX, stoneY);
            removeObjects.push(stone);
            console.log ("bin ich hier?");                      
        }
        
        
        
        for (var i: number = 0; i < removeObjects.length; i++) {
            removeObjects[i].draw();   
            }
        
        
        //Fliege optional
     /*   var nFly: number = Math.random() * 8 + 2;
        
        for (let i: number = 0; i < nFly; i++) {
            let flyX: number = Math.random() * crc2.canvas.width;
            let flyY: number = Math.random() * crc2.canvas.height;
            let fly: Fly = new Fly(flyX, flyY);
            removeObjects.push(fly);
            removeObjects[i].draw();   
        }*/
        
         console.log ( "imgData " + imagedata);
        //Eventlistener Remove Dreck
        canvas.addEventListener("mousemove", removeObject);
        canvas.addEventListener("touchmove", removeObject);
        canvas.addEventListener("click", removeFly);     

    }
 
    function drawBackground (): void {
     //Himmel
        crc2.fillStyle = "#65b0d3";       //Füllfarbe
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height * 0.8);             //Quadrat
       
        //Wiese
        crc2.fillStyle = "#33cc33";       //Füllfarbe
        crc2.fillRect(0, crc2.canvas.height * 0.8, crc2.canvas.width, crc2.canvas.height * 0.2); 
        
        //Schweinchen
        let schwein: HTMLImageElement = <HTMLImageElement>document.getElementById("Schwein");
        crc2.drawImage(schwein, 0, crc2.canvas.height * 0.4, 280, 380);
        
     /*   crc2.font = "30px Arial";
        crc2.fillText("Hello World", 10,150); */
                
    }
 
    
    function removeObject (_event: MouseEvent): void {
        //guckt ob da ein objekt ist, wenn ja wird dieses entfernt... px drumrum testen...
           let x: number = _event.pageX;
            let y: number = _event.pageY;
            for (var i: number = 0; i < removeObjects.length; i++) {
                crc2.putImageData(imagedata, 0, 0); 
                removeObjects.pop();
                console.log (removeObjects.length); 
                break;
              //  removeObjects.draw();                                                                                          
            } 
            for (var i: number = 0; i < removeObjects.length; i++) {
                removeObjects[i].draw();                                                                                          
            }
        
          if (removeObjects.length == 0) {
            console.log ("herzlichen Glückstrumpf");
            
            crc2.fillStyle = "#ffb7ea";
            crc2.font = "20px Arial";
            crc2.fillText("Juhu, Pit ist wieder sauber!", 10, 150); 
                
            }
        
    }
    
    function removeFly (_event: MouseEvent): void {
        //guckt ob da ein objekt ist, wenn ja wird dieses entfernt... px drumrum testen...
          //  let x: number = _event.pageX;
           // let y: number = _event.pageY;
            for (var i: number = 0; i < removeObjects.length; i++) {
                crc2.putImageData(imagedata, 0, 0); 
                removeObjects.pop();
                console.log (removeObjects.length); 
                break;
              //  removeObjects.draw();                                                                                          
            } 
            for (var i: number = 0; i < removeObjects.length; i++) {
                removeObjects[i].draw();                                                                                          
            }
    }
    
  
}