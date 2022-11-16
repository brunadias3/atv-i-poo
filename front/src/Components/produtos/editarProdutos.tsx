import React, {Component} from "react";
import BarraNavegacao from "../barraNavegacao";
import "../../Css/clientes.css"
import { Link } from "react-router-dom";
class EditarProduto extends Component{
    editarProduto = (e:any) => {
        e.preventDefault();
        console.log("oi")
        var string = window.location.href;
        const id = string.substring(window.location.href.indexOf("id=") + 3, string.length);
        var nome = document.getElementById("nome") as HTMLInputElement;
        var preco = document.getElementById("preco") as HTMLInputElement;
        
        var dados ={
            Id: id,
            Nome:  nome.value,
            Preco: parseFloat(preco.value.replace(",", ".")),
            
        }

        fetch("/editarProduto", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dados)
        }).then((res)=> res.json()).then((data)=>{
            alert(data.mensagem)
            
        })
        
    }
    loadData = () => {
        
        var string = window.location.href;
        const id = string.substring(window.location.href.indexOf("id=") + 3, string.length);
        var nome = document.getElementById("nome") as HTMLInputElement;
        var preco = document.getElementById("preco") as HTMLInputElement;
        fetch("/buscarProduto"+ "?id=" + id,  {
            method: "GET",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
          
        }).then((res)=> res.json()).then((data)=>{
            nome.value = data.Nome;
            preco.value = data.Preco;
            
        })
        
    }
    componentDidMount() {
        this.loadData();
    }
   
    
    render(){
        var botoes = [{valor: "CLIENTES", link:"/Clientes"}, {valor: "SERVIÇOS", link:"/servicos"},{valor: "PRODUTOS", link:"/produtos"} ]
        let barraNavegacao = <BarraNavegacao  tema="purple accent-4" botoes={botoes} />;
        return(
            <div>
               {barraNavegacao}
              
               <div className="container">
                    <div className="row">
                        <div className="col s12 ">
                            <div className="card ">
                                <div className="card-content ">
                                <h1 className="card-title">EDITAR PRODUTOS</h1>
                                <hr></hr>
                                <div className="card-body">
                                    <div className="row">
                                        <form className="col s12">
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <p>Nome</p>
                                            <input placeholder="" id="nome" type="text" className="validate"/>
                                            
                                            </div>
                                            
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <p>Preco</p>
                                            <input placeholder="" id="preco" type="text" className="validate"/>
                                            
                                            </div>
                                            
                                        </div>
                                       
                                        <div className="row">
                                            <div className=" col s12">
                                            <button className="btn " id="voltar" onClick={(e)=>{e.preventDefault(); window.location.href = "/produtos"}} > 
                                            Voltar
                                            </button>
                                            <button className="btn float" id="editar" onClick={this.editarProduto}> Editar</button>
                                            </div>
                                        </div>
                                    
                                        </form>
                                    </div>
                                
                                </div>
                                </div>
                            </div>
                        </div>
                
                    </div>
                </div>
            </div>
           
        )
        
    }
    
}
export default EditarProduto;