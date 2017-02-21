var path = require('path');
var os = require('os');
var fs = require('fs');
var gui = require('nw.gui');

function urlext(url){
  gui.Shell.openExternal(url);
};
var d = path.join(os.homedir(),"Desktop","History");

function crearArchivo(){
  var fi = new Date();
  var fechai = fi.getFullYear() +"-"+ (fi.getMonth()+1) +"-"+ fi.getDate();
  return fechai ;
};

var nomarchivo = crearArchivo()+'.rtf';
var d2 = path.join(d,nomarchivo) ;

function existex(){
  if (fs.existsSync(d)) {
    if (!fs.existsSync(d2)){
      fs.appendFileSync(d2,'');
    };
  }else{
    fs.mkdirSync(d);
    fs.appendFileSync(d2);
  };
};
