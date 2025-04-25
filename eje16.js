class Vehiculo {
    mover() {
      console.log('El vehículo se está moviendo.');
    }
  }
  class Coche extends Vehiculo {
    mover() {
      console.log('El coche está acelerando.');
    }
  } 
  class Bicicleta extends Vehiculo {
    mover() {
      console.log('La bicicleta está pedaleando.');
   }
  }
const coche = new Coche();
const bicicleta = new Bicicleta(); 
coche.mover();       
bicicleta.mover();    
