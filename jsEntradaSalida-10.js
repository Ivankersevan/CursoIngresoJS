/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
 var num1;
 var num2;
 var num3;
 
 num1 = document.getElementById('importe').value;
 
 num1 = parseInt(num1);

 num3  = (num1 * 0.25);

 num3 = num1 - num3;


 document.getElementById('resultado').value = num3;
}
