import { SET_SHELF, REMOVE_FROM_SHELF } from '../constants/shelf-constants';
const initialState = {
  shelf: [],
};

export function shelfReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SHELF:
      return {
        ...state,
        shelf: [...state.shelf, action.payload.book],
      };
    case REMOVE_FROM_SHELF:
      return {
        ...state,
        shelf: state.shelf.filter(el => el.id !== action.payload.shelfItem.id),
      };
    default:
      return state;
  }
}
