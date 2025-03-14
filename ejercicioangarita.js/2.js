let acumuladora = 0;
function numeroMayor(a, b) {
if (a > b ) {
    acumuladora = acumuladora + a;
    console.log(`El numero ${a} es mayor que ${b}`);
}else if (b > a) {
    acumuladora = acumuladora + b;
    console.log(`El numero ${b} es mayor que ${a}`);
}else{
        console.log(`El numero ${a} y el numero ${b} son iguales`);   
    }
}
numeroMayor(3, 3);



