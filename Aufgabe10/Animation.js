var L10;
(function (L10) {
    window.addEventListener("load", init);
    let nfish = [];
    let bubbles = [];
    let n = 12;
    let nBubbles = 20;
    let imagedata;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L10.crc2 = canvas.getContext("2d");
        console.log(L10.crc2);
        drawBackground();
        //Algen
        for (let i = 0; i < 7; i++) {
            let xrandomAlge = Math.random() * L10.crc2.canvas.width; //x Zufällige Stelle wo das Element platziert wird
            drawAlge(xrandomAlge);
        }
        //Fkt Sand
        for (let i = 0; i < 200; i++) {
            var xSand = Math.random() * L10.crc2.canvas.width; //x Zufällige Stelle wo das Element platziert wird
            var ySand = (Math.random() * L10.crc2.canvas.height * 0.2) + L10.crc2.canvas.height * 0.8; //y
            let radius = Math.random() * 3;
            drawSand(xSand, ySand, radius);
        }
        let xOct = 150;
        drawOctopus(xOct);
        let xBox = 50;
        let treasure;
        let num = Math.random();
        console.log(num);
        if (num >= 0.5) {
            treasure = true;
        }
        else {
            treasure = false;
        }
        drawBox(xBox, treasure);
        imagedata = L10.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Bubbles
        for (let i = 0; i < 20; i++) {
            let bubble = new L10.Bubble();
            let radius;
            bubble.radius = Math.random() * 20;
            bubble.x = Math.random() * L10.crc2.canvas.width;
            bubble.y = Math.random() * L10.crc2.canvas.height;
            bubbles.push(bubble);
        }
        // Fish
        for (let i = 0; i < n; i++) {
            let fish = new L10.Fish();
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
            fish.x = Math.random() * L10.crc2.canvas.width;
            fish.y = Math.random() * L10.crc2.canvas.height;
            nfish.push(fish);
        }
        animate();
    }
    function animate() {
        window.setTimeout(animate, 15);
        L10.crc2.putImageData(imagedata, 0, 0);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < nfish.length; i++) {
            nfish[i].move();
        }
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].moveBubble();
        }
    }
    function drawObjects() {
        for (let i = 0; i < nfish.length; i++) {
            nfish[i].draw();
        }
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].drawBubble();
        }
    }
    function drawBackground() {
        //Meer
        L10.crc2.fillStyle = "#65b0d3"; //Füllfarbe
        L10.crc2.fillRect(0, 10, L10.crc2.canvas.width, L10.crc2.canvas.height * 0.8); //Quadrat
        //Sandboden
        L10.crc2.fillStyle = "#f6fc7b"; //Füllfarbe
        L10.crc2.fillRect(0, L10.crc2.canvas.height * 0.8, L10.crc2.canvas.width, L10.crc2.canvas.height * 0.2); //Quadrat    
    }
    function drawAlge(xrandomAlge) {
        L10.crc2.strokeStyle = "#a4f9a4";
        L10.crc2.lineWidth = 5;
        L10.crc2.beginPath();
        L10.crc2.moveTo(xrandomAlge, L10.crc2.canvas.height * 0.8);
        L10.crc2.bezierCurveTo(xrandomAlge, L10.crc2.canvas.height * 0.8, xrandomAlge + 10, L10.crc2.canvas.height * 0.75, xrandomAlge, L10.crc2.canvas.height * 0.7);
        L10.crc2.bezierCurveTo(xrandomAlge, L10.crc2.canvas.height * 0.7, xrandomAlge - 10, L10.crc2.canvas.height * 0.65, xrandomAlge, L10.crc2.canvas.height * 0.6);
        L10.crc2.stroke();
    }
    function drawSand(xSand, ySand, radius) {
        L10.crc2.fillStyle = "#c6b423";
        L10.crc2.beginPath();
        L10.crc2.arc(xSand, ySand, radius, 0, Math.PI * 2, true);
        L10.crc2.closePath();
        L10.crc2.fill();
    }
    function drawOctopus(xOct) {
        L10.crc2.strokeStyle = "black";
        L10.crc2.fillStyle = "#fc7f74";
        L10.crc2.lineWidth = 0.5;
        L10.crc2.beginPath();
        L10.crc2.moveTo(xOct, 500);
        L10.crc2.bezierCurveTo(xOct, 480, xOct + 25, 490, xOct + 50, 450);
        L10.crc2.bezierCurveTo(xOct + 50, 450, xOct + 53, 440, xOct + 70, 435);
        L10.crc2.bezierCurveTo(xOct + 70, 435, xOct + 95, 435, xOct + 100, 455);
        L10.crc2.bezierCurveTo(xOct + 100, 455, xOct + 105, 485, xOct + 150, 500);
        L10.crc2.bezierCurveTo(xOct + 150, 500, xOct + 155, 510, xOct + 140, 510);
        L10.crc2.bezierCurveTo(xOct + 140, 510, xOct + 100, 500, xOct + 90, 495);
        L10.crc2.bezierCurveTo(xOct + 90, 495, xOct + 80, 495, xOct + 75, 505);
        L10.crc2.bezierCurveTo(xOct + 75, 505, xOct + 70, 510, xOct + 65, 505);
        L10.crc2.bezierCurveTo(xOct + 65, 505, xOct + 65, 495, xOct + 55, 490);
        L10.crc2.bezierCurveTo(xOct + 55, 490, xOct + 40, 500, xOct + 35, 500);
        L10.crc2.bezierCurveTo(xOct + 35, 500, xOct + 30, 500, xOct + 30, 490);
        L10.crc2.bezierCurveTo(xOct + 30, 490, xOct + 25, 490, xOct + 15, 495);
        L10.crc2.bezierCurveTo(xOct + 15, 495, xOct + 5, 505, xOct, 500);
        L10.crc2.fill();
        L10.crc2.moveTo(xOct + 60, 460);
        L10.crc2.bezierCurveTo(xOct + 60, 460, xOct + 70, 470, xOct + 80, 460);
        L10.crc2.stroke();
        //Auge
        for (let i = 0; i < 2; i++) {
            L10.crc2.beginPath();
            L10.crc2.fillStyle = "white";
            L10.crc2.arc(xOct + 60, 450, 5, 0, Math.PI * 2, true);
            L10.crc2.fill();
            L10.crc2.closePath();
            L10.crc2.beginPath();
            L10.crc2.fillStyle = "black";
            L10.crc2.arc(xOct + 60, 452, 3, 0, Math.PI * 2, true);
            L10.crc2.fill();
            L10.crc2.closePath();
            xOct = xOct + 20;
        }
    }
    function drawBox(xBox, treasure) {
        L10.crc2.strokeStyle = "black";
        L10.crc2.fillStyle = "#b79149";
        L10.crc2.lineWidth = 0.5;
        L10.crc2.beginPath();
        //  crc2.moveTo(xBox, 500);
        L10.crc2.fillRect(xBox, 450, 80, 50);
        L10.crc2.strokeRect(xBox, 450, 80, 50);
        L10.crc2.moveTo(xBox, 450);
        L10.crc2.lineTo(xBox - 5, 430);
        L10.crc2.lineTo(xBox + 75, 430);
        L10.crc2.lineTo(xBox + 80, 450);
        L10.crc2.stroke();
        L10.crc2.fillStyle = "#99783b";
        L10.crc2.fill();
        console.log(treasure);
        if (treasure == true) {
            L10.crc2.beginPath();
            L10.crc2.moveTo(xBox + 5, 450);
            L10.crc2.lineTo(xBox + 7, 440);
            L10.crc2.lineTo(xBox + 15, 440);
            L10.crc2.lineTo(xBox + 20, 450);
            L10.crc2.lineTo(xBox + 25, 440);
            L10.crc2.lineTo(xBox + 45, 440);
            L10.crc2.lineTo(xBox + 50, 450);
            L10.crc2.lineTo(xBox + 55, 440);
            L10.crc2.lineTo(xBox + 60, 440);
            L10.crc2.lineTo(xBox + 70, 450);
            L10.crc2.stroke();
            L10.crc2.fillStyle = "#ffee35";
            L10.crc2.fill();
        }
    }
})(L10 || (L10 = {}));
//# sourceMappingURL=Animation.js.map