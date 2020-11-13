class Dustbin{
    constructor(){
        var options = {
            'restitution':1,
            'friction':1,
            'density':1
        }

        this.body = Bodies.rectangle(width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }
    
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("red")
        pop();
      }
    
    }