function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo=-(999999999999999999999);
	var minimo=999999999999999999;
	var respuesta='si';

	while(respuesta!='no'){
		respuesta = prompt("Ingrese un numero, en caso contrario ingrese *no*");
		if (respuesta>maximo) {
          respuesta = parseInt(respuesta);
          maximo = parseInt(maximo);

          maximo = respuesta;


		}
		if (respuesta<minimo) {
          
          respuesta = parseInt(respuesta);
          minimo = parseInt(minimo);

          minimo = respuesta;


		}else{
			contador=respuesta;
		}
	
	}

document.getElementById('maximo').value = maximo;
document.getElementById('minimo').value = minimo;


}//FIN DE LA FUNCIÓN