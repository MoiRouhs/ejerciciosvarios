/*-------------------- Asi se incluye el evento desde el js --------------------*/
var contadorjs = 0;
    function contarjs(){
        contadorjs++;
        console.log("Desde el js "+contadorjs);
    };
/* 
    Para establecer eventos desde el js hay que encampsularlos en una función que al final de la carga 
    del documento html los asigne, por eso se le añade el escucha de eventos a la ventana al terminar la carga así:
            window.addEventListener('load', function(){Aquí va la asignación de eventos},false);
*/ 
window.addEventListener('load', function(){
   
    document.querySelector("#link").addEventListener('click',contarjs, false);
/*  
    Si se envia funciones que no necesiten argumentos no hace falta agregar(), solamente el nombre de la función.
    en caso contrario hay que encapsular la funtción del parametro en una función anonima así: 
            document.querySelector("#link").addEventListener('click',fuction(){contadorjs('parametro')}, false);
*/
}, false);

/*
    Para hacer la asignacion desde js es necesario que los elementos del HTML tengan un identificador como lo es el; id, class, etc.
    A diferencia de cuando se asignan desde el HTML que no necesita ninguno de estos identificadores solo hay que agregar el evento
    en la etiqueta apertura.
*/

/*-------------------- Así es cuando el evento esta en el html --------------------*/
var contadorhtml = 0;
    function contarhtml(){
        contadorhtml++;
        console.log("desde el html "+ contadorhtml);
    };