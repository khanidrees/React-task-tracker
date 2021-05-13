import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id : 1,
      text : 'task1',
      day : 'date1',
      reminder : false
    },
    {
      id : 2,
      text : 'task2',
      day : 'date2',
      reminder : false
    },
    {
    id : 3,
    text : 'task3',
    day : 'date3',
    reminder : false
    }

  ]);

  

  //Delete Task
  const deleteTask =(id)=>{
    setTasks(tasks.filter((task)=>task.id!==id))
  }
  //Toggle Reminder
  const toggleReminder=(id)=>{
    setTasks(tasks.map((task)=>(task.id===id ?
      {...task, reminder: !task.reminder} : 
      task))
    )
  }

  //Add Task
  const addTask = (task)=>{
    const id =  Math.floor(Math.random()*10000) +1;

    const newTask = {id : id, ...task}
    setTasks([...tasks, newTask])
  }
  
  return (
    <div className="container">
      <Header  onAddClicked = {()=>setShowAddTask(!showAddTask)}
      showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      
      
      { tasks.length> 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
          ) : (
          'No Tasks to Show'
          ) }
    </div>
  );
}

export default App;
