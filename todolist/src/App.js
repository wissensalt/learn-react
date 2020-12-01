import React, { Component } from 'react';
import './App.css';
import Title from "./components/Title";
import TodoList from "./components/TodoList";
import InputTodoList from "./components/InputTodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: JSON.parse(localStorage.getItem('myTodo') === null ? "[]" : localStorage.getItem('myTodo'))
    }
  }

  onSave(value) {
    const newTodo = [
      ...this.state.todo,
      { id: new Date().getTime(), activity: value, status: false }
    ];
    this.setState({ todo: newTodo });
    localStorage.setItem('myTodo', JSON.stringify(newTodo));
  }

  onChecked(id, checked) {
    const newTodo = this.state.todo.map(v => {
      if (v.id === id) return { ...v, status: checked };
      return v;
    });
    this.setState({ todo: newTodo });
  }

  onRemoved(id) {
    const newTodo = this.state.todo.filter(v => v.id !== id);
    this.setState({ todo: newTodo });
    localStorage.setItem('myTodo', JSON.stringify(newTodo));
  }

  render() {
    return (
      <div>
        <Title title="TODO List" />
        <InputTodoList onSave={this.onSave.bind(this)} />
        <TodoList
          data={this.state.todo}
          onChecked={this.onChecked.bind(this)}
          onRemoved={this.onRemoved.bind(this)}
        />
      </div>
    );
  }
}

export default App;
