import { SET_SELECTED } from '../constants/selected-constants';

export const setSelected = (books, id) => ({
  type: SET_SELECTED,
  payload: {
    books,
    id,
  },
});
