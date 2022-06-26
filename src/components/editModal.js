import React from 'react'

const EditModal = (props) => {
    function handleEdit(e){
        e.preventDefault();
        props.editNewTask();
        props.setTaskName("");
        props.setDescription("");
        props.setDueDate("");
      }
    
      return (
        <div className="sidebar">
            <h2>My Todo-List</h2>
            <h3>Edit your tasks...</h3>
    
            <form onSubmit={handleEdit}>
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
    
                <button type="submit">Edit task</button>
    
            </form>
        </div>
      )
}

export default EditModal