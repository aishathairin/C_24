class Pig{
    constructor(x,y){
        var options = {
            'restitution' : 0.3,
            'density': 0.004,
            'friction': 0.4
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    }
    display(){
        var position=this.body.position;
        var angle= this.body.angle;
        push ();
        translate (position.x,position.y);
        rotate (angle);
        strokeWeight (4);
        fill ("red");        
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop ();
    }
}