function mostrar()
{
//tomo la edad  

var edad;

edad = document.getElementById('edad').value;

edad = parseInt(edad);

if (edad < 13) {
    alert("Eres un niño");

}else{
if (edad < 18 && edad > 12) {

	alert("Eres un adolecente");
}else{

	alert("Eres mayor de edad");
}

}



}//FIN DE LA FUNCIÓN