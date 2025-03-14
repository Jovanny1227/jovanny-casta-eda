let cadena = "Programar es algo genial, todos deberían intentarlo, atrévete!"
let arreglo = cadena.split(",").map(arreglo => `"${arreglo}"`)
console.log(arreglo.join(", "));
