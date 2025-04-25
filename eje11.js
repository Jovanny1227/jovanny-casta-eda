class Vehiculo {
    #modelo;
    constructor(marca, modelo) {
      this.marca = marca;
      this.#modelo = modelo;
    }
    #encenderMotor() {
      console.log('Motor encendido.');
    }
    arrancar() {
      this.#encenderMotor();
      console.log(`El vehículo ${this.marca} modelo ${this.#modelo} está en marcha.`);
    }
  }
const vehiculo = new Vehiculo('Toyota', 'Corolla');
vehiculo.arrancar();
  