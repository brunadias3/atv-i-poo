"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const deletar_1 = __importDefault(require("../deletar"));
class DeletarProduto extends deletar_1.default {
    constructor(produto) {
        super();
        this.produtos = produto;
        this.entrada = new entrada_1.default();
    }
    deletar() {
        console.log(`\nInício da exclusão do produto`);
        if (this.produtos.length == 0)
            return console.log(`\nNão há produtos cadastrados`);
        let nome = this.entrada.receberTexto("Insira o nome do produto:");
        let indice = this.produtos.findIndex(n => n.nome === nome);
        while (indice == -1) {
            nome = this.entrada.receberTexto("Produto não encontrado, por favor insira o nome do produto novamente:");
            indice = this.produtos.findIndex(n => n.nome === nome);
        }
        let produto = this.produtos[indice];
        let resposta = this.entrada.receberTexto(`Confirma a exclusão do produto: ${produto.nome}, com o valor de ${produto.preco}?(s/n)`);
        let respostaCorreta = false;
        if (resposta == "s" || resposta == "n") {
            respostaCorreta = true;
        }
        while (!respostaCorreta) {
            resposta = this.entrada.receberTexto(`Confirma a exclusão do produto: ${produto.nome}, com o valor de ${produto.preco}?(s/n)`);
            if (resposta == "s" || resposta == "n") {
                respostaCorreta = true;
            }
        }
        if (resposta == "s") {
            this.produtos.splice(indice, 1);
            console.log("Exclusão realizada com sucesso!");
        }
        else {
            console.log("Ok, exclusão não realizada.");
        }
    }
}
exports.default = DeletarProduto;
