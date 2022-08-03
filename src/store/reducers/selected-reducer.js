import { SET_SELECTED } from '../constants/selected-constants';

const initialState = { selected: [] };

export function selectedReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED:
      return {
        ...state,
        selected: action.payload.books.filter(
          el => el.id === action.payload.id,
        ),
      };

    default:
      return state;
  }
}
