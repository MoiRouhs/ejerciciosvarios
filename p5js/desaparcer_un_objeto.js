var arreglo = [];
var x, y ;
var t = 80;
function setup() {
  var lienzo = createCanvas(500, 500);
  lienzo.parent("hola");
  frameRate(170);
  x = random(50,450);
  y = random(50,450);
  arreglo.push(new Punto(t));
  console.log(arreglo.length);
  console.log(arreglo[0]);

};

var Punto = function(tam){
  this.tam = tam;
  this.show = function(){
  var tamano = this.tam
  strokeWeight(tamano);
  point(x,y);
    if(mouseIsPressed && mouseButton == LEFT && mouseX > x-tamano/2 && mouseX < x+tamano/2 && mouseY > y-tamano/2 && mouseY < y+tamano/2){
      arreglo.splice(this, 1);
    };
  };
};

function draw() {
  background(144);
  if(arreglo.length >= 1){
    var algo = arreglo[0];
    algo.show();
  };
};
