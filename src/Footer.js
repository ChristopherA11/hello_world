import React from 'react'

const Footer = ({length}) => {
  
  return (
    <footer>{length}  {length < 2 ? "list" : "lists"}</footer>
  )
}

export default Footer