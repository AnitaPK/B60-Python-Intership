import React from 'react'

const Button = (props) => {
    console.log(props.btnValue)
  return (
    <>
     <button >{props.btnValue}</button> 
    </>
  )
}

export default Button
