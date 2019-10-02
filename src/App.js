import React from 'react';
import './App.css';
import './style.css';
import InicioUsuario from './components/Ingreso Usuario';
import TimeLine from './components/TimeLine';

import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" exact component={InicioUsuario}></Route>
      <Route path="/timeline" component={TimeLine}></Route>
    </Router>
  );
}

export default App;
