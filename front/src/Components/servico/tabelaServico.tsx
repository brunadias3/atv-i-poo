import React, {Component} from "react";
import { Link } from "react-router-dom";
import BarraNavegacao from "../barraNavegacao";
import "../../Css/clientesIndex.css"
type props = {
    servico:Array<any>,
    
}
function TabelasServico (props:props) {
    function gerarTr() {
        if (props.servico.length <= 0) {
            return <></>
        } else {
            let lista = props.servico.map( (n) =>
            <tr id={n.Id}>
            <td>{n.Nome}</td>
            <td>{n.Preco}</td>
            
            <td className="center">
                <Link className="" to="/editarServico"> 
                    <i className=" botaoMedium small material-icons">create</i> 
                </Link>
                <Link className="" to="/cadastrarCliente"> 
                    <i className=" botaoMedium small material-icons">delete</i> 
                </Link>
               
                
            </td>
        </tr>
            )
            return lista
        }
    }
        return(
                <div className="row" >
                <div className="col s12" >
                <table className="striped responsive-table">
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        
                        <th className="center">Ações</th>
                    </tr>
                    </thead>

                    <tbody>
                        {gerarTr()}
                  
                    </tbody>
                </table>
                </div>
            </div> 
        )

    }
export default TabelasServico;