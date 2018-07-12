function mostrar()
{
//tomo la edad  
var edad;
var EC;
	
edad = document.getElementById('edad').value;
EC = document.getElementById('estadoCivil').value;

edad = parseInt(edad);

if (edad < 18 && EC == "Casado" || EC == "Divorciado") {

alert("'Es muy pequeño para NO ser soltero");

}else{}

if (edad < 18 && EC == "Soltero") {

	alert("Ingreso correctamente");
}



}//FIN DE LA FUNCIÓN