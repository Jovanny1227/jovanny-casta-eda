let arreglo = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
let contador = 0;
for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === "Maria") {
        contador++;
    }
}
console.log("El nombre Maria aparece", contador, "veces en el arreglo.");
