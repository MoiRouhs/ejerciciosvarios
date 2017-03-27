function setup() {
  var lienzo = createCanvas(500, 500);
  lienzo.parent("hola");
  stroke(255);    
  frameRate(70);
};

var Circulo = function(r,x,y,c){
  this.r = random(50);
  this.x = random(50,450);
  this.y = random(50,450);
  this.c = color(random(255),random(255),random(255));
};
Circulo.prototype.dibujar = function(){
  noFill();
  stroke(this.c);
  ellipse(this.x,this.y,this.r,this.r);
};

function draw() { 
  var tap = new Circulo();
  tap.dibujar();
};
