function mostrar()
{

	var contador=0;
	var acumulador=0;
    var numero;


while(contador < 5){

numero=prompt("Ingrese el numero");
numero = parseInt(numero);
acumulador = parseInt(acumulador);
acumulador = acumulador + numero;
contador ++;
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN