let arreglo = [1, 2, 3, 4, 500, 420, -100];
let copiaArreglos = arreglo.slice(0,6); 
arreglo.splice(4, 1);
arreglo.pop();
arreglo.push(520); 
console.log("Arreglo modificado:", arreglo);
console.log("Copia independiente:", copiaArreglos);