
function mostrar()
{

var base;
var altura;
var superficie;
var hipotenisa;
var perimetro;

base = prompt("Ingrese la base del triangulo");
altura = prompt("Ingrese la altura del triangulo");

superficie = (base * altura) / 2;
hipotenusa = (base*base) + (altura*altura);
hipotenusa = Math.sqrt (hipotenusa);
perimetro = hipotenusa + superficie + altura;

alert("La superficie y el perimetro del triangulo es: "+superficie+","+perimetro);









}
