var inicioX;
var finX;
function nuevo(id){
   function start(evento){
      inicioX = evento.touches[0].pageX;
  }
  function final(evento){
      finX = evento.changedTouches[0].pageX;
  }
      var divt2 = document.getElementById(id);
      divt2.addEventListener('touchstart',start,false);
      divt2.addEventListener('touchend',final,false);
}
function saber(){
  console.log('inicio del toque ' +inicioX +' final del toque '+ finX);
  if(inicioX < finX){
    console.log('***De izquierda a derecha***');
  }else{
    console.log('***De derecha a izquierda***');
  }
}
window.addEventListener('load', function(){nuevo('touch');
  document.getElementById('touch').addEventListener('touchend',saber,false);
}, false);
