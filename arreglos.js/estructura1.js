let supermercado = {
    papa: 2.50,
    arroz: 1.80,
    lentejas: 3.20,
    aceite: 4.50
};

for (let producto in supermercado) {
    console.log(producto.charAt(0).toUpperCase() + producto.slice(1) + ": $" + supermercado[producto]);
}
