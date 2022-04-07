
let taReview = document.getElementById('taReview');
let radiousLT = document.getElementById('radiousLT');
let inputLT = document.getElementById('inputLT');


let inputRT = document.getElementById('inputRT');
let radiousRT = document.getElementById('radiousRT');

let inputLB = document.getElementById('inputLB');
let radiousLB = document.getElementById('radiousLB');
let inputRB = document.getElementById('inputRB');
let radiousRB = document.getElementById('radiousRB');
let allRadious = document.getElementById('allRadious');

let widthBorder= document.getElementById('widthBorder');
let border1= document.getElementById('border1');
/* VARIABLES DE LOS BORDES BOTONES */
let borderDotted= document.getElementById('borderDotted');
let borderSolid= document.getElementById('borderSolid');
let borderDashed= document.getElementById('borderDashed');
let borderDouble= document.getElementById('borderDouble');
let borderGroove= document.getElementById('borderGroove');
let borderRidge= document.getElementById('borderRidge');
let borderInset= document.getElementById('borderInset');
let borderOutset= document.getElementById('borderOutset');
let borderHidden= document.getElementById('borderHidden');
let borderNone= document.getElementById('borderNone');


let borderColor= document.getElementById('borderColor');
let alphaBorder = document.getElementById('alphaBorder');
let borderColorOpacity = document.getElementById('borderColorOpacity');

/* LADOS DE LOS BORDES */
let borderall= document.getElementById('borderall');
let borderTop= document.getElementById('borderTop');
let borderRight= document.getElementById('borderRight');
let borderBottom= document.getElementById('borderBottom');
let borderLeft= document.getElementById('borderLeft');

var tip= "solid";
var hex ="";


radiousLT.oninput = function(){
    
    inputLT.value=radiousLT.value;

    if(allRadious.checked){
        taReview.style.borderRadius = radiousLT.value +'px';
        inputLB.value=radiousLT.value;
        inputRT.value=radiousLT.value;
        inputRB.value=radiousLT.value;        
    }
    else{
        taReview.style.borderTopLeftRadius = radiousLT.value +'px';  
    }        
};

allRadious.oninput=function(e){
    if(!allRadious.checked){
        taReview.style.borderRadius = '0px 0px 0px';
        inputLB.value = 0;
        inputRT.value = 0;
        inputRB.value = 0;        
    }
};

radiousRT.oninput = function(){
    
    inputRT.value=radiousRT.value;
    taReview.style.borderTopRightRadius = radiousRT.value +'px';      
};

radiousRB.oninput = function(){
    
    inputRB.value=radiousRB.value;
    taReview.style.borderBottomRightRadius = radiousRB.value +'px';      
};

radiousLB.oninput = function(){
    
    inputLB.value=radiousLB.value;
    taReview.style.borderBottomLeftRadius = radiousLB.value +'px';      
};

var bordeWid;
widthBorder.oninput=function(e){
    taReview.style.borderWidth = widthBorder.value + "px";
    bordeWid=widthBorder.value;
};

/*Grosor del borde cuando presione el boton */
border1.onclick=function(e){
    taReview.style.borderWidth = ' 1px ';
    widthBorder.value=1;
}



/*CONFIGURACION DE LOS BOTONES*/
borderSolid.onclick = function(e){
    taReview.style.borderStyle= 'solid';
    tip='solid';
};
borderDotted.onclick = function(e){
    taReview.style.borderStyle= 'dotted';
    tip='dotted';
};
borderDashed.onclick = function(e){
    taReview.style.borderStyle= 'dashed';
    tip='dashed';
};
borderDouble.onclick = function(e){
    taReview.style.borderStyle= 'double';
    tip='double';
};
borderGroove.onclick = function(e){
    taReview.style.borderStyle= 'groove';
    tip='groove';
};
borderRidge.onclick = function(e){
    taReview.style.borderStyle= 'ridge';
    tip='ridge';
};
borderInset.onclick = function(e){
    taReview.style.borderStyle= 'inset';
    tip='inset';
};
borderOutset.onclick = function(e){
    taReview.style.borderStyle= 'outset';
    tip='outset';
};
borderHidden.onclick = function(e){
    taReview.style.borderStyle= 'hidden';
    tip='hidden';
};
borderNone.onclick = function(e){
    taReview.style.borderStyle= 'none';
    tip='none';
};
//////SEGUNDA PARTE/////////////////////

var red = parseInt(hex[1]+hex[2],16);
var green = parseInt(hex[3]+hex[4],16);
var blue = parseInt(hex[5]+hex[6],16);
console.log(red,green,blue);

borderColor.oninput = function(e){
    taReview.style.borderColor = borderColor.value;
    hex = borderColor.value;
    
}


/* Transparencia del borde */
alphaBorder.oninput = function(e) {
    
    var red = parseInt(hex[1]+hex[2],16);
    var green = parseInt(hex[3]+hex[4],16);
    var blue = parseInt(hex[5]+hex[6],16);
  
     taReview.style.border= widthBorder.value + "px " + tip  + " rgba("+red+", "+green+", "+blue+", "+ (alphaBorder.value/100)+")";

    }

borderColorOpacity.onclick=function(e){
    alphaBorder.value=100;
    taReview.style.borderColor = borderColor.value;
};

/* Define el posicionamiento del borde */

borderTop.onclick = function(e){
    taReview.style.borderWidth = bordeWid + "px 0px 0px 0px";
     
 };
borderRight.onclick = function(e){
    taReview.style.borderWidth =  "0px "+bordeWid+"px 0px 0px";
 };
borderBottom.onclick = function(e){
    taReview.style.borderWidth =  "0px 0px "+bordeWid+"px 0px";
     
 };
 borderLeft.onclick = function(e){
    taReview.style.borderWidth =  "0px 0px 0px "+bordeWid+"px";
 };
 borderall.onclick = function(e){
    taReview.style.borderWidth =  bordeWid + "px";
 };
