let productos = {
    "papa": 2.50,
    "arroz": 1.80,
    "lentejas": 3.20,
    "aceite": 4.50,
    "leche": 1.10
};
let productoSolicitado = prompt("Ingrese el nombre de un producto (papa, arroz, lentejas, aceite, leche):").toLowerCase();
if (productos[productoSolicitado] !== undefined) {
    console.log("El precio del " + productoSolicitado + " es: $" + productos[productoSolicitado]);
} else {
    console.log("Producto no encontrado.");
}
