import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = () => {
  const navivgate = useNavigate()

  function GotToPage(){
      navivgate('/ingredient')
  }

  return (
    <>
      <button className='custom_btn' onClick={GotToPage}>
        Click me to Read more
        </button>
    </>
  )
}

export default Button
