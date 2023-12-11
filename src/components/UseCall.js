import React, { memo } from 'react'

const UseCall = memo(({increment}) => {
    
  return (
    <div>UseCall
    <button  onClick={increment}> + </button>
    </div>
  )
})

export default UseCall