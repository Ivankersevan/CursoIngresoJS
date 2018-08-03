function mostrar()
{
/*
var i=1;
for (var i; i <= 10; i++) {
	console.log(i);
}
*/

var contador=0

for(contador<5){
	console.log(contador);
	contador++;
 if (contador == 5) {
 	break;
 }
}
console.log("Final For"+contador);
contador=0;

while(contador<5){
console.log(contador);
contador++;
}
console.log("Final while"+contador);

}

