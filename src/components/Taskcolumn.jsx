import React from 'react';
import './Taskcolumn.css'
import Taskcard from './Taskcard';

const Taskcolumn = (props) => {
  return (
    <section className="task_column">
        <h2 className='task_column_heading'>
          <img className='task_column_icon' src= {props.icon} alt="" /> {props.title}
          </h2>

          {
            props.tasks.map((task,index)=>task.status=== props.status&& <Taskcard key={index} title={task.task} tags={task.tags} handledelete={props.handledelete} 
            index= {index} />)
          }
        
    </section>
  )
}

export default Taskcolumn
 