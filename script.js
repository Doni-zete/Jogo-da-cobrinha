window.onload = function () {

    let stage = document.getElementById('stage');
    let context = stage.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 90);


    const vel = 1;

    let velocidadeX = 0;
    let velocidadeY = 0;
    let posicaox = 10;
    let posicaoy = 15;
    let tamanho = 20;
    let quantidadePeca = 30;
    let macaX =macaY= 15;
 

    let trail = [];
    tail = 3;

    function game() {
        posicaox += velocidadeX;
        posicaoy += velocidadeY;
        if (posicaox < 0) {
            posicaox = quantidadePeca - 1;
        }
        if (posicaox > quantidadePeca - 1) {
            posicaox = 0;
        }
        if (posicaoy < 0) {
            posicaoy = quantidadePeca - 1;
        }
        if (posicaoy > quantidadePeca - 1) {
            posicaoy = 0;
        }


        context.fillStyle = "purple";
        context.fillRect(0, 0, stage.width, stage.height);


        context.fillStyle = "blue";
        context.fillRect(macaX * tamanho, macaY * tamanho, tamanho, tamanho);

        

        
        for (let i = 0; i < trail.length; i++) {
            context.fillRect(trail[i].x*tamanho, trail[i].y * tamanho, tamanho -1, tamanho -1)
            context.fillStyle = "white"
            if (trail[i].x == posicaox && trail[i].y == posicaoy) {
                velocidadeX = 0;
                velocidadeY = 0;
                        

          console.log("YOU LOSE!");
                
            }
            
        }
        
        


        trail.push({ x: posicaox, y: posicaoy })
        while (trail.length > tail) {
            trail.shift();

        }

        if (macaX == posicaox && macaY == posicaoy) {
            tail++;
            macaX = Math.floor(Math.random() * tamanho);
            macaY = Math.floor(Math.random() * tamanho);


        }
    }

    function keyPush(event) {

        switch (event.keyCode) {
            case 37:
                velocidadeX = -vel;
                velocidadeY = 0;
                break;

            case 38:
                velocidadeX = 0;
                velocidadeY = -vel;
                break;

            case 39:
                velocidadeX = vel;
                velocidadeY = 0;
                break;

            case 40:
                velocidadeX = 0;
                velocidadeY = vel;
                break;

            default:
                break;
        }

    }



}
