class Bobs
{
    constructor(x, y, r) 
    {
        var options = 
        {
            'restitution': 0.8,
            'friction': 0.3,
            'density': 1.2,
            'isStatic' : false,
        }
        
        this.r = 30;
        this.body = Bodies.circle(x, y, 30, options);
        World.add(world, this.body);
    }

    display() 
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        stroke("white");
        fill("black");
        ellipseMode(RADIUS);
        ellipse(0, 0, 30, 30);
        pop();
    }
};


  