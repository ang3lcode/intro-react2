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

export function useLocalStorage (itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
  
    if(!localStorageItem) {
      localStorage.setItem(itemName,JSON.stringify(initialValue));
      parsedItem=initialValue;
    } else {
      parsedItem=JSON.parse(localStorageItem);
    }
  
    const[item,setItem]=React.useState(parsedItem);
    const saveItem=(newItem)=>{
      localStorage.setItem(itemName,JSON.stringify(newItem));
      setItem(newItem);
      };
      return [item, saveItem];
  }
  