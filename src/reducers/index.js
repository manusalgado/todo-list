import { combineReducers } from 'redux';
import todoList from './todoList';
import { reducer as formReducer } from 'redux-form'
import authorizeUser from './authorizeUser';

export default combineReducers({
  todoList,
  authorizeUser,
  form: formReducer
})