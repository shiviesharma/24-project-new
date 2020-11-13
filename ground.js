class Ground{
    constructor(){
        var options = {
            isStatic:true,
            'friction':1,
            'density':1.2
        }
               
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }
    
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("red")
        pop();
      }
    
    }