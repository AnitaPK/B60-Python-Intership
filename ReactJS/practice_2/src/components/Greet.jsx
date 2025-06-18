import React from 'react'

const Greet = ({empName, empExp}) => {
    console.log(empName, empExp)

  return (
    <>
      <h1>Hello {empName}</h1>
      <h3>You have {empExp} experience in our company</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus quod, repellat esse consequatur mollitia fugit dolore numquam, quasi neque, eos sit! Ratione eum deserunt ab doloremque, cumque quia corrupti ipsum.</p>
    </>
  )
}

export default Greet
