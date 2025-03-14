let suma = 0;
let contador = 0;
let numero;
while (true) {
    numero = parseFloat(prompt("Introduce un número (0 para terminar):"));
    if (numero === 0) {
        break;
    }
    suma += numero;
    contador++;
}
if (contador > 0) {
    let promedio = suma / contador;
    console.log("El promedio de los números ingresados es: " + promedio);
}else {
    console.log("No se ingresaron números.");
}
