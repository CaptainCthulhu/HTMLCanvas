var margin = 50;
var canvasHeight = window.innerHeight - margin;
var canvasWidth = window.innerWidth - margin;
var balls = new Array();
var animateTimer = 16;
var variability = 5;
var offset = 50;
var canvas, ctx;

window.onload = function(){
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  ctx.lineWidth = 10;
  canvas.width = canvasWidth, canvas.height = canvasHeight;
  setUpCanvas();
  setInterval(AnimateCanvas, animateTimer);
}

function setUpCanvas(){
  for (var i=1; i < 100; i++){
    balls[balls.length]
      = new Ball(
        Math.random() * variability + offset,
        Math.random() * variability + offset,
        Math.random() * variability,
        Math.random() * variability);
  }
}

function AnimateCanvas(){
  ClearCanvas();
  for (var i = 0; i < balls.length; ++i){
    balls[i].update();
    balls[i].draw();
  }
}

function ClearCanvas(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
}
