function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numerosN=0;
	var numerosP=0;
	var numeros=0;
	var promedioN=0;
	var promedioP=0;
	var cantidadP=0;
	var cantidadN=0;
	var cantidad0=0;
	var contadorP=0;
	var total=0;
	var respuesta="si";

	while(respuesta!="no")
	{
		respuesta=prompt("Ingrese numeros por #"+contador+" vez, en caso contrario ingrese no");
       if(respuesta!="no"){
       numeros = respuesta;
       numeros=parseInt(numeros);

       if (numeros<0) {
       	numerosN=numerosN+numeros;//suma N
        
         cantidadN++;//cantidad ingresada de numeros negativos
        
         promedioN=numerosN/cantidadN;//promedio

        
       }else if (numeros>0){ 
       	   numerosP=numerosP+numeros;//suma P
             
           cantidadP++;//cantidad ingresada de numeros positivos
       	  
       	   promedioP=numerosP/cantidadP;//promedio

           


       }else if (numeros==0){
         cantidad0++; //cantidad de numeros 0 ingresados
       }
          if (numeros%2==0){

          	contadorP++;//cantidad ingresada de pares

          } 
       }
	   contador++;
	}
    total=cantidadP-cantidadN;//diferencia de suma positivo y negativa
   
document.write("La suma de los numeros positivos es: "+numerosP+"<br>");
document.write("La suma de los numeros negativos es: "+numerosN+"<br>");
document.write("El promedio de los numeros positivos es: "+promedioP+"<br>");
document.write("El promedio de los numeros negativos es: "+promedioN+"<br>");
document.write("La cantidad de numeros positivos ingresada es: "+cantidadP+"<br>");
document.write("La cantidad de numeros negativos ingresada es: "+cantidadN+"<br>");
document.write("La cantidad de numeros 0 ingresados es: "+cantidad0+"<br>");
document.write("La cantidad de numeros pares ingresados es: "+contadorP+"<br>");
document.write("La diferencia de los numeros negativos y positivos ingresados es: "+total+"<br>");
}//FIN DE LA FUNCIÓN