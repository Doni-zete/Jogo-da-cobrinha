window.onload = function () {

    let stage = document.getElementById('stage');
    let context = stage.getContext("2d");

    setInterval(game, 60);


    const vel = 1;

    let velocidadeX = 0;
    let velocidadeY = 0;
    let posicaox = 10;
    let posicaoy = 15;
    let tamanho = 20;
    let quantidadePeca = 20;
    let macaX = 15;
    let macaY = 15;

    let trail = [];
    tail = 5;

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

        context.fillStyle = "red";
        context.fillRect(macaX * tamanho, macaY * tamanho, tamanho, tamanho);

        context.fillStyle = "gray"
        for (let i = 0; i < trail.length; i++) {
            context.fillRect(trail[i].x = tamanho, trail[i].y * tamanho, tamanho, tamanho)

            if (trail[i].x == posicaox && trail[i].y == posicaoy) {
                velocidadeX = 0;
                velocidadeY = 0;
                window.alert = 'Game over';

            }
        }
        trail.push({ x: posicaox, y: posicaoy })
        while (trail.length > tail) {
            trail.shift();

        }

        if (macaX == posicaox && macaY == posicaoy) {
            tail++;
            macaX = Math.floor(Math.random()*tamanho);
            macaY = Math.floor(Math.random()*tamanho);


        }
    }
}