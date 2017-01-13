// Crea la ventana
chrome.app.runtime.onLaunched.addListener(function() {
chrome.app.window.create('../html/index.html', {
    id: "helloWorldID",
    outerBounds: {
      width: 400,
      height: 800,
      left: 500,
      top: 1,
      minHeight: 500,
      maxWidth: 700,
      minWidth: 400
    },
   frame: 'none' //Quita los bordes y botonoes superiores: "minimizar","meximizar" y "cerrar"
  });
});
/* forma rara de cargar las funciones 
   segun entiendo es una sola funcion
   que se toma los eventos como if y 
   les asigna una nueva funcion para que las ejecute
*/
onload = function() {

  //Codigo para cerrar la ventan  
  var closeNode = document.getElementById('cerrar');
  if (closeNode) {
    closeNode.onclick = function() {
      window.close();
    };
  }
  // Codigo para minimizar la ventana
  var minimizeNode = document.getElementById('minimizar');
  if (minimizeNode) {
    minimizeNode.onclick = function() {
    chrome.app.window.current().minimize();
    };
  }
}