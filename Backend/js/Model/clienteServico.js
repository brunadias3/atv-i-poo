"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexao_1 = __importDefault(require("../Conexao/conexao"));
const sequelize = require("Sequelize");
var ClienteServico = conexao_1.default.define("clienteServicos", {
    IdServico: {
        type: sequelize.INTEGER,
    },
    IdCliente: {
        type: sequelize.INTEGER
    },
    Genero: {
        type: sequelize.INTEGER
    },
    Nome: {
        type: sequelize.STRING
    },
    Preco: {
        type: sequelize.REAL(6, 2)
    },
    NomeCliente: {
        type: sequelize.STRING
    }
});
ClienteServico.removeAttribute('id');
exports.default = ClienteServico;
