import React from 'react'

const Content = () => {
    const change = () => {
        const names = ["grow", "give", "earn"];
        const init = Math.floor(Math.random()*3);
        return names[init]
    }

  return (
    <div>Content
    <div>let's {change()} money</div>
    </div>
  )
}

export default Content