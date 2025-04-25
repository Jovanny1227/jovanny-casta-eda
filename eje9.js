class Empleado {
    trabajar() {
      console.log('El empleado está trabajando.');
    }
  }
  class Gerente extends Empleado {
    trabajar() {
      console.log('El gerente está supervisando el trabajo.');
    }
  }
const empleado = new Empleado();
const gerente = new Gerente();
empleado.trabajar(); 
gerente.trabajar();
  