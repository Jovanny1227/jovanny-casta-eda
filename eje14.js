class Producto {
    #precio;
    constructor(precio) {
      this.#precio = precio;
    }
    setPrecio(nuevoPrecio) {
      if (nuevoPrecio > 0) {
        this.#precio = nuevoPrecio;
      } else {
        console.log('El precio debe ser mayor que 0.');
      }
    }
    getPrecio() {
      return this.#precio;
    }
  }  
const producto = new Producto(100);
console.log(producto.getPrecio());
producto.setPrecio(150);
console.log(producto.getPrecio()); 
producto.setPrecio(-50);
  