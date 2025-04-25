/*CREAR UN PROGRAMA PARA LA GESTION DE INVENTARIO DE STOCK DE VIDEOJUEGOS
EL SISTEMA DEBE TENER UNA CLASE INVENTARIO PARA GESTIONARLO
UNA CLASE ADMIN QUE USE LA CLASE INVENTARIO*/
class Inventario {
    #videojuegos;
    constructor() {
        this.#videojuegos = [];
    }
    listarVideojuegos() {
        this.#videojuegos.forEach((juego, index) => {
            console.log(`${index + 1}. Nombre: ${juego.nombre}, Cantidad: ${juego.cantidad}, Precio: $${juego.precio}, Plataforma: ${juego.plataforma}`);     
        });
    }

    obtenerVideojuegos() {
        return this.#videojuegos;
    }

    agregarVideojuego(videojuego) {
        this.#videojuegos.push(videojuego);  
    }

    buscarNombreVideojuego(nombre) {
        return this.#videojuegos.find(juego => juego.nombre === nombre);
    }

    eliminarVideojuegoPorNombre(nombre) {
        const indice = this.#videojuegos.findIndex(juego => juego.nombre === nombre);
        if (indice !== -1) {
            const videojuegoEliminado = this.#videojuegos.splice(indice, 1)[0];
            console.log(`'${videojuegoEliminado.nombre}' se ha eliminado del inventario.`);
        } else {
            console.log(`No se encontró el videojuego con el nombre de '${nombre}'.`);
        }
    }
    actualizarVideojuegoPorIndice(indice, nuevaInformacion) {
        if (indice >= 0 && indice < this.#videojuegos.length) {
            this.#videojuegos[indice] = { ...this.#videojuegos[indice], ...nuevaInformacion };
        } else {
            console.log("El indice es inválido no se puede actualizar.");
        }
    }
}
class Admin {
    constructor(inventario) {
        this.inventario = inventario;
    }
    agregarNuevoVideojuego(nombre, cantidad, precio, plataforma) {
        const nuevoJuego = { nombre, cantidad, precio, plataforma };
        this.inventario.agregarVideojuego(nuevoJuego);
    }
    mostrarInventario() {
        this.inventario.listarVideojuegos();
    }
    actualizarVideojuegoPorIndiceAdmin(indice, nuevaInformacion) {
        this.inventario.actualizarVideojuegoPorIndice(indice, nuevaInformacion);
        const juegos = this.inventario.obtenerVideojuegos();
        if (juegos[indice]) {
            const j = juegos[indice];
            console.log(`Actualizado: Nombre: ${j.nombre}, Cantidad: ${j.cantidad}, Precio: $${j.precio}, Plataforma: ${j.plataforma}`);
        } else {
            console.log("No se encontró el videojuego en ese índice.");
        }
    }
    eliminarVideojuego(nombre) {
        this.inventario.eliminarVideojuegoPorNombre(nombre);
    }
    buscarVideojuego(nombre) {
        const juego = this.inventario.buscarNombreVideojuego(nombre);
        if (juego) {
            console.log(`Se busco: ${juego.nombre}, Cantidad: ${juego.cantidad}, Precio: $${juego.precio}, Plataforma: ${juego.plataforma}`);
        } else {
            console.log(`Juego '${nombre}' no encontrado.`);
        }
    }
}
const inventario = new Inventario();
const admin = new Admin(inventario);
admin.agregarNuevoVideojuego("Minecraft", 15, 30, "PC");
admin.agregarNuevoVideojuego("God of War", 5, 60, "PS5");
admin.agregarNuevoVideojuego("Zelda", 10, 70, "Switch");
admin.agregarNuevoVideojuego("spider-man 2", 3, 50, "PS5 y PC")
admin.mostrarInventario();
admin.actualizarVideojuegoPorIndiceAdmin(1, { plataforma: "PSP", cantidad: 10 });
admin.mostrarInventario();
admin.buscarVideojuego("Minecraft");
admin.buscarVideojuego("spider-man2"); 
admin.eliminarVideojuego("Zelda");
admin.eliminarVideojuego("Minecraft")
admin.mostrarInventario(); 
