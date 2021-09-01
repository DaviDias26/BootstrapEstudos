import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.css'
import Cadastro from './pages/cadastro'
import Checkout from './pages/checkout'
import Petshop from './pages/petshop'
import Home from './pages/home'
import Sidebar from './components/sidebar'

ReactDOM.render(
  <React.StrictMode>
    <Sidebar />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

