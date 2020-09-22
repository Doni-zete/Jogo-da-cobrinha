window.onload = function () {

    let stage = document.getElementById('stage');
    let ctx = stage.getContext("2d");

    setInterval(game, 1000/15);


    const vel = 1;

    let velocidadeX = 0;
    let velocidadeY = 0;



    function game(){


    }







    
    ctx.fillStyle = "purple";
    ctx.fillRect(0,0, stage.width, stage.height);

}