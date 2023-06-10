import React from "react";
import { useLocalStorage } from '../hooks/useLocalStorage'


const TodoContext =  React.createContext();

function TodoProvider({ children }){
    const{
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      }= useLocalStorage('TODOS_V1',[]);
      const [searchValue, setSearchValue] = React.useState('');
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        } 
      );
     
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
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            onComplete,
            onDelete,
            
        }}>
            {children}
          </TodoContext.Provider>
    )
}
export {TodoContext, TodoProvider };