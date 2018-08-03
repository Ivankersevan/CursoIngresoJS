function mostrar()
{

var cantidad = 100,j=2;
for(var i=2;i<cantidad;i++) {      
    for(;j<cantidad;j++) {        
        if(j%i==0 && (i==j || i==1)) {          
            console.log(j);          
        }         
    }            
}

}//FIN DE LA FUNCIÓN