let arregloA = [1, 2, false];
arregloA.splice(2, 1);  
console.log("Arreglo después de eliminar el índice 2:", arregloA);


let arregloB = [99, false, 17, 45, 7, "abc", 78];
arregloB.splice(6, 1);  
console.log("Arreglo después de eliminar el índice 6:", arregloB);


let arregloC = [-1, -55, -89, -30, 1000];
arregloC.splice(1, 1); 
console.log("Arreglo después de eliminar el índice 1:", arregloC);


let arregloD = ["zxc", 767, 1298, true, false, [3], 1];
arregloD.splice(1, 4);  
console.log("Arreglo después de eliminar los elementos del índice 1 al 4:", arregloD);

let arregloE = [34, ["q"], 67, 1, 99, 1/2];
arregloE.splice(3, 2);
console.log("Arreglo después de eliminar los elementos del índice 3 al 4:", arregloE);
