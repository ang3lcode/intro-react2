import { useContext } from 'react';
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext/TodoContext';

export function CreateTodoButton () {
  const { setOpenModal } = useContext(TodoContext);
    return (
      <button 
        className='CreateTodoButton'
        onClick={
          (event) => {
            setOpenModal((value)=> !value)
          }
        }
      >+</button>
    );
  }