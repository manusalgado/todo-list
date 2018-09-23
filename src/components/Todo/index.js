import React, { Components } from 'react';

//Style
import WrapperTodo from './WrapperTodo';
import Search from './Search';
import Button from './Button';
import WrapperItem from './WrapperItem';


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
        <li key={i}>{element}<button onClick={() => {this.deleteTodo(i)}}>Delete</button></li>
      )
    })

    return(
      <WrapperTodo>
        <div>
          <Search type="text" placeholder="Enter todo..." value={this.state.currentTodo} onChange={this.handleChange} />
          <Button onClick={this.addTodo}>Add todo</Button>
        </div>
        <div>
          { this.state.todos.length === 0 ? <p>Not todos yet</p> : <WrapperItem>{b}</WrapperItem> }
        </div>
      </WrapperTodo>
    )  
  }
}

export default Todo;