import React, { useState } from 'react'

const Content = () => {
  const [names,setNames] = useState("earn")
    const change = () => {
        const names = ["grow", "give", "earn"];
        const init = Math.floor(Math.random()*3);
        setNames( names[init])
    }

    const handelClick = (name) => {
      console.log(`${name}`);
    }
      const onClicked = (e) => {
      console.log(e.target);
    }
 
  return (
    <main>
    <div >let's {names} money</div>
    <button onClick={()=>handelClick("hello")}>Click Me</button>
    <button onClick={(e) => onClicked(e)}>Click</button>
    <button onClick={() => change()}>Cllick</button>
    </main>
  ) 

}

export default Content;