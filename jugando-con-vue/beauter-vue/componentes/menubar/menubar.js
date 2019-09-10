//------------ Componente ------------//

Vue.component('menu-g',{
  template:`
  <ul class="topnav" id="myTopnav2">
  <li><a href="#beauter" class="brand">Brand</a></li>
  <template v-for="(value, name) in menu">
    <template v-if="typeof(value) === 'string'">
      <li style="float:right;"><a href="#" >{{name}}</a></li>
    </template>
    <template v-if="typeof(value) === 'object'">
      <li style="float:right;" class="dropdown">
        <a href="#" >{{name}}</a>
        <div class="dropdown-content" >
          <a v-for="(v,n) in value" href="#">{{n}}</a>
        </div>
      </li>
    </template>
  </template>
  <li class="-icon">
    <a href="javascript:void(0);" onclick="topnav('myTopnav2')">☰</a>
  </li>
</ul>`,
  data:function(){
    return{
      menu:{
        Uno:{
          Uno1:"uno1.html", 
          Uno2:"uno2.html"},
        Dos:{
          Dos1:"dos1.html", 
          Dos2:"dos2.html"},
        Tres:{
          Tres1:"tres1",
          Tres2:"tres2",
          Tres3:"tres3"},
        Cuatro:"cuatro.html",
        Cinco:"cinco.html",
        Seis:"seis.html"}
      }
    }
  });

//--- Controlador
new Vue({
  el: '#cabecera'
})

