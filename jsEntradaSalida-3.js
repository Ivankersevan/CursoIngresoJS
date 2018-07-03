/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;
	nombre = document.getElementById('elNombre').value;

	alert(nombre);
    // TIPS: TAB + SHIFT + i = "getElementyById" (simplifica comando)
	/* el ".value" es el valor asignado al "elNombre"
	en este ejemplo.
	"document" es un comando reservado*/

}


