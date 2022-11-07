import { Component, JSXElementConstructor, Key, ReactElement, ReactFragment } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import { Link } from "react-router-dom";
import '../Css/barraNavegacao.css';
import logo from "../Img/WB.png"

type props = {
    tema: string,
    botoes:Array<any>,
}

export default function BarraNavegacao(props:props) {
    
    function componentDidMount() {
            let elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems)

            let select = document.querySelectorAll('.select');
            M.FormSelect.init(select)
        
    }

    function gerarListaBotoes() {
        if (props.botoes.length <= 0) {
            return <></>
        } else {
            let lista = props.botoes.map( (n:any) =>
                <li key={n.valor} className="botoes">
                     <Link className="botoes" to={n.link}>{n.valor}</Link>
                </li>
            )
            return lista
        }
    }

    return (
        // const estilo = `${props.tema}`
            <>
            
                <nav className={props.tema} style={{"height":80}} >
                    <div className="nav-wrapper" style={{"padding":10}}>
                        <Link  to="/"className="brand-logo" >
                        <img  width="70"src={logo} alt="WB" />
                                
                        </Link>
                        <a data-target="mobile-menu" className="sidenav-trigger"><i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            {gerarListaBotoes()}
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-menu">
                    {gerarListaBotoes()}
                </ul>
              
            </>
        )
}