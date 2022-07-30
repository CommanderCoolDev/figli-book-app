import { combineReducers } from 'redux';
import { loadingReducer } from './loading-reducer';
import { bookReducer } from './books-reducer';
import { shelfReducer } from './shelf-reducer';

export const rootReducer = combineReducers({
  loadingReducer,
  bookReducer,
  shelfReducer,
});
