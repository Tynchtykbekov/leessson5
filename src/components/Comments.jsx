import React from 'react'

const Comments = (props) => {
    let day = props.date.toLocaleString("En-Us", {day: 'digint'})
    
  return (
 <div className="cmment">
    <div className="userInfo">
        <img src={props.author.avatarUrl} alt={props.author.name} className="avatar" />
        <div className="userInfo-name">{props.author.name}</div>

    </div>
    <div className="commentText">{props.text}</div>
    <div className="commentData">{props.date}</div>
 </div>
  )
}

export default Comments