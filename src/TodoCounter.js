import React from "react";
import { TodoContext } from "./TodoContext";
import './App.css'

function TodoCounter(){
  const {totalTodos, completedTodos} = React.useContext(TodoContext);
  return (
    <header className="header">
      <h1 className="header__title">Tus Tareas</h1>
      <h3 className="header__subtitle">Completado {completedTodos} de {totalTodos} Todos</h3>
    </header>
    );
}

export { TodoCounter };