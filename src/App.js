import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const price = 50;
  const [qty,setQty] = useState(1)

  const onClick = () => {
    setQty (qty +1)
  }
  return (
    <div className="App">
      <header className="App-header">
       <div>price:{price}</div>
       <div>qty: {qty}</div>
       <div>total:{qty * price}</div>
       <button onClick={onClick}>Increment</button>
      </header>
    </div>
  );
}

export default App;
