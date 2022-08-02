import { GET_BOOKS } from '../constants/books-constants';
export const setBooks = books => ({
  type: GET_BOOKS,
  payload: {
    books,
  },
});
