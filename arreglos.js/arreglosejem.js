let arregloBidimensional = [[20, 80, 30], [10, 20, 50],[70, 60, 40]];
 //El siguiente ciclo recorre los elementos que conforman el arreglo 
 // //arregloBidimensional es decir, [20, 80, 30], [10, 20, 50],[70, 60, 40] 
 for (let i = 0; i < arregloBidimensional.length; i++){ 
 // //El siguiente ciclo recorre los elementos de cada elemento del arreglo 
 // //arregloBidimensional, es decir 20, 80, 30, 10, 20, 50 , 70, 60, 40 
 for (let j = 0; j < arregloBidimensional[i].length; j++) { 
    //Acá se imprime cada elemento más interno del arreglo
  console.log(arregloBidimensional[i][j]);
 }
}
// let arregloMixto = [ ["w", true, 4], [3, 99], [4, 6, 7, 8] ]; 
// for (let i = 0; i < arregloMixto.length; i++) { 
//     for (let j = 0; j < arregloMixto[i].length; j++) { 
//     console.log(arregloMixto[i][j]); 
//     }
// }