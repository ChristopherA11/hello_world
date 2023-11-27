import React from 'react'
import ItemList from './ItemList'
import _ from 'lodash'


const AddList = ({dailRoutine,handelChange,onClicked}) => {
  
  return (
    <main>
    {!_.isEmpty(dailRoutine) ? (
       <ItemList
       dailRoutine={dailRoutine}
       handelChange={handelChange}
       onClicked={onClicked}
       />
  ): (
      <p>List Items Empty</p>
    )}
  </main>
  )
}

export default AddList