import { SET_SHELF, REMOVE_FROM_SHELF } from '../constants/shelf-constants';

export const setShelf = book => ({
  type: SET_SHELF,
  payload: {
    book,
  },
});
export const removeFromShelf = shelfItem => ({
  type: REMOVE_FROM_SHELF,
  payload: {
    shelfItem,
  },
});
