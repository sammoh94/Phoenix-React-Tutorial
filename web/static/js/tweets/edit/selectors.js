import createSelector from 'reselect';

export const updateRequestSent = function (state) {
  return state.getIn(["tweets", "edit", "submitted"]);
}

export const getNewTweetContent = function (state) {
  return state.getIn(["tweets", "edit", "updated"]);
}
