namespace L11_Inheritance {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let stars: DavidStar[] = [];
    let n: number = 20;

    //let rects: Rect[] = [];

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        canvas.addEventListener("click", insertNewObject);

        for (let i: number = 0; i < n; i++) {
            let star: DavidStar = new DavidStar("#d6dd6e");
            stars.push(star);

            let rect: Rect = new Rect("#72619b");
            stars.push(rect);
            
            let form: Form = new Form("#84bbce");
            stars.push(form);
          
        }


        animate();
    }

    function insertNewObject(_event: MouseEvent): void {
      //  let star: DavidStar = new DavidStar("#ffff00");
      //  stars.push(star);
        
        let x: number = _event.pageX;
        let y: number = _event.pageY;
        
        let num: number = Math.random();
        if (num <= 0.3) {
            let star: DavidStar = new DavidStar("#eddd68");
            star.x = x;
            star.y = y;
            stars.push(star);
        }
        else if (num <= 0.6 && num >= 0.3) {
            let rect: Rect = new Rect("#95e2d9");
            rect.x = x;
            rect.y = y;
            stars.push(rect);
        } 
        else {
           let form: Form = new Form("#f2916a");
           form.x = x;
           form.y = y;          
           stars.push(form);    
        }
    
    }

    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        for (let i: number = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
}