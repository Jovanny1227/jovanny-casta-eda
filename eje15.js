class Animal {
    hacerSonido() {
      console.log('El animal hace un sonido.');
    }
  }
  class Perro extends Animal {
    hacerSonido() {
      console.log('El perro dice: ¡Guau!');
    }
  }
  class Gato extends Animal {
    hacerSonido() {
      console.log('El gato dice: ¡Miau!');
    }
  }  
const perro = new Perro();
const gato = new Gato();
perro.hacerSonido();
gato.hacerSonido();
