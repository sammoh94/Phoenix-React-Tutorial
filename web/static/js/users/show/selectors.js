import createSelector from 'reselect';

export const setUser = function (state) {
  return state.getIn(["users", "show", "currentUser"]);
}

export const setUserID = function (state) {
  return state.getIn(["users", "show", "currentUserID"]);
}
