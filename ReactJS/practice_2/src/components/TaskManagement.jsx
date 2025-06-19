import React, { useState } from 'react'

const TaskManagement = () => {
    const [tasks, setTask] = useState([])
    const [taskName, setTaskName] = useState()


    function handleAddNewTask(e){
        e.preventDefault()
        tasks.push(taskName)
        console.log(tasks);
    }
    function handleClearAll(){
            setTask([])
    }

    function handleDeleteTask(elmt){
       const index =  tasks.findIndex((e)=> e == elmt)
       tasks.splice(index, 1);
       console.log(tasks);
    }

  return (
    <div>
        <form>
      <input type='text' onChange={(e)=>setTaskName(e.target.value)}/>
      <button onClick={handleAddNewTask}>Add Task</button>
      </form>
      <button onClick={handleClearAll}>Clear All</button>
      <ul>
        {tasks.length > 0 ? <>
        {tasks.map((elmt, index)=>(
                <li key={index}>
                    <span>{elmt}</span>
                    <button onClick={()=>handleDeleteTask(elmt)}>Delete</button>
                </li>
            ))}
        </>     :    <>
        <p>No Task To Do. Go To Watch Reel reel reel reel</p>
        </>}





            
      </ul>
    </div>
  )
}

export default TaskManagement
