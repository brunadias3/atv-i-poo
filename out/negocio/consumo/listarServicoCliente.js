"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const listagem_1 = __importDefault(require("../listagem"));
;
class ListarServicoCliente extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    listar() {
        const nome = this.entrada.receberTexto('Informe o nome do cliente: ');
        let cliente = this.clientes.find((cli) => cli.nome === nome);
        cliente === null || cliente === void 0 ? void 0 : cliente.getServicosConsumidos.forEach((servico) => {
            console.log(`Serviço: ${servico.nome} Preço: ${servico.preco}`);
        });
        cliente === null || cliente === void 0 ? void 0 : cliente.getProdutosConsumidos.forEach((produto) => {
            console.log(`Produto: ${produto.nome} Preço: ${produto.preco}`);
        });
    }
}
exports.default = ListarServicoCliente;
