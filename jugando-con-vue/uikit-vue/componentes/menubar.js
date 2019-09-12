//------------ Componente ------------//

Vue.component('menu-g',{
  template:`
  <nav class="uk-navbar-container uk-margin custom-user" uk-navbar="mode: hover">
    <div class="uk-navbar-left">
       <a class="uk-navbar-item uk-logo" href="#">
        <img class="logo-user" v-bind:src="'publico/img/'+logo" />
       </a>
    </div>
    <div class="uk-navbar-right uk-hidden@s">
       <a class="uk-navbar-toggle" uk-navbar-toggle-icon href="#offcanvas-usage" uk-toggle></a> 
    </div>
    <div class="uk-hidden@s" id="offcanvas-usage" uk-offcanvas>
    <div class="uk-offcanvas-bar">
        <button class="uk-offcanvas-close" type="button" uk-close></button>
        <h3>Title</h3>
    </div>
</div>
    <div class="uk-navbar-right uk-visible@s">
      <ul class="uk-navbar-nav">
        <template v-for="(v1,n1) in menu">
          <template v-if="typeof(v1) ==='string'">
            <li><a href="#">{{n1}}</a></li> 
          </template>
          <template v-else-if="typeof(v1) === 'object'">
            <li>
              <a href="#">{{n1}}</a>
              <div class="uk-navbar-dropdown">
                <ul class="uk-nav uk-navbar-dropdown-nav">
                  <li v-for="(v2,n2) in v1">
                    <a href="#">{{n2}}</a>
                  </li>
                </ul>
              </div>
            </li>
          </template>
        </template>
      </ul>
    </div>
  </nav>`,
  data: function(){
    return{
      logo: "logo.svg",
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

