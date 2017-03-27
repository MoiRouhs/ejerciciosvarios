var x, y ;

function setup() {
  var lienzo = createCanvas(500, 500);
  lienzo.parent("hola");
  frameRate(170);
  x = random(1,500);
  y = random(1,500);
};

var Punto = function(tam){
  this.tam = tam
};

Punto.prototype.crear = function(){
  var tamano = this.tam
  strokeWeight(tamano);
  if(mouseIsPressed && mouseButton == LEFT && mouseX > x-tamano/2 && mouseX < x+tamano/2 && mouseY > y-tamano/2 && mouseY < y+tamano/2){
      x = mouseX;
      y = mouseY;
  };
  point(x,y);
};

function draw() {
  background(144);
  var punto = new Punto(80);
  punto.crear();
};
