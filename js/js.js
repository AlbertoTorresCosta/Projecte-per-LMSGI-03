var parser, xmlDoc;
var text = Preguntes.xml;

parser = new DOMParser();
xmlDoc = parser.parseFromString(text,"title/xml");

document.getElementById("demo").innerHTML =
xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
