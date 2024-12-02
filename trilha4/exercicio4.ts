interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    private livros: Livro[] = [];

    adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
    }
}

const biblioteca = new Biblioteca();
biblioteca.adicionarLivro({ titulo: "Livro 1", autor: "Autor 1", disponivel: true });
biblioteca.adicionarLivro({ titulo: "Livro 2", autor: "Autor 2", disponivel: false });
biblioteca.adicionarLivro({ titulo: "Livro 3", autor: "Autor 1", disponivel: true });

console.log(biblioteca.buscarLivrosDisponiveis());
