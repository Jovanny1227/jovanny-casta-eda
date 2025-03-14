
let usuarios = {};
function registrarUsuario() {
    let documento = prompt("Ingrese su documento de identidad:");
    let nombres = prompt("Ingrese sus nombres:");
    let apellidos = prompt("Ingrese sus apellidos:");
    let edad = prompt("Ingrese su edad:");
    let peso = prompt("Ingrese su peso:");
    let estatura = prompt("Ingrese su estatura:");

    usuarios[documento] = {
        nombres: nombres,
        apellidos: apellidos,
        edad: edad,
        peso: peso,
        estatura: estatura
    };

    alert("Registro exitoso.");
}

function consultarRegistro() {
    let documento = prompt("Ingrese su documento para consultar su registro:");

    if (usuarios[documento]) {
        let usuario = usuarios[documento];
        alert(`Registro de usuario:
        Nombres: ${usuario.nombres}
        Apellidos: ${usuario.apellidos}
        Edad: ${usuario.edad}
        Peso: ${usuario.peso}
        Estatura: ${usuario.estatura}`);
    } else {
        alert("No se encontró un registro para ese documento.");
    }
}

function menu() {
    let opcion = prompt("Seleccione una opción:\n1. Registrar usuario\n2. Consultar registro\n3. Salir");

    while (opcion !== "3") {
        if (opcion === "1") {
            registrarUsuario();
        } else if (opcion === "2") {
            consultarRegistro();
        } else {
            alert("Opción no válida. Intente de nuevo.");
        }
        opcion = prompt("Seleccione una opción:\n1. Registrar usuario\n2. Consultar registro\n3. Salir");
    }

    alert("Sistema cerrado.");
}
menu();

