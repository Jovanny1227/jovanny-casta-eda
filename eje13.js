class Cliente {
    #saldo;
    constructor(saldo) {
      this.#saldo = saldo;
    }
    #calcularDescuento() {
      return this.#saldo * 0.1; 
    }
    aplicarDescuento() {
      const descuento = this.#calcularDescuento();
      this.#saldo -= descuento;
      console.log(`Descuento aplicado: $${descuento}. Saldo actual: $${this.#saldo}.`);
    }
  }
const cliente = new Cliente(1000);
cliente.aplicarDescuento();
  