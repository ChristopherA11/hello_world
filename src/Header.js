import React from 'react'

const Header = ({title}) => {
    
  return (
    <header>
    <div>{title}</div>
    </header>
  )
}
Header.defaultProps = {
  title:"Do To List"
}
export default Header