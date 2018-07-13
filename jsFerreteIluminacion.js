/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 
var valor;
var cantidad;
var marca;

valor=35;

cantidad = document.getElementById('Cantidad').value;

marca = document.getElementById('Marca').value;

cantidad = parseInt(cantidad);

if (cantidad >= 6) {

valor = (valor*6)/2

document.getElementById('precioDescuento').value=valor;

}

if (cantidad == 5 && marca == "ArgentinaLuz" ) {

valor = ((valor*5)/10)*4;

document.getElementById('precioDescuento').value=valor;

}

if (cantidad == 5) {

valor = ((valor*5)/10)*30;

document.getElementById('precioDescuento').value=valor;


}

if (cantidad == 4 && marca == "ArgentinaLuz" || "FelipeLamparas") {

valor = ((valor*4)/100)*25;

document.getElementById('precioDescuento').value=valor;

}

if (cantidad == 4) {

valor = ((valor*4)/10)*2;

document.getElementById('precioDescuento').value=valor;


}

if (cantidad == 3 && marca == "ArgentinaLuz") {

	valor = ((valor*3)/100)*15;

document.getElementById('precioDescuento').value=valor;

}

if (cantidad == 3 && marca == "FelipeLamparas") {

valor = (valor*3)/10;

document.getElementById('precioDescuento').value=valor;

}

if (cantidad == 3) {

valor = ((valor * 3)/100)*5;

document.getElementById('precioDescuento').value=valor;

}







}
