let precio = parseFloat(prompt("Ingrese el valor del producto"));
let descuento = parseFloat(prompt("Ingrse el descuento"));
let cantidad = descuento / 100
let precioDescuento = precio * cantidad
let precioTotal = precio - precioDescuento
alert (`El valor de su producto es de ${precio}
     pesos y con el descuento del ${descuento}%
     es de ${precioTotal} pesos`)