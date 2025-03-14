alert ("Que electrodomestico quieres comprar");
let nombreElectrodomestico = prompt("ingresar el nombre del electrodomestico");
let valorElectrodomestico = parseFloat(prompt("ingresar precio del producto"))
let cuotas = parseInt(prompt("ingrese cantidad de meses que tiene de plazo"));
let meses = cuotas
const intereses = (5/100)
let precioTotal = (valorElectrodomestico * intereses) + (valorElectrodomestico)
precioTotal = precioTotal/cuotas
preciofinal = precioTotal * meses
alert (`el valor del producto es de: ${valorElectrodomestico} pesos
    pagando a ${cuotas} meses 
    pagara cuotas de ${precioTotal} pesos
    pagando en total ${preciofinal}`)
