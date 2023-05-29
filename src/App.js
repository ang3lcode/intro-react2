// import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

import './App.css';


function App() {
  return (
    <>
    <TodoCounter/>
    <TodoSearch/>
    <TodoList>
      <TodoItem/>
    </TodoList>
    {/*<CreateTodoButton/>    */}
    </>
  );
}




export default App;
