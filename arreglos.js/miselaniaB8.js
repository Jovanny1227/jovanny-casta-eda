let arreglo = [-2, 8, 99, 1, 7];
let sumaCuadrados = 0;

arreglo.forEach(elemento => {
    sumaCuadrados += elemento * elemento;
});

console.log("La suma de los cuadrados de los elementos del arreglo es:", sumaCuadrados);
