class Pig {
    constructor (x,y)
    {
        var options= {
           restitution : 0.6,
           friction : 0.5,
           density : 0.6
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.height = 50;
        this.width = 50;
        World.add(world,this.body);
    }
    
    display (){
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate(angle);
        stroke("blue");
        strokeWeight(5);
        fill ("green")
        rectMode(CENTER);
        rect (0,0,this.width,this.height);
        pop ();
    }
}