import React, { useEffect } from 'react'
import Header from './Header'
// import Content from './Content'
import Footer from './Footer'
import AddList from './AddList'
// import Counter from './components/Counter'
// import List from './List'
import { useState } from 'react'
import AddItem from './AddItem'
import ListItem from './ListItem'
import SearchItem from './SearchItem'

const App = () => {
  const routine = [
    {id:0, checked: true, item: "play"},
    {id:1, checked: true, item: "travel"},
    {id:2, checked: false, item: "read"},
]
   const [dailRoutine,setDailRoutine] = useState(routine)
   const [newItem, setNewItem] = useState("")
   const [search, setSearch] = useState("")

   useEffect(()=>{
      console.log("render");
   },[])

   const addItem = (item) => {
      const id = dailRoutine.length ? dailRoutine[dailRoutine.length -1 ].id + 1 :1;
      const addNewItem = {id,checked:false,item}
      const listItem = [...dailRoutine,addNewItem]
      setDailRoutine(listItem)
      localStorage.setItem("todo_list",JSON.stringify(ListItem))
   }

   const handelChange = (id) => {
      const dailyRoutine = dailRoutine.map((val) => val.id === id ? {...val,checked:!val.checked} : val)
      setDailRoutine(dailyRoutine)
      localStorage.setItem("todo_list",JSON.stringify(dailyRoutine))
}
   const onClicked =(id) => {
      const dailyRoutine = dailRoutine.filter((val) => val.id !== id)
      setDailRoutine(dailyRoutine)
      localStorage.setItem("todo_list",JSON.stringify(dailyRoutine))
}
const handelSubmit =(e) => {
  e.preventDefault()
   if (!newItem) return;
   // console.log(newItem);
   addItem(newItem)
   setNewItem("")
}
    return (
      <div className='App'>
         <Header title="Heading"/>
         <AddItem
            newItem={newItem}
            setNewItem={setNewItem}
            handelSubmit={handelSubmit}
         />
         <SearchItem 
         search={search}
         setSearch={setSearch}/>
         {/*<Content />*/}
          {/*<Counter />*/}
          {/*<List/>*/}
          <AddList
            dailRoutine={dailRoutine.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
            handelChange={handelChange}
            onClicked={onClicked}
          />
         
         <Footer
            length={dailRoutine.length}
         />
      </div>
    )
  }

export default App;
