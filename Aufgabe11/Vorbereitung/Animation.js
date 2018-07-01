var L11_Inheritance;
(function (L11_Inheritance) {
    window.addEventListener("load", init);
    let stars = [];
    let n = 20;
    //let rects: Rect[] = [];
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L11_Inheritance.crc2 = canvas.getContext("2d");
        console.log(L11_Inheritance.crc2);
        canvas.addEventListener("click", insertNewObject);
        for (let i = 0; i < n; i++) {
            let star = new L11_Inheritance.DavidStar("#d6dd6e");
            stars.push(star);
            let rect = new L11_Inheritance.Rect("#72619b");
            stars.push(rect);
            let form = new L11_Inheritance.Form("#84bbce");
            stars.push(form);
        }
        animate();
    }
    function insertNewObject(_event) {
        //  let star: DavidStar = new DavidStar("#ffff00");
        //  stars.push(star);
        let x = _event.pageX;
        let y = _event.pageY;
        let num = Math.random();
        if (num <= 0.3) {
            let star = new L11_Inheritance.DavidStar("#eddd68");
            star.x = x;
            star.y = y;
            stars.push(star);
        }
        else if (num <= 0.6 && num >= 0.3) {
            let rect = new L11_Inheritance.Rect("#95e2d9");
            rect.x = x;
            rect.y = y;
            stars.push(rect);
        }
        else {
            let form = new L11_Inheritance.Form("#f2916a");
            form.x = x;
            form.y = y;
            stars.push(form);
        }
    }
    function animate() {
        window.setTimeout(animate, 10);
        L11_Inheritance.crc2.clearRect(0, 0, L11_Inheritance.crc2.canvas.width, L11_Inheritance.crc2.canvas.height);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=Animation.js.map