let persona = { edad: 20, peso: 75, nombre: "Pedro", apellidos: "Pérez Pérez"};
for (let clave in persona) {
    persona.peso = 77;
    persona["edad"] = 21;
    delete persona["apellidos"];
    console.log(clave + ": " + persona[clave]);
}
