//Parsear
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
  gestionarXml(this);
 }
}
xhttp.open("GET", "Preguntes.xml", true);
xhttp.send();

function gestionarXml(dadesXml){
var xmlDoc = dadesXml.responseXML;
...
}


//Camp de Text
var formElement=null;
window.onload = function(){
 formElement=document.getElementById('Primera, Novena');
 formElement.onsubmit=function(){
  var s=formElement.elements[0].value; 
  alert("text: "+s);
  return false; //no envía el formulario, solo mira los valores
 }
}

//Select
var e=null;
var formElement=null;
window.onload = function(){
 e=document.getElementById("Sexta, Segunda");
 e.onchange=function(){
  message();
  return false;
 }
 formElement=document.getElementById('Sexta, Segunda'); 
 formElement.onsubmit=function(){
  message();
  return false;
 } 
}
function message(){
 var value = e.options[e.selectedIndex].value;
 var text = e.options[e.selectedIndex].text; 
 alert("value: "+value+" text: "+text);
}

//Select Multiple
var f=null;
window.onload = function(){
 f=document.getElementById('Tercera, Décima');
 f.onsubmit=function(){
 var text="Seleccted: ";
  if (f.mySel[0].selected) text+=" "+f.mySel[0].value;
  if (f.mySel[1].selected) text+=" "+f.mySel[1].value;
  if (f.mySel[2].selected) text+=" "+f.mySel[2].value;
  alert(text);
  return false;
 }
}


//Checkbox
var f=null;
window.onload = function(){
 f=document.getElementById('Cuarta, Séptima');
 f.onsubmit=function(){
  var text="Colors: ";
  if (f.S.checked) text+=" "+f.S.value;
  if (f.N.checked) text+=" "+f.N.value;
  if (f.PS.checked) text+=" "+f.PS.value;
  alert(text);
  return false;
 }
}

//Radio
var f=null;
window.onload = function(){
 f=document.getElementById('Quinta, Octava');
 f.onsubmit=function(){
  var text="Colors: ";
  if ((f.color[0].checked) || (f.color[1].checked) || (f.color[2].checked)) {
   text+=" "+f.color.value;
  } else{
   text="No color selected";
  }
  alert(text);
  return false; 
 }
}
