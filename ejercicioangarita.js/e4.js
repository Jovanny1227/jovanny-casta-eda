function filtrarPares(arreglo) {
    return arreglo.filter(num => num % 2 === 0);
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = filtrarPares(numeros);

console.log(numerosPares);
