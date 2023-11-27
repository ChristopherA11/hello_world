import React, { useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import _ from 'lodash';

const List = () => {
    const routine = [
        {id:0, checked: true, item: "play"},
        {id:1, checked: true, item: "travel"},
        {id:2, checked: false, item: "read"},
    ]
    const [itemss, setItems] = useState(routine)

    const handelCheck = (id) => {
      const listRoutine = itemss.map((item) => item.id === id ? {...item,checked:!item.checked} : item)
      setItems(listRoutine)
      localStorage.setItem("dailRoutine",JSON.stringify(listRoutine))
    }
    const onClick = (id) => {
      const listRoutines = itemss.filter((item) => item.id !== id )
      setItems(listRoutines)
    }
  return (
      <main>
       <ul>
           {_.map(itemss,(item) => (
              <li className='item' key = {item.id}>
                <input 
                  type="checkbox"
                  onChange={() => handelCheck(item.id)}
                  checked ={item.checked}
                 />
                 <label>
                   {item.item}
                 </label>
                 <FaRegTrashAlt 
                   role='button'
                   onClick={() => onClick(item.id)}
                   tabIndex="0"
                 />
              </li> 
  ))}
     </ul>
     </main>
  )
}

export default List