let arreglo = ["z", "p", "s", "z", "o", "b", "a", "w", "d"];
let palabra = "adso";
let contadora = 0;

for (let i = 0; i < arreglo.length; i++) {
    if (palabra.includes(arreglo[i])) {
        contadora++;
    }
}
if (contadora === palabra.length) {
    console.log("Es posible formar la palabra 'adso'.");
}else {
    console.log("No es posible formar la palabra 'adso'.");
}
