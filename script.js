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
    let quantidade = 20;
    let macaX= 15;
    let macaY= 15;

    let trail = [];
    tail = 5;

    function game(){
        posicaox += velocidadeX;
        py += vY;
        if(px <0){
            px = qp-1; 
        }
        if (px> qp-1){
            px = 0;
        }
        if(py < 0){
            py = qp-1;
        }
        if (py> qp-1){
            py = 0;
        }

    
    ctx.fillStyle = "purple";
    ctx.fillRect(0,0, stage.width, stage.height);

    ctx.fillStyle = "red";
    ctx.fillRect(ax*tp, ay*tp, tp,tp);
}
}