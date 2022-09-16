import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import AlterarCliente from "../negocio/cliente/alterarCliente";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import cadastroProduto from "../negocio/produto/cadastroProduto";
import DeletarCliente from "../negocio/cliente/deletarCliente";
import ListagemClientes from "../negocio/cliente/listagemClientes";
import ListagemProdutos from "../negocio/produto/listagemProduto";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar produto`);
    console.log(`4 - Listar todos os produtos`);
    console.log(`5 - Excluir cliente`);
    console.log(`6 - Alterar Cliente`)
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let cadastroProdutin = new cadastroProduto(empresa.getProdutos)
            cadastroProdutin.cadastrar()
            break;
        case 4:
            let listagemProd = new ListagemProdutos(empresa.getProdutos)
            listagemProd.listar()
            break;
        case 5:
            let deleteCliente = new DeletarCliente(empresa.getClientes);
            deleteCliente.deletar()
            break;
        case 6:
            let alterarCliente = new AlterarCliente(empresa.getClientes);
            alterarCliente.alterar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}