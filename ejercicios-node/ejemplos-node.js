var fs = require('fs'); // Libreria para poder acceder 
var path = require("path"); // Para trabajar con direcciones de archivos del sistema
var readline = require('readline'), // Libreria pata generar entradas mediante terminal
  rl = readline.createInterface(process.stdin, process.stdout); // Creando la interface de entrada de linea de comando para node
var direccion = path.normalize(__dirname); // Forma de saber en el directoria que se esta ubicado
var fsdir = fs.readdirSync(direccion);  // Ver el contenido de un carpeta
var cons = console.log;
var carpetas = {};
cons(direccion);
cons(fsdir.length, fsdir);
var lecturafile = fs.readFileSync("ejemplos-node.js","utf-8"); // Leyando el contenido de un archivo
/*----------------------------------- Buscando carpetas y crea un array con el contenido y la direccion de las carpetas encontradas ----------------------------*/
for ( var i = 0 ; i <= (fsdir.length - 1); i ++ ){
    var subdir = fsdir[i];
    if (subdir.indexOf(".") == -1){
    var nuevadireccion = fs.readdirSync(path.join(direccion,subdir));
    carpetas[path.join(direccion,subdir)] =nuevadireccion ;
    };        
};
/*---------------------------------------------------------------------------------------------------------------------*/
cons(Object.keys(carpetas).length);
cons(lecturafile)
/*--------------------- Forma  de crear un entrada en el la linea de comando de node.js ---------------------*/
rl.question("¿Cómo estas? : ", function(respuesta){
    setTimeout(function(){
        cons("Si ==> "+respuesta.toUpperCase());
    }, 5000);
    rl.close(); // cierra el promp o entrada de linea de comando
}); 
