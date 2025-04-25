class Coche {
    #encenderMotor() {
      console.log('Motor encendido.');
    }
    conducir() {
      this.#encenderMotor();
      console.log('El coche está en movimiento.');
    }
  }
const miCoche = new Coche();
miCoche.conducir();
  