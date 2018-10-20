const scene = document.getElementById('scene');

const ctx = scene.getContext('2d');



function loop(time){

    console.log(time);
    ctx.clearRect(0,0,scene.width, scene.height);
    ctx.beginPath();

    ctx.arc(
        200,
        200 + time / 100,
        50,
        320 * Math.PI / 180,
        40 * Math.PI / 180,
        true
    );

    ctx.moveTo(200, 200 + time / 100);


    // for(let i=0;i<500;i++){
    //     (i===0?ctx.moveTo:ctx.lineTo).call(ctx,i+time/100,Math.sin(i/10)*100+250);
    // }


    ctx.stroke();
    // ctx.fill();

    requestAnimationFrame(loop);
}



requestAnimationFrame(loop);