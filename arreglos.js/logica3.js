let continentes = {
    "Asia": ["China", "India", "Japón", "Corea del Sur", "Indonesia"],
    "América": ["Brasil", "Estados Unidos", "México", "Argentina", "Canadá"],
    "Europa": ["Alemania", "Francia", "España", "Italia", "Reino Unido"],
    "África": ["Nigeria", "Egipto", "Sudáfrica", "Kenia", "Etiopía"],
    "Oceanía": ["Australia", "Nueva Zelanda", "Fiyi", "Papúa Nueva Guinea", "Samoa"]
};

let continente = prompt("Ingrese el nombre de un continente (Asia, América, Europa, África, Oceanía):");

if (continentes[continente]) {
    console.log("Cinco países de " + continente + ":");
    for (let i = 0; i < 5; i++) {
        console.log(continentes[continente][i]);
    }
} else {
    console.log("Continente no encontrado.");
}
