import { SET_USER, REMOVE_USER } from '../constants/user-constants';
const initialState = {
  user: {
    email: null,
    token: null,
    userId: null,
    isAuth: false,
  },
  // email: null,
  // token: null,
  // userId: null,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: {
          email: action.payload.email,
          token: action.payload.token,
          userId: action.payload.userId,
          isAuth: true,
        },
      };
    case REMOVE_USER:
      return {
        ...state,
        user: {
          email: null,
          token: null,
          userId: null,
          isAuth: false,
        },
      };
    default:
      return state;
  }
}
