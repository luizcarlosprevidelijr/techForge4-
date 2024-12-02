abstract class Animal {
    private energia: number;

    constructor(energiaInicial: number) {
        this.energia = energiaInicial;
    }

    abstract comer(): void;

    statusEnergia(): void {
        console.log(`Energia atual: ${this.energia}`);
    }

    protected aumentarEnergia(quantidade: number): void {
        this.energia += quantidade;
    }

    protected gastarEnergia(quantidade: number): void {
        this.energia -= quantidade;
    }
}

class Leao extends Animal {
    constructor(energiaInicial: number) {
        super(energiaInicial);
    }

    comer(): void {
        console.log("Leão vai caçar...");
        this.gastarEnergia(10); 
        console.log("Leão caçou e recuperou energia.");
        this.aumentarEnergia(20); 
}

class Passaro extends Animal {
    constructor(energiaInicial: number) {
        super(energiaInicial);
    }

    comer(): void {
        console.log("Pássaro está se alimentando...");
        this.aumentarEnergia(15); 
    }
}

function exibirStatusEnergia(animal: Animal): void {
    animal.statusEnergia();
}

const leao = new Leao(50);
const passaro = new Passaro(30);
