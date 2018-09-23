import React, { Components } from 'react';
import WrapperTodo from './WrapperTodo';
import WrapperSearch from './WrapperSearch';

class Todo extends React.Component {

  state = {
    todos:[],
    currentTodo: ''
  }

  addTodo = () => {
    let c = this.state.todos.slice()
    c.push(this.state.currentTodo)
    this.setState({
      todos: c, 
      currentTodo: ''
    })
  }

  deleteTodo = (i) => {
    let d = this.state.todos.slice();
    d.splice( i, 1 );
    this.setState({
      todos: d,
      currentTodo: '' 
    })
  }

  handleChange = e => {
    this.setState({
      currentTodo: e.target.value
    })
  }

  render(){

    let b = this.state.todos.map((element, i) => {
      return(
        <li key={i}>{element}<button onClick={() => {this.deleteTodo(i)}}>X</button></li>
      )
    })

    return(
      <WrapperTodo>
        <WrapperSearch>
          <input type="text" placeholder="Enter todo..." value={this.state.currentTodo} onChange={this.handleChange} />
          <button onClick={this.addTodo}>Add todo</button>
        </WrapperSearch>
        <div>
          { this.state.todos.length === 0 ? <p>Not todos yet</p> : <ul>{b}</ul> }
        </div>
      </WrapperTodo>
    )  
  }
}

export default Todo;