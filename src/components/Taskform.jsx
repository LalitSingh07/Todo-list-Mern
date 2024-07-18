import React,{useState} from 'react'
import Tags from './Tags'
import './TaskForm.css'

const Taskform = ({setTasks}) => {
const [taskData,setTaskData]=useState({
  task:"",
  status :"todo",
  tags:[]
});


const checkTag = (tag) =>{
  return taskData.tags.some(item => item === tag)
}




const selecttag = (tag)=>{
  if(taskData.tags.some(item=> item===tag)){
    const filterdata = taskData.tags.filter(item => item!==tag)
      setTaskData(prev =>{
        return {...prev,tags:filterdata}
       })

    }
    else{

      setTaskData(prev =>{
        return {...prev,tags:[...prev.tags,tag]}
       })

    }
};

 


const handleChange = (e) =>{
 const name = e.target.name ;
 const value = e.target.value ;

 setTaskData(prev =>{
  return {...prev,[name]:value}
 });
 
}; 

const handlesubmit = (e)=>{

  e.preventDefault();
  setTasks((prev)=>{
    return [...prev,taskData]
  });
   setTaskData({
    task:"",
    status :"todo",
    tags:[]
  });

};

// -------------------------------
// const [task,setTask] = useState("");
// const [status,setStatus] = useState("todo");

// const handletaskchange = (e) =>
// {
//   setTask(e.target.value);
// }

// const handlestatuschange = (e) =>
// {
//   setStatus(e.target.value);
// }
// console.log(task);
// console.log(status);
// ------------------------------------

  return (
    <>
    <header className="app_header">
        <form onSubmit={handlesubmit}>
            <input name='task' type="text" className="task_input" placeholder='Enter your Task' 
            value={taskData.task}
            onChange={handleChange}
            />
        

        <div className="task_form_bottom_line">
          <div>
            <Tags tagname='Html' selectTag={selecttag} selected={checkTag('Html')} />
            <Tags tagname='Css' selectTag={selecttag} selected={checkTag('Css')}  />
            <Tags tagname='JavaScript' selectTag={selecttag} selected={checkTag('JavaScript')}  />
            <Tags tagname='React' selectTag={selecttag} selected={checkTag('React')}  />
          </div>

          <div>
            <select
             name='status' 
             value={taskData.status }
             className="task_status" 
             onChange={handleChange}
             >
                <option value="todo"> To do </option>
                <option value="doing">doing </option>
                <option value="done">Done</option>
            </select>
            <button type='submit' className="task_submit">+Add Task</button>
          </div>

        </div>
        </form>

    </header>
    </>
  )
}

export default Taskform;
