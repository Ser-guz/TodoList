import React from 'react';

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        defaultChecked={props.todoitem.completed}
        onChange={() => console.log("Выбрано!")}
      />
      <p>
        {props.todoitem.text}
      </p>
    </div>
  )
}

export default TodoItem;
