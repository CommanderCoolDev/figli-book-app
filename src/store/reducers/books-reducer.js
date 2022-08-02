import { GET_BOOKS, SET_FILTERED_BOOKS } from '../constants/books-constants';
const initialState = {
  books: [],
  filteredBooks: [],
};

export function bookReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload.books,
      };
    // case SET_FILTERED_BOOKS:
    //   return {
    //     ...state,
    //     filteredBooks: action.payload.filteredBooks,
    //   };

    default:
      return state;
  }
}
