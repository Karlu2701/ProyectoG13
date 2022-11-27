import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CrearCuenta from './componentes/CrearCuenta';
import Login from './componentes/Login';

function App(){
  return (
    <Router>
      <Routes>
        <Route path='/' ext element={<Login/>} />
        <Route path='/crear-cuenta' ext element={<CrearCuenta/>} />
      </Routes>
    </Router>
  );
}

export default App;