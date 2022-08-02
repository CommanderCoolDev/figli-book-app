import { GET_BOOKS, SET_FILTERED_BOOKS } from '../constants/books-constants';
export const setBooks = books => ({
  type: GET_BOOKS,
  payload: {
    books,
  },
});
// export const setFilteredBooks = filtereBooks => ({
//   type: SET_FILTERED_BOOKS,
//   payload: {
//     filtereBooks,
//   },
// });
