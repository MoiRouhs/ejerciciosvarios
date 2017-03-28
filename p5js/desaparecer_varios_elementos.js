var arreglo = [];
var x, y ;
var t = 40;
var cantidad = 10;
function setup() {
  var lienzo = createCanvas(500, 500);
  lienzo.parent("hola");
  frameRate(170);
  for(var i=0; i<cantidad;i++){
    arreglo.push(new Punto(t,random(50,450),random(50,450)));
  };
};

var Punto = function(tam, x, y){
  this.tam = tam;
  this.x = x;
  this.y = y;
  
  this.show = function(){
  var tamano = this.tam
  strokeWeight(tamano);
  point(x,y);
    if(mouseIsPressed && mouseButton == LEFT && mouseX > x-tamano/2 && mouseX < x+tamano/2 && mouseY > y-tamano/2 && mouseY < y+tamano/2){
      var posicion = arreglo.indexOf(this);
      arreglo.splice(posicion,1);
    };
  };
};

function draw() {
  background(144);
  for(var j =0; j < arreglo.length; j++){
    var algo = arreglo[j];
    algo.show();
  };
};
