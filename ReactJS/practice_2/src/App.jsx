import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Greet from './components/Greet'
import Counter from './components/Counter'
import TaskManagement from './components/TaskManagement'




function App() {
  const [nameOfCollege, setNameOfCollege] = useState("MM College Of Polytechnic")
  const [age, setAge] = useState(800)
  function handleChangeName(){
    if(nameOfCollege == 'MM College Of Polytechnic'){
    setNameOfCollege("MM college of Engineering")
    }else{
      setNameOfCollege("MM College Of Polytechnic")
    }
    // console.log("you click me")
  }

  return (
    <>
    <TaskManagement />
    <Counter />
    <br></br>
    <hr></hr>
      <h2>{nameOfCollege}</h2>
      <button onClick={handleChangeName}>Click me to change Name of College</button>
      
      <h1>Hello</h1>
      <p>age : {age}</p>
      <Button btnValue="Click Me" />

      <Button btnValue="Register" />
      <Button btnValue="Login" />
      <Button btnValue="Add To Cart" />
      <Button btnValue="Logout" />
      <Greet empName="Virat Kohli" empExp={3} />
      <Greet empName="Kareena Kapoor" empExp={1} />
      <Greet empName="Elon Musk" empExp={30} />
      <Greet empName="Rohit Sharma" empExp={9} />

    </>
  )
}

export default App
