class CuentaBancaria {
    #saldo;
    constructor(saldoInicial) {
      this.#saldo = saldoInicial;
    }
    depositar(monto) {
      if (monto > 0) this.#saldo += monto;
    }
    retirar(monto) {
      if (monto > 0 && monto <= this.#saldo) this.#saldo -= monto;
    }
    obtenerSaldo() {
      return this.#saldo;
    }
  }
const cuenta = new CuentaBancaria(1000);
cuenta.depositar(500);
cuenta.retirar(300);
console.log(cuenta.obtenerSaldo());
  