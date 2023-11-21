import React, { useEffect, useState } from 'react'
import FruitItem from './FruitItem'

const Fruit = () => {
    const fruits = [
        {name:"mango", price: 50, kg:"1kg"},
        {name:"apple", price: 80, kg:"1kg"},
        {name:"grapes", price: 30, kg:"1kg"},
        {name:"orange", price: 50, kg:"1kg"},
    ]
    const [fruitItems,setFruitItems] = useState(fruits)
    const fruitTotal = fruitItems.reduce((accum,curr) => {
        return accum = curr["price"] + curr["kg"]
    },0)
    useEffect(()=>{

    },[])
    const onCatchChange = (value,index,key) =>{
        const changeTheFruitName = [...fruitItems]
        changeTheFruitName [key][index] = value
        setFruitItems(changeTheFruitName)
    }
   
    
  return (
    <div>Fruit
    {fruitItems.map((frruit,index) =>(
        <FruitItem frruit={frruit} index={index} onCatchChange={onCatchChange}/>
    ))}
    <div>fruitTotal:{fruitTotal}</div>
    </div>
  )
}

export default Fruit;   