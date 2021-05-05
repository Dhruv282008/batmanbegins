class Drop{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x ,y ,5 ,options)
        World.add(world, this.body);
       

    }
    display(){
        if(drops.y>900){
            drops.y = 250
        }
        ellipse(250,250,10,10)
    }
}