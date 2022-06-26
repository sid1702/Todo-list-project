import React from 'react'
import "../style.css";
import { FaRegEdit,FaRegTrashAlt } from 'react-icons/fa';

const Editor = (props) => {
  return (
    <div className='editor' >
      <div className='editorHeading'>
        <h3>Task Count: {props.todoArr.length}</h3>
        <button onClick={props.deleteCompletedTasks}>Clear completed tasks</button>
      </div>
      <div className='cards'>
        {props.todoArr.map(i=>{
          return (
          <div key={i.id} className="taskCard">
            <div className={i.completed? "crossed-line": ""}>
              <p>{i.taskName} </p>
              <p>{i.dueDate}</p>
              <p>{i.description}</p>
            </div>
            <div className="icons">
              <FaRegEdit className="edit-icon" onClick={()=>props.handleEdit(i)}/>
              <FaRegTrashAlt className="delete-icon" onClick={()=>props.handleDelete(i.id)}/>
              <button onClick={()=>props.handleCompleted(i.id)}>Completed?</button>
            </div>
          </div>)
        })}
      </div>
    </div>
  )
}

export default Editor;