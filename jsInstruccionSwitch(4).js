function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño){


case "Febrero":

alert("Tiene 28 Dias");

break;

case "Abril":
case "Junio":
case "Septiembre":
case "Noviembre":

alert("Tiene 30 Dias");

break;

case "Enero":
case "Marzo":
case "Mayo":
case "Julio":
case "Agosto":
case "Octubre":
case "Diciembre":

alert("Tiene 31 Dias");

break;

default:

break;












	}



}//FIN DE LA FUNCIÓN