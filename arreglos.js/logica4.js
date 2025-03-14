let citas = {
    12345678: {nombre: "Juan Pérez", cita: "Lunes 10:00 AM", fecha: "2025-03-15"},
    23456789: {nombre: "Ana Gómez", cita: "Martes 12:00 PM", fecha: "2025-03-16"},
    34567890: {nombre: "Carlos Martínez", cita: "Miércoles 9:00 AM", fecha: "2025-03-17"},
    45678901: {nombre: "Maria López", cita: "Jueves 11:00 AM", fecha: "2025-03-18"},
    56789012: {nombre: "Pedro Sánchez", cita: "Viernes 2:00 PM", fecha: "2025-03-19"}
};

let documento = prompt("Ingrese su número de documento para consultar su cita:");

if (citas[documento]) {
    let usuario = citas[documento];
    console.log(`Hola ${usuario.nombre}, su cita es el ${usuario.cita} del ${usuario.fecha}.`);

    let cambio = prompt("¿Desea cambiar el día o la fecha de su cita? (si/no)").toLowerCase();

    if (cambio === "si") {
        let nuevoDia = prompt("Ingrese el nuevo día de su cita (por ejemplo, Lunes, Martes, etc.):");
        let nuevaHora = prompt("Ingrese la nueva hora de su cita (por ejemplo, 10:00 AM):");
        let nuevaFecha = prompt("Ingrese la nueva fecha de su cita (por ejemplo, 2025-03-20):");

        citas[documento].cita = `${nuevoDia} ${nuevaHora}`;
        citas[documento].fecha = nuevaFecha;

        console.log(`Su cita ha sido cambiada con éxito. Nueva cita: ${citas[documento].cita} del ${citas[documento].fecha}.`);
    } else {
        console.log("No se realizó ningún cambio en su cita.");
    }
} else {
    console.log("No se encontró una cita para ese documento.");
}
