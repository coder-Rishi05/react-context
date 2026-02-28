import React from 'react'
import Card from './Card'

const Body = ({count,setCount}) => {
  return (
    <div>
      This is body page : {count}
      <Card count={count} setCount={setCount} />
    </div>
  )
}

export default Body
