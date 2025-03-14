let arregloMesclado = [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55, 66, 77], [1, 2, 3, 4] ] ]
for (let i = 0; i < arregloMesclado.length; i++) {
   for (let j = 0; j < arregloMesclado[i].length; j++) {
        console.log(arregloMesclado[i][j]);
   }
}