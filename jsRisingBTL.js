/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 
var edad;
var sexo;
var CV;
var sueldo;
var legajo;
var nacionalidad;
var respuesta = "si";
//Edad
//---------------------------------------------------------------------------

while(respuesta!="no"||respuesta=="si"){

edad=prompt("Ingrese su edad");
if (edad<18 || edad>80 ||isNaN(edad)) {
	edad=prompt("ERROR, Ingrese de nuevo la edad");
}
document.getElementById('Edad');
 //Sexo
 //--------------------------------------------------------------------------

sexo=prompt("Ingrese su sexo, *m* (Masculino), *f* (Fememnino)");
if (sexo!="f"&&sexo!="m") {
	sexo=prompt("ERROR, Ingrese de nuevo el sexo, *m* (Masculino), *f* (Fememnino)");
}

if (sexo=="m") {
	sexo="Masculino";
}else if (sexo=="f") {
	sexo="femenino";
}

document.getElementById('Sexo').value=sexo;
//CV
//---------------------------------------------------------------------------

alert("Elija su estado civil");
CV=prompt("1. Soltero/a, 2. Casado/a, 3. Divorciado/a, 4. Viudo/a");
switch(parseInt(CV)){
	case 1:
         CV="Soltero/a";
         break;
    case 2:
         CV="Casado/a";
         break;
    case 3:
         CV="Divorciado/a";
         break;
    case 4:
         CV="Viudo/a";
         break;              

    default:
         CV=prompt("Ingreso mal su opcion, 1. Soltero/a, 2. Casado/a, 3. Divorciado/a, 4. Viudo/a");
         break;
}

document.getElementById('EstadoCivil').value=CV;

//Sueldo Bruto
//---------------------------------------------------------------------------
 
sueldo=prompt("Ingrese su sueldo");
if (sueldo<8000||isNaN(sueldo)) {
	sueldo=prompt("ERROR, Ingreso un sueldo invalido, ingrese nuevamente");
}
sueldo=parseInt(sueldo);
document.getElementById('Sueldo').value=sueldo;

//Legajo
//---------------------------------------------------------------------------

legajo=prompt("Ingrese su legajo");
if (legajo<1000 || isNaN(legajo) || legajo>9999) {
	legajo=prompt("ERROR, Ingreso mal, intentelo de nuevo ");
}

document.getElementById('Legajo').value=legajo;

//Nacionalidad
//---------------------------------------------------------------------------

nacionalidad=prompt("Ingrese su Nacionalidad, *a*(Argentinos), *e*(Extranjeros), *n*(Nacionalizados)");
if (nacionalidad!="a" && nacionalidad != "e" && nacionalidad != "n") {
	nacionalidad=prompt("ERROR, Ingrese su Nacionalidad nuevamente, *a*(Argentinos), *e*(Extranjeros), *n*(Nacionalizados)")
}

switch(nacionalidad){
	case "a":
	     nacionalidad="Argentinos";
	     break;
	case "e":
	     nacionalidad="Extranjeros";
	     break;
	case "n":
	     nacionalidad="Nacionalizados";
	     break;
	default:
	     nacionalidad=prompt("ERROR, Ingrese su nacionalidad nuevamente, *a*(Argentinos), *e*(Extranjeros), *n*(Nacionalizados)")               
         break;
}
document.getElementById('Edad').value=edad;
document.getElementById('Sexo').value=sexo;
document.getElementById('EstadoCivil').value=CV;
document.getElementById('Sueldo').value=sueldo;
document.getElementById('Legajo').value=legajo;
document.getElementById('Nacionalidad').value=nacionalidad;

respuesta=prompt("Esta bien el ingreso?, responda *si* para enviarlo, responda *no* para rehacerlo");
if (respuesta=="no") {
	respuesta="otro";
}
if (respuesta=="si") {
	respuesta=prompt("Quiere hacer otro ingreso? responda *si* si quiere, o *no* en caso contrario");
	if (respuesta=="si") {
		respuesta="otro";
	}
}
}




}

