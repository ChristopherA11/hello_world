// import React, { useState } from 'react'
import { TbTrash } from "react-icons/tb";


const AddList = ({dailRoutine,handelChange,onClicked}) => {
    // const routine = [
    //     {id:0, checked: true, item: "play"},
    //     {id:1, checked: true, item: "travel"},
    //     {id:2, checked: false, item: "read"},
    // ]
		// const [dailRoutine,setDailRoutine] = useState(routine)
    // const handelChange = (id) => {
    //    const dailyRoutine = dailRoutine.map((val) => val.id === id ? {...val,checked:!val.checked} : val)
		// 	 setDailRoutine(dailyRoutine)
		// }
		// const onClicked =(id) => {
		// 	const dailyRoutine = dailRoutine.filter((val) => val.id !== id)
		// 	setDailRoutine(dailyRoutine)
		// }

  return (
   <main>
	 {(dailRoutine.length) ? (
	   <ul>
		   {dailRoutine.map((item) => (
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
	))}
		</ul>
	): (<p>Empty List</p>)}
	 </main>
  )
			}

export default AddList