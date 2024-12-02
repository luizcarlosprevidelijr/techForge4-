class Livro {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;

    constructor(titulo: string, autor: string, paginas: number, lido: boolean = false) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }

    marcarComoLido(): void {
        this.lido = true;
        console.log(`O livro "${this.titulo}" foi marcado como lido.`);
    }
}

let livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1216);
livro1.marcarComoLido();

