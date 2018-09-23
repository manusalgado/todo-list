const defaultState = {
  loading: false,
  error: null,
  todos: []
};

const todoList = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODOS':
      return { ...state, todos: action.todos };
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.todoText] };
    case 'DELETE_TODO':
      return { ...state, todos: state.todos.filter((todo, id) => id !== action.id) };
    case 'LOADING_TODOS':
        return { ...state, loading: action.loading, error: null };
    case 'ERROR_TODOS':
        return { ...state, loading: action.loading, error: action.error };
    default:
      return state;
  }
};

export default todoList;