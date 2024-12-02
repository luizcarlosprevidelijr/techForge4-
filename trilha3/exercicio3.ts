abstract class Pagamento {
    abstract processar(): void;
}

class PagamentoCartao extends Pagamento {
    constructor(private numeroCartao: string, private valor: number) {
        super();
    }

    private validarCartao(): boolean {
        return this.numeroCartao.length === 16;
    }

    processar(): void {
        if (this.validarCartao()) {
            console.log(`Pagamento de R$ ${this.valor} processado no cartão de crédito: ${this.numeroCartao}`);
        } else {
            console.log("Erro: Número do cartão inválido.");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    constructor(private valor: number) {
        super();
    }

    private gerarCodigoBoleto(): string {
        return Math.random().toString(36).substring(2, 10).toUpperCase();
    }

    processar(): void {
        const codigoBoleto = this.gerarCodigoBoleto();
        console.log(`Pagamento de R$ ${this.valor} processado via boleto. Código do boleto: ${codigoBoleto}`);
    }
}

function processarPagamento(pagamento: Pagamento): void {
    pagamento.processar();
}

const pagamentoCartao = new PagamentoCartao("1234567812345678", 150.0);
const pagamentoBoleto = new PagamentoBoleto(200.0);

processarPagamento(pagamentoCartao); 
processarPagamento(pagamentoBoleto);