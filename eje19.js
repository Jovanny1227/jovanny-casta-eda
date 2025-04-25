class CuentaBancaria {
    #saldo;
    constructor(saldoInicial) {
      this.#saldo = saldoInicial;
    }
    #actualizarSaldo(cambio) {
      this.#saldo += cambio;
    }
    depositar(monto) {
      if (monto > 0) {
        this.#actualizarSaldo(monto);
        console.log(`Depósito exitoso. Saldo actual: $${this.#saldo}`);
      } else {
        console.log('El monto a depositar debe ser positivo.');
      }
    }
    retirar(monto) {
      if (monto > 0 && monto <= this.#saldo) {
        this.#actualizarSaldo(-monto);
        console.log(`Retiro exitoso. Saldo actual: $${this.#saldo}`);
      } else {
        console.log('Saldo insuficiente o monto inválido.');
      }
    }
    obtenerSaldo() {
      return this.#saldo;
    }
  }
const cuenta = new CuentaBancaria(1000);
cuenta.depositar(500); 
cuenta.retirar(200);   
console.log(cuenta.obtenerSaldo()); 
  