class Escuela {
    static numEstudiantes = 0;
  }
  class Estudiante {
    constructor(nombre) {
      this.nombre = nombre;
      Escuela.numEstudiantes++;
    }
  }  
const estudiante1 = new Estudiante('Juan');
const estudiante2 = new Estudiante('Ana');
console.log(Escuela.numEstudiantes); 
  