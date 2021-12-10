import React from "react";

function TodoList(props){
  return (
    <section>
      <ul className="card__list">
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };