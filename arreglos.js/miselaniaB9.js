let arreglo = [true, true, false, true, false, false];
let contadora = 0;
let i = 0;
while (i < arreglo.length) {
    if (arreglo[i] === false) {
        contadora++;
    }
    i++;
}
console.log("El valor false aparece", contadora, "veces en el arreglo.");
