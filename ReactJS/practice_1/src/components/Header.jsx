import React from 'react'
import hImage from '../assets/headerImage.jpg'
const Header = () => {
  return (
    <>
       <h1 className="headingOne">Tinder cococnut with Chocolate Icecream</h1>
    <img src={hImage} alt="Img not show" className="headerImage" />
    </>
  )
}

export default Header
