function mostrar()
{
var nombre;
var edad;
var edadM;
var sexo;
var contador=0;
var contadorM=0;
var contadorF=0;
var edadmayorM=0;
var edadmenorM=0;

sexo=prompt("Ingrese su sexo, f (femenino) y m (masculino)");
edad=prompt("Ingrese su edad");
 

 while(sexo != "f" && sexo != "m"){

 sexo = prompt("ERROR, Ingrese nuevamente su sexo");


 }

while(isNaN(edad)||edad>100||edad<0){

edad = prompt("ERROR, Ingrese nuevamente la edad");


	
}


while(sexo=="m"){//si es Hombre


contadorM++;//cantidad de hombres ingresados

if(edad>edadmayorM){
	edadmayorM=edad;
}else if (edad<edadmenorM) {
	edadmenorM=edad;
}else{
	edadM=edadM+edad;
}

}

while(sexo=="f"){//si es Mujer

contadorF++;//cantidad de mujeres ingresadas

}