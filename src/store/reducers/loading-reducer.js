import { ON_LOADING, OFF_LOADING } from '../constants/loading-constants';

const initialState = {
  loading: false,
};

export function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case ON_LOADING:
      return {
        ...state,
        loading: true,
      };

    case OFF_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
