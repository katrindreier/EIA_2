var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    let removeObjects = [];
    let imagedata;
    function init(_event) {
        var canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        console.log(Abschlussaufgabe.crc2);
        drawBackground();
        imagedata = Abschlussaufgabe.crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log("imgData " + imagedata);
        //Dreck
        var nDirt = Math.random() * 200 + 200;
        for (let i = 0; i < nDirt; i++) {
            let dirtX = Math.random() * 150 + 65;
            let dirtY = (Math.random() * 66) + 380;
            let dirt = new Abschlussaufgabe.Dirt(dirtX, dirtY);
            removeObjects.push(dirt);
            console.log("bin ich hier?");
        }
        //Stroh
        var nStraw = Math.random() * 20 + 100;
        for (let i = 0; i < nStraw; i++) {
            let strawX = Math.random() * 150 + 65;
            let strawY = (Math.random() * 66) + 380;
            let straw = new Abschlussaufgabe.Straw(strawX, strawY);
            removeObjects.push(straw);
            console.log("bin ich hier?");
        }
        //Steine
        var nStone = Math.random() * 20 + 100;
        for (let i = 0; i < nStone; i++) {
            let stoneX = Math.random() * 150 + 65;
            let stoneY = (Math.random() * 66) + 380;
            let stone = new Abschlussaufgabe.Stone(stoneX, stoneY);
            removeObjects.push(stone);
            console.log("bin ich hier?");
        }
        for (var i = 0; i < removeObjects.length; i++) {
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
        console.log("imgData " + imagedata);
        //Eventlistener Remove Dreck
        canvas.addEventListener("mousemove", removeObject);
        canvas.addEventListener("touchmove", removeObject);
        canvas.addEventListener("click", removeFly);
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
        /*   crc2.font = "30px Arial";
           crc2.fillText("Hello World", 10,150); */
    }
    function removeObject(_event) {
        //guckt ob da ein objekt ist, wenn ja wird dieses entfernt... px drumrum testen...
        let x = _event.pageX;
        let y = _event.pageY;
        for (var i = 0; i < removeObjects.length; i++) {
            Abschlussaufgabe.crc2.putImageData(imagedata, 0, 0);
            removeObjects.pop();
            console.log(removeObjects.length);
            break;
        }
        for (var i = 0; i < removeObjects.length; i++) {
            removeObjects[i].draw();
        }
        if (removeObjects.length == 0) {
            console.log("herzlichen Glückstrumpf");
            Abschlussaufgabe.crc2.fillStyle = "#ffb7ea";
            Abschlussaufgabe.crc2.font = "20px Arial";
            Abschlussaufgabe.crc2.fillText("Juhu, Pit ist wieder sauber!", 10, 150);
        }
    }
    function removeFly(_event) {
        //guckt ob da ein objekt ist, wenn ja wird dieses entfernt... px drumrum testen...
        //  let x: number = _event.pageX;
        // let y: number = _event.pageY;
        for (var i = 0; i < removeObjects.length; i++) {
            Abschlussaufgabe.crc2.putImageData(imagedata, 0, 0);
            removeObjects.pop();
            console.log(removeObjects.length);
            break;
        }
        for (var i = 0; i < removeObjects.length; i++) {
            removeObjects[i].draw();
        }
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Abschlussaufgabe.js.map