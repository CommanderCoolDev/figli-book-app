export const getUser = store => store.userReducer.user.email;
export const getToken = store => store.userReducer.user.token;
export const getUserId = store => store.userReducer.user.userId;
export const getAuth = store => store.userReducer.user.isAuth;
