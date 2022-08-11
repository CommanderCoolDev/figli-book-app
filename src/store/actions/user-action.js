import { SET_USER, REMOVE_USER } from '../constants/user-constants';

export const setUser = ({ email, token, userId }) => ({
  type: SET_USER,
  payload: {
    email,
    token,
    userId,
  },
});
export const removeUser = () => ({
  type: REMOVE_USER,
});
