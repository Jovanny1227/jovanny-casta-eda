let b = ["abc", 4, 88, 99];
let copiaIndependiente = [...b];
b[0] = "xyz";
console.log("Arreglo original b:", b);
console.log("Copia independiente:", copiaIndependiente); 