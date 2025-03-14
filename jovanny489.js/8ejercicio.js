alert ("Quieres saber el valor de tu producto con el 10% de descuento");
let producto = prompt("Ingrese el nombre del producto");
let precio = parseFloat(prompt("ingrese el precio de su producto"));
const descuento = 10/100
let cantidad = precio * descuento
let precioFinal = precio - cantidad
alert (`Su ${producto} vale ${precio} pesos pero con el descuento del 10% es de ${precioFinal}`)




