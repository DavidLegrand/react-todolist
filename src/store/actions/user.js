export const userLogin = userId => ({
  type: 'USER_LOGIN',
  payload: userId
});

export const userLogout = () => ({
  type: 'USER_LOGOUT',
});