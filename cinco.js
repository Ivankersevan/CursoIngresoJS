function mostrar()
{

var dia;

alert("Ingresar dia: Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo");

dia = prompt("Ingrese el dia");

switch(dia){
case "Lunes":
case "Martes":
case "Miercoles":
case "Jueves":
case "Viernes":

alert("A trabajar");

break;

case "Sabado":
case "Domingo":

alert("Buen finde");

break;

default: 

alert("Ingreso mal el dia o escribio mal el mismo, Intentelo de nuevo");



}




}
