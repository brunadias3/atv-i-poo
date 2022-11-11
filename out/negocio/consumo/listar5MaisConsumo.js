"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("../listagem"));
class Listar5MaisConsumo extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        let consumoQtd = [];
        this.clientes.forEach(cliente => {
            let cpf = cliente.getCpf.getValor;
            let nome = cliente.nome;
            let nomeSocial = cliente.nomeSocial;
            let consumoTotal = 0;
            // -- Produto --
            cliente.getProdutosConsumidos.forEach((produto) => {
                consumoTotal = consumoTotal + produto.getPreco;
            });
            // -- Servico --
            cliente.getServicosConsumidos.forEach((servico) => {
                consumoTotal = consumoTotal + servico.getPrecoServiço;
            });
            consumoQtd.push({
                nome: nome,
                cpf: cpf,
                nomeSocial: nomeSocial,
                quantidade: consumoTotal
            });
        });
        consumoQtd = consumoQtd.sort((a, b) => {
            return b.quantidade - a.quantidade;
        });
        consumoQtd = consumoQtd.slice(0, 5);
        console.log("Top 5 Clientes que mais consumiram (em valor): ");
        console.log("\n-------------------------------------------------------\n");
        consumoQtd.forEach((cliente) => {
            console.log("CPF: " + cliente.cpf);
            console.log("Nome do cliente: " + cliente.nome);
            console.log("Nome Social: " + cliente.nomeSocial);
            console.log(`Valor Consumido: R$ ${cliente.quantidade} reais`);
            console.log(`-----------------------------------`);
        });
    }
}
exports.default = Listar5MaisConsumo;
