import React, { useState } from 'react'

const Counter = () => {
    const [counter,setCounter] = useState(1)

    const increment = () => {
        setCounter((prevCounter) => prevCounter + 1)
    }
    const decrement = () => {
        setCounter ((prevCounter) => prevCounter - 1);
    }
  return (
    <div className='counter'>
    <button data-testid="increment" onClick={increment}> + </button>
    <div data-testid = "counter">{counter}</div>
    <button data-testid = "decrement" onClick={decrement}> - </button>
    
    </div>
  )
}

export default Counter