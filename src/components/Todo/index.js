import React, { Components } from 'react';

//Style
import WrapperTodo from './WrapperTodo';
import Search from './Search';
import Button from './Button';
import WrapperItem from './WrapperItem';


class Todo extends React.Component {

  state = {
    currentTodo: ''
  }

  componentDidMount(){
    const { didMount, authorize } = this.props;
    didMount(authorize);
  }

  addTodo = () => {
    const { addTodoHandler } = this.props;
    if (this.state.currentTodo.trim() !== ''){
      addTodoHandler(this.state.currentTodo);
      this.setState({
        currentTodo: ''
      })
    }
  }

  deleteTodo = (i) => {
    const { deleteTodoHandler } = this.props;
    deleteTodoHandler(i);
    this.setState({
      currentTodo: '' 
    })
  }

  handleChange = e => { 
      this.setState({
        currentTodo: e.target.value
      })
  }

  render(){
    const { todos, loading } = this.props;
    return(
      <WrapperTodo>
        <div>
          <Search type="text" placeholder="Enter todo..." value={this.state.currentTodo} onChange={this.handleChange} />
          <Button onClick={this.addTodo}>Add todo</Button>
        </div>
        <div>
          { loading && <h5>Loading...</h5>}
          { todos.length === 0 ?
            <p>Not todos yet</p> :
            <WrapperItem>{todos.map((element, i) => (
              <li key={i}>{element}<button onClick={() => {this.deleteTodo(i)}}>Delete</button></li>
            ))}</WrapperItem> }
        </div>
      </WrapperTodo>
    )  
  }
}

export default Todo;