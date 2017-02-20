var survey = [0,0];
var numnote = {
  'n1':'#ffe0b2',
  'n2':'#E6EE9C',
  'n3':'#C8E6C9',
  'n4':'#D1C4E9',
  'n5':'#FFCDD2',
  'n6':'#d7ccc8'};

  /* ----------------------  Genera cada una de las notas  ----------------------------*/
function clonNotas(){
  for (i=1; i<=5; i++){
    var divinsert = document.getElementById('n'+i);
    divinsert.innerHTML = "<form> <fieldset> <legend>Personal information: </legend>Name: <input type='text' class='mediano' id='firstnamen"+i+"'><br> Phone: <input type='tel' class='generico' id='phonen"+i+"'> E-mail: <input type='text' class='generico' id='emailn"+i+"'> </fieldset> <fieldset> <legend>Device information:</legend> Carrier: <input type='text' class='generico' id='carriern"+i+"'> S/N: <input type='text' class='generico' id='imein"+i+"'><br> Model: <input type='text' class='generico' id='modeln"+i+"'> Survey <input type='checkbox' calss='checkbox' id='encun"+i+"' value='si'> Origin <select id='origenn"+i+"'> <option value='none'></option> <option value='Setting'>Setting</option> <option value='H-boot'>H-boot</option> <option value='*#06#'>*#06#</option> <option value='Box'>Box</option> <option value='Sim tray'>Sim tray</option> <option value='Sticker'>Sticker</option> <option value='Carrier'>Carrier</option> <option value='Receipt'>Receipt</option> </select> <br> </fieldset> Issue: <input class='issue' type='text' id='issuen"+i+"'><br> Extra &#92; TS: <input type='checkbox' calss='checkbox' id='ts1n"+i+"' value='Soft Reset'><a href='#' title='Soft Reset'>SR</a> <input type='checkbox' calss='checkbox' id='ts2n"+i+"' value='Hard Reset'><a href='#' title='Hard Reset'>HR</a> <input type='checkbox' calss='checkbox' id='ts3n"+i+"' value='Safe Mode'><a href='#' title='Safe Mode'>SM</a> <input type='checkbox' calss='checkbox' id='ts4n"+i+"' value='Clear App'><a href='#' title='Clear App'>CA</a> <input type='checkbox' calss='checkbox' id='ts5n"+i+"' value='Wipe cache partition'><a href='#' title='Wipe cache partition'>WCP</a> <input type='checkbox' calss='checkbox' id='ts6n"+i+"' value='Factory data reset'><a href='#' title='Factory data reset'>FDR</a> <input type='checkbox' calss='checkbox' id='ts7n"+i+"' value='Rom update utility'><a href='#' title='Rom update utility'>RUU</a> <input type='checkbox' calss='checkbox' id='ts8n"+i+"' value='Battery reset'><a href='#' title='Battery reset'>BR</a> <br> <textarea cols='1000' id='troubleshootingn"+i+"'></textarea><br> Address: <input class='mediano' type='text' id='addressn"+i+"'><br> Address was verified in <select id='postn"+i+"'> <option value=''></option> <option value='USPS'>USPS</option> <option value='Canada Post'>Canada post</option> </select><br> Read: <input class='issue' type='text' id='readn"+i+"'><br> and Customer agreed. Approved by <input type='text' class='apro' id='approven"+i+"'> <input type='reset' id='cysn"+i+"' value='Copy & save'> </form>";
  };

  Object.keys(numnote).forEach(function(e){ // agrega el click para ingresar a cada nota]
    var bnote = document.getElementById('r'+e);
      bnote.addEventListener('click',function(){cambio(e)}, false);
  });
  Object.keys(numnote).forEach(function(e){ // conecta el boton de envio con la funcion de recoleccion de datos
    console.log(e);
      if (e != 'n6'){
        document.querySelector("#cys"+e).addEventListener('click',function(){infocliente(e)}, false);
        document.querySelector('#firstname'+e).addEventListener('keydown',function(){altoque('firstname'+e, 9)});
        document.querySelector('#firstname'+e).addEventListener('keyup',function(){altoque('firstname'+e, 32)});
      };
  });
};

