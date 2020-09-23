window.onload = function () {

    let stage = document.getElementById('stage');
    let ctx = stage.getContext("2d");

    setInterval(game, 60);


    const vel = 1;

    let velocidadeX = 0;
    let velocidadeY = 0;
    let posicaox = 10;
    let posicaoy = 15;
    let tamanho = 20;
    let quantidadePeca = 20;
    let macaX= 15;
    let macaY= 15;

    let trail = [];
    tail = 5;

    function game(){
        posicaox += velocidadeX;
        posicaoy += velocidadeY;
        if(posicaox <0){
            posicaox = quantidadePeca-1; 
        }
        if (posicaox> quantidadePeca-1){
            posicaox = 0;
        }
        if(posicaoy < 0){
            posicaoy = quantidadePeca-1;
        }
        if (posicaoy> quantidadePeca-1){
            posicaoy = 0;
        }

    
    ctx.fillStyle = "purple";
    ctx.fillRect(0,0, stage.width, stage.height);

    ctx.fillStyle = "red";
    ctx.fillRect(macaX*tamanho, macaY*tamanho, tamanho,tamanho);
}
}