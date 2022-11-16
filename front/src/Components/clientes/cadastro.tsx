import React, {Component} from "react";
import BarraNavegacao from "../barraNavegacao";
import "../../Css/clientes.css"
class Cadastro extends Component{

    
    cadastrarUsuario = (e:any) => {
        e.preventDefault();
        console.log("oi")
        var nome = document.getElementById("nome") as HTMLInputElement;
        var nomeSocial = document.getElementById("nomeSocial") as HTMLInputElement;
        var genero = document.getElementById("sexo") as HTMLSelectElement
        var cpf =  document.getElementById("cpf") as HTMLInputElement;
        var rg = document.getElementById("rg") as HTMLInputElement;
        var ddd = document.getElementById("ddd") as HTMLInputElement;
        var telefone = document.getElementById("telefone") as HTMLInputElement;
        
        var dados ={
            Nome:  nome.value,
            NomeSocial: nomeSocial.value,
            Genero: genero.value,
            Cpf: cpf.value,
            Rg: rg.value,
            DDD: ddd.value,
            Telefone: telefone.value 
        }

        fetch("/cadastroCliente", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dados)
        }).then((res)=> res.json()).then((data)=>{
            alert(data.mensagem)
            
        })
        
    }
    
    // componentDidMount()  {
    //         let select = document.querySelectorAll('.select');
    //         M.FormSelect.init(select)
    // }
    
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
                                <h1 className="card-title">CADASTRAR CLIENTE</h1>
                                <hr></hr>
                                <div className="card-body">
                                    <div className="row">
                                        <form className="col s12">
                                        <div className="row">
                                            <div className="input-field col s12">
                                            <input placeholder="" id="nome" type="text" className="validate"/>
                                            <label htmlFor="nome">Nome</label>
                                            </div>
                                            
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                            <input placeholder="" id="nomeSocial" type="text" className="validate"/>
                                            <label htmlFor="nomeSocial">Nome Social</label>
                                            </div>
                                            
                                        </div>
                                        <div className="row">
                                        <div className="input-field col s12">
                                            <select id="sexo" className="select">
                                            <option value="" disabled selected>Selecione..</option>
                                            <option className="option"value="1">Masculino</option>
                                            <option className="option" value="2">Feminino</option>
                                            </select>
                                            <label htmlFor="sexo">Gênero</label>
                                        </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="input-field col s12">
                                            <input id="cpf" type="text" className="validate" maxLength={11}/>
                                            <label htmlFor="cpf">Cpf</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                            <input id="rg" type="text" className="validate" maxLength={9} />
                                            <label htmlFor="rg">Rg</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s3">
                                            <input id="ddd" type="text" className="validate" maxLength={3}/>
                                            <label htmlFor="ddd">DDD</label>
                                            </div>

                                            <div className="input-field col s9">
                                            <input id="telefone" type="text" className="validate" maxLength={9}/>
                                            <label htmlFor="telefone">Telefone</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className=" col s12">
                                            <button className="btn " id="voltar" onClick={(e)=>{e.preventDefault(); window.location.href = "/Clientes"}} > 
                                            Voltar
                                           
                                            </button>
                                            <button onClick={this.cadastrarUsuario} className="btn float" id="cadastrar"> Cadastrar</button>
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
export default Cadastro;