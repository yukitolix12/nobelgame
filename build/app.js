//require('./css/app');

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var bgImage =  new Image();
bgImage.src = "images/platform_b.jpg";

function loop() {

    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

loop();