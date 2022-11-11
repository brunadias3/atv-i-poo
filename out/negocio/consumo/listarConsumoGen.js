"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("../listagem"));
class ListarConsumoGen extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        let filtrado;
        let feminino;
        // -- Filtro por Gênero --
        filtrado = this.clientes.reduce((acc, cur) => {
            cur.getProdutosConsumidos.forEach(p => {
                if (acc[cur.genero][`produto_${p.getNome}`]) {
                    acc[cur.genero][`produto_${p.getNome}`].qtd++;
                }
                else {
                    acc[cur.genero][`produto_${p.getNome}`] = { qtd: 1, nome: p.getNome };
                }
            });
            cur.getServicosConsumidos.forEach(s => {
                if (acc[cur.genero][`servico_${s.nome}`]) {
                    acc[cur.genero][`servico_${s.nome}`].qtd++;
                }
                else {
                    acc[cur.genero][`servico_${s.nome}`] = { qtd: 1, nome: s.getNomeServiço };
                }
            });
            return acc;
        }, { M: {}, F: {} });
        let ordenadoM = Object.keys(filtrado.M).map(k => {
            const [tipo, nome] = k.split("_");
            return { tipo, qtd: filtrado.M[k].qtd, nome: filtrado.M[k].nome };
        }).sort((a, b) => b.qtd - a.qtd).slice(0, 3);
        let ordenadoF = Object.keys(filtrado.F).map(k => {
            const [tipo, nome] = k.split("_");
            return { tipo, qtd: filtrado.F[k].qtd, nome: filtrado.F[k].nome };
        }).sort((a, b) => b.qtd - a.qtd).slice(0, 3);
        console.log(`Listagem dos serviços ou produtos mais consumidos por gênero`);
        console.log(`\n--------------------------------------\n`);
        console.log(`Masculino`);
        ordenadoM.forEach((items, index) => {
            console.log(`${index + 1}°`);
            console.log(`Nome do ${items.tipo}: ${items.nome}`);
            console.log(`Quantidade Consumido: ${items.qtd}\n`);
        });
        console.log(`\n--------------------------------------\n`);
        console.log(`Feminino`);
        ordenadoF.forEach((items, index) => {
            console.log(`${index + 1}°`);
            console.log(`Nome do ${items.tipo}: ${items.nome}`);
            console.log(`Quantidade Consumido: ${items.qtd}\n`);
        });
        console.log(`\n--------------------------------------\n`);
    }
}
exports.default = ListarConsumoGen;
