import React from 'react'
import ListItem from './ListItem'
import _ from 'lodash'

const ItemList = ({dailRoutine,handelChange,onClicked}) => {
  return (
    <ul>
    {_.map(dailRoutine,(item) => (
    <ListItem
        item={item} 
        key = {item.id}
        handelChange={handelChange}
        onClicked={onClicked}
        />
))}
</ul>
  )
}

export default ItemList