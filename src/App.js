import React, {  useEffect, useState } from 'react'
import Header from './Header'
// import Content from './Content'
import Footer from './Footer'
import AddList from './AddList'
// import Counter from './components/Counter'
// import List from './List'
import AddItem from './AddItem'
import SearchItem from './SearchItem'
import apiRequest from './apiRequest'
// import CounterOne from './components/CounterOne'


const App = () => {
//   const routine = [
//     {id:0, checked: true, item: "play"},
//     {id:1, checked: true, item: "travel"},
//     {id:2, checked: false, item: "read"},
// ]
   const API_URL = " http://localhost:3500/routine"
   const [dailRoutine,setDailRoutine] = useState([])
   const [newItem, setNewItem] = useState("")
   const [search, setSearch] = useState("")
   const [error,setError] = useState(null)
   const [loading, setLoading] = useState(true)
   

   useEffect(() => {
      const fetchItems = async() =>{
         try{
           const response = await fetch(API_URL)
           if (!response.ok) {
            throw Error("data not found")
           }
           const listItems = await response.json();
           console.log(listItems);
           setDailRoutine(listItems)
           setError(null)
         }
         catch (err){
            setError(err.message);
         }
         finally {
            setLoading(false)
         }
         }
         setTimeout(()=>{
            (async () => await fetchItems())()
      },1000)
   //  (async () => await fetchItems())()
   },[])

   const addItem = async (item) => {
      const id = dailRoutine.length ? dailRoutine[dailRoutine.length -1 ].id + 1 :1;
      const addNewItem = {id,checked:false,item}
      const listItem = [...dailRoutine,addNewItem]
      setDailRoutine(listItem)
      // localStorage.setItem("todo_list",JSON.stringify(listItem))
      const postOptions = {
         method: 'POST',
         headers:{
            'Content-Type':'application/json'
         },
         body:JSON.stringify(addNewItem)
      }
      const result = await apiRequest(API_URL,postOptions)
      if (result){
         setError(result)
      }
   }


   const handelChange = async(id) => {
      const dailyRoutine = dailRoutine.map((val) => val.id === id ? {...val,checked:!val.checked} : val)
      setDailRoutine(dailyRoutine)
      // localStorage.setItem("todo_list",JSON.stringify(dailyRoutine))
      const myItem = dailyRoutine.filter((item) => item.id === id)
      const updateOptions = {
         method: 'PATCH',
         headers:{
            'Content-Type':'application/json'
         },
         body:JSON.stringify({checked:myItem[0].checked})
      }
      const reqUrl = `${API_URL}/${id}`
      const result = await apiRequest(reqUrl,updateOptions)
      if (result){
         setError(result)
      }

}
   const onClicked = async (id) => {
      const dailyRoutine = dailRoutine.filter((val) => val.id !== id)
      setDailRoutine(dailyRoutine)
      // localStorage.setItem("todo_list",JSON.stringify(dailyRoutine))
      const deleteOptions = {method:"DELETE"}
      const reqUrl = `${API_URL}/${id}`
      const result = await apiRequest(reqUrl,deleteOptions)
      if (result){
         setError(result)
      }
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
         {/* <CounterOne /> */}
         {/* <Content /> */}
          {/* <Counter /> */}
          {/*<List/>*/}
            <SearchItem search={search} setSearch={setSearch} />
            <main>
               {loading && <p> loading Data...</p>}
               {error && <p>{`error:${error}`}</p>}
               {!loading && !error && <AddList
                  dailRoutine={dailRoutine.filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))}
                  handelChange={handelChange}
                  onClicked={onClicked}
               />}
            </main>
             <Footer
            length={dailRoutine.length}
         />
      </div>
    )
  }

export default App;
