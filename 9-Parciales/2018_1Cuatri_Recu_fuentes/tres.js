function mostrar()
{

var precio;
var descuento;
var Pdescuento;
var descuentoDeDinero;
var iva;
var total;

precio = prompt("Ingrese el precio: ");
descuento = prompt("Ingrese el descuento");
precio=parseInt(precio);
descuento=parseInt(descuento);

Pdescuento = (precio * descuento) / 100;

descuentoDeDinero = Pdescuento-precio;

iva = (precio / 100) * 21;

total = Pdescuento + iva;





alert("El descuento total segun el dinero es: "+descuentoDeDinero+ "$ El descuento en dinero es: "+Pdescuento+"$ El IVA es: "+iva"$");

document.getElementById('elPrecioFinal').value = total;



}
