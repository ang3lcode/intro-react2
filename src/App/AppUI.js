import React from 'react'
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodosLoading } from '../TodoLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { TodoContext } from '../TodoContext/TodoContext';
import { Modal } from '../Modal/Modal';
import { TodoForm } from '../TodoForm/TodoForm';




export const AppUI = () => {
  const { 
    loading,
    error,
    searchedTodos,
    onComplete,
    onDelete,
    openModal,
   } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter/>
      <TodoSearch/>       
      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError/>}
        {!loading && searchedTodos.lenght === 0 && <EmptyTodos/>}
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
      
      { openModal && (
        <Modal>
          <TodoForm/>
        </Modal> 
      )}
    </>
  )
}
