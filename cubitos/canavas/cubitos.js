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
var Cubo = function(canvas,x,y,tam,color){
  var ctx = canvas.getContext("2d");
  ctx.rect(x, y, tam, tam);
  ctx.strokeStyle = '#ffffff';
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
};
function cubcan(id,tamCubitos,cantCubitos){
  var tamCubito = this.tamCubitos = typeof tamCubitos !== 'undefined' ? tamCubitos : 10;
  var cantCubito =this.cantCubitos = typeof cantCubitos !== 'undefined' ? cantCubitos : 10;
  var canvas = document.getElementById("canvas");
  for (var y = 0; y <= cantCubito -1; y++){
    for(var x = 0; x <= cantCubito -1; x++){
      var cub = new Cubo(canvas,tamCubito*x,tamCubito*y,tamCubito,colorasar());
    }; 
  };
};

/*---------------- RUN CANVAS-------------------*/
window.addEventListener('load', function(){
    cubcan('canvas',15,30)
});