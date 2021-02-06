class Monster{
 
    constructor(x,y,r,angle){
       var options = {
         
         frictionAir:0.0005,
        restitution:0.89,
         density:1
     
        }
      this.body = Bodies.circle(x,y,r,options);
    //  this.width=w;
     // this.height=h;
      this.image = loadImage("images/Monster-01.png");
      this.image2 = loadImage("images/Monster-02.png");
      World.add(world,this.body);


    }
    display(){
         
        var pos = this.body.position;
        var angle= this.body.angle;
       push()
       
        translate(pos.x,pos.y);
      // rotate(angle);
        imageMode(CENTER);
        if(this.body.speed > 1){
        image(this.image, 0, 0, 450, 200);
        }else{
            image(this.image2,0,0,450,200)
        }
       pop()
    }

}