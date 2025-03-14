let arregloMesclado = [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55, 66, 77], [1, 2, 3, 4] ] ]
arregloMesclado.forEach(i =>{
    i.forEach(j =>{
        console.log(j);
    })
})