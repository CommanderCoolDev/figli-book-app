import { combineReducers } from 'redux';
import { authReducer } from './auth-reducer';
import { bookReducer } from './books-reducer';
import { shelfReducer } from './shelf-reducer';
import { selectedReducer } from './selected-reducer';
import { userReducer } from './user-reducer';

export const rootReducer = combineReducers({
  authReducer,
  bookReducer,
  shelfReducer,
  selectedReducer,
  userReducer,
});
