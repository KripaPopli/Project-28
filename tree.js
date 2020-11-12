class Tree {

 constructor(x,y,w,h){
     var options = {
         isStatic: true
     }

this.body = Bodies.rectangle(x,y,w,h);
this.x = x;
this.y = y;
this.w = w;
this.h = h;
this.Image = loadImage("Plucking+mangoes/tree.png");
 }

 display(){
 var pos =this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
    }
}