/*----- Cambio pantalla de notas a historial -----*/
function cambio(arg){
  var colorn = document.getElementById('colorn');
  var bnote = document.getElementById('r'+arg);
  var visible = document.getElementById(arg);
  var todos = document.getElementsByClassName('pantallasuperior');

  for(l = 0; l <= todos.length -1; l++){ // esconde todas las pantallas superiores
    todos.item(l).className = 'pantallasuperior';
  };
  Object.keys(numnote).forEach(function(e){ // cambia de color el boton al color de la nota visible
    var bnot = document.getElementById('r'+ e);
    bnot.style.color ='#ffffff';
  });
  visible.className +=' visible'; // pone visible la nota
  if(arg == 'n6'){
    colorn.innerHTML = 'History';
  }else{
    colorn.innerHTML = 'Notes';
  };
  colorn.style.color = numnote[arg];
  bnote.style.color = numnote[arg];
};

/*----- Cabezera de las notas en historial -----*/
function cabezera(){
   var f = new Date();
   var tercio = survey[1]/3;
  /*------------- Por diversión----------*/
   var carita = function(){
     if (survey[0] >= 0 && (survey[0] <= tercio)){
        return '( ˘︹˘ )';
     }else if(survey[0] > tercio && survey[0] <= tercio*2){
        return '( ㆆ_ㆆ )';
     }else if(survey[0] > tercio*2 && survey[0] <= survey[1]){
        return '( ^ ◡ ^ )';
     };
  };
  /*------------- se acabo la diversión----------*/

  var fecha ="<#-#~------- "+f.getHours()+":"+f.getMinutes()+" ~~ "+ carita() +" ~~ Survey:"+survey[0]+"/"+survey[1]+" -------~#-#>";

  return  fecha ;
}

/*----- copiar el contenido del formulario en la papelera -----*/
function copiar(algo){
   var es = algo;
   var range = document.createRange();
   range.selectNode(es);
   window.getSelection().addRange(range);
   document.execCommand('copy');
}

