alert("Quieres saber cuento es el precio de tu rpoducto con IVA");
let producto = prompt("Ingrese el nombre del producto");
let precio = parseFloat(print("Ingrese el precio del producto"));
const IVA = precio * 0.16
let precioFinal = (precio + IVA);
alert(`El precio total de ${producto} es de ${precioFinal} pesos.`);