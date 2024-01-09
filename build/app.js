//require('./css/app');

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var bgImage = mew Image();

function loop() {

    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

loop();