window.onload = function () {

    let stage = document.getElementById('stage');
    let ctx = stage.getContext("2d");

    setInterval(game, 60);


    const vel = 1;

    let vX = 0;
    let vY = 0;
    let px = 10;
    let py = 15;
    let lp = 20;
    let qp = 20;
    let ax= 15;
    let ay= 15;

    let trail = [];
    tail = 5;

    function game(){
        px += vX;
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
}
}