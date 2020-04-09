class Ball extends BaseClass {
    constructor(x,y){
      super(x,y,5);
      
    }
  
    display() {
        if(keyCode===32){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
    }
  else if(keyCode===ENTER){
     ball.isStatic=true;
    }
      super.display();
    }
  }
  