import { ON_AUTH, OFF_AUTH } from '../constants/auth-constants';

const initialState = {
  auth: false,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case ON_AUTH:
      return {
        ...state,
        auth: true,
      };

    case OFF_AUTH:
      return {
        ...state,
        auth: false,
      };

    default:
      return state;
  }
}
