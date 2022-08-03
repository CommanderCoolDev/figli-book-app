import { GET_BOOKS } from '../constants/books-constants';
const initialState = {
  books: [],
};

export function bookReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload.books,
      };

    default:
      return state;
  }
}
