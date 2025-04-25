class Empleado {
    #nombre;
    #salario;
    constructor(nombre, salario) {
      this.#nombre = nombre;
      this.#salario = salario;
    }
    trabajar() {
      console.log(`${this.#nombre} está trabajando.`);
    }
    obtenerSalario() {
      return this.#salario;
    }
  }
const empleado = new Empleado('Ana', 3000);
empleado.trabajar();
console.log(empleado.obtenerSalario());
  