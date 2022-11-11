"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    get getPreco() {
        return this.preco;
    }
    get getNome() {
        return this.nome;
    }
}
exports.default = Produto;
