import React from 'react';
// import './Rotas.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import CadastrarProduto from './cadastroProduto';
import FormularioCadastroCliente from './formularioCadastroCliente';
import ContainedButtons from './home';
import ListaCliente from './listaCliente';
import { Link } from "react-router-dom";
import ListaProduto from './listaProduto';



function Rotas() {
  
  return (
    <div className="Rotas">
      <Router>
        <div className="content">
          <Routes>
            <Link to={'/formularioCadastroProduto'} className="collection-item pointer">Cadastrar Produto</Link>
            <Route path="/home" element={<ContainedButtons tema="purple lighten-4" />} />
            <Route path="/formularioCadastroCliente" element={<FormularioCadastroCliente tema="purple lighten-4"/>} />
            <Route path="/listaCliente" element={<ListaCliente tema="purple lighten-4" />} />
            <Route path="/listarProduto" element={<ListaProduto tema="purple lighten-4" />} />
            <Route path="/formularioCadastroProduto" element={<CadastrarProduto tema="purple lighten-4" />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default Rotas;