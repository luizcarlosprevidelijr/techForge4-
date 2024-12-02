interface Produto {
    id: number;
    nome: string;
    preco: number;
}

class ItemLoja implements Produto {
    constructor(
        public id: number,
        public nome: string,
        public preco: number
    ) {}
}

const item1 = new ItemLoja(1, "Camiseta", 50.0);
const item2 = new ItemLoja(2, "Tênis", 200.0);

console.log(item1);
console.log(item2);
