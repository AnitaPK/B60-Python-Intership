import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncreament = ()=>{
        setCount(count+1)
    }
    function handleDecreament(){
        setCount(count-1)
    }

  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={handleIncreament}>Increament</button>
      <button onClick={handleDecreament}>Decreament</button>
    </>
  )
}

export default Counter
