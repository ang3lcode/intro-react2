// import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

import './App.css';
import React from 'react';

const defaultTodos = [
  { text: 'cortar cebolla', completed: true },
  { text: 'Curso de React', completed: true },
  { text: 'React native', completed: false },
  { text: 'llorar con la llorona', completed: false },
  { text: 'aqui', completed: false }
];


function App() {
  return (
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed= {todo.completed}
          />
        ))}
        
      </TodoList>
      <CreateTodoButton/>   
    </>
  );
}




export default App;
