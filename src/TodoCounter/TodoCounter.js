 import './TodoCounter.css';
 
 function TodoCounter ({ total, completed }) {
    return (
      <h2 className='TodoCounter'>
        has completado <span>{completed}</span> de <span>{total}</span> ToDos
      </h2>
    );
  }

export { TodoCounter };