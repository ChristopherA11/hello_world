import React, { useReducer } from 'react'

const initialState ={
    firstCount : 0,
    secondCount:10,
}
const reducer = (state,action) => {
   switch(action.type){
    case "increment":
        return {
            ...state,firstCount:state.firstCount + action.value
        }
    case "decrement":
        return {
           ...state, firstCount:state.firstCount - action.value
        }    
        case "incrementSecond":
            return {
                ...state,secondCount:state.secondCount + action.value
            }
        case "decrementSecond":
            return {
               ...state, secondCount:state.secondCount - action.value
            }    
    case "reset":
        return initialState
    default:
        return state        
   }
}
const CounterTwo = () => {
    const[count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <div>{count.firstCount}</div>
        <div>{count.secondCount}</div>
        <button onClick={() => dispatch({type:"increment",value:1})}>Increment</button>
        <button onClick={() => dispatch({type:"decrement",value:1})}>Decrement</button>
        <button onClick={() => dispatch({type:"increment",value:4})}>Increment4</button>
        <button onClick={() => dispatch({type:"decrement",value:4})}>Decrement4</button>
       <div>
       <button onClick={() => dispatch({type:"incrementSecond",value:1})}>Increment2</button>
        <button onClick={() => dispatch({type:"decrementSecond",value:1})}>Decrement2</button>
        <button onClick={() => dispatch({type:"reset"})}>Reset</button>
       </div> 
    </div>
  )
}

export default CounterTwo