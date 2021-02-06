class Rope{
    constructor(bodyA,pointB){
       var options={
           length:400,
           stiffness:0.9,
           pointB:pointB,
           bodyA:bodyA
       }
     
       this.pointB=pointB;
       this.rope=Constraint.create(options);
       World.add(world,this.rope);
   }     
   display(){
       if(this.rope.bodyA){
       var pointA=this.rope.bodyA.position;
       
        var pointB =this.pointB;
       push()
       stroke(48,22,80);
       strokeWeight(4);
       line(pointB.x,pointB.y,pointA.x,pointA.y);
       pop();
       }
       
   }
attach(body){
    this.rope.bodyA=body;
}
fly(){
    this.rope.bodyA=null
}   



}