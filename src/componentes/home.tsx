import * as React from 'react';
import { Component } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Roteador from './roteador';

type props = {
  tema: string,
}

export default class ContainedButtons extends Component<props> {
  render() {
    return (
      <div>
        <h1>Cliente</h1>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" href="#listaCliente">Consultar Clientes</Button>
          <Button variant="contained" href="#formularioCadastroCliente">Cadastrar Clientes</Button>
          <Button variant="contained" href="#deleteCliente">Deletar Clientes</Button>
          <Button variant="contained" href="#alterarCliente">Alterar Clientes</Button>
        </Stack>
        <br></br><br></br><br></br>
        <hr></hr>
        <br></br>
        <h1>Produto</h1>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" href="#listarProduto">Consultar Produtos</Button>
          <Button variant="contained" href="#formularioCadastroProduto">Cadastrar Produtos</Button>
          <Button variant="contained" href="#deleteProduto">Deletar Produtos</Button>
          <Button variant="contained" href="#alterarProduto">Alterar Produtos</Button>
        </Stack>
      </div>
    )
  };
}
