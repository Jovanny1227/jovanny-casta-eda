class Persona {
    constructor(nombre) {
      this.nombre = nombre;
    }
    caminar() {
      console.log(`${this.nombre} está caminando.`);
    }
  }
const persona1 = new Persona('Carlos');
persona1.caminar();
  