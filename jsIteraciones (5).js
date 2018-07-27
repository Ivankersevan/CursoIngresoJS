function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo != "m" && sexo != "f"){

alert("Ingreso un dato erroneo, intentelo de nuevo");

sexo = prompt("ingrese f ó m .");
}

if (sexo == "m") {
	sexo = "Masculino";
}else if (sexo == "f") {
	sexo = "Femenino";
}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN