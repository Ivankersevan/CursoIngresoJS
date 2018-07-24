var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	eleccionMaquina=Math.floor((Math.random()*3)-1);//Genero el número RANDOM entre 1 y 3
	alert("comenzamos"); 




}//FIN DE LA FUNCIÓN
function piedra()
{
	var piedra=1;
	if (eleccionMaquina == piedra) {

  ContadorDeEmpates ++;
   alert("Empate");
	}else if (eleccionMaquina == 2) {
  ContadorDePerdidas ++;
 alert("Perdiste");
	}else if (eleccionMaquina == 3) {
  ContadorDeGanadas ++;
 alert("Ganaste");

	}

}//FIN DE LA FUNCIÓN
function papel()
{
var papel=2;
if (eleccionMaquina == papel) {
ContadorDeEmpates ++;
alert("Empate");
}else if (eleccionMaquina == 1) {
	ContadorDeGanadas ++;
	alert("Ganaste");
}else if (eleccionMaquina == 3) {
	ContadorDePerdidas ++;
	alert("Perdiste");
}





}//FIN DE LA FUNCIÓN
function tijera()
{
	var tijera=3;
if (eleccionMaquina == tijera) {
	ContadorDeEmpates ++;
	alert("Empate");
}else if (eleccionMaquina == 1) {
	ContadorDePerdidas ++;
	alert("Perdiste");
}else if (eleccionMaquina == 2) {
	ContadorDeGanadas ++;
	alert("Ganaste");
}

}//FIN DE LA FUNCIÓN

function mostrarResultado()
{

document.getElementById('Empate').value="Empate";
document.getElementById('Ganaste').value="Ganaste";
document.getElementById('Perdiste').value="Perdiste";


}