function mostrar()
{

	var contador=0;
	var acumulador=0;
    var numero;

while(numero != 'no'){

numero = prompt("Ingrese numero a sumar, si no quiere, escriba *no*");

if (numero>0) {

numero = parseInt(numero);
acumulador = parseInt(acumulador);
acumulador = acumulador + numero;


contador ++;

}
}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN