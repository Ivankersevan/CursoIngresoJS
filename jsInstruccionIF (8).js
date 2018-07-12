function mostrar()
{
//tomo la edad  

	var edad;
	var EC;

	edad = document.getElementById('edad').value;
	EC = document.getElementById('estadoCivil').value;

	edad = parseInt(edad);

	if (edad > 17 && EC == "Soltero") {

		alert("Es soltero y no es menor");

	}else{}








}//FIN DE LA FUNCIÓN