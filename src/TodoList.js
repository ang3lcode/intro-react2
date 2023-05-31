import './TodoList.css'
function TodoList (Props) {
    return (
      <ul className="TodoList">
        {Props.children}
      </ul>
    );
  }

export { TodoList };