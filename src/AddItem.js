import React from 'react'
// import { FaPlus } from "react-icons/fa";
import { useRef } from 'react';

const AddItem = ({newItem,setNewItem,handelSubmit}) => {
  const inputRef = useRef()
  
 
  return (
    <form className='addForm' onSubmit={handelSubmit} >
        <label htmlFor="addItem">Add Item</label>
            <input 
                autoFocus
                id='addItem'
                ref={inputRef}
                type = "text"
                placeholder='add Item'
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />    
            <button
                type='submit'
                tabIndex="0"
                onClick={() => inputRef.current.focus()}
            >
                add
            </button>
    </form>
  )
}

export default AddItem