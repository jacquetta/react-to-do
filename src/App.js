import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      todos: [
         { description: 'Walk the cat', isCompleted: true},
         { description: 'Throw the dishes away', isCompleted: false},
         { description: 'Buy new dishes', isCompleted: false}
      ],
      id: 0,
      newTodoDescription: ''
    };
    this.deleteTodo =
    this.deleteTodo.bind(this);
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.newTodoDescription) {return}
    const newTodo = { id: this.state.id, description: this.state.newTodoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo ], newTodoDescription: '', id: this.state.id + 1 });
  }

  toggleComplete(index) {
      const todos = this.state.todos.slice();
      const todo = todos[index];
      todo.isCompleted = todo.isCompleted ? false : true;
      this.setState({ todos: todos });
  }

  deleteTodo(id) {
    const filteredDelete = this.state.todos.filter((todo) => {
      return todo.id !==id;
    });
    this.setState({todos: filteredDelete});
  }


  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, id) =>
            <ToDo key={ id } id={ todo.id } description={ todo.description } isCompleted={ todo.isCompleted} toggleComplete={ () => this.toggleComplete(id) }
            onDelete={ this.deleteTodo} />
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) }/ >
          <input type="submit" value="Add todo" />
        </form>
      </div>
    );
  }
}

export default App;
