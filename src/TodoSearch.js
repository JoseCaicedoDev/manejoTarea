import React from "react";
import { TodoContext } from "./TodoContext";

function TodoSearch(){
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  const onValueSearch = (event) =>{
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return (
    <div className="header__search">
      <input type="text" name="" id="" placeholder='Cebolla'
       className="input__search" onChange={onValueSearch}
       value={searchValue} />
       <p>{searchValue}</p>
    </div>
  );
}

export { TodoSearch }