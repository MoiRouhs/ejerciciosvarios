/*------------------------------------------ SVG --------------------------------*/
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
var cids = []; // almacena el id de cda uno de los cubitos
/*------------- Clases con las que se trabaja -------------------*/
var Cuadro = function(id,x,y,tam){//creacion de la clase cuadrado
  this.x = x;
  this.y = y;
  this.tam = tam;
  this.id = id;
};
Cuadro.prototype.inputcub = function(){ //funcion de la clase para crear un cudrado 
  return "<rect class='cubito' id='"+this.id+"' x='"+this.x+"' y='"+this.y+"' width='"+this.tam+"' height='"+this.tam+"'/>";
};

//Creacion de la clase dupla
var Yx = function(cadena){
  this.cadena = cadena
};
Yx.prototype.duplas = function(){
  var casillas = [-1,0,1]
  var y =[];
  var x = [];
  var ids =[];
  var nid = this.cadena.replace('y','');
  nid = nid.split('x');
  nid[0] = parseInt(nid[0]);
  nid[1] = parseInt(nid[1]);
  casillas.forEach(function(e) {
     y.push(e+nid[0]);
     x.push(e+nid[1]); 
  });
  y.forEach(function(e) {
      for(var i = 0; i <= x.length -1; i++){
        ids.push('y'+e+'x'+x[i]);
      };
  })
  console.log(nid);
  return ids;
};
/*-------------------Pinta el cuadrito en hover -----------------------*/
function pinta(id, color,tiempo){
  var cub = document.getElementById(id);
  cub.style.fill = color;
  setTimeout(function(){
    cub.style.fill ='#e0e0e0';
  },tiempo);
};
/*----------------------------- Pinta cuadros al rededor ---------------------------*/
function explocion(punto0, color){
  var ids = new Yx(punto0).duplas();
  ids.forEach(function(e) {
      console.log(e);
      for (e in cids){
        console.log(ids[e]);
        document.getElementById(ids[e]).style.fill = color;
      };
  });
};

/*----------------------------- Crea la cuadricula ---------------------------*/
function areaCubitos(id,tamCubitos,cantCubitos,temps){
  var tamCubito = this.tamCubitos = typeof tamCubitos !== 'undefined' ? tamCubitos : 10;
  var cantCubito =this.cantCubitos = typeof cantCubitos !== 'undefined' ? cantCubitos : 10;
  var tiempo =this.temps = typeof temps !== 'undefined' ? temps : 750;
  var lienzo = document.getElementById(id);
  for (var y = 0; y <= cantCubito -1; y++){
    for(var x = 0; x <= cantCubito -1; x++){
      var cid = 'y'+y+'x'+x;
      cids.push(cid);
      var cuadrito = new Cuadro(cid,tamCubito*x,tamCubito*y,tamCubito).inputcub();
      lienzo.innerHTML += cuadrito;
    };
  };
  cids.forEach(function(e){ // Agrega los eventos a cada cubito de la cuadricula
    document.getElementById(e).addEventListener('mauseover',function(){
      pinta(e,colorasar(),tiempo);
    });
    document.getElementById(e).addEventListener('click',function(){
      explocion(e,colorasar());
    });
  });
};


/*---------------- RUN SVG-------------------*/
window.addEventListener('load', function(){
    areaCubitos('lienzo',30,30,5000);
});