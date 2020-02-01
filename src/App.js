import React from "react";
import TodoItem from "./components/todolist";
import todosData from "./components/todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log("Выбрано!", id);
  }

  render() {
    const todoComponents = this.state.todos.map(item => (
      <TodoItem key={item.id} todoitem={item} />
    ));
    return (
      <div className="todo-list">
        <h3>Список дел на будни</h3>
        {todoComponents}
      </div>
    );
  }
}

export default App;
