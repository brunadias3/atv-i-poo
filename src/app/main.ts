import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import AlterarCliente from "../negocio/cliente/alterarCliente";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import cadastroProduto from "../negocio/produto/cadastroProduto";
import DeletarCliente from "../negocio/cliente/deletarCliente";
import ListagemClientes from "../negocio/cliente/listagemClientes";
import ListagemProdutos from "../negocio/produto/listagemProduto";
import alterarProduto from "../negocio/produto/alterarProduto";
import DeletarProduto from "../negocio/produto/deletarProduto";
import CadastroServico from "../negocio/servico/cadastroServico";
import AlterarServico from "../negocio/servico/alterarServico";
import DeletarServico from "../negocio/servico/deletarServico";
import ListarServicos from "../negocio/servico/listarServico";
import ConsumoCliente from "../negocio/consumo/consumoCliente";
import ListagemGenero from "../negocio/listarGenero";
import Listar5MaisConsumo from "../negocio/consumo/listar5MaisConsumo";
import ListarConsumoGen from "../negocio/consumo/listarConsumoGen";
import ListaMaiorConsumo from "../negocio/consumo/listarMaiorConsumo";
import ListaMenorConsumo from "../negocio/consumo/listarMenorConsumo";
import ProdMaisConsumido from "../negocio/consumo/prodMaisConsumido";
import ListarServMais from "../negocio/consumo/listarServMais";
import Cliente from "../modelo/cliente";
import Telefone from "../modelo/telefone";
import CPF from "../modelo/cpf";
import Servico from "../modelo/servico";
import RG from "../modelo/rg";
import Produto from "../modelo/produto";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

let c1 = new Cliente('Bruna', 'Bruninha',new CPF('45554554555',new Date()),'F');
let c2 = new Cliente('Samira', 'Samirinha',new CPF('22222222',new Date()),'F');
let c3 = new Cliente('Everton', 'Evert',new CPF('7985464987',new Date()),'M');
let c4 = new Cliente('Kendall', 'jenner',new CPF('123215566',new Date()),'F');
let c5 = new Cliente('Alisson', 'Ali',new CPF('622122311',new Date()),'M');
let c6 = new Cliente('Gabriel', 'Biel',new CPF('155151515',new Date()),'M');
let c7 = new Cliente('Lucas', 'Luc',new CPF('12',new Date()),'M');
let c8 = new Cliente('Luiz', 'Lu',new CPF('13',new Date()),'M');
let c9 = new Cliente('Julianne', 'Ju',new CPF('14',new Date()),'F');
let c10 = new Cliente('Madelyn', 'Ma',new CPF('15',new Date()),'F');
let c11 = new Cliente('Livia', 'Liv',new CPF('16',new Date()),'F');
let c12 = new Cliente('Kate', 'Kat',new CPF('17',new Date()),'F');
let c13 = new Cliente('Mayara', 'Maya',new CPF('18',new Date()),'F');
let c14 = new Cliente('Leticia', 'Let',new CPF('19',new Date()),'F');
let c15 = new Cliente('Gabriela', 'Gabi',new CPF('20',new Date()),'F');
let c16 = new Cliente('Gisele', 'Gi',new CPF('21',new Date()),'F');
let c17 = new Cliente('Maria', 'Ma',new CPF('22',new Date()),'F');
let c18 = new Cliente('Fernanda', 'Fe',new CPF('23',new Date()),'F');
let c19 = new Cliente('Julia', 'Ju',new CPF('24',new Date()),'F');
let c20 = new Cliente('Estefani', 'Ester',new CPF('25',new Date()),'F');
let c21 = new Cliente('Patricia', 'Pat',new CPF('26',new Date()),'F');
let c22 = new Cliente('Leonardo', 'Leo',new CPF('27',new Date()),'M');
let c23 = new Cliente('Tiago', 'Ti',new CPF('28',new Date()),'M');
let c24 = new Cliente('Elon', 'Musk',new CPF('29',new Date()),'M');
let c25 = new Cliente('Antonio', 'Antoni',new CPF('30',new Date()),'M');
let c26 = new Cliente('Marcelo', 'Marcelin',new CPF('31',new Date()),'M');
let c27 = new Cliente('Icaro', 'Ica',new CPF('32',new Date()),'M');
let c28 = new Cliente('Igor', 'Ig',new CPF('33',new Date()),'M');
let c29 = new Cliente('Pedro', 'Ped',new CPF('34',new Date()),'M');
let c30 = new Cliente('Ramon', 'Ram',new CPF('35',new Date()),'M');


