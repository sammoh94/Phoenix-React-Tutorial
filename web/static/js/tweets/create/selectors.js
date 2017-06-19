import createSelector from 'reselect';

export const setUserID = function (state) {
  return state.getIn(["users", "show", "currentUserID"]);
}

export const tweetCreated = function (state) {
  return state.getIn(["tweets", "create", "created"]);
}
