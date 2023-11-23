// import React, { useState } from 'react'

import ItemList from "./ItemList";


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
	   <ItemList
		  dailRoutine={dailRoutine}
			handelChange={handelChange}
			onClicked={onClicked}
			/>
	): (<p>Empty List</p>)}
	 </main>
  )
			}

export default AddList