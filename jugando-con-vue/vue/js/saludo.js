
//------- Mensaje Basico --------------------//
var contar = 0;

var app = new Vue({
  el: '#saludo',
  data: {
    mensaje: ' Hola Desde Vue !!'
  }
})

//---------- Enlazar atributos --------------//

var enlazarAtributo = new Vue({
  el:'#enlazar-atributo',
  data: {
    aviso: "La hora y fecha es: " + new Date(),
    mensaje: "Deja el cursor aquí",
    imagen: "https://es-vuejs.github.io/vuejs.org/images/logo.png"
  }
})

//------------ Componente ------------//
Vue.component('nombres',{
  props: ['nombre','apellido'],
  template: '<p> Hola {{nombre}} {{apellido}}</p>'
});

//--- Controlador
new Vue({
  el: '#controlador-componente'
})
