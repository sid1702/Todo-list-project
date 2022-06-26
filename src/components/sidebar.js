import React from 'react'
import "../style.css";

const Sidebar = (props) => {

  function handleSubmit(e){
    e.preventDefault();
    props.createNewTask();
    props.setTaskName("");
    props.setDescription("");
    props.setDueDate("");
  }

  return (
    <div className="sidebar">
        <h1>My Todo-List</h1>
        <h3>Add your tasks...</h3>

        <form onSubmit={handleSubmit}>
            <input 
            required
            type="text" 
            value={props.taskName}
            placeholder='Name your task...'
            onChange={(e)=>props.setTaskName(e.target.value)}>
            </input>

            <input 
            required
            type="date" 
            value={props.dueDate}
            onChange={(e)=>props.setDueDate(e.target.value)}>
            </input>

            <textarea 
            row="4"
            onChange={(e)=>props.setDescription(e.target.value)}
            value={props.description}
            placeholder="Add a desciption for your task..">
            </textarea>

            <button type="submit">Add task</button>

        </form>
    </div>
  )
}

export default Sidebar