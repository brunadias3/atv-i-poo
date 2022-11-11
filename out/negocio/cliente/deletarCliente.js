"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const deletar_1 = __importDefault(require("../deletar"));
const listagemClientes_1 = __importDefault(require("./listagemClientes"));
class DeletarCliente extends deletar_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listaClientes() {
        let listaClientes = new listagemClientes_1.default(this.clientes);
        listaClientes.listar();
        let entrada = new entrada_1.default();
        let cpf = entrada.receberTexto("Informar o CPF do cliente que deseja excluir: ");
        let indice = this.clientes.findIndex(i => i.getCpf.getValor === cpf);
        this.clientes.splice(indice, 1);
        return;
    }
    deletar() {
        console.log(`\nInício da exclusão do cliente`);
        this.listaClientes();
        console.log("Cliente excluído!");
    }
}
exports.default = DeletarCliente;
