import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';


function App() {

  const [rojo, setRojo] = useState(100);
  const [verde, setVerde] = useState(100);
  const [azul, setAzul] = useState(100);

  let backgroundColor = {
         background: `rgb(${rojo},${verde},${azul})`,
  }

  return (
    <div className="App">
      <header className="App-header" style={backgroundColor}>
        <img src={logo} className="App-logo" alt="logo" />

        <>
            <div style={{display:"flex", alignItems:"center"}}>
                <p>Rojo: {rojo}</p>
                <button style={{height: "30px"}} onClick={() => setRojo(rojo + 5)}>+</button>
                <button style={{height: "30px"}} onClick={() => setRojo(rojo - 5)}>-</button>
            </div>
            <div style={{display:"flex", alignItems:"center"}}>
                <p>Verde: {verde}</p>
                <button style={{height: "30px"}} onClick={() => setVerde(verde + 5)}>+</button>
                <button style={{height: "30px"}} onClick={() => setVerde(verde - 5)}>-</button>
            </div>
            <div style={{display:"flex", alignItems:"center"}}>
                <p>Azul: {azul}</p>
                <button style={{height: "30px"}} onClick={() => setAzul(azul + 5)}>+</button>
                <button style={{height: "30px"}} onClick={() => setAzul(azul - 5)}>-</button>
            </div>
        </>
      </header>
    </div>
  );
}

export default App;
