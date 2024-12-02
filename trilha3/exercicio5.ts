abstract class Funcionario {
    constructor(
        private nome: string,
        private salario: number
    ) {}

    getNome(): string {
        return this.nome;
    }

    getSalario(): number {
        return this.salario;
    }

    abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }

    calcularBonus(): number {
        return this.getSalario() * 0.10;
    }
}

class Operario extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }

    calcularBonus(): number {
        return this.getSalario() * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        const bonus = funcionario.calcularBonus();
        const salarioFinal = funcionario.getSalario() + bonus;
        console.log(`${funcionario.getNome()} - Salário com bônus: R$ ${salarioFinal.toFixed(2)}`);
    });
}

const gerente = new Gerente("Carlos", 5000);
const operario = new Operario("João", 2000);

const funcionarios: Funcionario[] = [gerente, operario];

calcularSalarioComBonus(funcionarios);
