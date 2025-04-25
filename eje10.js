class InstrumentoMusical {
    tocar() {
      throw new Error('El método tocar() debe ser implementado en las clases hijas');
    }
  }
  class Guitarra extends InstrumentoMusical {
    tocar() {
      console.log('La guitarra está sonando.');
    }
  }
  class Piano extends InstrumentoMusical {
    tocar() {
      console.log('El piano está tocando.');
    }
  }
const guitarra = new Guitarra();
const piano = new Piano();
guitarra.tocar(); 
piano.tocar();  
  