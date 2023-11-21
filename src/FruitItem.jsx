import React from 'react'

const FruitItem = (props) => {
    const {frruit,index,onCatchChange} = props
  return (
    <div key = {index}>
    <div>
    name:
    <input 
    value = {frruit.name}
    onChange={(e) => onCatchChange(e.target.value,index,"name")}
    />
    </div>
    <div>
    price:
    <input 
    value = {frruit.price}
    onChange={(e) => onCatchChange(e.target.value,index,"price")}
    />
    </div>
    <div>
    kg:
    <input 
    value = {frruit.kg}
    onChange={(e) => onCatchChange(e.target.value,index,"kg")}
    />
    </div>
    </div>
  )
}

export default FruitItem