let s1 = new Servico('Unha',15);
let s2 = new Servico('Limpeza',50);
let s3 = new Servico('Sobrancelha',60);
let s4 = new Servico('Corte',20);
let s5 = new Servico('Maquiagem',70);
let s6 = new Servico('Pedicure',40);
let s7 = new Servico('Botox',80);
let s8 = new Servico('Preenchimento',45);
let s9 = new Servico('Cílios',60);
let s10 = new Servico('Depilação',25);

let p1 = new Produto('Xampu',20);
let p2 = new Produto('Esmalte',15);
let p3 = new Produto('Camisa',30);
let p4 = new Produto('Cera',35);
let p5 = new Produto('Rímel',80);
let p6 = new Produto('Secador',200);
let p7 = new Produto('Demaquilante',60);
let p8 = new Produto('Acetona',40);
let p9 = new Produto('Batom',25);
let p10 = new Produto('Pente',10);

c1.addProduto(p1)
c1.addProduto(p1)
c1.addProduto(p2)
c1.addProduto(p9)
c1.addServicos(s6);
c1.addServicos(s10)
c1.addServicos(s3)

c2.addProduto(p3)
c2.addProduto(p4)
c2.addProduto(p10)
c2.addProduto(p5)
c2.addServicos(s1)
c2.addServicos(s2)

c3.addProduto(p6)
c3.addProduto(p7)
c3.addProduto(p8)
c3.addProduto(p8)
c3.addServicos(s1)
c3.addServicos(s5)
c3.addServicos(s5)

c5.addProduto(p5)
c5.addProduto(p8)
c5.addProduto(p10)
c5.addServicos(s1)
c5.addServicos(s10)
c5.addServicos(s2)

c10.addServicos(s10)
c10.addServicos(s3)
c10.addProduto(p2)

c29.addProduto(p1)
c29.addProduto(p7)
c29.addProduto(p8)
c29.addServicos(s5)

empresa.getClientes.push(c1);
empresa.getClientes.push(c2);
empresa.getClientes.push(c3);
empresa.getClientes.push(c4);
empresa.getClientes.push(c5);
empresa.getClientes.push(c6);
empresa.getClientes.push(c7);
empresa.getClientes.push(c8);
empresa.getClientes.push(c9);
empresa.getClientes.push(c10);
empresa.getClientes.push(c11);
empresa.getClientes.push(c12);
empresa.getClientes.push(c13);
empresa.getClientes.push(c14);
empresa.getClientes.push(c15);
empresa.getClientes.push(c16);
empresa.getClientes.push(c17);
empresa.getClientes.push(c18);
empresa.getClientes.push(c19);
empresa.getClientes.push(c20);
empresa.getClientes.push(c21);
empresa.getClientes.push(c22);
empresa.getClientes.push(c23);
empresa.getClientes.push(c24);
empresa.getClientes.push(c25);
empresa.getClientes.push(c26);
empresa.getClientes.push(c27);
empresa.getClientes.push(c28);
empresa.getClientes.push(c29);
empresa.getClientes.push(c30);


empresa.getServicos.push(s1);
empresa.getServicos.push(s2);
empresa.getServicos.push(s3);
empresa.getServicos.push(s4);
empresa.getServicos.push(s5);
empresa.getServicos.push(s6);
empresa.getServicos.push(s7);
empresa.getServicos.push(s8);
empresa.getServicos.push(s9);
empresa.getServicos.push(s10);