/*----- Letra Capital -----*/
String.prototype.letraCapital = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};
/*----- Quitar  Espacios -----*/
String.prototype.sinEspacio = function() {
    return this.replace(/\s/g,"");
};
/*----- Capitular -----*/
String.prototype.capitular = function(){
    var nuevoTexto=[];
     var texto = this.split(' ');
     texto.forEach(function(e){
         nuevoTexto.push(e.charAt(0).toUpperCase() + e.slice(1).toLowerCase());
     });
     return nuevoTexto.join(' ');
};
/*----- Itineración troubleshooting -----*/
function itinerats(ar){
 var tslist = [];
   for(var t = 1; t <= 8; t++){
    var idt = 'ts' + t + ar;
    var idts = document.getElementById(idt);
     if(idts.checked == true){
        tslist.push(idts.value);
     }
   }
   return tslist.toString();
}
/*----- Al precionar espacio capitula el texto -----*/
function altoque(id,tecla){
  var d = document.getElementById(id);
  var tap = event.keyCode;
  if (tap == tecla){
   d.value = d.value.capitular();
  };
}
/*----- Captura de la información del cliente -----*/
function infocliente(arg){
    survey[1] ++;
  var salidafile ;
   var contenedorsalida = document.getElementById('n6');
   /*----- Información Personal -----*/
   var nombre = document.getElementById('firstname'+ arg).value;
   var telefono = document.getElementById('phone'+arg).value.sinEspacio();
   var correo = document.getElementById('email'+arg).value.sinEspacio();
   var direccion = document.getElementById('address'+arg).value;
   var postal = document.getElementById('post'+arg).value;

   /*---------- Informacion del dispositivo ---------*/
   var operador = document.getElementById('carrier'+arg).value.letraCapital();
   var sn = document.getElementById('imei'+ arg).value.sinEspacio().toUpperCase();
   var modelo = document.getElementById('model'+arg).value.toUpperCase();
   var encuesta = document.getElementById('encu'+arg);
   var origen = document.getElementById('origen'+arg).value;

   /*---------- Problema y proceso --------------*/
   var problema = document.getElementById('issue'+arg).value;
   var proceso = document.getElementById('troubleshooting'+arg).value;

   /*------------ Informacion para reparación -----------------*/
   var condiciones = document.getElementById('read'+arg).value;
   var aprovacion = document.getElementById('approve'+arg).value;

   var cliente = [nombre,telefono,operador,correo,sn,problema,
                 proceso,modelo,origen,direccion,postal,condiciones,aprovacion];

  /*------------ Información de las encuentas ofrecidas  -----------------*/
  if (encuesta.checked == true){
    survey[0] ++;
  };


  /*------------ Imprime información problema -----------------*/
  for (var i = 0; i < cliente.length -1; i++) {
    var j = cliente[i];
     if( "" !== j ){
        var id = j+sn;
            id = id.replace(/ /gi,'-')
        contenedorsalida.innerHTML+='<br>'+ cabezera();
        salidafile =  '\n'+ cabezera() + '\n';
        contenedorsalida.innerHTML+="<div id="+id+"></div>";
        var salida = document.getElementById(id);

        if("" !== problema){
           salida.innerHTML+='<br>Issue: '+ problema;
           salidafile = salidafile +'Issue: '+ problema +"\n";
        }
        if("" !== proceso){
           salida.innerHTML+='<br>Troubleshooting: '+ itinerats(arg)+'<br>Extra troubleshooting: '+ proceso;
           salidafile = salidafile +'Troubleshooting: '+ itinerats(arg) +'\nExtra troubleshooting: '+ proceso +'\n';
        }
  /*------------ Imprime información cliente -----------------*/
        if("" !== nombre || "" !== telefono || "" !== correo || "" !== direccion){
           salida.innerHTML+='<br><b>HTC Customer</b>';
           salidafile = salidafile + '\nHTC Customer\n';
          if("" !== nombre){
             salida.innerHTML+='<br>Name: '+ nombre;
             salidafile = salidafile +'Name: '+ nombre +'\n';
          }
          if("" !== telefono){
             salida.innerHTML+='<br>Phone: '+ telefono;
             salidafile = salidafile +'Phone: '+ telefono +'\n';
          }
          if("" !== correo){
             salida.innerHTML+='<br>E-mail: '+ correo;
             salidafile = salidafile +'E-mail: '+ correo +'\n';
          }
          if("" !== direccion){
             salida.innerHTML+='<br>Address: '+ direccion +' Address was verified in '+ postal;
             salidafile = salidafile +'Address: '+ direccion + ' Address was verified in '+ postal +'\n';
          }
        }
  /*------------ Imprime informacion dispositivo -----------------*/
        if("" !== sn ||"" !== origen || "" !== modelo || "" !== operador){
          salida.innerHTML+='<br><b>HTC Device</b>';
          salidafile = salidafile +'\nHTC Device\n';
          if("" !== sn){
             salida.innerHTML+='<br>S/N: '+ sn +' from: '+origen;
             salidafile = salidafile +'S/N: '+ sn +' from: '+ origen + '\n';
          }
          if("" !== modelo){
             salida.innerHTML+='<br>Model: '+ modelo;
             salidafile = salidafile +'Model: '+ modelo + '\n';
          }
          if("" !== operador){
             salida.innerHTML+='<br>Carrier: '+ operador;
             salidafile = salidafile +'Carrier: '+ operador + '\n';
          }
        }
  /*------------ Imprime informacion reparacion -----------------*/
        if("" !== condiciones){
           salida.innerHTML+='<br>Read: '+ condiciones +" and Customer agreed.";
           salidafile = salidafile +'Read: '+ condiciones+ ' and Customer agreed.\n';
        }
        if("" !== aprovacion){
           salida.innerHTML+='<br> Approved by: '+ aprovacion;
          salidafile = salidafile +'Approved by: '+ aprovacion+ + '\n';
        }
       salida.innerHTML+='<br>';
       salidafile = salidafile +'\n\n';

  /*------------ Copia toda la informacion -----------------*/
        copiar(salida);
       fs.appendFileSync(d2, salidafile, 'utf-8');
        break;
     }
   }
}
/*------------------- Cambio de Diccionario ------------------------------*/
var num = 1;
function camDic(){
  var dic = document.getElementById('dicsaver');
  var bdic = document.getElementById('diccambio');

  switch (num) {
    case 1: // MUestra diccionario wikinary
      bdic.innerHTML = 'wr';
      dic.src = 'https://fr.m.wiktionary.org/wiki/Wiktionnaire:Page_d%E2%80%99accueil';
      num ++;
    break;
    case 2 : // MUestra diccionario wordreference
      bdic.innerHTML = 'wk';
      dic.src ='http://www.wordreference.com';
      num = 1;
    break;
  };
};

/*------------------- Asignacion de evento cambio ------------------------------*/
window.addEventListener('load', function(){
   clonNotas();
   existex();
   document.querySelector("#diccambio").addEventListener('click',camDic, false);
},false);
