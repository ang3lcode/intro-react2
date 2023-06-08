// import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

// const defaultTodos = [
//   { text: 'cortar cebolla', completed: true },
//   { text: 'Curso de React', completed: true },
//   { text: 'React native', completed: false },
//   { text: 'jugar go', completed: true },
//   { text: 'limpiar el cuarto', completed: false },
//   { text: 'examen de js', completed: false },
//   { text: 'local strorage', completed: false },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {
  // const localStorageTodos = localStorage.getItem('TODOS_V1');
  // let parsedTodos;
  // if(!localStorageTodos) {
  //   localStorage.setItem('TODOS_V1', JSON.stringify([]));
  //   parsedTodos = [];
  // } else {
  //   parsedTodos = JSON.parse(localStorageTodos);
  // }

  const [todos, setTodos] = React.useState(() => {
    const localStorageTodos = window.localStorage.getItem('TODOS_V1')
    if (localStorageTodos) return JSON.parse(localStorageTodos)
    return []
  })

  // const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');
  console.log('los usuarios busan todos de ' + searchValue);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    } 
  );

  const saveTodos = (newTodos) => {
  localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    
    setTodos(newTodos);
  }

  const onComplete = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  const onDelete = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed= {todo.completed}
            onComplete={() => onComplete(todo.text)}
            onDelete = {() => onDelete(todo.text)}
          />
        ))}
        
      </TodoList>
      <CreateTodoButton/>   
    </>
  );
}




export default App;
