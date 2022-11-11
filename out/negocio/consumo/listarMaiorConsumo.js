"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("../listagem"));
class ListaMaiorConsumo extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        let nome, cpf, consumoTotal, ordenacao;
        let qtdConsumido = [];
        this.clientes.forEach(cliente => {
            nome = cliente.nome;
            cpf = cliente.getCpf.getValor;
            consumoTotal = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
            qtdConsumido.push({
                nome: nome,
                cpf: cpf,
                quantidade: consumoTotal,
            });
        });
        ordenacao = qtdConsumido.sort((x, y) => {
            return y.quantidade - x.quantidade;
        });
        ordenacao = ordenacao.slice(0, 10);
        console.log("Listagem dos 10 Clientes que MAIS consumiram produtos ou servicos em quantidade.");
        console.log(`\n--------------------------------------\n`);
        ordenacao.forEach(cliente => {
            console.log(`Nome do Cliente: ${cliente.nome}`);
            console.log(`CPF do Cliente: ${cliente.cpf}`);
            console.log(`Quantidade de produtos e servicos Consumido pelo Cliente: ${cliente.quantidade}`);
            console.log(`\n--------------------------------------\n`);
        });
    }
}
exports.default = ListaMaiorConsumo;
