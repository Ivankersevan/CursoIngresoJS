function mostrar()
{
var nota;

nota=document.getElementById('laHora').value;

nota=parseInt(nota);

switch(nota){

case 0:
case 1:
case 2:
case 3:

alert("La proxima se puede");

break;

case 4:
case 5:
case 6:

alert("Raspando");

if (nota <= 5) {
	alert("Debes preocuparte mas");
}

break;

case 7:
case 8:
case 9:
case 10:

alert("Aprobado");
if (nota >= 9) {
	alert("Muy bien");
}
break;

default:

alert("Ingreso mal la nota");










}




}
