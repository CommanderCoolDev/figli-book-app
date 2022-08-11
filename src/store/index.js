import { createStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
