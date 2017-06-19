import { createSelector } from 'reselect';

export const userLogin = function (state) {
  return state.getIn(["users", "login", "currentUser"]);
}

export const setIdUserLogin = function (state) {
  return state.getIn(["users", "login", "currentUserID"]);
}
