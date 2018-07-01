var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let nfish = [];
    let flakes = [];
    let bubbles = [];
    let movingObjects = [];
    let n = 12;
    //   let nBubbles: number = 20;
    let imagedata;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", insertNewObject);
        console.log(Aufgabe11.crc2);
        drawBackground();
        //Algen
        for (let i = 0; i < 7; i++) {
            let xrandomAlge = Math.random() * Aufgabe11.crc2.canvas.width; //x Zufällige Stelle wo das Element platziert wird
            drawAlge(xrandomAlge);
        }
        //Fkt Sand
        for (let i = 0; i < 200; i++) {
            var xSand = Math.random() * Aufgabe11.crc2.canvas.width; //x Zufällige Stelle wo das Element platziert wird
            var ySand = (Math.random() * Aufgabe11.crc2.canvas.height * 0.2) + Aufgabe11.crc2.canvas.height * 0.8; //y
            let radius = Math.random() * 3;
            drawSand(xSand, ySand, radius);
        }
        let xOct = 150;
        drawOctopus(xOct);
        let xBox = 50;
        let treasure;
        let num = Math.random();
        if (num >= 0.5) {
            treasure = true;
        }
        else {
            treasure = false;
        }
        drawBox(xBox, treasure);
        imagedata = Aufgabe11.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Bubbles
        for (let i = 0; i < 20; i++) {
            let bX = Math.random() * Aufgabe11.crc2.canvas.width;
            let bY = Math.random() * Aufgabe11.crc2.canvas.height;
            let bubble = new Aufgabe11.Bubble(bX, bY);
            // let radius: number;
            bubble.radius = Math.random() * 20;
            // bubble.x = Math.random() * crc2.canvas.width;
            // bubble.y = Math.random() * crc2.canvas.height;
            bubbles.push(bubble);
        }
        // Fish
        for (let i = 0; i < n; i++) {
            let fiX = Math.random() * Aufgabe11.crc2.canvas.width;
            let fiY = Math.random() * Aufgabe11.crc2.canvas.height;
            let fish = new Aufgabe11.Fish(fiX, fiY);
            nfish.push(fish);
            let num = Math.random();
            if (num <= 0.3) {
                fish.color = "#ffcefa";
            }
            else if (num <= 0.6 && num >= 0.3) {
                fish.color = "#96efff";
            }
            else {
                fish.color = "#ffc272";
            }
        }
        animate();
    }
    //Flake beim Klick
    function insertNewObject(_event) {
        console.log("click");
        let fx = _event.pageX;
        let fy = _event.pageY;
        let flake = new Aufgabe11.Flake(fx, fy);
        //  flake.x = _event.pageX;
        //  flake.y = _event.pageY;
        flakes.push(flake);
    }
    function animate() {
        window.setTimeout(animate, 15);
        Aufgabe11.crc2.putImageData(imagedata, 0, 0);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }
    }
    function drawBackground() {
        //Meer
        Aufgabe11.crc2.fillStyle = "#65b0d3"; //Füllfarbe
        Aufgabe11.crc2.fillRect(0, 10, Aufgabe11.crc2.canvas.width, Aufgabe11.crc2.canvas.height * 0.8); //Quadrat
        //Sandboden
        Aufgabe11.crc2.fillStyle = "#f6fc7b"; //Füllfarbe
        Aufgabe11.crc2.fillRect(0, Aufgabe11.crc2.canvas.height * 0.8, Aufgabe11.crc2.canvas.width, Aufgabe11.crc2.canvas.height * 0.2); //Quadrat    
    }
    function drawAlge(xrandomAlge) {
        Aufgabe11.crc2.strokeStyle = "#a4f9a4";
        Aufgabe11.crc2.lineWidth = 5;
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(xrandomAlge, Aufgabe11.crc2.canvas.height * 0.8);
        Aufgabe11.crc2.bezierCurveTo(xrandomAlge, Aufgabe11.crc2.canvas.height * 0.8, xrandomAlge + 10, Aufgabe11.crc2.canvas.height * 0.75, xrandomAlge, Aufgabe11.crc2.canvas.height * 0.7);
        Aufgabe11.crc2.bezierCurveTo(xrandomAlge, Aufgabe11.crc2.canvas.height * 0.7, xrandomAlge - 10, Aufgabe11.crc2.canvas.height * 0.65, xrandomAlge, Aufgabe11.crc2.canvas.height * 0.6);
        Aufgabe11.crc2.stroke();
    }
    function drawSand(xSand, ySand, radius) {
        Aufgabe11.crc2.fillStyle = "#c6b423";
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.arc(xSand, ySand, radius, 0, Math.PI * 2, true);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fill();
    }
    function drawOctopus(xOct) {
        Aufgabe11.crc2.strokeStyle = "black";
        Aufgabe11.crc2.fillStyle = "#fc7f74";
        Aufgabe11.crc2.lineWidth = 0.5;
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(xOct, 500);
        Aufgabe11.crc2.bezierCurveTo(xOct, 480, xOct + 25, 490, xOct + 50, 450);
        Aufgabe11.crc2.bezierCurveTo(xOct + 50, 450, xOct + 53, 440, xOct + 70, 435);
        Aufgabe11.crc2.bezierCurveTo(xOct + 70, 435, xOct + 95, 435, xOct + 100, 455);
        Aufgabe11.crc2.bezierCurveTo(xOct + 100, 455, xOct + 105, 485, xOct + 150, 500);
        Aufgabe11.crc2.bezierCurveTo(xOct + 150, 500, xOct + 155, 510, xOct + 140, 510);
        Aufgabe11.crc2.bezierCurveTo(xOct + 140, 510, xOct + 100, 500, xOct + 90, 495);
        Aufgabe11.crc2.bezierCurveTo(xOct + 90, 495, xOct + 80, 495, xOct + 75, 505);
        Aufgabe11.crc2.bezierCurveTo(xOct + 75, 505, xOct + 70, 510, xOct + 65, 505);
        Aufgabe11.crc2.bezierCurveTo(xOct + 65, 505, xOct + 65, 495, xOct + 55, 490);
        Aufgabe11.crc2.bezierCurveTo(xOct + 55, 490, xOct + 40, 500, xOct + 35, 500);
        Aufgabe11.crc2.bezierCurveTo(xOct + 35, 500, xOct + 30, 500, xOct + 30, 490);
        Aufgabe11.crc2.bezierCurveTo(xOct + 30, 490, xOct + 25, 490, xOct + 15, 495);
        Aufgabe11.crc2.bezierCurveTo(xOct + 15, 495, xOct + 5, 505, xOct, 500);
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.moveTo(xOct + 60, 460);
        Aufgabe11.crc2.bezierCurveTo(xOct + 60, 460, xOct + 70, 470, xOct + 80, 460);
        Aufgabe11.crc2.stroke();
        //Auge
        for (let i = 0; i < 2; i++) {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = "white";
            Aufgabe11.crc2.arc(xOct + 60, 450, 5, 0, Math.PI * 2, true);
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.fillStyle = "black";
            Aufgabe11.crc2.arc(xOct + 60, 452, 3, 0, Math.PI * 2, true);
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            xOct = xOct + 20;
        }
    }
    function drawBox(xBox, treasure) {
        Aufgabe11.crc2.strokeStyle = "black";
        Aufgabe11.crc2.fillStyle = "#b79149";
        Aufgabe11.crc2.lineWidth = 0.5;
        Aufgabe11.crc2.beginPath();
        //  crc2.moveTo(xBox, 500);
        Aufgabe11.crc2.fillRect(xBox, 450, 80, 50);
        Aufgabe11.crc2.strokeRect(xBox, 450, 80, 50);
        Aufgabe11.crc2.moveTo(xBox, 450);
        Aufgabe11.crc2.lineTo(xBox - 5, 430);
        Aufgabe11.crc2.lineTo(xBox + 75, 430);
        Aufgabe11.crc2.lineTo(xBox + 80, 450);
        Aufgabe11.crc2.stroke();
        Aufgabe11.crc2.fillStyle = "#99783b";
        Aufgabe11.crc2.fill();
        console.log(treasure);
        if (treasure == true) {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(xBox + 5, 450);
            Aufgabe11.crc2.lineTo(xBox + 7, 440);
            Aufgabe11.crc2.lineTo(xBox + 15, 440);
            Aufgabe11.crc2.lineTo(xBox + 20, 450);
            Aufgabe11.crc2.lineTo(xBox + 25, 440);
            Aufgabe11.crc2.lineTo(xBox + 45, 440);
            Aufgabe11.crc2.lineTo(xBox + 50, 450);
            Aufgabe11.crc2.lineTo(xBox + 55, 440);
            Aufgabe11.crc2.lineTo(xBox + 60, 440);
            Aufgabe11.crc2.lineTo(xBox + 70, 450);
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fillStyle = "#ffee35";
            Aufgabe11.crc2.fill();
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Animation.js.map