"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const cliente_1 = __importDefault(require("../../modelo/cliente"));
const cpf_1 = __importDefault(require("../../modelo/cpf"));
const alterar_1 = __importDefault(require("../alterar"));
class AlterarCliente extends alterar_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    alterar() {
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente para alterar: `);
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);
        let indice = this.clientes.findIndex(i => i.nome === nome);
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/');
        let ano = new Number(partesData[2].valueOf()).valueOf();
        let mes = new Number(partesData[1].valueOf()).valueOf();
        let dia = new Number(partesData[0].valueOf()).valueOf();
        let dataEmissao = new Date(ano, mes, dia);
        let cpf = new cpf_1.default(valor, dataEmissao);
        let genero = this.entrada.receberTexto(`Qual genero (F-Feminino) (M-Masculino): `);
        if (indice != -1) {
            let novoNome = this.entrada.receberTexto(`Por favor informe o NOVO nome: `);
            let cliente = new cliente_1.default(novoNome, nomeSocial, cpf, genero);
            this.clientes[indice] = cliente;
        }
        console.log(`\nAlterado com sucesso!\n`);
    }
}
exports.default = AlterarCliente;
