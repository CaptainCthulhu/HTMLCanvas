var ballRadius = 25;

function Ball(xPos, yPos, xVel, yVel) {
    this.radius = ballRadius;
    this.xPos = xPos;
    this.yPos = yPos;
    this.xVel = xVel;
    this.yVel = yVel;
    this.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

    this.update = function(){
      if (this.xPos > canvasWidth - ballRadius
        || this.xPos < ballRadius)
        this.xVel *= -1;
      if (this.yPos > canvasHeight - ballRadius
        || this.yPos < ballRadius)
        this.yVel *= -1;
      this.xPos += this.xVel;
      this.yPos += this.yVel;
    };

    this.draw = function(){
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI*2, false);
      ctx.strokeStyle = this.color;
      ctx.stroke();
      ctx.closePath();
    };

    this.CheckCollisions = function(ball){
      var bounceX = false;
      var bounceY = false;
    };
}
