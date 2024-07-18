import React from 'react'
import "./Tag.css"

const Tags = ({tagname,selectTag,selected}) => {
const tagstyle = {
  Html: {backgroundColor :'#fda821'},
  Css: {backgroundColor :'#fda821'},
  JavaScript: {backgroundColor :'#fda821'},
  React: {backgroundColor :'#fda821'},
  default : {backgroundColor :'#f9f9f9'}
}

  return (
    <>
     <button type='button'
      style={selected ? tagstyle[tagname] :tagstyle.default}
      className="tag" onClick={()=>selectTag(tagname)}>{tagname}</button>

    </>
   
  )
}

export default Tags
