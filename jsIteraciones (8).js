function mostrar()
{

	var acumulador=0;
	var negativo=1;
	var numero;
	
while(numero != 'no'){

numero = prompt("Ingrese numero a sumar, si no quiere, escriba *no*");

if (numero>0) {

numero = parseInt(numero);
acumulador = parseInt(acumulador);
acumulador = acumulador + numero;


}else if (numero < 0){
    numero = parseInt(numero);
    negativo = parseInt(negativo);
	negativo = numero * negativo;
}
}

document.getElementById('suma').value=acumulador;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN