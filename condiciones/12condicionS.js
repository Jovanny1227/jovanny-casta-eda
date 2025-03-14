
let n = parseInt(prompt("Introduce el valor de n:"));
let sumaCuadrados = 0;
for (let i = 1; i <= n; i++) {
    sumaCuadrados += i * i;
}
console.log("La suma de los cuadrados de los números entre 1 y " + n + " es: " + sumaCuadrados);
