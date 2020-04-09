class SlingShot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        

        
        this.pendulum = Constraint.create(options);
        World.add(world, this.pendulum);
    }
    display(){
        var pointA=this.pendullum.bodyA.position;
        var pointB=this.pendullum.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
               
    }
}