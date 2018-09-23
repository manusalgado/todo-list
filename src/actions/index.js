export const login = fields => dispatch => {
  const username = fields.username;
  const password = fields.password;

  dispatch(loadingAuthorizeUser());
  return fetch('/login.json')
    .then((res) => res.json())
    .then(respose => {
      if (respose.data.filter(user => (
          user.username === username && 
          user.password === password
      )).length) {
          dispatch(authorizeUser());
          return Promise.resolve(true);
      } else {
          dispatch(errorAuthorizeUser('Username or password incorrect'));
          return Promise.resolve(false);
      }
    });
}

export const authorizeUser = () => ({
  type: 'AUTHORIZE_USER',
  authorize: true,
  loading: false
});

export const loadingAuthorizeUser = () => ({
  type: 'LOADING_AUTHORIZE_USER',
  authorize: false,
  loading: true
});

export const errorAuthorizeUser = (error) => ({
  type: 'ERROR_AUTHORIZE_USER',
  authorize: false,
  loading: false,
  error
});

export const addTodo = todoText => ({
  type: 'ADD_TODO',
  todoText
})

export const addTodos = todos => ({
  type: 'ADD_TODOS',
  todos
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})

export const fetchTodos = () => dispatch => {
  dispatch(loadingTodos());
  return fetch('/todos.json')
    .then((res) => res.json())
    .then(respose => {
      if (respose.data && respose.data.length) {
        dispatch(addTodos(respose.data));  
        return Promise.resolve(true);
      } else {
          dispatch(errorTodos('There is an error fetching the todo list'));
          return Promise.resolve(false);
      }
    })
}

export const loadingTodos = () => ({
  type: 'LOADING_TODOS',
  loading: true
});

export const errorTodos = (error) => ({
  type: 'ERROR_TODOS',
  loading: false,
  error
});