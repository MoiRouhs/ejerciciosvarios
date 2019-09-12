//------------ Componente ------------//

Vue.component('galeria-g',{
  template:`
<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: push; autoplay: true; autoplay-interval: 3000;">

    <ul class="uk-slideshow-items">
        <li v-for="item in imagenes">
            <img v-bind:src="'publico/img/'+item+'.jpg'" alt="" uk-cover>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>`,
  data: function(){
    return{
      imagenes:["dark","light","photo","photo2","photo3"] 
    }   
  }
  });

//--- Controlador
new Vue({
  el: '#galeria'
})

