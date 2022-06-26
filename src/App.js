import React from 'react'
import Sidebar from './components/sidebar'
import Editor from './components/editor'
import EditModal from './components/editModal'
import { nanoid } from 'nanoid'

const App = () => {
  const [todoArr,setTodoArr]=React.useState(() => JSON.parse(localStorage.getItem("todoArr")) || []);
  const [currentId,setCurrentId]=React.useState((todoArr[0] && todoArr[0].id) || "");

  const [taskName,setTaskName]=React.useState("")
  const [dueDate,setDueDate]=React.useState("")
  const [description,setDescription]=React.useState("")

  const [modal,setModal]=React.useState(false);
 
  React.useEffect(()=>{
    localStorage.setItem("todoArr",JSON.stringify(todoArr))
  },[todoArr])

  function createNewTask() {
    const newTask = {
        taskName: taskName,
        dueDate:dueDate,
        description:description,
        id: nanoid(),
        completed:false
    }
    setTodoArr(prevTasks => [...prevTasks,newTask])
    setCurrentId(newTask.id)
}

function handleDelete(id){
  setTodoArr(oldTasks => oldTasks.filter(task => task.id !== id))
}

function editNewTask(){
  setTodoArr(oldTasks => {
    const newArray = []
    for(let i = 0; i < oldTasks.length; i++) {
        const oldTask = oldTasks[i]
        if(oldTask.id === currentId) {
            newArray.unshift({ ...oldTask, taskName:taskName, dueDate:dueDate, description:description })
        } else {
            newArray.push(oldTask)
        }
    }
    return newArray
})
setModal(false)
}

function handleEdit(i){
  setModal(true)
  setTaskName(i.taskName);
  setDescription(i.description);
  setDueDate(i.dueDate);
  setCurrentId(i.id);
}

function findCurrrentId(){
  return todoArr.find(i=>{
    return (i.id===currentId)
  }) || todoArr[0]
}

function handleCompleted(id){
  let mapped = todoArr.map(task => {
    return task.id == id ? { ...task, completed: !task.completed } : { ...task};
  });
  setTodoArr(mapped);
}

function deleteCompletedTasks(){
  let deletedArr=todoArr.filter(task=>!task.completed);
  setTodoArr(deletedArr);
}

console.log(todoArr);
  return (
    <div className='main'>
      {modal ? 
      <EditModal 
        taskName={taskName}
        setTaskName={setTaskName}
        dueDate={dueDate}
        setDueDate={setDueDate}
        description={description}
        setDescription={setDescription}
        editNewTask={editNewTask}
        
      /> : 
      <Sidebar 
        taskName={taskName}
        setTaskName={setTaskName}
        dueDate={dueDate}
        setDueDate={setDueDate}
        description={description}
        setDescription={setDescription} 
        createNewTask={createNewTask}
    />
      }
      <Editor 
        todoArr={todoArr} 
        handleDelete={handleDelete} 
        handleEdit={handleEdit}
        setModal={setModal}
        handleCompleted={handleCompleted}
        deleteCompletedTasks={deleteCompletedTasks}
      />
      
    </div>
  )
}

export default App