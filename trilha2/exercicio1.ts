class ContaBancaria {
    titular: string; 
    saldo: number; 

    constructor(titular: string, saldo: number = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor: number): void {
        this.saldo += valor > 0 ? valor : 0;  

    sacar(valor: number): void {
        this.saldo -= valor > 0 && valor <= this.saldo ? valor : 0;  
    }

    obterSaldo(): number {
        return this.saldo;
    }
}

let conta = new ContaBancaria("João", 1000);  
conta.depositar(500); 
conta.sacar(200);
console.log("Saldo final:", conta.obterSaldo());
