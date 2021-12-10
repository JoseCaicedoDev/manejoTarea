import React from 'react';
import { TodoProvider } from './TodoContext';
import { AppUI } from './AppUI'



function App() {
/*   console.log('Antes')
  React.useEffect(()=>{
    console.log('Use G')
  }, [totalTodos])
  console.log('Despues') */
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
