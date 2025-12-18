import React, { Component } from "react";

class Todo extends Component {

  state = {
    task: "",
    todos: []
  };

 
  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };

  // ADD 
  addTodo = (e) => {
    e.preventDefault();

    if (this.state.task.trim() === "") return;

    this.setState({
      todos: [...this.state.todos, this.state.task],
      task: ""
    });
  };

  // DELETE 
  deleteTodo = (index) => {
    const updatedTodos = this.state.todos.filter((_, i) => i !== index);
    this.setState({ todos: updatedTodos });
  };

  render() {
    return (
      <div className="container mt-5">
        <h2 className="text-center mb-4">Todo List</h2>

        <div className="row justify-content-center">
          <div className="col-md-5">

            <form onSubmit={this.addTodo} className="d-flex mb-3">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Enter task"
                value={this.state.task}
                onChange={this.handleChange}
              />
              <button className="btn btn-primary">Add</button>
            </form>

            <ul className="list-group">
              {this.state.todos.map((todo, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between">
                  {todo}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.deleteTodo(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
