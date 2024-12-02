class Temperatura {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    paraFahrenheit(): number {
        return (this.valor * 9/5) + 32;
    }

    paraKelvin(): number {
        return this.valor + 273.15;
    }

    exibirTemperaturas(): void {
        console.log(`${this.valor}°C é equivalente a:`);
        console.log(`${this.paraFahrenheit().toFixed(2)}°F`);  // Temperatura em Fahrenheit
        console.log(`${this.paraKelvin().toFixed(2)}K`);  // Temperatura em Kelvin
    }
}
