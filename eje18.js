class Persona {
    #edad;
    constructor(edad) {
      this.#edad = edad;
    }
    setEdad(edad) {
      if (edad > 0) {
        this.#edad = edad;
      } else {
        console.log('La edad debe ser un número positivo.');
      }
    }
    getEdad() {
      return this.#edad;
    }
  }
  class Empleado extends Persona {
    constructor(edad, puesto) {
      super(edad);
      this.puesto = puesto;
    }
  }
const empleado = new Empleado(30, 'Desarrollador');

