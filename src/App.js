import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState([
    {
      id : 1,
      text : 'task1'
    },
    {
      id : 2,
      text : 'task2'
    },
    {
    id : 3,
    text : 'task3'
    }

  ]);
  return (
    <div className="container">
      <Header title = "Task Tracker" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
