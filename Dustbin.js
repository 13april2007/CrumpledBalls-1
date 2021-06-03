class Dustbin {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.dustbinWidth  =250;
        this.dustbinHeight = 130;
        this.wallThickness =30;
this.angle = 0;
        this.bottomBody = Bodies.rectangle(this.x, this.y , this.dustbinWidth + 500, this.wallThickness,{isStatic : true});


        this.leftBody = Bodies.rectangle(this.x - this.dustbinWidth/2, this.y-this.dustbinHeight/2 ,this.wallThickness, this.dustbinHeight,{isStatic : true},);
Matter.Body.setAngle(this.leftBody,this.angle);
this.rightBody = Bodies. rectangle(this.x +  this.dustbinWidth/2, this.y-this.dustbinHeight/2 ,this.wallThickness, this.dustbinHeight,{isStatic : true});

Matter.Body.setAngle(this.leftBody,-1*this.angle);
World.add(world,this.bottomBody);
World.add(world,this.leftBody);
World.add(world,this.rightBody);
    }
    display(){
        var posBottom = this.bottomBody.position;
var posLeft = this.leftBody.position;
var posRight = this.rightBody.position;
push ();
translate (posLeft.x,posLeft.y);
rectMode(CENTER);
angleMode(RADIANS);
fill ("red");
rotate (this.angle);
rect(0,0,this.wallThickness, this.dustbinHeight);
pop ();

push ();
translate (posRight.x,posRight.y);
rectMode(CENTER);
angleMode(RADIANS);
fill ("red");
rotate (-1*this.angle);
rect(0,0,this.wallThickness, this.dustbinHeight);
pop ();
 
push ();
translate (posBottom.x,posBottom.y);
rectMode(CENTER);
angleMode(RADIANS);
fill ("red");
rect(0,0,this.dustbinHeight, this.wallThickness);
pop ();
 
 
    }
}