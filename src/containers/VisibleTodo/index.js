import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Todo from './../../components/Todo';
import { addTodo, deleteTodo, fetchTodos } from './../../actions';

const mapStateToProps = state => ({
    authorize: state.authorizeUser.authorize,
    todos: state.todoList.todos,
    loading: state.todoList.loading
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  didMount: (authorize) => {
    if (!authorize) {
      ownProps.history.push('/');
    } else {
      dispatch(fetchTodos());
    }
  },
  addTodoHandler: todoText => dispatch(addTodo(todoText)),
  deleteTodoHandler: id => dispatch(deleteTodo(id))
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Todo);