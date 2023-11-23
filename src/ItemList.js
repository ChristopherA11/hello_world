import React from 'react'

import LineItem from './LineItem';

const ItemList = ({dailRoutine,handelChange,onClicked}) => {
  return (
    
    <ul>
    {dailRoutine.map((item) => (
        <LineItem 
          item = {item}
        //   key = {item.id}
          handelChange={handelChange}
          onClicked={onClicked}
          />
))}
 </ul>
  )
}

export default ItemList