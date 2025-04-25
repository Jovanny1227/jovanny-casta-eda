class Vehiculo {
    constructor(peso, velocidadMaxima) {
      this.peso = peso;
      this.velocidadMaxima = velocidadMaxima;
    }
    mover() {
      console.log('El vehículo se está moviendo.');
    }
  }
  class Carro extends Vehiculo {
    mover() {
      console.log('El carro está avanzando.');
    }
  }
  class Bicicleta extends Vehiculo {
    mover() {
      console.log('La bicicleta está pedaleando.');
    }
  }
const carro = new Carro(1200, 200);
const bicicleta = new Bicicleta(15, 30); 
carro.mover();     1 
bicicleta.mover(); 
  