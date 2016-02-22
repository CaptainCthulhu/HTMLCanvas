var margin = 50;
var canvasHeight = window.innerHeight - margin;
var canvasWidth = window.innerWidth - margin;
var canvas = null;
var context = null;
var balls = new Array();

function Ball(height, width, xPos, yPos, xVel, yVel) {
    this.height = height;
    this.width = width;
    this.xPos = xPos;
    this.yPos = yPos;
    this.xVel = xVel;
    this.yVel = yVel;
}

Ball.prototype.update = function(){

};

Ball.prototype.draw = function(){

};

function startCanvas(){
  canvas = document.getElementById("myCanvas");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  context = canvas.getContext("2d");
}

function setUpCanvas(){
  for (var i=1; i < 100; i++){

  }
}

function AnimateCanvas(){
  /*for each (var x in balls){
    x.update();
  }*/
}

function ClearCanvas(){
  context.clearRect(0,0, canvas.width, canvas.height);
}
