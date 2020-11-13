class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restituion:0.3,
            friction:0.5,
            density:1.2
            
        }
        this.r = r;
        this.x = x;
        this.y = y;
        this.body = Matter.Bodies.circle(this.x,this.y,this.r)
        World.add(world, this.body);
    

        
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("pink")
        ellipse(0,0,this.r);
        pop();
      }

}