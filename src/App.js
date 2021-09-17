import React, {Component} from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import {v4 as uuid} from "uuid";

class App extends Component {
  state = {
    todos:[
      {
        id:uuid(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id:uuid(),
        title: 'Complete the task',
        completed: false
      },
      {
        id:uuid(),
        title: 'Play game',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  // Add Todo
  AddTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo AddTodo = {this.AddTodo}/>
          <Todos todos= {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
        </div>
      </div>
    );
  }
}
export default App;
// 1:15:00 https://www.youtube.com/watch?v=sBws8MSXN7A&t=1706s&fbclid=IwAR1RXaDvcaAhZh6_9KFy0iDHLwUS2IQBuacP0bJI37LZBHxmyOqL5OK691E