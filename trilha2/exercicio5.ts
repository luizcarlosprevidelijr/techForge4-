class Agenda {
    compromissos: string[] = []; 

    adicionarCompromisso(compromisso: string): void {
        this.compromissos.push(compromisso);
    }

    listarCompromissos(): void {
        console.log(this.compromissos.length === 0 ? "Agenda vazia." : this.compromissos.join("\n"));
    }
}
