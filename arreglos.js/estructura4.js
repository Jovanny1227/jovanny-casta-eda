let numeros = {
    "dos": 2,
    "cinco": 5,
    "siete": 7,
    "cuarenta": 40,
    "cincuenta": 50
};

for (let clave in numeros) {
    if (numeros[clave] % 2 === 0) {
        console.log(clave + ": " + numeros[clave] + " es par");
    }
}
