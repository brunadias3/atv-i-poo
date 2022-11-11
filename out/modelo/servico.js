"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Servico {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    get getNomeServiço() {
        return this.nome;
    }
    get getPrecoServiço() {
        return this.preco;
    }
}
exports.default = Servico;
