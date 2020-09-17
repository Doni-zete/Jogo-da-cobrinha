window.onload = function () {


    let stage = document.getElementById('stage')
    let cxt = stage.getContext("2d")

    setInterval(game, 1000 / 15)

    const vel = 1

    let velocidadex, velocidadey = 0
    let posicaox, posicaoy = 10
    let tamanhoPeca = 20
    let quantidadePeca = 20
    let posicaoMacaX, posicaoMacaY = 15

    let trail=[]
    tail = 5

    function game() {

        posicaox += velocidadex
        posicaoy +=velocidadey
        if(posicaox <0){
            posicaox =quantidadePeca-1;
        }
        if (posicaox > quantidadePeca-1){
            posicaox =0;
        }
        if(posicaoy<0){
            posicaoy=quantidadePeca-1;

        }
        if(posicaoy>quantidadePeca-1){
            posicaoy=0;
        }
        
        cxt.fillStyle = "black"
        cxt.fillRect(0, 0, stage.Width, stage.height)
    }

        cxt.fillStyle ="red"
        cxt.fillRect(posicaoMacaX*tamanhoPeca,posicaoMacaY*tamanhoPeca, tamanhoPeca,tamanhoPeca)

        cxt.fillStyle="purple"
        for (let i = 0; i < trail.length; i++) {
            cxt.fillRect(trail[i].x*lp, trail[i].y*tamanhoPeca, tamanhoPeca,tamanhoPeca)
            if(trail[i].x == posicaox && trail[i].y==posicaoy)
            {
                velocidadex=0, velocidadey=0
            }
        }
        trail.push({x:posicaox,y:posicaoy})
        while(trail.length>tail){
            trail.shift();
        }
        if(posicaoMacaX==posicaox&& posicaoMacaY==posicaoy){
        tail++
        posicaoMacaX =Math.floor(Math.random()*quantidadePeca)
        posicaoMacaY =Math.floor(Math.random()*quantidadePeca)

}