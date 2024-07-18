import React from 'react'
import './Taskcard.css'
import Tags from './Tags'
import deleteicon from '../assets/delete.png'
const Taskcard = ({title,tags,handledelete,index}) => {
  return (
    <article className='task_card'>
        <p className="task_text">{title}</p>
        <div className="task_card_bottom_line">
            <div className="task_card_tags">
               {tags.map((tag,index)=><Tags key={index} tagname={tag} selected />
              )}
            </div>
            <div className="task_delete" onClick={()=>handledelete(index)} > 
                <img src={deleteicon} className='deleteicon' alt="" />
            </div>
        </div>
      
    </article> 
  )
}

export default Taskcard
