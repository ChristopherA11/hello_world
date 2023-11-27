import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";

const ListItem = ({item,handelChange,onClicked}) => {
  return (
    <li className='item' key = {item.id}>
    <input 
      type="checkbox"
      onChange={() => handelChange(item.id)}
      checked ={item.checked}
     />
     <label style={item.checked ? {textDecoration:"line-through"}:null}>
       {item.item}
     </label>
     <FaRegTrashAlt 
       role='button'
       onClick={() => onClicked(item.id)}
       tabIndex="0"
     />
  </li> 
  )
}

export default ListItem