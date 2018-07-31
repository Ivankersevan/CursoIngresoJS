function mostrar()
{
var i = 0;
var repeticiones = prompt("ingrese el número de repeticiones");
if (repeticiones > 0) {
for (i;i < repeticiones; i++) {
	document.write("Hola UTN FRA");
}
}else{
document.write("Ingreso mal");
}//FIN DE LA FUNCIÓN
}