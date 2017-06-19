import createSelector from 'reselect';

export const userRegister = function (state) {
  return state.getIn(["users", "register", "currentUser"]);
}

export const setIdUserRegister = function (state) {
  return state.getIn(["users", "register", "currentUserID"]);
}
