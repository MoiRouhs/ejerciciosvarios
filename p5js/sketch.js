var nieve = {};
var DISX = 100;

var copo =function(xp,yp,id){
	let x = 0.0;
	var countx = 0;
	var countx2 = 0;
  this.id = id;
  this.xp = xp;
  this.yp = yp;
  this.show = function(){
		push();
  	strokeWeight(2);
  	stroke("#BDBDBD");
  	fill("white");
  	ellipse(xp + x,(nieve[this.id]["conty"]) + yp,7,7);
   
    if(nieve[this.id]["conty"]  + yp <= height +200){
  		nieve[this.id]["conty"] = nieve[this.id]["conty"] + 0.5;
  	}else{
    	nieve[this.id]["conty"] = 0;
    };
    
    if(countx < DISX){
    	countx = countx + 1;
      x = x + 0.1;
    }else{
    	if(countx2 < DISX){
      countx2 = countx2 + 1;
      x = x - 0.1;
      };
    };
    if(countx == countx2){
      countx = 0;
      countx2 = 0;
    };
  pop();
  };
};
/*---------------SETUP-----------------*/
function setup() { 
  var lienzo = createCanvas(700, 500);
  lienzo.id("masthead");
  copito = new copo(random(0,400),random(1,50));
  for(i = 0; i <150; i++ ){
  	nieve[i] = copito = new copo(random(0,width),random(0, (-height -250)),i);
    nieve[i]["conty"];
  };
  var llaves = Object.keys(nieve);
  //saveJSON(nieve,"nieve.json");
} 
/*-------------DRAW--------------------*/
function draw() { 
  background(0);
  Object.keys(nieve).forEach(function(e){
  	var algo = nieve[e];
    algo.show();
  });
 //saveJSON(nieve,"nieve.json");
};
