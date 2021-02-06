class Ball{
 
    constructor(x,y,r,angle){
       var options = {
         
         frictionAir:1,
        
         density:1
     
        }
      this.body = Bodies.circle(x,y,r/2,options);
    //  this.width=w;
     // this.height=h;
      this.image = loadImage("images/Superhero-01.png");
      World.add(world,this.body);


    }
    display(){
         
        var pos = this.body.position;
        var angle= this.body.angle;
       push()
       
        translate(pos.x,pos.y);
      //  rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 200, 150);
       pop()
    }

}