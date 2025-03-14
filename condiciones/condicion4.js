function angulos(a,b,c){
    let suma = a + b + c;
   if(suma === 180){
        console.log("Los angulos forman un triangulo")
    }
    else{
        console.log("no pertenecen a un triangulo")
    }
    
    return suma
}
angulos(60,60,60);
angulos(80,40,60);
angulos(10,100,60);