"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(nome, nomeSocial, cpf, genero) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.genero = genero;
        this.rgs = [];
        this.dataCadastro = new Date();
        this.telefones = [];
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
    }
    get getCpf() {
        return this.cpf;
    }
    get getRgs() {
        return this.rgs;
    }
    get getDataCadastro() {
        return this.dataCadastro;
    }
    get getTelefones() {
        return this.telefones;
    }
    get getProdutosConsumidos() {
        return this.produtosConsumidos;
    }
    get getServicosConsumidos() {
        return this.servicosConsumidos;
    }
    addServicos(servico) {
        if (!servico) {
            console.log("Serviço Não Encotrado!");
        }
        else {
            this.servicosConsumidos.push(servico);
            console.log('Serviço Adicionado!');
        }
    }
    addProduto(produto) {
        if (!produto) {
            console.log("Produto Não Encontrado!");
        }
        else {
            this.produtosConsumidos.push(produto);
            console.log("Produto Adicionado!");
        }
    }
    addRg(rg) {
        this.rgs.push(rg);
    }
    addTel(telefone) {
        this.telefones.push(telefone);
    }
}
exports.default = Cliente;
