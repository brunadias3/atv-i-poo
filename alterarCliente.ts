import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Telefone from "../../modelo/telefone";
import Alterar from "../alterar";
import ListagemClientes from "./listagemClientes";

export default class AlterarCliente extends Alterar {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public alterar(): void {
        console.log("\nAtualizar cadastro cliente:\n");

        const listaClientes = new ListagemClientes(this.clientes);
        listaClientes.listar();

        let cpf = this.entrada.receberTexto("Informe o CPF do cliente que deseja atualizar: ");

        // this.clientes.forEach(cliente => {
            if (cpf === cliente.getCpf.getValor) {
                var validacao = true
                while (validacao) {
                    console.log("\n-----------------------------------------------\n");
                    console.log("\n Dados para atualização: \n");
                    console.log("\n 1 - Nome \n");
                    console.log("\n 2 - Nome Social \n");
                    console.log("\n 0 - sair \n");
                    console.log("\n-----------------------------------------------\n");

                    let dado_entrada = new Entrada()
                    let opcao = dado_entrada.receberNumero("\n Informa a opção que deseja atualizar: \n")

                    switch (opcao) {
                        case 1:
                            let nome = this.entrada.receberTexto("\n Informe o nome do cliente: \n");
                            cliente.nome = nome;
                            ("\n Dado atualizado com sucesso! \n");
                            ("\n-----------------------------------------------\n");
                            break;

                        case 2:
                            let nomeSocial = this.entrada.receberTexto("\n Informe o nome social do cliente: \n");
                            cliente.nomeSocial = nomeSocial;
                            ("\n Dado atualizado com sucesso! \n");
                            ("\n-----------------------------------------------\n");
                            break;

                        case 0:
                            validacao = false;
                            console.log("\n\ saindo \n");

                        default:
                            console.log("\n Para realizar a atualização informe uma opção válida\n");
                            break;
                    }
                }
        // }})
            
    }
}



