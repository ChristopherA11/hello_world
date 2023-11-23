import React from 'react'
import { TbTrash } from "react-icons/tb";

const LineItem = ({item,onClicked,handelChange}) => {
  return (
    <div>
    <li className='item' key ={item.id}>
    <input 
      type="checkbox"
      checked={item.checked}
      onChange={() =>handelChange(item.id)}
       />
       <label style= {(item.checked) ? {textDecoration:"line-through"}:null}>{item.item}</label>
       <TbTrash 
       role='button'
       onClick={()=> onClicked(item.id)}
       tabIndex="0"/>
       
  </li>
    </div>
  )
}

export default LineItem