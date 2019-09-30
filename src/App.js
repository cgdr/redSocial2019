import React from 'react';
import './App.css';
import './style.css';
import InicioUsuario from './components/Ingreso Usuario';
import Registrar from './components/Ingreso Usuario/Registrar/index';

import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" exact component={InicioUsuario}></Route>
      <Route path="/registrar" component={Registrar}></Route>
    </Router>
  );
}

export default App;
