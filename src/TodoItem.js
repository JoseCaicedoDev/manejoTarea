import React from "react";

function TodoItem(props) {
/*   const onComplete = ()=>{
    alert('ya completaste ' + props.text)
  } */
/*   const onDelete = ()=>{
    alert('Eliminaste a ' + props.text)
  } */

  return(
    <li className="card__item">
      <span className={`fas fa-check btn__checked ${props.completed && 'btn__checked-active'}`}></span>
      <p className={`card__description ${props.completed && 'card__description-active'}`} onClick={props.onComplete}>{props.text}</p>
      <span className="far fa-times-circle btn__close" onClick={props.onDelete}></span>
    </li>
  );
}

export { TodoItem };