empresa.getProdutos.push(p1);
empresa.getProdutos.push(p2);
empresa.getProdutos.push(p3);
empresa.getProdutos.push(p4);
empresa.getProdutos.push(p5);
empresa.getProdutos.push(p6);
empresa.getProdutos.push(p7);
empresa.getProdutos.push(p8);
empresa.getProdutos.push(p9);
empresa.getProdutos.push(p10);

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 -  Cadastrar cliente`);
    console.log(`2 -  Alterar cliente`);
    console.log(`3 -  Excluir Cliente`);
    console.log(`4 -  Listar todos os clientes`);
    console.log(`5 -  Cadastrar produto`);
    console.log(`6 -  Alterar produto`);
    console.log(`7 -  Excluir produto`);
    console.log(`8 -  Listar todos os produtos`);
    console.log(`9 -  Cadastrar serviços`);
    console.log(`10 - Editar Serviços: `);
    console.log(`11 - Excluir Serviço: `);
    console.log(`12 - Listar todos os serviços`);
    console.log(`13 - Adicionar Serviços/Produtos`);
    console.log(`13 - Editar Produtos`);
    console.log(`14 - Listar clientes por gênero`);
    console.log(`15 - Listar 5 mais em valor`);
    console.log(`16 - Listar consumo por gênero`);
    console.log(`17 - Listar 10 mais em quantidade`);
    console.log(`18 - Listar 10 menos em quantidade`);
    console.log(`19 - Listar produto mais consumido`);
    console.log(`20 - Listar serviço mais consumido`);

    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let alterarCliente = new AlterarCliente(empresa.getClientes);
            alterarCliente.alterar()
            break;
        case 3:
            let deletarCliente = new DeletarCliente(empresa.getClientes);
            deletarCliente.deletar()
            break;
        case 4:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 5:
            let cadastroProdutin = new cadastroProduto(empresa.getProdutos)
            cadastroProdutin.cadastrar()
            break;
        case 6:
            let alterarProdutin = new alterarProduto(empresa.getProdutos)
            alterarProdutin.alterar()
            break;
        case 7:
            let deletarProdutin = new DeletarProduto(empresa.getProdutos)
            deletarProdutin.deletar()
            break;
        case 8:
            let listagemProd = new ListagemProdutos(empresa.getProdutos)
            listagemProd.listar()
            break;
        case 9:
                let servico = new CadastroServico(empresa.getServicos)
                servico.cadastrar()
                break;
        case 10:
            let editarServico = new AlterarServico(empresa.getServicos)
            editarServico.alterar();
            break;
        case 11:
            let deletaServico = new DeletarServico(empresa.getServicos)
            deletaServico.deletar();
            break;
        case 12:
            let listagemServico = new ListarServicos(empresa.getServicos)
            listagemServico.listar()
            break;
        case 13:
            let consumoCliente = new ConsumoCliente(empresa)
            consumoCliente.cadastrar();
            break;
        case 14:
            let listarGenero = new ListagemGenero(empresa.getClientes)
            listarGenero.listar();
            break;
        case 15:
            let listar5Mais = new Listar5MaisConsumo(empresa.getClientes)
            listar5Mais.listar();
            break;
        case 16:
            let listarConsumoGen = new ListarConsumoGen(empresa.getClientes)
            listarConsumoGen.listar();
            break;
        case 17:
            let listar10Mais = new ListaMaiorConsumo(empresa.getClientes)
            listar10Mais.listar();
            break;
        case 18:
            let listar10Menos = new ListaMenorConsumo(empresa.getClientes)
            listar10Menos.listar();
            break;
        case 19:
            let listarProdMais = new ProdMaisConsumido(empresa.getClientes)
            listarProdMais.listar();
            break;
        case 20:
            let listarServMais = new ListarServMais(empresa.getClientes)
            listarServMais.listar();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        
        default:
            console.log(`Operação não entendida :(`)
    }
}