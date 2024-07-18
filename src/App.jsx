import React, {useEffect, useState} from 'react'
import './App.css'
import Taskform from './components/Taskform.jsx'
import Taskcolumn from './components/Taskcolumn.jsx'
import Todos from './assets/direct-hit.png';
import Doing from './assets/glowing-star.png';
import Done from './assets/check-mark-button.png';

const oldtask = localStorage.getItem("tasks");


const App = () => {
  const [tasks,setTasks] = useState(JSON.parse(oldtask)|| []);

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])

  const handledelete = (taskindex) =>{
    const newTasks= tasks.filter((task,index)=> index!== taskindex)
    setTasks(newTasks)
  }
  return (
    <div className='app'>
     <Taskform setTasks={setTasks} />
     

      <main className="app_main">
        <Taskcolumn title='To Do' icon={Todos} tasks={tasks} status='todo' handledelete={handledelete}/>
        <Taskcolumn title='Doing' icon={Doing} tasks={tasks} status='doing' handledelete={handledelete} />
        <Taskcolumn title='Done' icon={Done} tasks={tasks} status='done' handledelete={handledelete} />

       
       
      </main>
    </div>
  )
}

export default App
