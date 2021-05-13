import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

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
  return (
    <div className="container">
      <Header title = "Task Tracker" />
      { tasks.length> 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
          ) : (
          'No Tasks to Show'
          ) }
    </div>
  );
}

export default App;
