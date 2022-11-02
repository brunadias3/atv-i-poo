import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import ContainedButtons from "./home";
import CadastrarProduto from "./cadastroProduto";
import ListaProduto from "./listaProduto";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Home'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-4" botoes={['Home','Clientes', 'Cadastro Cliente', 'Cadastro Produto', 'Produtos']} />
        if (this.state.tela === 'Home') {
            return (
                <>
                    {barraNavegacao}
                    <ContainedButtons tema="purple lighten-4"/>
                </>
            )
        }
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="purple lighten-4" />
                </>
            )
        } if (this.state.tela === 'Cadastro Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </>
            )
        } 

        if (this.state.tela === 'Cadastro Produto') {
            return (
                <>
                    {barraNavegacao}
                    <CadastrarProduto tema="purple lighten-4" />
                </>
            )
        }

        if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="purple lighten-4" />
                </>
            )
        }

    }
}