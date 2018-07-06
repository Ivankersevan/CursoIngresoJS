/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
 var num1;
 var num2Aum;
 var num3;
 
 num1 = document.getElementById('sueldo').value;
 
 num1 = parseInt(num1);

 num3  = (num1 * 0.1);

 num3 = num1 + num3


 document.getElementById('resultado').value = num3;

	
}
