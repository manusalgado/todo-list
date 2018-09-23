const todoList = (state=[], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return state.concat(action.todo);
      case 'DELETE_TODO':
        return state.filter(todo => todo.id !== action.id);
      default:
        return state;
    }
  };
  
  export default todoList;