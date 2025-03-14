let arreglos = [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ];
for (let i = 0; i < arreglos.length; i++) {
        for (let j = 0; j < arreglos[i].length; j++) {
        console.log(arreglos[i][j]);
        }
            let impar = [i][j] % 2 
            if (impar !== 0) {
            console.log(arreglos[i][j]);
        }
}
