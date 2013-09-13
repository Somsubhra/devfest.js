var c=document.getElementById("mycanvas");
var ctx=c.getContext("2d");

ctx.fillStyle="#FF0000";
ctx.fillRect(0,0,150,75);

ctx.moveTo(100,100);
ctx.lineTo(200,300);
ctx.stroke();

ctx.beginPath();
ctx.arc(300,300,40,0,2*Math.PI);
ctx.stroke();
