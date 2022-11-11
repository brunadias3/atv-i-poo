"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const produto_1 = __importDefault(require("../../modelo/produto"));
const alterar_1 = __importDefault(require("../alterar"));
class alterarProduto extends alterar_1.default {
    constructor(produtos) {
        super();
        this.produtos = produtos;
        this.entrada = new entrada_1.default();
    }
    alterar() {
        if (this.produtos.length == 0)
            return console.log(`\nNão há produtos cadastrados`);
        console.log(`\nInício da alteração do  produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        let indice = this.produtos.findIndex(i => i.nome === nome);
        while (indice == -1) {
            nome = this.entrada.receberTexto(`Por favor informe o novamente o nome do produto: `);
            indice = this.produtos.findIndex(i => i.nome === nome);
        }
        let novoNome = this.entrada.receberTexto(`Por favor informe o novo nome do produto: `);
        let preco = this.entrada.receberNumero(`Por favor informe o novo preco do produto: `);
        let produto = new produto_1.default(novoNome, preco);
        this.produtos[indice] = produto;
        console.log(`\nProduto alterado com sucesso:)\n`);
    }
}
exports.default = alterarProduto;
