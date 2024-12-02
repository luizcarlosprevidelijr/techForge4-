
abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
    constructor(private raio: number) {
        super();
    }

    calcularArea(): number {
        return Math.PI * this.raio * this.raio; 
    }
}

class Quadrado extends FiguraGeometrica {
    constructor(private lado: number) {
        super();
    }

    calcularArea(): number {
        return this.lado * this.lado; 
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(private base: number, private altura: number) {
        super();
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2; 
    }
}


function imprimirAreas(figuras: FiguraGeometrica[]): void {
    figuras.forEach(figura => {
        console.log(`Área: ${figura.calcularArea()}`);
    });
}

const circulo = new Circulo(5);
const quadrado = new Quadrado(4);
const triangulo = new Triangulo(6, 3);

const figuras: FiguraGeometrica[] = [circulo, quadrado, triangulo];

imprimirAreas(figuras);
