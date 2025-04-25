class Empleado {
    static totalEmpleados = 0;
    constructor(nombre) {
      this.nombre = nombre;
      Empleado.totalEmpleados++;
    }
  }
  class Gerente extends Empleado {
    constructor(nombre) {
      super(nombre);
    }
  }
const empleado1 = new Empleado('Juan');
const empleado2 = new Empleado('Ana');
const gerente1 = new Gerente('Carlos');
console.log(Empleado.totalEmpleados);
  