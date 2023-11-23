import React from 'react'
import Header from './Header'
// import Content from './Content'
import Footer from './Footer'
import AddList from './AddList'
// import Counter from './components/Counter'
// import List from './List'
import { useState } from 'react'


const App = () => {
  const routine = [
    {id:0, checked: true, item: "play"},
    {id:1, checked: true, item: "travel"},
    {id:2, checked: false, item: "read"},
]
const [dailRoutine,setDailRoutine] = useState(routine)
const handelChange = (id) => {
   const dailyRoutine = dailRoutine.map((val) => val.id === id ? {...val,checked:!val.checked} : val)
   setDailRoutine(dailyRoutine)
}
const onClicked =(id) => {
  const dailyRoutine = dailRoutine.filter((val) => val.id !== id)
  setDailRoutine(dailyRoutine)
}
    return (
      <div className='App'>
         <Header title="Props"/>
      {/*<Content />*/}
         {/* <Counter /> */}
         {/* <List /> */}
         <AddList 
         dailRoutine={dailRoutine}
          handelChange={handelChange}
          onClicked={onClicked}/>
         <Footer
          length={dailRoutine.length}
         />
      </div>
    )
  }

export default App;
