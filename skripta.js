window.onload=draw;
function draw(){
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(125,115);
    ctx.bezierCurveTo(10, 90, 100, 90, 100, 70);
    ctx.strokeStyle = "rgb(255,0,0)"; //barva črte
    ctx.lineWidth = 3.0;
    ctx.stroke();
    ctx.closePath();
}