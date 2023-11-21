import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const price = 50;
  const [qty,setQty] = useState(1)
  useEffect(() => {

  },[])

  const onClick = () => {
    setQty (qty + 1)
  }
 
  // const handleClick =() => {
  //   setQty (qty - 1)
  // }
  return (
    <div className="App">
      <header className="App-header">
      
      <div>price: {price}</div>
      <div>qty: {qty}</div>
      <div>total: {qty * price}</div><br/>
       <button onClick={onClick}>Increment</button><br/>
     
      </header>
    </div>
  );
}

export default App;
