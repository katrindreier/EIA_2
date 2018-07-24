var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    let removeObjects = [];
    let imagedata;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        console.log(Abschlussaufgabe.crc2);
        drawBackground();
        imagedata = Abschlussaufgabe.crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log("imgData " + imagedata);
        let flyX = 150;
        let flyY = 400;
        let fly = new Abschlussaufgabe.Fly(flyX, flyY);
        removeObjects.push(fly);
        var n = Math.random() * 50 + 50;
        for (let i = 0; i < n; i++) {
            //Dreck
            var nDirt = Math.random() * 50 + 200;
            //  for (let i: number = 0; i < nDirt; i++) {
            let dirtX = Math.random() * 150 + 65;
            let dirtY = (Math.random() * 66) + 360;
            let dirt = new Abschlussaufgabe.Dirt(dirtX, dirtY);
            removeObjects.push(dirt);
            //  }
            //Stroh
            var nStraw = Math.random() * 80 + 150;
            //  for (let i: number = 0; i < nStraw; i++) {
            let strawX = Math.random() * 150 + 65;
            let strawY = (Math.random() * 66) + 380;
            let straw = new Abschlussaufgabe.Straw(strawX, strawY);
            removeObjects.push(straw);
            //  }
            //Steine
            // var nStone: number = Math.random() * 70 + 100;
            // for (let i: number = 0; i < nStone; i++) {
            let stoneX = Math.random() * 150 + 65;
            let stoneY = (Math.random() * 66) + 380;
            let stone = new Abschlussaufgabe.Stone(stoneX, stoneY);
            removeObjects.push(stone);
        }
        for (var i = 0; i < removeObjects.length; i++) {
            removeObjects[i].draw();
        }
        alert("Pit das Schweinchen hat in einer Schlammpfütze gespielt, hilf dem Bauern ihn wieder sauber zu machen in dem du mit der Maus (auf Handy oder Tablet mit dem Finger) über ihn wischst!");
        console.log("imgData " + imagedata);
        //Eventlistener Remove Dreck
        canvas.addEventListener("mousemove", removeObject);
        canvas.addEventListener("touchmove", removeObject);
        //   animate();
    }
    function drawBackground() {
        //Himmel
        Abschlussaufgabe.crc2.fillStyle = "#65b0d3"; //Füllfarbe
        Abschlussaufgabe.crc2.fillRect(0, 0, Abschlussaufgabe.crc2.canvas.width, Abschlussaufgabe.crc2.canvas.height * 0.8); //Quadrat
        //Wiese
        Abschlussaufgabe.crc2.fillStyle = "#33cc33"; //Füllfarbe
        Abschlussaufgabe.crc2.fillRect(0, Abschlussaufgabe.crc2.canvas.height * 0.8, Abschlussaufgabe.crc2.canvas.width, Abschlussaufgabe.crc2.canvas.height * 0.2);
        //Schweinchen
        let schwein = document.getElementById("Schwein");
        Abschlussaufgabe.crc2.drawImage(schwein, 0, Abschlussaufgabe.crc2.canvas.height * 0.4, 280, 380);
        /* crc2.font = "10px Arial";
         crc2.fillText("Pit hat in einer Pfütze gespielt, helf dem Bauern ihn wieder sauber zu machen in dem ", 10,150);
          */
    }
    function removeObject(_event) {
        let x = _event.pageX;
        let y = _event.pageY;
        for (var i = 0; i < removeObjects.length; i++) {
            Abschlussaufgabe.crc2.putImageData(imagedata, 0, 0);
            if (x >= 65 && x <= 240 && y >= 400 && y <= 500) {
                removeObjects.pop();
                console.log(removeObjects.length);
            }
            break;
        }
        for (var i = 0; i < removeObjects.length; i++) {
            removeObjects[i].draw();
        }
        for (var m = 0; m < 1; m++) {
            if (removeObjects.length == 1) {
                console.log("herzlichen Glückstrumpf");
                let flyX = 150;
                let flyY = 400;
                let fly = new Abschlussaufgabe.Fly(flyX, flyY);
                removeObjects.push(fly);
                animate();
            }
        }
    }
    function animate() {
        window.setTimeout(animate, 20);
        Abschlussaufgabe.crc2.putImageData(imagedata, 0, 0);
        moveFly();
        drawFly();
        if (removeObjects[0].x > 620) {
            removeObjects[0].x = 1;
        }
        if (removeObjects[0].y < 0) {
            removeObjects.pop();
        }
    }
    function drawFly() {
        Abschlussaufgabe.crc2.fillStyle = "#ffb7ea";
        Abschlussaufgabe.crc2.font = "20px Arial";
        Abschlussaufgabe.crc2.fillText("Juhu, Pit ist wieder sauber!", 10, 150);
        removeObjects[0].draw();
    }
    function moveFly() {
        removeObjects[0].x += Math.random() * 4 - 1;
        removeObjects[0].y -= Math.random() * 3 - 1;
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Abschlussaufgabe.js.map