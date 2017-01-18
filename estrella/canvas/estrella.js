/*------------------- colores al asar -----------------------*/
function colorasar(){
    var hexadecimal = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var color ='#';
    for (var i = 0; i < 6; i++ ){
        var num = Math.floor(Math.random()*hexadecimal.length);
        color += hexadecimal[num];
    };
    return color;
};

/*--------------------- Canvas ------------------------*/
// clase linea
var Linea = function (canvas,partidax,partiday,llegadax,llegaday,grueso,color){
  var linea = canvas.getContext("2d");
  linea.lineWidth = grueso;
	linea.strokeStyle = color;
	linea.beginPath();
	linea.moveTo(partidax, partiday);
	linea.lineTo(llegadax, llegaday);
	linea.stroke();
};

function estrella(id,numlin, gro, col){
  var canvas = document.getElementById(id);
  var longitud = function(){
  if (canvas.getAttribute('width') < canvas.getAttribute('height')){
    return canvas.getAttribute('width');
  }else{
    return  canvas.getAttribute('height');
  }
};
  var numlineas = this.numlin = typeof numlin !== 'undefined' ? numlin : 10;
  var grosor = this.gro = typeof gro !== 'undefined' ? gro : 5;
  
  var dis = (longitud()/2)/numlineas;
  

  for(var i = 0; i <= numlineas-1; i++){
    var color = this.col = typeof col !== 'undefined' ? col : colorasar();
    var espacio = dis*i;
    var primy1 = new Linea(canvas,espacio,longitud()/2,longitud()/2,(longitud()/2) - espacio, grosor, color);
    var primy2 = new Linea(canvas,longitud()/2,espacio,(longitud()/2) + espacio,longitud()/2, grosor, color);
    var primy3 = new Linea(canvas,longitud()/2,(longitud()/2)+ espacio,longitud() - espacio,longitud()/2,grosor, color);
    var primy4 = new Linea(canvas,(longitud()/2) - espacio,longitud()/2,longitud()/2,longitud() - espacio,grosor, color);
  };
};
/*---------------- RUN CANVAS-------------------*/
window.addEventListener('load', function(){
  estrella('canvas');
});
