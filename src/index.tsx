import React from 'react';
import ReactDOM from 'react-dom';
import Rotas from './componentes/rotas';
import App from './componentes/rotas';
import Roteador from './componentes/roteador';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Roteador />;
    <Rotas />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
