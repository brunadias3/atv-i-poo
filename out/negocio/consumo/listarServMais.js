"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("../listagem"));
class ListarServMais extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        let cliServico = [];
        // Map quantidade serviços mais consumidos
        this.clientes.map(cli => {
            cli.getServicosConsumidos.forEach(serv => {
                let nome = serv.getNomeServiço;
                let qtd = cliServico[serv.getNomeServiço] = (cliServico[serv.getNomeServiço] || 0) + 1;
                cliServico.push({
                    nome: nome,
                    quantidade: qtd
                });
            });
        });
        let ordenado = cliServico.sort((a, b) => {
            return b.quantidade - a.quantidade;
        }).slice(0, 1);
        console.log(`\nServiço mais consumido`);
        console.log("-------------------------------------------------------");
        ordenado.forEach((consumidos) => {
            console.log(`Nome: ${consumidos.nome}`);
            console.log(`Quantidade consumida: ${consumidos.quantidade}`);
            console.log();
        });
    }
}
exports.default = ListarServMais;
