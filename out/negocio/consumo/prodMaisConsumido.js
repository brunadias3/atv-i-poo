"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("../listagem"));
class ProdMaisConsumido extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        let cliProd = [];
        // Map traz quantidade produtos mais consumidos
        this.clientes.map(cli => {
            cli.getProdutosConsumidos.forEach(prod => {
                let nome = prod.getNome;
                let qtd = cliProd[prod.getNome] = (cliProd[prod.getNome] || 0) + 1;
                cliProd.push({
                    nome: nome,
                    quantidade: qtd
                });
            });
        });
        let ordenado = cliProd.sort((a, b) => {
            return b.quantidade - a.quantidade;
        }).slice(0, 1);
        console.log(`\nProduto mais consumido`);
        console.log("-------------------------------------------------------");
        ordenado.forEach((consumidos) => {
            console.log(`Nome: ${consumidos.nome}`);
            console.log(`Quantidade consumida: ${consumidos.quantidade}`);
            console.log();
        });
    }
}
exports.default = ProdMaisConsumido;
