function verificarLetra(letra) {
    let arreglo = ["a", "b", "c", "d", "e", "f", "g"];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === letra) {
            console.log("La letra", letra, "está en el arreglo.");
            return;
        }
    }
    console.log("La letra", letra, "no está en el arreglo.");
}
verificarLetra("c");  
verificarLetra("x");  
